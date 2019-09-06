import mongoose from "mongoose";

let Schema = mongoose.Schema;

let TeacherSchema = new Schema({
	teacherId: Number,
	name: String,
	lastName: String,
	middleName: String,
	isActive: Boolean,
	departamentId: [{
		type: Schema.Types.ObjectId, ref: 'Departament'
	}],
	email: String,
	site: String,
	degreeId: [{
		type: Schema.Types.ObjectId, ref: 'Degree'
	}],
	academicId: [{
		type: Schema.Types.ObjectId, ref: 'Academic'
	}]
});

let Teacher = mongoose.model('Teacher', TeacherSchema);

export default Teacher;