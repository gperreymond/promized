const DbService = require('moleculer-db')
const RethinkDBAdapter = require('moleculer-db-adapter-rethinkdb')

const { rethinkdb } = require('../application.config')

module.exports = {
  name: 'CRUDJobs',
  mixins: [DbService],
  adapter: new RethinkDBAdapter({
    host: rethinkdb.hostname,
    port: rethinkdb.port,
    user: rethinkdb.username,
    password: rethinkdb.password
  }),
  database: 'promized',
  table: 'jobs',
  hooks: {
    before: {
      create: [
        function addTimestamp (ctx) {
          // Add timestamps
          const datetime = new Date()
          ctx.params.createdAt = datetime
          ctx.params.updatedAt = datetime
          return ctx
        }
      ],
      insert: [
        function addTimestamp (ctx) {
          // Add timestamps
          const datetime = new Date()
          ctx.params.createdAt = datetime
          ctx.params.updatedAt = datetime
          return ctx
        }
      ],
      update: [
        function updateTimestamp (ctx) {
          // Update timestamp
          const datetime = new Date()
          ctx.params.updatedAt = datetime
          return ctx
        }
      ]
    }
  },
  settings: {
    entityValidator: {
      name: { type: 'string' },
      url: { type: 'string' },
      type: { type: 'string', enum: ['CONFIG_TYPE_SCRAPER'] },
      crontab: { type: 'string' },
      createdAt: { type: 'date' },
      updatedAt: { type: 'date' },
      $$strict: true // no additional properties allowed
    }
  }
}
