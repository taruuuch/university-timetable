const express = require("express");
const router = express.Router();

const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, UserController.getUserProfile);
router.get('/:userId', authMiddleware, UserController.getUserById);
router.put('/:userId', authMiddleware, UserController.setupUser);
router.patch('/:userId', authMiddleware, UserController.updateUser);

module.exports = router;
