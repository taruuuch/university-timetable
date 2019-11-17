import mongoose from 'mongoose';
import uuid from 'uuid/v4';

const { Schema } = mongoose;

const schema = new Schema({
	id: {
		type: String,
		default: uuid()
	},
	number: {
		type: Number
	},
	start: {
		type: String
	},
	end: {
		type: String
	}
}, { versionKey: false });

export default mongoose.model('time', schema);