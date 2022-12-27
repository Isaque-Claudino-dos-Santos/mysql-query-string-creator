export default class InsertTable {
  private readonly columnsKey: string[] = []
  private readonly columnsValue: string[] = []

  constructor(private readonly table: string) {}

  value(columnkey: string, columnValue: string): this {
    this.columnsKey.push(columnkey)
    this.columnsValue.push(columnValue)
    return this
  }

  end(): string {
    return `insert into ${this.table} (${this.columnsKey.join(
      ','
    )}) values (${this.columnsValue.join(',')})`
  }
}
