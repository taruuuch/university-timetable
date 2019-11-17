import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	code: {
		type: Number
	},
	facultyId: [{
		type: Schema.Types.ObjectId,
		ref: 'faculty'
	}]
});

export default mongoose.model('speciality', schema);