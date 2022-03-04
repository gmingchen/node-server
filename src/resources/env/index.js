const development = require('./development')
const production = require('./production')

module.exports = {
  development,
  production,
}[process.env.NODE_ENV || 'development']
