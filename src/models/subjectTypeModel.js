import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String
	}
});

const subjectType = mongoose.model('SubjectType', schema);

export default subjectType;
