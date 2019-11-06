const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const BuildingSchema = new Schema({
	_id: Schema.Types.ObjectId,
	number: Number,
	latitude: String,
	longitude: String
});

module.exports = mongoose.model('Building', BuildingSchema);
