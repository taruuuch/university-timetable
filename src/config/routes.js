import config from './config';

const swaggerUri = `${config.uriPrefix}/docs`;
const authUri = `${config.uriPrefix}/auth`;
const groupUri = `${config.uriPrefix}/groups`;
const userUri = `${config.uriPrefix}/user`;

export default {
	swaggerUri,
	authUri,
	groupUri,
	userUri
};
