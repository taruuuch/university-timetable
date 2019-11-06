import express from 'express';
import groupsController from '../controllers/groupController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, groupsController.getAllGroups);
router.post('/', authMiddleware, groupsController.addGroup);
router.get('/:groupId', authMiddleware, groupsController.getGroupById);
router.put('/:groupId', authMiddleware, groupsController.updateGroup);
router.delete('/:groupId', authMiddleware, groupsController.deleteGroup);

export default router;
