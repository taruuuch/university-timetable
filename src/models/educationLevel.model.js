import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	title: {
		type: String
	}
});

export default mongoose.model('educationLevel', schema);
