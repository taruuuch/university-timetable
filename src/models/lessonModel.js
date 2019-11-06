import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	curriculumId: [{
		type: Schema.Types.ObjectId,
		ref: 'Curriculum'
	}],
	groupId: [{
		type: Schema.Types.ObjectId,
		ref: 'Group'
	}],
	teacherId: [{
		type: Schema.Types.ObjectId,
		ref: 'Teacher'
	}],
	auditoriumId: [{
		type: Schema.Types.ObjectId,
		ref: 'Auditorium'
	}],
	timeId: [{
		type: Schema.Types.ObjectId,
		ref: 'Time'
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

const lesson = mongoose.model('Lesson', schema);

export default lesson;
