exports.exec = async (connection, id) => {
  return await connection.sobject('Account').select([
    'Id',
    'Name',
  ])
  .where({
    Name: { $like: 'San%' }
  })
  .execute()
}