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
	const Building = require('../models/building.model');
  const buildingJson = require('../database/buildings');

	let buildings = [];

	Object.keys(buildingJson).forEach((i) => {
		buildings.push(
			new Building({
				number: i,
				latitude: buildingJson[i].latitude,
				longitude: buildingJson[i].longitude
			})
		);
	});

	db.insert('building', buildings, (error) => {
		if (error) console.log(error);
	});

	next();
};

exports.down = function(db, next) {};

exports._meta = {
  "version": 1
};
