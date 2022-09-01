exports.exec = async (connection, id) => {
  // 親子共に指定
  const select1 = {
    type1: {
      parent: {
        Id: 1,
        Name: 1,
      },
      child: {
        Id: 1,
        Name: 1,
      }
    },
    type2: {
      parent: 'Id, Name',
      child: 'Id, Name'
    },
    type3: {
      parent: [
        'Id',
        'Name',
      ],
      child: [
        'Id',
        'Name',
      ]
    }
  }
  // 親だけ指定、子は全部
  const select2 = {
    type1: {
      parent: {
        Id: 1,
        Name: 1,
      },
      child: {
        '*': 1,
      }
    },
    type2: {
      parent: 'Id, Name',
      child: '*'
    },
    type3: {
      parent: [
        'Id',
        'Name',
      ],
      child: [
        '*',
      ]
    }
  }
  // 親は全部、子は指定
  const select3 = {
    type1: {
      parent: {
        '*': 1,
      },
      child: {
        Id: 1,
        Name: 1,
      }
    },
    type2: {
      parent: '*',
      child: 'Id, Name'
    },
    type3: {
      parent: [
        '*',
      ],
      child: [
        'Id',
        'Name',
      ]
    }
  }

  return await connection.sobject('Account')
    .select(select1.type1.parent)
    .include('Contacts')
      .select(select1.type1.child)
    .end()
    .execute()
}