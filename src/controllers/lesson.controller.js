const Lesson = require('../models/lesson.model');

getLessons = async (req, res) => {
	await Lesson.find()
		.exec()
		.then(lessons => {
			res.status(200).json(lessons);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			});
		});
};

getLessonById = async (req, res) => {
	const id = req.params.groupId;

	await Lesson.findById(id)
		.exec()
		.then(lesson => {
			if (lesson) {
				res.status(200).json(lesson);
			} else {
				res.status(404).json({
					message: 'No valid entry found for lesson id'
				});
			}
		})
		.catch(error => {
			res.status(500).json({
				error: error
			});
		});
};

createLesson = async (req, res) => {
	const {  } = req.body;
	const newLesson = new Lesson({

	});

	await newLesson.save()
		.then(lesson => {
			res.status(201).json(lesson)
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		});
};

updateLesson = async (req, res) => {
	const id = req.params.lessonId;
	const body = req.body;

	await Lesson.findByIdAndUpdate(id, body, { new: true })
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			});
		});
};

deleteLesson = async (req, res) => {
	const id = req.params.lessonId;

	await Lesson.deleteOne({ _id: id })
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			});
		});
};

module.exports = {
	getLessons,
	getLessonById,
	createLesson,
	updateLesson,
	deleteLesson
};
