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
		ref: 'subjectType'
	}]
});

export default mongoose.model('subject', schema);
