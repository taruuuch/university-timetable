const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// TODO: Create and require routes
// const routes = require('./routes')

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server is working!'));

// TODO: Use routes for api
// app.use('/api', routes);

app.listen(3000, () => console.log('Server listening on port 3000'));

module.exports = {
    app
};