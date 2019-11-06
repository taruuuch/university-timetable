const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const DepartamentSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
	dean: String,
	facultyId: [{
		type: Schema.Types.ObjectId, ref: 'Faculty'
	}],
	email: String
});

module.exports = mongoose.model('Departament', DepartamentSchema);
