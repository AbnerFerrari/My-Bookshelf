import { Author } from '../../../domain/entities/Author';

export interface AuthorsRepository {
  findById(id: string): Promise<Author | null>
  create({id, props}: Author): Promise<Author>
}