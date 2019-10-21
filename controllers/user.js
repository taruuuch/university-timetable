const mongoose = require('mongoose');
const User = require('../models/user');

exports.user_get = (req, res, next) => {

};

exports.user_setup = (req, res, next) => {

};

exports.user_update = (req, res, next) => {

};

exports.user_delete = (req, res, next) => {

};

exports.user_check_username = async (req, res, next) => {
	let username = req.body.username;
	User
		.find({ username: username })
		.select('username')
		.catch(error => {
			return error;
		});
	return true;
};
