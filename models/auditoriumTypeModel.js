const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const AuditoriumTypeSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
	computer: {
		Type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('AuditoriumType', AuditoriumTypeSchema);
