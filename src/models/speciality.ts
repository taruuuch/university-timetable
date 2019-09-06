import mongoose from "mongoose";

let Schema = mongoose.Schema;

let SpecialitySchema = new Schema({
	specialityId: Number,
	title: String,
	facultyId: [{
		type: Schema.Types.ObjectId, ref: 'Faculty'
	}]
});

let Speciality = mongoose.model('Speciality', SpecialitySchema);

export default Speciality;