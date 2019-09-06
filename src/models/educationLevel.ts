import mongoose from "mongoose";

let Schema = mongoose.Schema;

let EducationLevelSchema = new Schema({
	educationLevelId: Number,
	title: String
});

let EducationLevel = mongoose.model('EducationLevel', EducationLevelSchema);

export default EducationLevel;