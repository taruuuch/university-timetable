import express from 'express';
import setupController from '../controllers/setupController';

const router = express.Router();

router.get('/time', setupController.time);

export default router;
