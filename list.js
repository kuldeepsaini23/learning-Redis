const client = require('./client');

async function init(){
  // await client.lpush('messages', 1);
  // await client.lpush('messages', 2); 
  // await client.lpush('messages', 3);
  // await client.lpush('messages', 4);
  // await client.lpush('messages', 5);
  // await client.lpush('messages', 6);
  const result = await client.lpop('messages');
  console.log("RESULT-->", result);
}

init();