const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const CurriculumSchema = new Schema({
	_id: Schema.Types.ObjectId,
	departamentId: [{
		type: Schema.Types.ObjectId, ref: 'Departament'
	}],
	subjectId: [{
		type: Schema.Types.ObjectId, ref: 'Subject'
	}],
	lectionCount: Number,
	labaratorCount: Number,
	semester: Number,
});

module.exports = mongoose.model('Curriculum', CurriculumSchema);
