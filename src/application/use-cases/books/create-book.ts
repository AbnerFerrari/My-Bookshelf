import { Book } from '@domain/entities/Book'
 import { AuthorsRepository } from '@infra/database/repositories/authors-repository'

export type CreateBookRequest = {
  name: string
  authorId: string
}

export class CreateBook {
  /**
   *
   */
  constructor(private authorRepository: AuthorsRepository) { }

  async execute({ name, authorId }: CreateBookRequest): Promise<Book> {
    const author = await this.authorRepository.findById(authorId)

    console.log(author)
    if (!author) {
      throw new Error('Author not found')
    }

    const book = Book.create({ name, authorId})

    return book
  }
}