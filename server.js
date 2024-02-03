const express = require('express');
const client = require('./client');
const axios = require('axios').default; 

const app = express();

app.get('/', async(req, res) => {
  const cacheValue = await client.get("todos");
  if(cacheValue){
    return res.json(JSON.parse(cacheValue));
  }
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/")
  await client.set("todos", JSON.stringify(data), 'EX', 10);
  return res.json(data);
});


app.listen(9000, () => {  
  console.log('Server is running on port 9000');
});