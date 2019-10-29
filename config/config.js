const port = 8080;

/* database configuration:
	 @databaseName - database name
	 @mongousername - auth username
	 @mongopassword - auth password
	 @databaseHost - server url
	 @databasePort - server port
	 @mongo - full connect link
*/
const databaseName = 'nubipschedule';
const databaseHost = 'localhost';
const databasePort = 27017;
const mongo = `mongodb://${databaseHost}:${databasePort}/${databaseName}`;

const urlPrefix = '/api/v1';

module.exports = {
	port,
	mongo,
	urlPrefix
};
