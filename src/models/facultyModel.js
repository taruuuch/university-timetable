import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	title: {
		type: String
	},
	facultyTypeId: [{
		type: Schema.Types.ObjectId,
		ref: 'FacultyType'
	}],
	dean: {
		type: String
	},
	buildingId: [{
		type: Schema.Types.ObjectId,
		ref: 'Building'
	}],
	shortName: {
		type: String
	},
	address: {
		type: String
	},
	phone: {
		type: String
	},
	email: {
		type: String
	},
	site: {
		type: String
	}
});

const faculty = mongoose.model('Faculty', schema);

export default faculty;
