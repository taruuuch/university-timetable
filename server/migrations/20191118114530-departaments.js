'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, next) {
	const Departament = require('../models/departament.model');
	const departamentJson = require('../database/departaments');

	let departaments = [];

	Object.keys(departamentJson).forEach((faculty) => {
		let departamentOfFaculty = departamentJson[faculty];
		Object.keys(departamentJson[faculty]).forEach((title) => {
			let departamentItem = departamentOfFaculty[title];
			departaments.push(
				new Departament({
					title: title,
					dean: departamentItem.dean,
					facultyId: faculty,
					buildingId: departamentItem.building,
					auditoriumId: departamentItem.auditoriums,
					phone: departamentItem.phone,
					email: departamentItem.email,
				})
			);
		});
	});

	db.insert('departament', departaments, (error) => {
		if (error) console.log(error);
	});

	next();
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
