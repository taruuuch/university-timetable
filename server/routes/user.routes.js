const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/me', authMiddleware, userController.getUserProfile);
router.get('/:userId', authMiddleware, userController.getUserById);
router.patch('/', authMiddleware, userController.setupUser);
// router.put('/:userId', authMiddleware, userController.setupUser);
// router.post('/:userId', authMiddleware, userController.updateUser);

module.exports = router;
