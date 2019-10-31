const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt').jwt;

module.exports = (req, res, next) => {
	let token = req.get('Authorization');

  if (!token) {
		res.status(401).json({ message: 'Token not provided!' });
		return;
	}

	token = token.replace('Bearer ', '');

  jwt.verify(token, secret, (err, decoded) => {
    if (err)
      return res.status(500).send({
				success: false,
				auth: false,
				message: 'Failed to authenticate token.'
			});

		req.decoded = decoded;
    next();
  });
};
