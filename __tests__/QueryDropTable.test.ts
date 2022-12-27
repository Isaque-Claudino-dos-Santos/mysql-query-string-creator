import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('QueryDropTable', () => {
  const table = 'foo'
  test('table name in query', () => {
    const query = qs.table.drop(table).end()
    expect(`drop table ${table}`).toBe(query)
  })
})
