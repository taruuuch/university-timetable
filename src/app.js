import express from 'express';
import bodyParser from  'body-parser';
import cors from  'cors';
import mongoose from './config/database';
import config from './config/config';
import swagger from 'swagger-ui-express';
import swaggerConfig from './api/swagger.json';
import authRoutes from './routes/authRoutes';
import groupRoutes from './routes/groupRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(`${config.urlPrefix}/docs`, swagger.serve, swagger.setup(swaggerConfig));
app.use(`${config.urlPrefix}/auth`, authRoutes);
app.use(`${config.urlPrefix}/groups`, groupRoutes);
app.use(`${config.urlPrefix}/user`, userRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;
