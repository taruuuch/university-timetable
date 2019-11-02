const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController');

const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, UserController.getUserById);
router.get('/:id', authMiddleware, UserController.getUserById);

module.exports = router;
