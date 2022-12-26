import AlterTableAdd from './AlterTableAdd'

export default class AlterTable {
  readonly add: AlterTableAdd

  constructor(private readonly table: string) {
    this.add = new AlterTableAdd(table)
  }
}
