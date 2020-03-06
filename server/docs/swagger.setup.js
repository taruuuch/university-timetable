const routesConfig = require('../config/routes.config')
const swagger = require('swagger-ui-express')

module.exports = app => {
	app.use(
		routesConfig.swaggerUri,
		swagger.serve,
		swagger.setup(require('./swagger.v1.json'))
	)
}
