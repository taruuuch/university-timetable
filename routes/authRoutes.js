const express = require("express");
const router = express.Router();

const AuthController = require('../controllers/authController');

router.post('/registration', AuthController.registrationUser);
router.post('/login', AuthController.authUser);

module.exports = router;
