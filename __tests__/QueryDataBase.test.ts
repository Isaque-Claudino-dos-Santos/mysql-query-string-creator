import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('QueryDataBase', () => {
  const database = 'foo'

  test('create method', () => {
    const query = qs.database.create(database)
    expect(query).toBe(`create database ${database}`)
  })

  test('drop method', () => {
    const query = qs.database.drop(database)
    expect(query).toBe(`drop database ${database}`)
  })

  test('use method', () => {
    const query = qs.database.use(database)
    expect(query).toBe(`use ${database}`)
  })
})
