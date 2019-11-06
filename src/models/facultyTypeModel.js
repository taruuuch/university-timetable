import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: Schema.Types.ObjectId,
	title: {
		type: String
	}
});

const facultyType = mongoose.model('FacultyType', schema);

export default facultyType;
