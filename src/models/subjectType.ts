import mongoose from "mongoose";

let Schema = mongoose.Schema;

let SubjectTypeSchema = new Schema({
	subjectTypeId: Number,
	title: String
});

let SubjectType = mongoose.model('SubjectType', SubjectTypeSchema);

export default SubjectType;