import mongoose from "mongoose";

let Schema = mongoose.Schema;

let RequestSchema = new Schema({
	requestId: Number,
	lessonId: [{
		type: Schema.Types.ObjectId, ref: 'Lesson'
	}],
	timeId: [{
		type: Schema.Types.ObjectId, ref: 'Time'
	}],
	from: Date,
	to: Date,
	requestTime: Date,
	status: Boolean
});

let Request = mongoose.model('Request', RequestSchema);

export default Request;