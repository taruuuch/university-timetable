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
	title: {
		type: String
	},
}, {
	versionKey: false
});

module.exports = mongoose.model('academic', schema, 'academic');
