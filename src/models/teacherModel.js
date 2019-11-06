import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    _id: {
			type: Schema.Types.ObjectId
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
			required: true
		},
		departamentId: [{
			type: Schema.Types.ObjectId,
			ref: 'Departament',
			required: true
		}],
		degreeId: [{
			type: Schema.Types.ObjectId,
			ref: 'Degree',
			required: true
		}],
		academicId: [{
			type: Schema.Types.ObjectId,
			ref: 'Academic',
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

const teacher = mongoose.model('Teacher', schema);

export default teacher;
