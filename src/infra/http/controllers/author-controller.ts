import { CreateAuthor } from "../../../application/use-cases/authors/create-author";
import { PrismaAuthorsRepository } from "../../database/prisma/repositories/authors-repository";
import { Request, Response } from "express";

export class AuthorController {
  static async create(req: Request, res: Response): Promise<void> {
    const { body } = req

    const authorRepository = new PrismaAuthorsRepository()

    const createAuthor = new CreateAuthor(authorRepository)

    const createdAuthor = await createAuthor.execute(body)

    res.status(201).json(createdAuthor)
  }

  static async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    const authorRepository = new PrismaAuthorsRepository()

    const author = await authorRepository.findById(id)

    res.json(author)
  }
}