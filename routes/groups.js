const express = require("express");
const router = express.Router();
const GroupsController = require('../controllers/groups');

router.get('/', GroupsController.groups_get_all);

module.exports = router;
