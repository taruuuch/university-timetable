import mongoose from 'mongoose';
import uuid from 'uuid/v4';

const { Schema } = mongoose;

const schema = new Schema({
    _id: {
			type: String,
			default: uuid()
		},
    name: {
			firstName: {
				type: String
			},
			lastName: {
				type: String
			},
			middleName: {
				type: String
			},
		},
		departamentId: [{
			type: Schema.Types.ObjectId,
			ref: 'departament',
			required: true
		}],
		degreeId: [{
			type: Schema.Types.ObjectId,
			ref: 'degree',
			required: true
		}],
		academicId: [{
			type: Schema.Types.ObjectId,
			ref: 'academic',
			required: true
		}],
		isActive: {
			type: Boolean,
			required: true,
			default: true
		},
		email:  {
			type: String
		},
		site:  {
			type: String
		}
});

export default mongoose.model('teacher', schema);
