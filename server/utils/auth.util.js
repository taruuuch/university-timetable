const jwt = require('jsonwebtoken')
const { TOKEN_SECRET, TOKEN_EXPIRES } = require('../config/base.config')

const generateToken = (userId) => {
	const payload = { id: userId }
	const options = { expiresIn: TOKEN_EXPIRES }

	return jwt.sign(payload, TOKEN_SECRET, options)
}

module.exports = {
	generateToken
}
