import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	lessonId: [{
		type: Schema.Types.ObjectId,
		ref: 'lesson'
	}],
	timeId: [{
		type: Schema.Types.ObjectId,
		ref: 'time'
	}],
	from: {
		type: Date
	},
	to: {
		type: Date
	},
	requestTime: {
		type: Date
	},
	status: {
		type: Boolean
	}
});

export default mongoose.model('request', schema);
