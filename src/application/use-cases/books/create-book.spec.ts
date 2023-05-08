import { describe, expect, it } from "vitest";
import { CreateBook } from "./create-book";
import { InMemoryAuthorsRepository } from '../../../infra/database/repositories/in-memory-authors-repository'
import { Author } from "../../../domain/entities/Author";

describe('Create book use case', () => {
  it('Should be able to create a new book', () => {
    const authorsRepository = new InMemoryAuthorsRepository()
    
    const author = Author.create({name: 'teste'})
    
    authorsRepository.items.push(author)
    
    const sut = new CreateBook(authorsRepository)

    const response = sut.execute({
      name: "test",
      authorId: author.id
    })

    expect(response).toBeTruthy()
  })
})