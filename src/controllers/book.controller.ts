import { FastifyRequest, FastifyReply } from "fastify"
import * as BookService from "../services/book.service"

export async function getBooks(req: FastifyRequest, reply: FastifyReply) {
  const books = await BookService.getAllBooks()
  reply.send(books)
}
