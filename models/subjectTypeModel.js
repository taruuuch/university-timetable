const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const SubjectTypeSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String
});

module.exports = mongoose.model('SubjectType', SubjectTypeSchema);
