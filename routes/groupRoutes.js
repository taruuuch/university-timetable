const express = require("express");
const router = express.Router();

const groupsController = require('../controllers/groupController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, groupsController.getAllGroups);
router.post('/', authMiddleware, groupsController.addGroup);
router.get('/:groupId', authMiddleware, groupsController.getGroupById);
router.put('/:groupId', authMiddleware, groupsController.updateGroup);
router.delete('/:groupId', authMiddleware, groupsController.deleteGroup);

module.exports = router;
