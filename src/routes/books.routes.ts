import { FastifyInstance } from "fastify"
import BookController from "../controllers/index"

export default async function bookRoutes(app: FastifyInstance) {
  app.get("/books", BookController.getBooks)
  app.post("/addBook", BookController.addBook)
  app.put("/updateBook/:id", BookController.updateBook)
  app.delete("/deleteBook/:id", BookController.deleteBook)
}
