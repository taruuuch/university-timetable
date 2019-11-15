import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	curriculumId: [{
		type: Schema.Types.ObjectId,
		ref: 'curriculum'
	}],
	groupId: [{
		type: Schema.Types.ObjectId,
		ref: 'group'
	}],
	teacherId: [{
		type: Schema.Types.ObjectId,
		ref: 'teacher'
	}],
	auditoriumId: [{
		type: Schema.Types.ObjectId,
		ref: 'auditorium'
	}],
	timeId: [{
		type: Schema.Types.ObjectId,
		ref: 'time'
	}],
	day: {
		type: String
	},
	week: {
		type: Number
	},
	subGroup: {
		type: Number
	}
});

export default mongoose.model('lesson', schema);
