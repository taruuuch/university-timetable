const Teacher = require('../models/teacher.model');

getTeachers = async (req, res) => {
	await Teacher.find()
		.exec()
		.then(teachers => {
			res.status(200).json(teachers);
		})
		.catch(error => {
			res.status(500).json({ error: error })
		});
};

getTeacherById = async (req, res) => {
	const id = req.params.teacherId;

	await Teacher.findById(id)
		.exec()
		.then(result => {
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(400).json({ message: 'No valid entry found for teacher id' });
			}
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		});
};

createTeacher = async (req, res) => {
	const { name, departamentId, degreeId, academicId } = req.body;
	const teacherName = {
		firstName: name.firstName,
		lastName: name.lastName,
		middleName: name.middleName
	};
	const newTeacher = new Teacher({
		name: teacherName,
		departamentId: departamentId,
		degreeId: degreeId,
		academicId: academicId
	});

	await newTeacher.save()
		.then(result => {
			res.status(201).json(result)
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		});
};

updateTeacher = async (req, res) => {
	const id = req.params.teacherId;
	const body = req.body;

	await Teacher.findByIdAndUpdate(id, body, { new: true })
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		})
};

deleteTeacher = async (req, res) => {
	const id = req.params.teacherId;

	await Teacher.deleteOne({ _id: id })
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => {
			res.status(500).json({
				error: error
			})
		});
};

module.exports = {
	getTeachers,
	getTeacherById,
	createTeacher,
	updateTeacher,
	deleteTeacher
};
