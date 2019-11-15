import mongoose from 'mongoose';

function connect() {
	mongoose.Promise = global.Promise;

	const mongooseOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	};

	return mongoose.connect(
		process.env.DB_URI,
		mongooseOptions,
	).then((resolved) => {
		console.log('Server connected to MongoDB')

		mongoose.connection.on('error', (err) => {
			console.error(err);
		});

		return resolved;
	});
}

function close() {
	return mongoose.connections.close();
};

export default {
	connect,
	close
};
