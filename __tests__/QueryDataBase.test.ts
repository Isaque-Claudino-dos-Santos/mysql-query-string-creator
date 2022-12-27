import MysqlQueryString from '../src'

const qs = new MysqlQueryString()

describe('QueryDataBase', () => {
  const database = 'foo'

  test('create method', () => {
    const query = qs.database.create(database)
    expect(`create database ${database}`).toBe(query)
  })

  test('drop method', () => {
    const query = qs.database.drop(database)
    expect(`drop database ${database}`).toBe(query)
  })

  test('use method', () => {
    const query = qs.database.use(database)
    expect(`use ${database}`).toBe(query)
  })
})
