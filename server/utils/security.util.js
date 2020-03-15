const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

module.exports = app => {
	app.use(cors({
		origin: '*',
		methods: 'GET, POST, PATCH, DELETE'
	}))
	app.use(helmet())
	app.use(rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 100,
		message: 'Too many accounts created from this IP, please try again after an hour'
	}))
}
