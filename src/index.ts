import { fastify } from "fastify"
import bookRoutes from "./routes/index"

const app = fastify()

app.register(bookRoutes)

app.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server running at ${address}`)
})
