import MysqlQueryString from '../../src'

const qs = new MysqlQueryString()

describe('QueryTable alter table add', () => {
  const table = 'foo'
  const column = 'bar'
  const attribute = 'baz'
  const attributes = ['baz', 'baz']
  const positionAfterToColumn = 'yar'

  test('table name in query', () => {
    const query = qs.table.alter(table).add.end()
    expect(`alter table ${table} `).toBe(query)
  })

  test('column name in query', () => {
    const query = qs.table.alter(table).add.column(column, []).end()
    expect(`alter table ${table} add column ${column} `).toBe(query)
  })

  test('attribute column in query', () => {
    const query = qs.table.alter(table).add.column(column, [attribute]).end()
    expect(`alter table ${table} add column ${column} ${attribute}`).toBe(query)
  })

  test('attributes column in query', () => {
    const query = qs.table.alter(table).add.column(column, attributes).end()
    expect(
      `alter table ${table} add column ${column} ${attributes[0]} ${attributes[1]}`
    ).toBe(query)
  })

  test('column position fist', () => {
    const query = qs.table
      .alter(table)
      .add.column(column, attributes, 'first')
      .end()
    expect(
      `alter table ${table} add column ${column} ${attributes[0]} ${attributes[1]} first`
    ).toBe(query)
  })

  test('column position after to', () => {
    const query = qs.table
      .alter(table)
      .add.column(column, attributes, { after: positionAfterToColumn })
      .end()
    expect(
      `alter table ${table} add column ${column} ${attributes[0]} ${attributes[1]} after ${positionAfterToColumn}`
    ).toBe(query)
  })
})
