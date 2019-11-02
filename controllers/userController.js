const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.getUserProfile = async (req, res, next) => {
	await User.findById(req.decoded.id)
		.exec()
		.then(data => {
			let user = {
				username: data.username,
				email: data.email,
				status: data.status
			};

			if (data.name.firstName !== {}) user.firstName = data.name.firstName;
			if (data.name.lastName !== {}) user.lastName = data.name.lastName;

			res.status(200).json(user);
		})
		.catch(err => {
      res.status(500).json({
        error: err
			});
		});
};

exports.getUserById = async (req, res, next) => {
	await User.findById(req.decoded.id)
		.exec()
		.then(data => {
			let user = {
				id: data._id,
				username: data.username,
				email: data.email
			};
			res.status(200).json(user);
		})
		.catch(err => {
      res.status(500).json({
        error: err
			});
		});
};

exports.setupUser = async (req, res, next) => {
	await User.findByIdAndUpdate(req.decoded.id, req.body, { new: true })
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

exports.updateUser = async (req, res, next) => {
	await User.findByIdAndUpdate(req.decoded.id, req.body, { new: true })
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

exports.checkUsername = async (req, res, next) => {
	await User.find({ username: req.body.username })
		.select('username')
		.catch(error => {
			return error;
		});
	return true;
};
