const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const authHelper = require('../helpers/authHelper');
const { secret, tokens } = require('../config/jwt').jwt;

const User = require('../models/userModel');

exports.registrationUser = async (req, res) => {
	var hashedPassword = bcrypt.hashSync(req.body.password, 8);

	const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    email: req.body.email,
		password: hashedPassword
	});

	await user.save()
		.then(user => {
			const token = authHelper.generateToken(user._id);
			res.status(200).json({
				auth: true,
				token: token,
				expires: tokens.access.expiresIn
			});
		})
    .catch(err => {
      res.status(500).json({
				message: 'There was a problem registering the user.',
        error: err
      });
    });
};

exports.authUser = async (req, res) => {
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
				expires: tokens.access.expiresIn
			});
		})
		.catch(err => res.status(500).json({
				message: 'Auth error!',
        error: err
			})
		);
};

exports.refreshToken = (req, res) => {
	const { refreshToken } = req.body;

	let payload;
	try {
		payload = jwt.verify(refreshToken, secret);
		if (payload.type !== 'refresh') {
			res.status(400).json({ message: 'Invalid token!' });
			return;
		}
	} catch (e) {
		if (e instanceof jwt.TokenExpiredError) {
			res.status(400).json({ message: 'Token expired!' });
			return;
		} else if (e instanceof jwt.JsonWebTokenError) {
			res.status(400).json({ message: 'Invalid token!' });
			return;
		}
	}

	Token.findById(payload.id)
		.exec()
		.then(token => {
			if (token === null) {
				throw new Error('Invalid token!');
			}

			return updateTokens(token.userId);
		})
		.then(tokens => res.json(tokens))
		.catch(err => res.status(500).json({
				message: 'Auth error!',
				error: err
			})
		);
};
