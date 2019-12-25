const config = require('./base.config');

const swaggerUri = `${config.uriPrefix}/docs`;
const authUri = `${config.uriPrefix}/auth`;
const groupUri = `${config.uriPrefix}/groups`;
const userUri = `${config.uriPrefix}/users`;
const teacherUri = `${config.uriPrefix}/teachers`;
const lessonUri = `${config.uriPrefix}/lessons`;

module.exports = {
	swaggerUri,
	authUri,
	groupUri,
	userUri,
	teacherUri,
	lessonUri
};
