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

const auditoriumType = mongoose.model('AuditoriumType', schema);

export default auditoriumType;
