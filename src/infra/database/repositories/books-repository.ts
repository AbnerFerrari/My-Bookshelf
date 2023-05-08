import { Book, BookProps } from "../../../domain/entities/Book";

export interface BooksRepository {
  create(props: BookProps): Promise<Book>
  findById(id: string): Promise<Book | null>
}