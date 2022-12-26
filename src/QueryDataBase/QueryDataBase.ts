export default class QueryDataBase {
  readonly create = (database: string) => `create database ${database}`
  readonly drop = (database: string) => `drop database ${database}`
  readonly use = (database: string) => `use ${database}`
}
