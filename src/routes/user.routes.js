import express from 'express';
import userController from '../controllers/user.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.get('/me', authMiddleware, userController.getUserProfile);
router.get('/:userId', authMiddleware, userController.getUserById);
router.put('/:userId', authMiddleware, userController.setupUser);
router.post('/:userId', authMiddleware, userController.updateUser);

export default router;
