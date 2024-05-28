/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'web3-api',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'cloudflare'
    }
  },
  async run() {
    const hono = new sst.cloudflare.Worker('Hono', {
      url: true,
      handler: './src/hello-world.ts'
    })

    return {
      api: hono.url
    }
  }
})
