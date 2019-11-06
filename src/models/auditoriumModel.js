import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: Schema.Types.ObjectId,
	number: {
		type: Number
	},
	buildingId: [{
		type: Schema.Types.ObjectId,
		ref: 'Building'
	}],
	searseCount: {
		type: Number
	},
	auditoriumTypeId: [{
		type: Schema.Types.ObjectId,
		ref: 'AuditoriumType'
	}]
});

const Auditorium = mongoose.model('Auditorium', schema);

export default Auditorium;
