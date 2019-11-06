const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const EducationLevelSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String
});

module.exports = mongoose.model('EducationLevel', EducationLevelSchema);
