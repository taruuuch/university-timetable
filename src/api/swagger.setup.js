const routesConfig = require('../config/routes.config');
const swagger = require('swagger-ui-express');
const swaggerConfig = require('./swagger.v1.json');

module.exports = app => {
	app.use(
		routesConfig.swaggerUri,
		swagger.serve,
		swagger.setup(swaggerConfig)
	);
};
