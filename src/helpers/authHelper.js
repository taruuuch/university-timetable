import jwt from 'jsonwebtoken';

export default {
	generateToken: (userId) => {
		const payload = { id: userId };
		const options = { expiresIn: process.env.ACCESS_EXPIRES };

		return jwt.sign(payload, process.env.SECRET_KEY, options);
	}
};
