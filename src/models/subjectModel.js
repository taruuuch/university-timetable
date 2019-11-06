import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	subjectTypeId: [{
		type: Schema.Types.ObjectId,
		ref: 'SubjectType'
	}]
});

const subject = mongoose.model('Subject', schema);

export default subject;
