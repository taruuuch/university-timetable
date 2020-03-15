// const {} = require('sequelize')
// const uuid = require('uuid/v4')

// const schema = new Schema({
// 	_id: {
// 		type: String,
// 		default: uuid
// 	},
// 	title: {
// 		type: String,
// 		required: true
// 	},
// 	specialityId: [{
// 		type: String,
// 		ref: 'speciality',
// 		required: true
// 	}],
// 	teacherId: [{
// 		type: String,
// 		ref: 'teacher',
// 		required: true
// 	}],
// 	educationLevelId: [{
// 		type: String,
// 		ref: 'educationLevel',
// 		required: true
// 	}],
// 	educationFormId: [{
// 		type: String,
// 		ref: 'educationForm',
// 		required: true
// 	}],
// 	studentCount: {
// 		type: Number,
// 		required: true
// 	},
// 	isActive: {
// 		type: Boolean,
// 		required: true,
// 		default: true
// 	}
// }, {
// 	versionKey: false
// })

// module.exports = mongoose.model('group', schema, 'group')
