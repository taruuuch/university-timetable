// const mongoose = require('mongoose');
// const uuid = require('uuid/v4');

// const {
// 	Schema
// } = mongoose;

// const schema = new Schema({
// 	_id: {
// 		type: String,
// 		default: uuid
// 	},
// 	curriculumId: [{
// 		type: String,
// 		ref: 'curriculum'
// 	}],
// 	groupId: [{
// 		type: String,
// 		ref: 'group'
// 	}],
// 	teacherId: [{
// 		type: String,
// 		ref: 'teacher'
// 	}],
// 	auditoriumId: [{
// 		type: String,
// 		ref: 'auditorium'
// 	}],
// 	timeId: [{
// 		type: String,
// 		ref: 'time'
// 	}],
// 	day: {
// 		type: String
// 	},
// 	week: {
// 		type: Number
// 	},
// 	subGroup: {
// 		type: Number
// 	}
// }, {
// 	versionKey: false
// });

// module.exports = mongoose.model('lesson', schema, 'lesson');
