import express from 'express';
import authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/registration', authController.registrationUser);
router.post('/login', authController.authUser);

export default router;
