const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/registration', authController.registrationUser);
router.post('/login', authController.authUser);

module.exports = router;
