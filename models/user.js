const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
			type: String,
			required: true
		},
    email: {
			type: String,
			required: true
		},
    password: {
			type: String,
			required: true
		},
    name: {
			firstName: String,
			lastName: String
		},
		status: {
			type: Number,
			required: true,
			default: 1
		}
});

module.exports = mongoose.model('User', userSchema);
