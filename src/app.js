import express from 'express';
import bodyParser from  'body-parser';
import cors from  'cors';
import swagger from 'swagger-ui-express';
import swaggerConfig from './api/swagger.v1.json';
import routesConfig from './config/routes.config';
import database from './utils/database.util';
import authRoutes from './routes/auth.routes';
import groupRoutes from './routes/group.routes';
import userRoutes from './routes/user.routes';
import connectLogger from './config/logger.config';

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

			await next(error);
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

export default app;
