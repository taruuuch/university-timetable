import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	number: {
		type: Number
	},
	latitude: {
		type: String
	},
	longitude: {
		type: String
	}
});

const building = mongoose.model('Building', schema);

export default building;
