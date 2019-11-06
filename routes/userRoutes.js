const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, userController.getUserProfile);
router.get('/:userId', authMiddleware, userController.getUserById);
router.put('/:userId', authMiddleware, userController.setupUser);
router.patch('/:userId', authMiddleware, userController.updateUser);

module.exports = router;
