const swagger = require('swagger-ui-express')
const { swaggerUri } = require('../config/routes.config')

module.exports = app => {
	app.use(
		swaggerUri,
		swagger.serve,
		swagger.setup(require('./swagger.v1.json'))
	)
}
