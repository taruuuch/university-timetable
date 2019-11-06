import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	dean: {
		type: String
	},
	facultyId: [{
		type: Schema.Types.ObjectId,
		ref: 'Faculty'
	}],
	email: {
		type: String
	}
});

const departament = mongoose.model('Departament', schema);

export default departament;
