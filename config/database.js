const mongoose = require("mongoose");
const config = require('./config');

mongoose.connect(config.mongo, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
.then(() => console.log('Server connected to MongoDB'))
.catch(e => console.log(e));

mongoose.Promise = global.Promise;

module.exports = mongoose;
