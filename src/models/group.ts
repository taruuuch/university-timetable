import mongoose from "mongoose";

let Schema = mongoose.Schema;

let GroupSchema = new Schema({
	groupId: String,
	title: String,
	specialityId: Number,
	teacherId: Number,
	educationLevelId: Number,
	educationFormId: Number,
	studentCount: Number,
	isActive: Boolean,
});

let Group = mongoose.model("Group", GroupSchema);

export default Group;