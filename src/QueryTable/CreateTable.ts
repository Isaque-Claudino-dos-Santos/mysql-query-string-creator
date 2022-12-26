export default class CreateTable {
  private columns: string[] = []

  constructor(private readonly table: string) {}

  column(key: string, attributes: string[]): this {
    this.columns.push(`${key} ${attributes.join(' ')}`)
    return this
  }

  end(): string {
    return `create table ${this.table} (${this.columns.join(',')})`
  }
}
