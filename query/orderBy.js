exports.exec = async (connection, id) => {
  return await connection.sobject('Account').select([
    'Id',
    'Name',
  ])
  .limit(10)
  .orderby({
    Id: 'ASC',
    Name: 'DESC'
  })
  // 以下も同義
  // .sort({
  //   Id: 1,
  //   Name: -1
  // })
  .execute()
}