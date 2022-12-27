import AlterTable from './AlterTable'
import CreateTable from './CreateTable'
import DropTable from './DropTable'
import InsertTable from './InsertTable'

export default class QueryTable {
  readonly create = (table: string) => new CreateTable(table)
  readonly alter = (table: string) => new AlterTable(table)
  readonly insert = (table: string) => new InsertTable(table)
  readonly drop = (table: string) => new DropTable(table)
}
