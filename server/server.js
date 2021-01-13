const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// const controller = require('./DbController.js')
const redis = require('redis');
const redisDb = redis.createClient()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.get('/test', 
//   controller.test,
//   (req, res) => {
//     res.end();
// })

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

/*
  Get requests for data from front end
  Route the request to databse controllers
*/

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
  
});

redisDb.set('testK', 'testVal', redis.print);
redisDb.get('testK', redis.print);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));