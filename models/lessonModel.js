const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const LessonSchema = new Schema({
	_id: Schema.Types.ObjectId,
	curriculumId: [{
		type: Schema.Types.ObjectId, ref: 'Curriculum'
	}],
	groupId: [{
		type: Schema.Types.ObjectId, ref: 'Group'
	}],
	teacherId: [{
		type: Schema.Types.ObjectId, ref: 'Teacher'
	}],
	auditoriumId: [{
		type: Schema.Types.ObjectId, ref: 'Auditorium'
	}],
	timeId: [{
		type: Schema.Types.ObjectId, ref: 'Time'
	}],
	day: String,
	week: Number,
	subGroup: Number,
});

module.exports = mongoose.model('Lesson', LessonSchema);
