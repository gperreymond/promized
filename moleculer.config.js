const { v4: uuidv4 } = require('uuid')

const { name, version } = require('./package.json')
const { nats } = require('./application.config')

module.exports = {
  nodeID: `node-${name}-${version}-${uuidv4()}`,
  transporter: {
    type: 'NATS',
    options: {
      url: `nats://${nats.hostname}:${nats.port}`,
      user: nats.username,
      pass: nats.password
    }
  },
  logger: true,
  metrics: {
    enabled: true
  }
}
