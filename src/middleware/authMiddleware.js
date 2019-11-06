import jwt from 'jsonwebtoken';

export default (req, res, next) => {
	let token = req.get('Authorization');

  if (!token) {
		res.status(401).json({ message: 'Token not provided!' });
		return;
	}

	token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(500).send({
				auth: false,
				message: 'Failed to authenticate token.'
			});

		req.decoded = decoded;
    next();
  });
};
