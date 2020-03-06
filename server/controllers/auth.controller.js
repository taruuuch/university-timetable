const bcrypt = require('bcryptjs');
const authHelper = require('../helpers/auth.helper');
const User = require('../models/user.model');

registrationUser = async (req, res) => {
	req.body.password = bcrypt.hashSync(req.body.password, 8);
	const newUser = new User(req.body);

	await newUser.save()
		.then(user => {
			const token = authHelper.generateToken(user._id);
			res.status(200).json({
				auth: true,
				token: token,
				expires: process.env.ACCESS_EXPIRES
			});
		})
		.catch(error => {
			res.status(500).json({
				message: 'There was a problem registering the user.',
				error: error
			});
		});
};

authUser = async (req, res) => {
	await User.findOne({ email: req.body.email })
		.exec()
		.then(user => {
			if (!user) {
				res.status(401).json({ message: 'User does not exist!' });
				return;
			}

			const isValid = bcrypt.compareSync(req.body.password, user.password);

			if (!isValid) {
				res.status(401).json({ message: 'Invalid credentials! '});
				return;
			}

			const token = authHelper.generateToken(user._id);

			res.status(200).json({
				auth: true,
				token: token,
				expires: process.env.ACCESS_EXPIRES
			});
		})
		.catch(err => res.status(500).json({
				message: 'Auth error!',
				error: err
			})
		);
};

refreshToken = async (req, res) => {};

module.exports = {
	registrationUser,
	authUser,
	refreshToken
};
