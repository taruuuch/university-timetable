const mongoose = require("mongoose");
const Group = require('../models/group');

exports.groups_get_all = (req, res, next) => {
	Group.find()
		.select()
		.exec()
		.then()
		.catch(err => {
      res.status(500).json({
        error: err
			});
		});
};
