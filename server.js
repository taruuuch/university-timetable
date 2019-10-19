const app = require('./app');

const config = require('./config/config');

const port = process.env.PORT || config.port;

app.listen(port, () => console.log(`Server start on port ${port}`));
