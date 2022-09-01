exports.exec = async (connection, id) => {
  if (!id) {
    throw 'invalid arg3. findById requires an sfId';
  }
  // selectの形式3パターン
  const select = {
    type1: {
      Id: 1,
      Name: 1,
    },
    type2: 'Id, Name',
    type3: [
      'Id',
      'Name',
    ],
  }
  return await connection.sobject('Account').find(
    {
      Id: id,
    },
    select.type1
  ).execute()
}