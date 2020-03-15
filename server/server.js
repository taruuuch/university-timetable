require('dotenv').config()
const express = require('express')
const { URI, PORT } = require('./config/base.config')
const { connectDB } = require('./utils/database.util')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./utils/logger.util'))

require('./utils/security.util')(app)
require('./utils/routes.util')(app)
require('./utils/swagger.util')(app)
require('./utils/error.util')(app)

connectDB()

try {
	app.listen(PORT, error => {
		console.clear()
		console.log(`🌎 Open in browser: http://${URI}:${PORT}`)
	})
} catch (error) {
	console.error(error)
}
