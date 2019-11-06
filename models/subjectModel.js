const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
	subjectTypeId: [{
		type: Schema.Types.ObjectId, ref: 'SubjectType'
	}]
});

module.exports = mongoose.model('Subject', SubjectSchema);
