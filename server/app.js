const express = require('express')
const cors = require('cors')
const connectLogger = require('./config/logger.config')
const setupRoutes = require('./utils/routes.util')
const setupSwagger = require('./docs/swagger.setup')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(connectLogger)

setupSwagger(app)
setupRoutes(app)

app.use(async (req, res, next) => {
	const error = new Error('Api link not found! Go to localhost:8080/api/v1/docs for check available links')
	error.status = 404
	error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`

	next(error)
})

app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message,
			code: error.status,
			path: error.path
		}
	})
})

module.exports = app
