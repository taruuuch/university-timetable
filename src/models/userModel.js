import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		firstName: {
			type: String
		},
		lastName: {
			type: String
		}
	},
	status: {
		type: Number,
		default: 1
	}
});

const user = mongoose.model('User', schema);

export default user;
