const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth');

router.get('/registration', AuthController.user_registration);
router.get('/login', AuthController.user_login);

module.exports = router;
