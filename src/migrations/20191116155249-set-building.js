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

exports.up = function(db) {
  const building = require('../database/buildings');
	const uuid = require('uuid/v4');

	let buildings = [];

	Object.keys(building).forEach((i) => {
		buildings.push({
			id: uuid(),
			number: i,
			latitude: building[i].latitude,
			longitude: building[i].longitude
		});
	});

	db.insert('building', buildings, (error) => {
		if (error) console.log(error);
	});
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
