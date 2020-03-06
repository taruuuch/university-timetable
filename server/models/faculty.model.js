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
	facultyTypeId: [{
		type: String,
		ref: 'facultyType'
	}],
	dean: {
		type: String
	},
	buildingId: [{
		type: String,
		ref: 'building'
	}],
	shortName: {
		type: String
	},
	address: {
		type: String
	},
	phone: {
		type: String
	},
	email: {
		type: String
	},
	site: {
		type: String
	}
}, {
	versionKey: false
});

module.exports = mongoose.model('faculty', schema, 'faculty');
