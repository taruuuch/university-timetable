import config from './config';

const swaggerUri = `${config.uriPrefix}/docs`;
const setupUri = `${config.uriPrefix}/setup`;
const authUri = `${config.uriPrefix}/auth`;
const groupUri = `${config.uriPrefix}/groups`;
const userUri = `${config.uriPrefix}/users`;

export default {
	swaggerUri,
	setupUri,
	authUri,
	groupUri,
	userUri
};
