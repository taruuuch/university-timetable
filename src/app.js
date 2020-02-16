const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./helpers/database.helper');
const connectLogger = require('./config/logger.config');
const setupRoutes = require('./helpers/setupRoutes.helper');
const setupSwagger = require('./api/swagger.setup');

const app = express();

database.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.use(connectLogger);

setupSwagger(app);
setupRoutes(app);

app.use(async (req, res, next) => {
	const error = new Error('Api link not found! Go to localhost:8080/api/v1/docs for check available links');
	error.status = 404;
	error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

	next(error);
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

module.exports = app;
