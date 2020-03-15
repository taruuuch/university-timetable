module.exports = app => {
	app.use(async (req, res, next) => {
		const error = new Error('Api link not found! Go to localhost:8080/api/v1/docs for check available links')
		error.status = 404
		error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`

		next(error)
	})

	app.use((error, req, res, next) => {
		res.status(error.status || 500)
		res.json({
			error: {
				message: error.message,
				code: error.status,
				path: error.path
			}
		})
	})
}
