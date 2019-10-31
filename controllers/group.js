const mongoose = require("mongoose");
const Group = require('../models/group');

exports.getAllGroups = async (req, res, next) => {
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
};

exports.addGroup = async (req, res, next) => {
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
};

exports.getGroupById = async (req, res, next) => {
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

exports.updateGroup = async (req, res, next) => {
	const id = req.params.groupId;

	await Group.findByIdAndUpdate(id, req.body, { new: true })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.deleteGroup = async (req, res, next) => {
	const id = req.params.groupId;

	await Group.deleteOne({ _id: id })
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
