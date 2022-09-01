exports.exec = async (connection, id) => {
  if (!id) {
    throw 'invalid arg3. selectByInId requires an sfId';
  }

  return await connection.sobject('Account').select([
    'Id',
    'Name',
  ])
  .where({
    Id: { $in : [
      id
    ]}
  })
  .execute()
}