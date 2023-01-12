import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('CreateTable', () => {
  const table = 'foo'
  const column = 'bar'
  const attribute = 'baz'
  const attributes = ['bar', 'baz']

  test('table name in query', () => {
    const query = qs.table.create(table).end()
    expect(`create table ${table} ()`).toBe(query)
  })

  test('column in query', () => {
    const query = qs.table.create(table).column(column, []).end()
    expect(`create table ${table} (${column} )`).toBe(query)
  })

  test('attribute column in query', () => {
    const query = qs.table.create(table).column(column, [attribute]).end()
    expect(`create table ${table} (${column} ${attribute})`).toBe(query)
  })

  test('attributes in query', () => {
    const query = qs.table.create(table).column(column, attributes).end()
    expect(
      `create table ${table} (${column} ${attributes[0]} ${attributes[1]})`
    ).toBe(query)
  })

  test('mult column in query',() => {
    const query = qs.table.create(table).column(column, attributes).column(column, attributes).end()

    expect(
      `create table ${table} (${column} ${attributes[0]} ${attributes[1]}, ${column} ${attributes[0]} ${attributes[1]})`
    ).toBe(query)
  })
})
