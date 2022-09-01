exports.exec = async (connection, id) => {
  // 親子共に指定
  const select1 = {
    type1: {
      Id: 1,
      Name: 1,
      'Account.Id': 1,
      'Account.Name': 1
    },
    type2: 'Id, Name, Account.Id, Account.Name',
    type3: [
      'Id',
      'Name',
      'Account.Id',
      'Account.Name',
    ],
  }
  // 親だけ指定、子は全部
  const select2 = {
    type1: {
      Id: 1,
      Name: 1,
      'Account.*': 1,
    },
    type2: 'Id, Name, Account.*',
    type3: [
      'Id',
      'Name',
      'Account.*',
    ],
  }
  // 親は全部、子は指定
  const select3 = {
    type1: {
      '*': 1,
      'Account.Id': 1,
      'Account.Name': 1,
    },
    type2: '*, Account.Id, Account.Name',
    type3: [
      '*',
      'Account.Id',
      'Account.Name',
    ],
  }

  return await connection.sobject('Contact').select(select1.type1).execute()
}