exports.exec = async (connection, id) => {
  if (!id) {
    throw 'invalid arg3. selectByIdInSubQuery requires an sfId';
  }

  const subQuery = connection.sobject('Account').select('Id').where({
    Id: id
  }).toSOQL();

  return await connection.sobject('Contact').select([
    'Id',
    'Name',
    'Account.Id',
    'Account.Name'
  ])
  .where(`AccountId IN (${subQuery})`)
  .execute()
}