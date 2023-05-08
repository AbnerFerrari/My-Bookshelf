import { Entity } from "@core/Entity"

export type AuthorProps = {
  name: string
  createdAt?: Date
}

export class Author extends Entity<AuthorProps> {
  
  /**
   *
   */
  private constructor(props: AuthorProps, id?: string) {
    super(props, id)
  }

  static create(props: AuthorProps, id?: string): Author {
    const author = new Author({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, id)

    return author
  }
}