const redis = require('redis');



const controller = {};

controller.redisConnect = (req, res, next) => {
  // grab user info off request body
  const { port, ipaddress, username, password } = req.body;
  console.log('from controller:', port)
  // use user data from frontend to create a redis client
  //const redisDb = redis.createClient(/* port, ipaddress */)
  // authorize the redis client
  //redisDb.auth(/* username, password*/)
  return next();
}

module.exports = controller;