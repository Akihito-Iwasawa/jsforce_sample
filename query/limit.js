exports.exec = async (connection, id) => {
  return await connection.sobject('Account').select([
    'Id',
    'Name',
  ])
  .limit(1)
  .execute()
}