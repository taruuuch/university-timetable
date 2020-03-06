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
	departamentId: [{
		type: String,
		ref: 'Departament'
	}],
	subjectId: [{
		type: String,
		ref: 'Subject'
	}],
	lectionCount: {
		type: Number
	},
	labaratorCount: {
		type: Number
	},
	semester: {
		type: Number
	},
}, {
	versionKey: false
});

module.exports = mongoose.model('curriculum', schema, 'curriculum');
