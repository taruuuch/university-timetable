const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const AuditoriumSchema = new Schema({
	_id: Schema.Types.ObjectId,
	number: Number,
	buildingId: [{
		type: Schema.Types.ObjectId, ref: 'Building'
	}],
	searseCount: Number,
	auditoriumTypeId: [{
		type: Schema.Types.ObjectId, ref: 'AuditoriumType'
	}]
});

module.exports = mongoose.model('Auditorium', AuditoriumSchema);
