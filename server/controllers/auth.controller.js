const bcrypt = require('bcryptjs')
const { User } = require('../utils/database.util')
const { TOKEN_EXPIRES } = require('../config/base.config')
const { generateToken } = require('../utils/auth.util')

const registration = async (req, res) => {
	try {
		req.body.password = bcrypt.hashSync(req.body.password, 10)

		await User.create(req.body)
			.then(user => {
				res.status(201).json({
					auth: true,
					token: generateToken(user.id),
					expiresIn: TOKEN_EXPIRES
				})
			})
			.catch(error => {
				res.status(400).json({
					auth: false,
					message: 'There was a problem registering the user',
					error
				})
			})
	} catch (error) {
		res.status(500).json({
			message: 'Error registration new user',
			error
		})
	}
}

const login = async (req, res) => {
	try {
		const { email, password } = req.body

		await User.findOne({ where: { email } })
			.then(user => {
				if (!user) {
					return res.status(401).json({ message: 'User does not exist!' })
				}

				const isValid = bcrypt.compareSync(password, user.password)

				if (!isValid) {
					return res.status(401).json({ message: 'Invalid credentials! '})
				}

				res.status(200).json({
					auth: true,
					token: generateToken(user.id),
					expires: TOKEN_EXPIRES
				})
			})
	} catch (error) {
		res.status(500).json({
			message: 'Auth error!',
			error
		})
	}
}

const refreshToken = async (req, res) => {}

module.exports = {
	registration,
	login,
	refreshToken
}
