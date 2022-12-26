import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('QueryTable tests', () => {
  test('table name in query', () => {
    const table = 'foo'
    const query = qs.table.create(table).end()

    expect(query).toBe(`create table ${table} ()`)
  })

  test('column in query', () => {
    const table = 'foo'
    const column = 'bar'
    const query = qs.table.create(table).column(column, []).end()

    expect(query).toBe(`create table ${table} (${column} )`)
  })

  test('attribute column in query', () => {
    const table = 'foo'
    const column = 'bar'
    const attribute = 'baz'
    const query = qs.table.create(table).column(column, [attribute]).end()

    expect(query).toBe(`create table ${table} (${column} ${attribute})`)
  })

  test('attributes in query', () => {
    const table = 'foo'
    const column = 'bar'
    const attributes = ['bar', 'baz']
    const query = qs.table.create(table).column(column, attributes).end()

    expect(query).toBe(
      `create table ${table} (${column} ${attributes[0]} ${attributes[1]})`
    )
  })
})