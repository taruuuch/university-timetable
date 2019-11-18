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
	const EducationForm = require('../models/educationForm.model');
  const educationFormJson = require('../database/educationForms');

	let educationForms = [];

	educationFormJson.forEach((item) => {
		educationForms.push(
			new EducationForm({
				title: item
			})
		);
	});

	db.insert('educationForm', educationForms, (error) => {
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
