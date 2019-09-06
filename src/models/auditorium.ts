import mongoose from "mongoose";

let Schema = mongoose.Schema;

let AuditoriumSchema = new Schema({
	nameId: Number,
	number: Number,
	buildingId: [{
		type: Schema.Types.ObjectId, ref: 'Building'
	}],
	searseCount: Number,
	auditoriumTypeId: [{
		type: Schema.Types.ObjectId, ref: 'AuditoriumType'
	}]
});

let Auditorium = mongoose.model('Auditorium', AuditoriumSchema);

export default Auditorium;