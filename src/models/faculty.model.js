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
		ref: 'facultyType'
	}],
	dean: {
		type: String
	},
	buildingId: [{
		type: Schema.Types.ObjectId,
		ref: 'building'
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

export default mongoose.model('faculty', schema);
