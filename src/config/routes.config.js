import config from './base.config';

const swaggerUri = `${config.uriPrefix}/docs`;
const authUri = `${config.uriPrefix}/auth`;
const groupUri = `${config.uriPrefix}/groups`;
const userUri = `${config.uriPrefix}/users`;
const teacherUri = `${config.uriPrefix}/teachers`;

export default {
	swaggerUri,
	authUri,
	groupUri,
	userUri,
	teacherUri
};
