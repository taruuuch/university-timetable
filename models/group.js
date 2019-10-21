const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const groupSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
			type: String,
			required: true
		},
    specialityId: [{
			type: Schema.Types.ObjectId, ref: 'Speciality',
			required: true
		}],
		teacherId: [{
			type: Schema.Types.ObjectId, ref: 'Teacher',
			required: true
		}],
		educationLevelId: [{
			type: Schema.Types.ObjectId, ref: 'EducationLevel',
			required: true
		}],
		educationFormId: [{
			type: Schema.Types.ObjectId, ref: 'EducationForm',
			required: true
		}],
		studentCount:  {
			type: Number,
			required: true
		},
		isActive: {
			type: Boolean,
			required: true
		}
});

module.exports = mongoose.model('Group', groupSchema);
