const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const FacultyTypeSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String
});

module.exports = mongoose.model('FacultyType', FacultyTypeSchema);
