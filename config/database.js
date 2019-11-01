require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
.then(() => console.log('Server connected to MongoDB'))
.catch(e => console.log(e));

mongoose.Promise = global.Promise;

module.exports = mongoose;
