import mongoose from "mongoose";

let Schema = mongoose.Schema;

let DepartamentSchema = new Schema({
	departamentId: Number,
	title: String,
	dean: String,
	facultyId: [{
		type: Schema.Types.ObjectId, ref: 'Faculty'
	}],
	email: String
});

let Departament = mongoose.model('Departament', DepartamentSchema);

export default Departament;