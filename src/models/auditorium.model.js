import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: Schema.Types.ObjectId,
	number: {
		type: Number
	},
	buildingId: [{
		type: Schema.Types.ObjectId,
		ref: 'building'
	}],
	searseCount: {
		type: Number
	},
	auditoriumTypeId: [{
		type: Schema.Types.ObjectId,
		ref: 'auditoriumType'
	}]
});

export default mongoose.model('auditorium', schema);
