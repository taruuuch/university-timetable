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
		ref: 'faculty'
	}],
	building: [{
		type: Schema.Types.ObjectId,
		ref: 'building'
	}],
	auditoriums: [{
		type: Schema.Types.ObjectId,
		ref: 'auditorium'
	}],
	phone: {
		type: String
	},
	email: {
		type: String
	}
});

export default mongoose.model('departament', schema);
