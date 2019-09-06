import mongoose from "mongoose";

let Schema = mongoose.Schema;

let FacultySchema = new Schema({
	facultyId: Number,
	title: String,
	dean: String,
	buildingId: [{
		type: Schema.Types.ObjectId, ref: 'Building'
	}],
	shortName: String,
	address: String,
	phone: String,
	email: String,
	site: String
});

let Faculty = mongoose.model('Faculty', FacultySchema);

export default Faculty;