const host = conifg.cache.redis.host
const port = conifg.cache.redis.port

const client = (redis) => {
  return redis.createClient(port, host)
}
const handler = (redis) => {
  try {
    const client = client(redis)
    logger.info({
      label: 'redis',
      message: `Successfully connected to ${host}:${port}`
    })
    return client
  } catch (e) {
    logger.error({
      label: 'redis',
      message: `Failed to connect ${host}:${port}`
    })
  }
}

module.exports = {
  redis: () => {
    handler(client(require('redis')))
  },
  asyncRedis: () => {
    handler(client(require('async-redis')))
  },
}