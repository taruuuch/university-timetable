import mongoose from "mongoose";
let Schema = mongoose.Schema;

let AcademicSchema = new Schema({
	academicId: Number,
	title: String,
});

export default mongoose.model('Academic', AcademicSchema);