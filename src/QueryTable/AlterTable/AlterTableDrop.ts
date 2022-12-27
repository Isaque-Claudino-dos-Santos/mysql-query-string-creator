export default class AlterTableDrop {
  private readonly columns: string[] = []

  constructor(private readonly table: string) {}

  column(column: string): this {
    this.columns.push(`drop column ${column}`)
    return this
  }

  end(): string {
    return `alter table ${this.table} ${this.columns.join(', ')}`
  }
}
