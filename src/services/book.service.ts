import { supabase } from "../config/supabase"
import Book from "../models/index"

export async function getAllBooks(): Promise<Book[]> {
  const { data, error } = await supabase.from("books").select()
  if (error) throw new Error(error.message)
  return data as Book[]
}

export async function addBook(book: Book) {
  const { data, error } = await supabase.from("books").insert(book).single()

  if (error) {
    throw new Error(`Failed to add book: ${error.message}`)
  }

  return data as Book
}

export async function updateBook(id: string, updatedBook: Partial<Book>) {
  const { data, error } = await supabase.from("books").update(updatedBook).eq("id", id).single()
  if (error) {
    throw new Error(error.message)
  }

  // TODO: Criar um retorno para o usuario além do status
  if (data) {
    const selectedBook: Book = data
    console.log(`Book ${selectedBook.title} was updated successfully`)
  }

  return data as Book
}
