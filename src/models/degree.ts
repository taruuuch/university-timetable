import mongoose from "mongoose";

let Schema = mongoose.Schema;

let DegreeSchema = new Schema({
	degreeId: Number,
	title: String
});

let Degree = mongoose.model('Degree', DegreeSchema);

export default Degree;