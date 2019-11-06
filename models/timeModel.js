export default Time;

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const TimeSchema = new Schema({
	_id: Schema.Types.ObjectId,
	number: Number,
	start: String,
	end: String
});

module.exports = mongoose.model('Time', TimeSchema);
