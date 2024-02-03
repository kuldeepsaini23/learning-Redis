const client = require('./client');

async function init(){
  // await client.set('msg:6', "Hey from Nodejs");
  await client.expire('msg:6', 10);
  const result = await client.get('user:2');
  console.log("RESULT-->",result);
}

init();