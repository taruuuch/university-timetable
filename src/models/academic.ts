import mongoose from "mongoose";

let Schema = mongoose.Schema;

let AcademicSchema = new Schema({
	groupId: String,
	title: String,
	specialityId: Number,
	teacherId: Number,
	educationLevelId: Number,
	educationFormId: Number,
	studentCount: Number,
	isActive: Boolean,
});

let Academic = mongoose.model("Academic", AcademicSchema);

export default Academic;