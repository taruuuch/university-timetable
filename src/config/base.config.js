const port = process.env.PORT;
const dbUri = process.env.DB_URI;
const authSecret = process.env.SECRET_KEY || undefined;
const authAccessExpires = process.env.ACCESS_EXPIRES || 36000;
const authRefreshExpires = process.env.REFRESH_EXPIRES || 36000;
const uriPrefix = '/api/v1';

export default {
	port,
	dbUri,
	authSecret,
	authAccessExpires,
	authRefreshExpires,
	uriPrefix
};
