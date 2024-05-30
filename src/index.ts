import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { timeout } from 'hono/timeout'
import { prettyJSON } from 'hono/pretty-json'
import { checksumAddress, isAddress } from 'viem'
import { parseTruthy } from '#utilities/index.ts'

/**
 * @note
 *
 * In each request:
 * - when the response is not 2XX, the format is `{"error": "...", "data": null },
 * - when the response is 2XX, the format is either raw or JSON:
 *    - Raw: `?raw=true`, `?raw=1`, `?raw=yes`, `?raw`: returns a plain text response.
 *    - JSON: `?raw=false`, `?raw=0`, `?raw=no`, `` (default): returns a JSON response.
 */

const app = new Hono()

app.use('*', timeout(3_000))
app.use(prettyJSON())
app.use(logger())

app.get('/', () => new Response('OK'))

app.get('/checksum/:address', context => {
  const { address } = context.req.param()
  const { chainId, raw } = context.req.query()
  if (!isAddress(address)) {
    return Response.json({ error: 'Invalid address. Format: `/checksum/:address`', data: null })
  }
  const checksummed = checksumAddress(address, Number(chainId))
  const _raw = parseTruthy(raw)
  return _raw ? new Response(checksummed) : Response.json({ error: null, data: checksummed })
})

export default app
