const config = require('./base.config');

const swaggerUri = `${config.uriPrefix}/docs`;
const authUri = `${config.uriPrefix}/auth`;
const groupUri = `${config.uriPrefix}/groups`;
const userUri = `${config.uriPrefix}/users`;
const teacherUri = `${config.uriPrefix}/teachers`;

module.exports = {
	swaggerUri,
	authUri,
	groupUri,
	userUri,
	teacherUri
};
