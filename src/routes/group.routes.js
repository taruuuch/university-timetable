import express from 'express';
import groupsController from '../controllers/group.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', groupsController.getGroups);
router.get('/:groupId', groupsController.getGroupById);

router.post('/', authMiddleware, groupsController.createGroup);
router.put('/:groupId', authMiddleware, groupsController.updateGroup);
router.delete('/:groupId', authMiddleware, groupsController.deleteGroup);

export default router;
