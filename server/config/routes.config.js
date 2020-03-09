const { URI_PREFIX } = require('./base.config')

const swaggerUri = `/`
const authUri = `${URI_PREFIX}/auth`
const groupUri = `${URI_PREFIX}/groups`
const userUri = `${URI_PREFIX}/users`
const teacherUri = `${URI_PREFIX}/teachers`
const lessonUri = `${URI_PREFIX}/lessons`

module.exports = {
	swaggerUri,
	authUri,
	groupUri,
	userUri,
	teacherUri,
	lessonUri
}
