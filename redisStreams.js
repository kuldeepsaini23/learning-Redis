const client = require('./client');

async function init(){
  const result = await client.xadd('temp','*','name','John','age','25','city','New York City');
  console.log("RESULT-->", result);
}

init();