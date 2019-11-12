import express from 'express';
import bodyParser from  'body-parser';
import cors from  'cors';
import mongoose from './config/database';
import route from './config/routes';
import swagger from 'swagger-ui-express';
import swaggerConfig from './api/swagger.v1.json';
import setupRoutes from './routes/setupRouter';
import authRoutes from './routes/authRoutes';
import groupRoutes from './routes/groupRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(route.swaggerUri, swagger.serve, swagger.setup(swaggerConfig));
app.use(route.authUri, authRoutes);
app.use(route.groupUri, groupRoutes);
app.use(route.userUri, userRoutes);
app.use(route.setupUri, setupRoutes);

app.use(async (req, res, next) => {
  const error = new Error('Api link not found! Go to localhost:8080/api/v1/docs for check available links');
	error.status = 404;
	error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  await next(error);
});

app.use((error, req, res, next) => {
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
