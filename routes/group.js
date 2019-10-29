const express = require("express");
const router = express.Router();
const GroupsController = require('../controllers/group');

router.get('/', GroupsController.getAllGroups);
router.get('/:groupId', GroupsController.getGroupById);
router.post('/', GroupsController.addGroup);
router.put('/:groupId', GroupsController.updateGroup);
router.delete('/:groupId', GroupsController.deleteGroup);

module.exports = router;
