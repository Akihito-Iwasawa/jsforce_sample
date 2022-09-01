require('dotenv').config();
const jsforce = require('jsforce');
const conn = new jsforce.Connection({
  loginUrl: process.env.LOGIN_URL,
});
const methods = ['query','crud'];
const fileKey = {
  query: [
    'raw',
    'findAll',
    'findById',
    'findAllById',
    'selectAll',
    'selectById',
    'selectAllById',
    'selectByDateTime',
    'selectByInId',
    'selectByLikeName',
    'selectByLikeParentName',
    'selectByInSubQuery',
    'joinChild',
    'joinChildAndSelect',
    'joinParent',
    'joinParentAndSelect',
    'limit',
    'offset',
    'orderBy',
  ],
  crud: [],
}

async function login() {
  await conn.login(
    process.env.LOGIN_ID,
    process.env.LOGIN_PASSWORD,
    (err, res) => {
      if (err) throw err;
    }
  );
}

function handleMethod() {
  if (!methods.includes(process.argv[2])) {
    throw 'invalid arg1. specify query or crud';
  }
  if (process.argv[2] === 'query') {
    if (!fileKey.query.includes(process.argv[3])) {
      throw 'invalid arg2. specify a file key in folder query';
    }
  }
  if (process.argv[2] === 'crud') {
    if (!fileKey.crud.includes(process.argv[3])) {
      throw 'invalid arg2. specify a file key in folder crud';
    }
  }
  return {
    path: `./${process.argv[2]}/${process.argv[3]}`,
    sfId: process.argv[3]
  }
}

async function handler() {
  const specify = handleMethod();
  await login();
  const connection = new jsforce.Connection({
    instanceUrl: conn.instanceUrl,
    accessToken: conn.accessToken,
  });

  const script = require(specify.path);
  const result = await script.exec(connection, specify.sfId);
  console.log(result);
}

handler()

/**
 * usage: node index.js arg1 arg2
 *  arg1: query or crud.
 *  arg2: specify a file key in folder query or crud.
 *  arg3: no or salesforce object id.
 *
 * SF DE環境でデフォルトであるId
 * 0032x000008SJP4AAO Contact
 * 0012x000009XrTiAAK Account
 */