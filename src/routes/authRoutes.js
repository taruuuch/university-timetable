import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/registration', authController.registrationUser);
router.post('/login', authController.authUser);

export default router;
