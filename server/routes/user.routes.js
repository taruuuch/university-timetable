const router = require('express').Router()
const {
	get,
	getById,
	setup,
	// update
} = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get(
	'/me',
	authMiddleware,
	get
)
router.patch(
	'/',
	authMiddleware,
	setup
)
router.get(
	'/:userId',
	getById
)

module.exports = router
