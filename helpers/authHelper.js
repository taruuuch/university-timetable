const jwt = require('jsonwebtoken');
const { secret, tokens } = require('../config/jwt').jwt;

exports.generateToken = (userId) => {
	const payload = { id: userId };
	const options = { expiresIn: tokens.access.expiresIn };

	return jwt.sign(payload, secret, options);
};
