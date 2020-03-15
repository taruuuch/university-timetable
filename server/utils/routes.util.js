const {
	authUri,
	// groupUri,
	// lessonUri,
	userUri,
	// teacherUri
} = require('../config/routes.config')

module.exports = app => {
	app.use(authUri, require('../routes/auth.routes'))
	app.use(userUri, require('../routes/user.routes'))
	// app.use(groupUri, require('../routes/group.routes'))
	// app.use(teacherUri, require('../routes/teacher.routes'))
	// app.use(lessonUri, require('../routes/lesson.routes'))
}
