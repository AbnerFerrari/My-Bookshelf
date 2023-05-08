import crypto from 'crypto'
export abstract class Entity<T> {
  public id: string
  public props: T

  /**
   *
   */
  constructor(props: T, id?: string) {
    this.id = id ?? crypto.randomUUID()
    this.props = props
  }
}