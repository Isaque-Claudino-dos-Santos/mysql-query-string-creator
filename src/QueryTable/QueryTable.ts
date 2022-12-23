import CreateTable from './CreateTable'

export default class QueryTable {
  readonly create = (table: string) => new CreateTable(table)
}
