import QueryDataBase from './QueryDataBase'
import QueryTable from './QueryTable'

export default class MysqlQueryString {
  readonly table = new QueryTable()
  readonly database = new QueryDataBase()
}
