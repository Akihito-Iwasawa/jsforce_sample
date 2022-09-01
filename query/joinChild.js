exports.exec = async (connection, id) => {
  return await connection.sobject('Contact').select({
    '*': 1,
    'Account.*': 1,
  }).execute()
}