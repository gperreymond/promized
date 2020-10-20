const WebMixin = require('moleculer-web')

module.exports = {
  mixins: [WebMixin],
  settings: {
    routes: [{
      mappingPolicy: 'restrict',
      aliases: {
      }
    }]
  }
}
