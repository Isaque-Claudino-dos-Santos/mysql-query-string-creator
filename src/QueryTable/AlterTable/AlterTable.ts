import AlterTableAdd from './AlterTableAdd'

import AlterTableDrop from './AlterTableDrop'

export default class AlterTable {
  readonly add: AlterTableAdd
  readonly drop: AlterTableDrop

  constructor(private readonly table: string) {
    this.add = new AlterTableAdd(table)
    this.drop = new AlterTableDrop(table)
  }
}
