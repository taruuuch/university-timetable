import mongoose from "mongoose";

let Schema = mongoose.Schema;

let NameSchema = new Schema({
	nameId: String,
});

let Name = mongoose.model('Name', NameSchema);

export default Name;