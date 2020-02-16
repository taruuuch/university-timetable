const mongoose = require('mongoose');

const connect = async () => {
	mongoose.Promise = global.Promise;

	const mongooseOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	};

	return await mongoose.connect(
		process.env.DB_URI,
		mongooseOptions,
	).then((resolved) => {
		console.log('Server connected to MongoDB');

		mongoose.connection.on('error', (err) => {
			console.error(err);
		});

		return resolved;
	});
};

const close = async () => await mongoose.connections.close();

module.exports = {
	connect,
	close
};
