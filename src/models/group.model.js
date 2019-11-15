import mongoose from 'mongoose';
import uuid from 'uuid/v4';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: String,
		default: uuid()
	},
	title: {
		type: String,
		required: true
	},
	specialityId: [{
		type: Schema.Types.ObjectId,
		ref: 'speciality',
		required: true
	}],
	teacherId: [{
		type: Schema.Types.ObjectId,
		ref: 'teacher',
		required: true
	}],
	educationLevelId: [{
		type: Schema.Types.ObjectId,
		ref: 'educationLevel',
		required: true
	}],
	educationFormId: [{
		type: Schema.Types.ObjectId,
		ref: 'educationForm',
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

export default mongoose.model('group', schema);
