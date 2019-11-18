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
	const Faculty = require('../models/faculty.model');
  const facultyJson = require('../database/faculties');

	let faculties = [];

	Object.keys(facultyJson).forEach((title) => {
		let facultyItem = facultyJson[title];
		faculties.push(
			new Faculty({
				title: title,
				facultyTypeId: facultyItem.facultyType,
				dean: facultyItem.dean,
				buildingId: facultyItem.building,
				shortName: facultyItem.shortName,
				address: facultyItem.address,
				phone: facultyItem.phone,
				email: facultyItem.email,
				site: facultyItem.site
			})
		);
	});

	db.insert('faculty', faculties, (error) => {
		if (error) console.log(error);
	});

	next();
};

exports.down = function(db, next) {
  return null;
};

exports._meta = {
  "version": 1
};
