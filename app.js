const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/database');
const config = require('./config/config');

const swagger = require('swagger-ui-express');
const swaggerConfig = require('./api/swagger.json');

const authRoutes = require('./routes/auth');
const groupRoutes = require('./routes/group');
const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(`${config.urlPrefix}/docs`, swagger.serve, swagger.setup(swaggerConfig));

app.use(`${config.urlPrefix}`, authRoutes);
app.use(`${config.urlPrefix}/groups`, groupRoutes);
app.use(`${config.urlPrefix}/me`, userRoutes);

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

module.exports = app;
