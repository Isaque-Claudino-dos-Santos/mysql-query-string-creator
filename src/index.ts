import QueryMysql from './QueryMysql'

const query = new QueryMysql()

const createTable = query.table
  .create('users')
  .column('id', ['int', 'primary key', 'auto_increment'])
  .column('name', ['varchar(100)', 'not null'])
  .query()

console.log('\n\n')
console.log(createTable)
console.log('\n\n')

export default QueryMysql
