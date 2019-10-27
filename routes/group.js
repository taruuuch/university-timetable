const express = require("express");
const router = express.Router();
const GroupsController = require('../controllers/group');

router.get('/', GroupsController.get_all_groups);
router.post('/', GroupsController.add_group);
router.put('/', GroupsController.update_group);
router.delete('/', GroupsController.delete_group);

module.exports = router;
