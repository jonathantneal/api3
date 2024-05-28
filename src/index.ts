import { Hono } from 'hono'

const app = new Hono()

app.get('/', () => new Response('Hello, World!'))

export default app
