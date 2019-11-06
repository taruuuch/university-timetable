const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const DegreeSchema = new Schema({
	_id: Schema.Types.ObjectId,
	id: Schema.,
	title: String
});

module.exports = mongoose.model('Degree', DegreeSchema);
