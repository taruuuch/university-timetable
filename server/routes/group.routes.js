const express = require('express');
const groupsController = require('../controllers/group.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', groupsController.getGroups);
router.get('/:groupId', groupsController.getGroupById);

router.post('/', authMiddleware, groupsController.createGroup);
router.patch('/:groupId', authMiddleware, groupsController.updateGroup);
router.delete('/:groupId', authMiddleware, groupsController.deleteGroup);

module.exports = router;
