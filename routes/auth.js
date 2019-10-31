const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth');

router.post('/registration', AuthController.registrationUser);
router.post('/auth', AuthController.authUser);

module.exports = router;
