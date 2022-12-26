export default class AlterTableAdd {
  private readonly columns: string[] = []

  constructor(private readonly table: string) {}

  column(
    column: string,
    attributes: string[],
    position: { after: string } | 'first' | '' = ''
  ): this {
    let qsPosition = ''
    if (typeof position === 'object') qsPosition = ` after ${position.after}`
    else if (position === 'first') qsPosition = ' ' + position
    this.columns.push(
      `add column ${column} ${attributes.join(' ')}${qsPosition}`
    )
    return this
  }

  end(): string {
    return `alter table ${this.table} ${this.columns.join(',')}`
  }
}
