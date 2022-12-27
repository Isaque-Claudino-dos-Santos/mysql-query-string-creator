import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('Query InsertTable', () => {
  const table = 'foo'

  test('Table name in query', () => {
    const query = qs.table.insert(table).end()
    expect(`insert into ${table} () values ()`).toBe(query)
  })
})
