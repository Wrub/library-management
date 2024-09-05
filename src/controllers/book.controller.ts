import { FastifyRequest, FastifyReply } from "fastify"
import BookService from "../services/index"
import Book from "../models/index"

export async function getBooks(req: FastifyRequest, reply: FastifyReply) {
  const books = await BookService.getAllBooks()
  reply.send(books)
}

export async function addBook(req: FastifyRequest, reply: FastifyReply) {
  try {
    const bookData = req.body as Book
    if (!bookData.title && !bookData.id && !bookData.author && !bookData.ISBN && !bookData.publishDt)
      throw new Error(`Failed to receive new book data, one of the required fields is missing`)

    const newBook = await BookService.addBook(bookData)

    return reply.status(201).send(newBook)
  } catch (error: any) {
    console.error(error.message, error)
    return reply.status(500).send({ error: error.message })
  }
}

export async function updateBook(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as { id: string }
    const updatedBookData = req.body as Partial<Book>

    const updatedBook = await BookService.updateBook(id, updatedBookData)

    return reply.status(200).send(updatedBook)
  } catch (error: any) {
    console.error("Error updating book:", error)
    return reply.status(500).send({ error: error.message })
  }
}

export async function deleteBook(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as { id: string }

    const deletedBook = await BookService.deleteBook(id)

    return reply.status(200).send(deletedBook)
  } catch (error: any) {
    console.error(error.message, error)
    return reply.status(500).send({ error: error.message })
  }
}
