import mongoose from 'mongoose';

import Academic from '../models/academicModel';
import Time from '../models/timeModel';

import timeJson from '../database/times';

export default {
	academic: async (req, res) => {

	},
	building: async (req, res) => {

	},
	degree: async (req, res) => {

	},
	departament: async (req, res) => {

	},
	educationForm: async (req, res) => {

	},
	educationLevel: async (req, res) => {

	},
	facultyType: async (req, res) => {

	},
	faculty: async (req, res) => {

	},
	subjectType: async (req, res) => {

	},
	time: async (req, res) => {
		let numberKeys = Object.keys(timeJson);

		numberKeys.forEach(i => {
			const time = new Time({
				_id: new mongoose.Types.ObjectId(),
				number: i,
				start: timeJson[i].start,
				end: timeJson[i].end
			});

			await time.save()
				.then(result => res.status(201).json(result))
				.catch(err => {
					res.status(500).json({
						error: err
					});
				});
		});
	}
};
