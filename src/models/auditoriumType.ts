import mongoose from "mongoose";

let Schema = mongoose.Schema;

let AuditoriumTypeSchema = new Schema({
	auditoriumTypeId: Number,
	title: String,
	computer: Boolean
});

let AuditoriumType = mongoose.model('AuditoriumType', AuditoriumTypeSchema);

export default AuditoriumType;