const jwt = require('jsonwebtoken')
const { authSecret, authAccessExpires } = require('../config/base.config')

const generateToken = (userId) => {
	const payload = { id: userId }
	const options = { expiresIn: authAccessExpires }

	return jwt.sign(payload, authSecret, options)
}

module.exports = {
  generateToken
}
