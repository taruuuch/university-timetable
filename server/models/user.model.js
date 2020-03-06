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
	username: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String,
	},
	name: {
		firstName: {
			type: String
		},
		lastName: {
			type: String
		}
	},
	status: {
		type: Number,
		default: 1
	}
}, {
	versionKey: false
});

module.exports = mongoose.model('user', schema, 'user');
