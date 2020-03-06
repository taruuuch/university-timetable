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
	name: {
		firstName: {
			type: String
		},
		lastName: {
			type: String
		},
		middleName: {
			type: String
		},
	},
	departamentId: {
		type: String,
		ref: 'departament',
		required: true
	},
	degreeId: {
		type: String,
		ref: 'degree',
		required: true
	},
	academicId: {
		type: String,
		ref: 'academic',
		required: true
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true
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

module.exports = mongoose.model('teacher', schema, 'teacher');
