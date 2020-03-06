const URI_PREFIX = '/api/v1'

// Server
const PORT = process.env.PORT

// Database
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

// Auth
const TOKEN_SECRET = process.env.TOKEN_SECRET || undefined
const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES || 36000
const TOKEN_REFRESH_EXPIRES = process.env.TOKEN_REFRESH_EXPIRES || 36000

module.exports = {
	URI_PREFIX,
	PORT,
	DB_HOST,
	DB_NAME,
	DB_USERNAME,
	DB_PASSWORD,
	TOKEN_SECRET,
	TOKEN_EXPIRES,
	TOKEN_REFRESH_EXPIRES
}
