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
	const FacultyType = require('../models/facultyType.model');
  const facultyTypeJson = require('../database/facultiesTypes');

	let facultyTypes = [];

	facultyTypeJson.forEach((item) => {
		facultyTypes.push(
			new FacultyType({
				title: item
			})
		);
	});

	db.insert('facultyType', facultyTypes, (error) => {
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
