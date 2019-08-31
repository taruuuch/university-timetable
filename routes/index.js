const express = require('express');
const { groups } = require('../controllers');
const router = express.Router();

router.get('/groups', groups.getGroups);

module.exports = router;