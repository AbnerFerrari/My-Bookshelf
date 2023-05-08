import { Entity } from "@core/Entity"

export type BookProps = {
  name: string
  authorId: string
  createdAt?: Date
}

export class Book extends Entity<BookProps> {
  /**
   *
   */
  private constructor(props: BookProps, id?: string) {
    super(props, id)
  }

  static create(props: BookProps, id?: string): Book {
    const book = new Book({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, id)

    return book
  }
}