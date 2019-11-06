const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const teacherSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
			firstName: String,
			lastName: String,
			middleName: String,
			required: true
		},
		// departamentId: [{
		// 	type: Schema.Types.ObjectId, ref: 'Departament',
		// 	required: true
		// }],
		// degreeId: [{
		// 	type: Schema.Types.ObjectId, ref: 'Degree',
		// 	required: true
		// }],
		// academicId: [{
		// 	type: Schema.Types.ObjectId, ref: 'Academic',
		// 	required: true
		// }],
		isActive: {
			type: Boolean,
			required: true,
			default: true
		},
		email:  {
			type: String
		},
		site:  {
			type: String
		}
});

module.exports = mongoose.model('Teacher', teacherSchema);
