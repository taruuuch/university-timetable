const express = require('express');
const bodyParser =  require('body-parser');
const cors =  require('cors');
const swagger = require('swagger-ui-express');
const swaggerConfig = require('./api/swagger.v1.json');
const routesConfig = require('./config/routes.config');
const database = require('./utils/database.util');
const authRoutes = require('./routes/auth.routes');
const groupRoutes = require('./routes/group.routes');
const userRoutes = require('./routes/user.routes');
const connectLogger = require('./config/logger.config');

const app = express();

database.connect();

app.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(cors())
	.use(connectLogger)
	.use(routesConfig.swaggerUri, swagger.serve, swagger.setup(swaggerConfig))
	.use(routesConfig.authUri, authRoutes)
	.use(routesConfig.groupUri, groupRoutes)
	.use(routesConfig.userUri, userRoutes)
	.use(async (req, res, next) => {
		const error = new Error('Api link not found! Go to localhost:8080/api/v1/docs for check available links');
		error.status = 404;
		error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

		next(error);
	})
	.use((error, req, res, next) => {
		res.status(error.status || 500);
		res.json({
			error: {
				message: error.message,
				code: error.status,
				path: error.path
			}
		});
	});

module.exports = app;
