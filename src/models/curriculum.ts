import mongoose from "mongoose";

let Schema = mongoose.Schema;

let CurriculumSchema = new Schema({
	curriculumId: Number,
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

let Curriculum = mongoose.model('Curriculum', CurriculumSchema);

export default Curriculum;