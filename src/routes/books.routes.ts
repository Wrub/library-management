import { FastifyInstance } from "fastify"

export default async function bookRoutes(app: FastifyInstance) {
  app.get("/books", BookController.getLivros())
}
