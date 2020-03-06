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
	const EducationLevel = require('../models/educationLevel.model');
  const educationLevelJson = require('../database/educationLevels');

	let educationLevels = [];

	educationLevelJson.forEach((item) => {
		educationLevels.push(
			new EducationLevel({
				title: item
			})
		);
	});

	db.insert('educationLevel', educationLevels, (error) => {
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
