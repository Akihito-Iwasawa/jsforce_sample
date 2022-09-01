exports.exec = async (connection, id) => {
  return await connection.sobject('Account')
    .select('*')
    .include('Contacts')
      .select('*')
    .end()
    .execute()
}