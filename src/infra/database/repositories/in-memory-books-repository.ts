import { Book, BookProps } from "../../../domain/entities/Book";
import { BooksRepository } from "./books-repository";

export class InMemoryBooksRepository implements BooksRepository {
  create(props: BookProps): Promise<Book> {
    throw new Error("Method not implemented.");
  }
  public items: Book[] = []

  async findById(id: string): Promise<Book | null> {
    const book = this.items.find(item => item.id === id)

    return book ?? null
  }

}