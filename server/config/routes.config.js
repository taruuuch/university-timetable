const { uriPrefix } = require('./base.config')

const swaggerUri = `${uriPrefix}/docs`
const authUri = `${uriPrefix}/auth`
const groupUri = `${uriPrefix}/groups`
const userUri = `${uriPrefix}/users`
const teacherUri = `${uriPrefix}/teachers`
const lessonUri = `${uriPrefix}/lessons`

module.exports = {
	swaggerUri,
	authUri,
	groupUri,
	userUri,
	teacherUri,
	lessonUri
}
