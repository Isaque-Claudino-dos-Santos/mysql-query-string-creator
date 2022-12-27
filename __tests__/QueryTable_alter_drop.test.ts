import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('Query AllTableDrop', () => {
  const table = 'foo'

  test('table name in query string', () => {
    const query = qs.table.alter(table).drop.end()
    expect(`alter table ${table} `).toBe(query)
  })
})
