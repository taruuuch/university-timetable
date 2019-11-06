import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	lessonId: [{
		type: Schema.Types.ObjectId,
		ref: 'Lesson'
	}],
	timeId: [{
		type: Schema.Types.ObjectId,
		ref: 'Time'
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

const request = mongoose.model('Request', schema);

export default request;
