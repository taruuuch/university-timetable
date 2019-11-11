import 'dotenv/config';
import mongoose from 'mongoose';

const mongoSettings = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
};

mongoose.connect(process.env.DB_CONNECT, mongoSettings)
	.then(() => console.log('Server connected to MongoDB'))
	.catch(e => console.log(e));

mongoose.Promise = global.Promise;

export default mongoose;
