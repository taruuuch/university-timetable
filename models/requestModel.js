const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const RequestSchema = new Schema({
	_id: Schema.Types.ObjectId,
	lessonId: [{
		type: Schema.Types.ObjectId, ref: 'Lesson'
	}],
	timeId: [{
		type: Schema.Types.ObjectId, ref: 'Time'
	}],
	from: Date,
	to: Date,
	requestTime: Date,
	status: Boolean
});

module.exports = mongoose.model('Request', RequestSchema);
