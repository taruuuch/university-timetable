import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: Schema.Types.ObjectId,
	title: {
		type: String
	},
});

const Academic = mongoose.model('Academic', schema);

export default Academic;
