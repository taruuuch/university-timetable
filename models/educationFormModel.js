const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const EducationFormSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String
});

module.exports = mongoose.model('EducationForm', EducationFormSchema);
