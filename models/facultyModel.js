const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const FacultySchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
	facultyTypeId: [{
		type: Schema.Types.ObjectId, ref: 'FacultyType'
	}],
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

module.exports = mongoose.model('Faculty', FacultySchema);
