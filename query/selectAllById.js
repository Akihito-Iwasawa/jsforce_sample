exports.exec = async (connection, id) => {
  if (!id) {
    throw 'invalid arg3. findById requires an sfId';
  }
  
  return await connection.sobject('Account').select('*').where({
    Id: id
  }).execute();
}