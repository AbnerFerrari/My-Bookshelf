import { Author, AuthorProps } from "../../../../domain/entities/Author";
import { AuthorsRepository } from "../../repositories/authors-repository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class PrismaAuthorsRepository implements AuthorsRepository {
  async create({id, props}: Author): Promise<Author> {
    const author = await prisma.author.create({
      data: {
        id,
        name: props.name,
        createdAt: props.createdAt
      }
    })

    return author as unknown as Author
  }

  async findById(id: string): Promise<Author | null> {
    const author = await prisma.author.findUnique({
      where: {
        id
      }
    })
    
    return author as unknown as Author
  }

}