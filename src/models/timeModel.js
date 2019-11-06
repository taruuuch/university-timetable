import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
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
});

const time = mongoose.model('Time', schema);

export default time;
