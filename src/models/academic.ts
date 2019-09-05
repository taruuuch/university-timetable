import mongoose from "mongoose";
let Schema = mongoose.Schema;

let AcademicSchema = new Schema({
	academicId: String,
	title: String,
});

export default mongoose.model('Academic', AcademicSchema);