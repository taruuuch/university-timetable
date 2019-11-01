const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.getUser = (req, res, next) => {

};

exports.setupUser = (req, res, next) => {

};

exports.updateUser = (req, res, next) => {

};

exports.deleteUser = (req, res, next) => {

};

exports.checkUsername = async (req, res, next) => {
	let username = req.body.username;
	User
		.find({ username: username })
		.select('username')
		.catch(error => {
			return error;
		});
	return true;
};
