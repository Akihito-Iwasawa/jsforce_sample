exports.exec = async (connection, id) => {
  let query = 'SELECT Id, Name FROM Account';
  if (id) {
    /**
     * jsforceのqueryではbind変数使えないのでWHEREで絞るなら
     * こんな感じで動的にWHEREを作ることはできる。
     * でも、SQLインジェクションの原因になりかねないので非推奨。
     * 変数でWHEREをbindしたいなら別のメソッドを使いましょう。
     */
    query += ` WHERE Id='${id}'`;
  }
  return await connection.query(query);
}