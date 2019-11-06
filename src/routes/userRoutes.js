import express from 'express';
import userController from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/me', authMiddleware, userController.getUserProfile);
router.get('/:userId', authMiddleware, userController.getUserById);
router.put('/:userId', authMiddleware, userController.setupUser);
router.patch('/:userId', authMiddleware, userController.updateUser);

export default router;
