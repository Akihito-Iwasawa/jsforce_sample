exports.exec = async (connection, id) => {
  return await connection.sobject('Account').select([
    'Id',
    'Name',
  ])
  .skip(4)
  .limit(10)
  .execute()
}