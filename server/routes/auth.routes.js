const router = require('express').Router()
const { login, registration } = require('../controllers/auth.controller')

router.post(
  '/registration',
  registration
)
router.post(
  '/login',
  login
)

module.exports = router
