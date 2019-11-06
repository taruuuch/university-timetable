const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const SpecialitySchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
	code: Number,
	facultyId: [{
		type: Schema.Types.ObjectId, ref: 'Faculty'
	}]
});

module.exports = mongoose.model('Speciality', SpecialitySchema);
