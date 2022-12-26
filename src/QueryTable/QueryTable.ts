import AlterTable from './AlterTable'
import CreateTable from './CreateTable'

export default class QueryTable {
  readonly create = (table: string) => new CreateTable(table)
  readonly alter = (table: string) => new AlterTable(table)
}
