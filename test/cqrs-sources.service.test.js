const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker({
  logger: false,
  metrics: {
    enabled: false
  }
})

beforeAll(async () => {
  await broker.loadService('./services/cqrs-sources.service')
  await broker.start()
})

afterAll(async () => {
  await broker.stop()
})

describe('SourcesDomain.xx', () => {
  test('should ...', async () => {
    expect(true).toEqual(true)
  })
})
