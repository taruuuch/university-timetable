// const Group = require('../models/group.model')

// const get = async (req, res) => {
// 	await Group.find()
// 		.exec()
// 		.then(groups => {
// 			res.status(200).json(groups)
// 		})
// 		.catch(error => {
// 			res.status(500).json({
// 				error: error
// 			})
// 		})
// }

// const getById = async (req, res) => {
// 	const id = req.params.groupId

// 	await Group.findById(id)
// 		.exec()
// 		.then(result => {
// 			if (result) {
// 				res.status(200).json(result)
// 			} else {
// 				res.status(404).json({ message: 'No valid entry found for group id' })
// 			}
// 		})
// 		.catch(error => {
// 			res.status(500).json({
// 				error: error
// 			})
// 		})
// }

// const create = async (req, res) => {
// 	const { title, studentCount, isActive } = req.body
// 	const newGroup = new Group({
// 		title: title,
// 		studentCount: studentCount,
// 		isActive: isActive
// 	})

// 	await newGroup.save()
// 		.then(result => {
// 			res.status(201).json(result)
// 		})
// 		.catch(error => {
// 			res.status(500).json({
// 				error: error
// 			})
// 		})
// }

// const update = async (req, res) => {
// 	const id = req.params.groupId
// 	const body = req.body

// 	await Group.findByIdAndUpdate(id, body, { new: true })
// 		.then(result => {
// 			res.status(200).json(result)
// 		})
// 		.catch(error => {
// 			res.status(500).json({
// 				error: error
// 			})
// 		})
// }

// const remove = async (req, res) => {
// 	const id = req.params.groupId

// 	await Group.deleteOne({ _id: id })
// 		.exec()
// 		.then(result => {
// 			res.status(200).json(result)
// 		})
// 		.catch(error => {
// 			res.status(500).json({
// 				error: error
// 			})
// 		})
// }

// module.exports = {
// 	get,
// 	getById,
// 	create,
// 	update,
// 	remove
// }
