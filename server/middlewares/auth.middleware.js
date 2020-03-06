const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	let token = req.get('Authorization')

  if (!token) {
		return res.status(401).json({ message: 'Token not provided!' })
	}

	token = token.replace('Bearer ', '')

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(500).send({
				auth: false,
				message: 'Failed to authenticate token.'
			})

		req.decoded = decode
    next()
  })
}
