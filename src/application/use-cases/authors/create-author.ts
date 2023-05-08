import { Author } from "@domain/entities/Author";
import { AuthorsRepository } from "@infra/database/repositories/authors-repository";

type CreateAuthorRequest = {
  name: string
  createdAt?: Date
}

export class CreateAuthor {
  /**
   *
   */
  constructor(private authorsRepository: AuthorsRepository) {
    
    
  }
  async execute({name}: CreateAuthorRequest): Promise<Author> {
    const author = Author.create({
      name
    })

    const createdEntiy = await this.authorsRepository.create(author)

    return createdEntiy
  }
}