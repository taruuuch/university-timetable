import mongoose from "mongoose";

let Schema = mongoose.Schema;

let BuildingSchema = new Schema({
	buildingId: Number,
	number: Number,
	latitude: String,
	longitude: String
});

let Building = mongoose.model('Building', BuildingSchema);

export default Building;