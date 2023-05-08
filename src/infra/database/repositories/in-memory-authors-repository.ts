import { Author } from "@domain/entities/Author";
import { AuthorsRepository } from "./authors-repository";

export class InMemoryAuthorsRepository implements AuthorsRepository {
  public items: Author[] = []

  async findById(id: string): Promise<Author | null> {
    const author = this.items.find(item => item.id === id)

    if (!author) {
      return null
    }

    return author
  }

}