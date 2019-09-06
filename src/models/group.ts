import mongoose from "mongoose";

let Schema = mongoose.Schema;

let GroupSchema = new Schema({
	groupId: Number,
	title: String,
	specialityId: [{
		type: Schema.Types.ObjectId, ref: 'Speciality'
	}],
	teacherId: [{
		type: Schema.Types.ObjectId, ref: 'Teacher'
	}],
	educationLevelId: [{
		type: Schema.Types.ObjectId, ref: 'EducationLevel'
	}],
	educationFormId: [{
		type: Schema.Types.ObjectId, ref: 'EducationForm'
	}],
	studentCount: Number,
	isActive: Boolean,
});

let Group = mongoose.model("Group", GroupSchema);

export default Group;