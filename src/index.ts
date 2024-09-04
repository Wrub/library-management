import { fastify } from "fastify"
import dotenv from "dotenv"

dotenv.config()

const app = fastify()

app.register()

app.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server running at ${address}`)
})
