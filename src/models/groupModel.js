import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String,
		required: true
	},
	specialityId: [{
		type: Schema.Types.ObjectId,
		ref: 'Speciality',
		required: true
	}],
	teacherId: [{
		type: Schema.Types.ObjectId,
		ref: 'Teacher',
		required: true
	}],
	educationLevelId: [{
		type: Schema.Types.ObjectId,
		ref: 'EducationLevel',
		required: true
	}],
	educationFormId: [{
		type: Schema.Types.ObjectId,
		ref: 'EducationForm',
		required: true
	}],
	studentCount:  {
		type: Number,
		required: true
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true
	}
});

const group = mongoose.model('Group', schema);

export default group;
