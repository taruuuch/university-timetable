const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/registration', authController.registrationUser);
router.post('/login', authController.authUser);

module.exports = router;
