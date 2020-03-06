const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

module.exports = app => {
  app.use(cors())
  app.use(helmet())
  app.use(rateLimit({

  }))
}
