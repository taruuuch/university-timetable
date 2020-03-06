const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const {
	Schema
} = mongoose;

const schema = new Schema({
	_id: {
		type: String,
		default: uuid
	},
	number: {
		type: Number
	},
	start: {
		type: String
	},
	end: {
		type: String
	}
}, {
	versionKey: false
});

module.exports = mongoose.model('time', schema, 'time');
