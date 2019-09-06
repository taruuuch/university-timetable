import mongoose from "mongoose";

let Schema = mongoose.Schema;

let TimeSchema = new Schema({
	timeId: Number,
	number: Number,
	start: String,
	end: String
});

let Time = mongoose.model('Time', TimeSchema);

export default Time;