import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('QueryTable alter table add', () => {
  const table = 'foo'
  const column = 'bar'
  const attribute = 'baz'
  const attributes = ['baz', 'baz']
  const positionAfterToColumn = 'yar'

  test('table name in query', () => {
    const query = qs.table.alter(table).add.end()
    expect(query).toBe(`alter table ${table} `)
  })

  test('column name in query', () => {
    const query = qs.table.alter(table).add.column(column, []).end()
    expect(query).toBe(`alter table ${table} add column ${column} `)
  })

  test('attribute column in query', () => {
    const query = qs.table.alter(table).add.column(column, [attribute]).end()
    expect(query).toBe(`alter table ${table} add column ${column} ${attribute}`)
  })

  test('attributes column in query', () => {
    const query = qs.table.alter(table).add.column(column, attributes).end()
    expect(query).toBe(
      `alter table ${table} add column ${column} ${attributes[0]} ${attributes[1]}`
    )
  })

  test('column position fist', () => {
    const query = qs.table
      .alter(table)
      .add.column(column, attributes, 'first')
      .end()
    expect(query).toBe(
      `alter table ${table} add column ${column} ${attributes[0]} ${attributes[1]} first`
    )
  })

  test('column position after to', () => {
    const query = qs.table
      .alter(table)
      .add.column(column, attributes, { after: positionAfterToColumn })
      .end()
    expect(query).toBe(
      `alter table ${table} add column ${column} ${attributes[0]} ${attributes[1]} after ${positionAfterToColumn}`
    )
  })
})
