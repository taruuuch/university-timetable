const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.getUserById = async (req, res, next) => {
	await User.findById(req.decoded.id)
		.exec()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
      res.status(500).json({
        error: err
			});
		});
};

exports.setupUser = async (req, res, next) => {

};

exports.updateUser = async (req, res, next) => {

};

exports.deleteUser = async (req, res, next) => {

};

exports.checkUsername = async (req, res, next) => {
	await User.find({ username: req.body.username })
		.select('username')
		.catch(error => {
			return error;
		});
	return true;
};
