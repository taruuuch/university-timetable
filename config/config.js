const port = 8080;

/* database configuration:
	 @mongodb - database name
	 @mongousername - auth username
	 @mongopassword - auth password
	 @mongourl - server url
	 @mongoport - server port
	 @mongo - full connect link
*/
const mongodb = 'nubipschedule';
const mongourl = 'localhost';
const mongoport = 27017;
const mongo = `mongodb://${mongourl}:${mongoport}/${mongodb}`;

module.exports = {
	port,
	mongo
};
