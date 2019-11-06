import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	departamentId: [{
		type: Schema.Types.ObjectId,
		ref: 'Departament'
	}],
	subjectId: [{
		type: Schema.Types.ObjectId,
		ref: 'Subject'
	}],
	lectionCount: {
		type: Number
	},
	labaratorCount: {
		type: Number
	},
	semester: {
		type: Number
	},
});

const curriculum = mongoose.model('Curriculum', schema);

export default curriculum;
