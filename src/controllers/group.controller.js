import Group from '../models/group.model';

class groupController {
	getGroups = async (req, res) => {
		await Group.find()
			.exec()
			.then(groups => {
				res.status(200).json(groups)
			})
			.catch(error => {
				res.status(500).json({ error: error })
			});
	};

	createGroup = async (req, res) => {
		const { title, studentCount, isActive } = req.body;
		const newGroup = new Group({
			title: title,
			studentCount: studentCount,
			isActive: isActive
		});

		await newGroup.save()
			.then(result => {
				res.status(201).json(result)
			})
			.catch(error => {
				res.status(500).json({ error: error })
			});
	};

	getGroupById = async (req, res) => {
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
	};

	updateGroup = async (req, res) => {
		await Group.findByIdAndUpdate(req.params.groupId, req.body, { new: true })
			.then(result => {
				res.status(200).json(result);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
	};

	deleteGroup = async (req, res) => {
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
	};
};

export default groupController;
