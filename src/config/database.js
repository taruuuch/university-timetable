import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
})
.then(() => console.log('Server connected to MongoDB'))
.catch(e => console.log(e));

mongoose.Promise = global.Promise;

export default mongoose;
