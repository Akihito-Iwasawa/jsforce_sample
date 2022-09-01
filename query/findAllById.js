exports.exec = async (connection, id) => {
  if (!id) {
    throw 'invalid arg3. findById requires an sfId';
  }
  return await connection.sobject('Account').find(
    {
      Id: id,
    },
    '*' // なくても大丈夫
  ).execute()

  // find().where({Id:id}) も同義
}