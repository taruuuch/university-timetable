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

const educationLevel = mongoose.model('EducationLevel', schema);

export default educationLevel;
