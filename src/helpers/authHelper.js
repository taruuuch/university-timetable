import jwt from 'jsonwebtoken';

exports.generateToken = (userId) => {
	const payload = { id: userId };
	const options = { expiresIn: process.env.ACCESS_EXPIRES };

	return jwt.sign(payload, process.env.SECRET_KEY, options);
};
