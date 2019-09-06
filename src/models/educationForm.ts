import mongoose from "mongoose";

let Schema = mongoose.Schema;

let EducationFormSchema = new Schema({
	educationFormId: Number,
	title: String
});

let EducationForm = mongoose.model('EducationForm', EducationFormSchema);

export default EducationForm;