const mongoose = require("mongoose");
const Group = require('../models/group');

exports.get_all_groups = async (req, res, next) => {
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

exports.add_group = async (req, res, next) => {
	const group = new Group({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    studentCount: req.body.studentCount,
    isActive: req.body.isActive,
	});

	await group.save()
    .then(result => {
      res.status(201).json({
        message: "Handling POST requests to /group",
        createdProduct: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.update_group = async (req, res, next) => {

};

exports.delete_group = async (req, res, next) => {

};
