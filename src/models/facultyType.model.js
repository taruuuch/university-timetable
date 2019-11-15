import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: Schema.Types.ObjectId,
	title: {
		type: String
	}
});

export default mongoose.model('facultyType', schema);
