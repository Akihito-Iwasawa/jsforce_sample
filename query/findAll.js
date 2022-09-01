exports.exec = async (connection, id) => {
  return await connection.sobject('Account').find().execute()
}