import { Book, BookProps } from "../../../../domain/entities/Book";
import { BooksRepository } from "../../repositories/books-repository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class PrismaBooksRepository implements BooksRepository {
  async create(props: BookProps): Promise<Book> {
    const book = await prisma.book.create({
      data: props
    })

    return book as unknown as Book
  }

  async findById(id: string): Promise<Book | null> {
    const book = await prisma.book.findUnique({
      where: {
        id
      }
    })
    
    return book as unknown as Book
  }

}