import MysqlQueryString from '../../src'

const qs = new MysqlQueryString()

describe('Query InsertTable', () => {
  const table = 'foo'
  const columnKey = 'bar'
  const columnValue = 'baz'

  test('Table name in query', () => {
    const query = qs.table.insert(table).end()
    expect(`insert into ${table} () values ()`).toBe(query)
  })

  test('Table value in query', () => {
    const query = qs.table.insert(table).value(columnKey, columnValue).end()
    expect(`insert into ${table} (${columnKey}) values (${columnValue})`).toBe(
      query
    )
  })

  test('Table value in query', () => {
    const query = qs.table
      .insert(table)
      .value(columnKey, columnValue)
      .value(columnKey, columnValue)
      .end()
    expect(
      `insert into ${table} (${columnKey},${columnKey}) values (${columnValue},${columnValue})`
    ).toBe(query)
  })
})
