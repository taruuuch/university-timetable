import mongoose from 'mongoose';
import Group from '../models/groupModel';

export default {
	getAllGroups: async (req, res, next) => {
		await Group.find()
			.exec()
			.then(docs => {
				res.status(200).json(docs)
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	},
	addGroup: async (req, res, next) => {
		const group = new Group({
			_id: new mongoose.Types.ObjectId(),
			title: req.body.title,
			studentCount: req.body.studentCount,
			isActive: req.body.isActive,
		});

		await group.save()
			.then(result => res.status(201).json(result))
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	},
	getGroupById: async (req, res, next) => {
		const id = req.params.groupId;

		await Group.findById(id)
			.exec()
			.then(result => {
				if (result) {
					res.status(200).json(result);
				} else {
					res.status(404).json({ message: "No valid entry found for group ID" });
				}
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	},
	updateGroup: async (req, res, next) => {
		await Group.findByIdAndUpdate(req.params.groupId, req.body, { new: true })
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	},
	deleteGroup: async (req, res, next) => {
		await Group.deleteOne({ _id: req.params.groupId })
			.exec()
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	}
};
