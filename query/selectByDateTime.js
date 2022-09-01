exports.exec = async (connection, id) => {
  return await connection.sobject('Account').select([
    'Id',
    'Name',
  ])
  .where({
    /**
     * new Date() でjsのDateオブジェクト使う場合のsample
     *
     * SFの型がDateの時：
     * const { SfDate } = require('jsforce');
     * const now = SfDate.toDateLiteral(new Date());
     *
     * SFの型がDateTimeの時：
     * const { SfDate } = require('jsforce');
     * const now = SfDate.toDateTimeLiteral(new Date());
     */
    CreatedDate: { $gte : (require('jsforce')).Date.YESTERDAY }
  })
  .execute()
}