exports.exec = async (connection, id) => {
  return await connection.sobject('Contact').select([
    'Id',
    'Name',
    'Account.Id',
    'Account.Name'
  ])
  .where({
    'Account.Name': { $like: 'San%' }
  })
  .execute()
}