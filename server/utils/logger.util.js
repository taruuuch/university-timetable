const morgan = require('morgan')
const { logger } = require('../config/logger.config')

module.exports = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream: logger.stream }
)
