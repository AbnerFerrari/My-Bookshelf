import { Author } from "../../../domain/entities/Author";
import { AuthorsRepository } from "./authors-repository";

export class InMemoryAuthorsRepository implements AuthorsRepository {
  create({ id, props }: Author): Promise<Author> {
    throw new Error("Method not implemented.");
  }
  public items: Author[] = []

  async findById(id: string): Promise<Author | null> {
    const author = this.items.find(item => item.id === id)

    if (!author) {
      return null
    }

    return author
  }

}