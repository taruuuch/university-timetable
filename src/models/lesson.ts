import mongoose from "mongoose";

let Schema = mongoose.Schema;

let LessonSchema = new Schema({
	lessonId: Number,
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

let Lesson = mongoose.model('Lesson', LessonSchema);

export default Lesson;