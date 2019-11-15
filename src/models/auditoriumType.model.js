import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	computer: {
		type: Boolean,
		default: false
	}
});

export default mongoose.model('auditoriumType', schema);
