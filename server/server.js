const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const path = require('path');
const redisController = require('./Controllers/redisController')
const loginController = require('./Controllers/loginController');

app.use(bodyParser.json());

app.post('/login',
  loginController.validateUser,
  (req, res) => {
    res.status(200).json({ isUserLoggedIn: res.locals.isUserLoggedIn })
  }
)

app.post('/signup',
  loginController.addUser,
  (req, res) => {
    res.status(200).json({ isUserLoggedIn: res.locals.isUserLoggedIn });
  }
)

app.post('/connect',
  redisController.redisConnect,
  (req, res) => {
    res.status(200).json({
      login: res.locals.login,
      allMemory: res.locals.allMemory,
      usedMemory: res.locals.usedMemory,
      memoryFragRatio: res.locals.memoryFragmentation,
      evictedKeys: res.locals.evictedKeys,
      opsPerSec: res.locals.opsPerSec,
      keyspaceHits: res.locals.keyspaceHits,
      keyspaceMisses: res.locals.keyspaceMisses,
      hitRate: res.locals.hitRate,
      totalConnections: res.locals.totalConnections,
      connectedClients: res.locals.connectedClients,
      connectedSlaves: res.locals.connectedSlaves,
      totalCommands: res.locals.totalCommands,
    });
  }
)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})