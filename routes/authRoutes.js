const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/authController');

router.post('/registration', AuthController.registrationUser);
router.post('/auth', AuthController.authUser);

module.exports = router;
