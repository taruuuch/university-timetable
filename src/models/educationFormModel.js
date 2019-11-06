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

const educationForm = mongoose.model('EducationForm', schema);

export default educationForm;
