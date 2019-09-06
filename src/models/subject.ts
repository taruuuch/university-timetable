import mongoose from "mongoose";

let Schema = mongoose.Schema;

let SubjectSchema = new Schema({
	subjectId: Number,
	title: String,
	subjectTypeId: [{
		type: Schema.Types.ObjectId, ref: 'SubjectType'
	}]
});

let Subject = mongoose.model('Subject', SubjectSchema);

export default Subject;