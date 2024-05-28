import { Hono } from 'hono'
import { Resource } from 'sst'

const app = new Hono().get('/', () => new Response('Hello, World!'))

export default app
