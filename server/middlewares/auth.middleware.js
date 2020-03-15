const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../config/base.config')

module.exports = (req, res, next) => {
	let token = req.get('Authorization')

	if (!token) {
		return res.status(401).json({ message: 'Token not provided!' })
	}

	token = token.replace('Bearer ', '')

	jwt.verify(token, TOKEN_SECRET, (err, decode) => {
		if (err) {
			return res.status(500).send({
				auth: false,
				message: 'Failed to authenticate token.'
			})
		}

		req.decode = decode
		next()
	})
}
