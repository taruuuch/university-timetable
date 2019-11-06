const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const AcademicSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
});

module.exports = mongoose.model('Academic', AcademicSchema);
