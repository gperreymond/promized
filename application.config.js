const nconf = require('nconf')
nconf.argv().env().file({ file: 'nconf.json' })

// ************************************
// Typecasting from kube env
// ************************************
let APP_NATS_PORT = 4222
let APP_RABBITMQ_PORT = 5672
let APP_RETHINKDB_PORT = 28015
// ************************************
if (nconf.get('APP_NATS_PORT')) { APP_NATS_PORT = parseInt(nconf.get('APP_NATS_PORT')) }
if (nconf.get('APP_RABBITMQ_PORT')) { APP_RABBITMQ_PORT = parseInt(nconf.get('APP_RABBITMQ_PORT')) }
if (nconf.get('APP_RETHINKDB_PORT')) { APP_RETHINKDB_PORT = parseInt(nconf.get('APP_RETHINKDB_PORT')) }
// ************************************

const APP_NATS_HOSTNAME = nconf.get('APP_NATS_HOSTNAME') || 'nats.docker.localhost'
const APP_NATS_USERNAME = nconf.get('APP_NATS_USERNAME') || 'admin'
const APP_NATS_PASSWORD = nconf.get('APP_NATS_PASSWORD') || 'infra'

const APP_RABBITMQ_HOSTNAME = nconf.get('APP_RABBITMQ_HOSTNAME') || 'rabbitmq.docker.localhost'
const APP_RABBITMQ_USERNAME = nconf.get('APP_RABBITMQ_USERNAME') || 'admin'
const APP_RABBITMQ_PASSWORD = nconf.get('APP_RABBITMQ_PASSWORD') || 'infra'

const APP_RETHINKDB_HOSTNAME = nconf.get('APP_RETHINKDB_HOSTNAME') || 'rethinkdb.docker.localhost'
const APP_RETHINKDB_USERNAME = nconf.get('APP_RETHINKDB_USERNAME') || 'admin'
const APP_RETHINKDB_PASSWORD = nconf.get('APP_RETHINKDB_PASSWORD') || 'infra'

module.exports = {
  nats: {
    hostname: APP_NATS_HOSTNAME,
    port: APP_NATS_PORT,
    username: APP_NATS_USERNAME,
    password: APP_NATS_PASSWORD
  },
  rabbitmq: {
    hostname: APP_RABBITMQ_HOSTNAME,
    port: APP_RABBITMQ_PORT,
    username: APP_RABBITMQ_USERNAME,
    password: APP_RABBITMQ_PASSWORD
  },
  rethinkdb: {
    hostname: APP_RETHINKDB_HOSTNAME,
    port: APP_RETHINKDB_PORT,
    username: APP_RETHINKDB_USERNAME,
    password: APP_RETHINKDB_PASSWORD
  }
}
