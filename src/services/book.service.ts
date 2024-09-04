import { supabase } from "../config/supabase"
import { Book } from "../models/livro.model"

export async function getAllBooks(): Promise<Book[]> {
  const { data, error } = await supabase.from("books").select()
  if (error) throw new Error(error.message)
  return data as Book[]
}
