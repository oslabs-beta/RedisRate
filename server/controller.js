const redis = require('redis');

const controller = {};

controller.redisConnect = (req, res, next) => {
  // grab user info off request body
  const { port, ipaddress, username, password } = req.body;
  console.log('from controller:', port);
  // use user data from frontend to create a redis client
  const RedisDB = redis.createClient({
    host : JSON.stringify(ipaddress),
    port : port,
    password : password
  });

  RedisDB.on('err' , err => {
    console.log('Error' + err);
  })

  RedisDB.on('connect' , () => {
    RedisDB.set("theHomie", "isHeidi", (err) => {if(err) console.error(err)});
    console.log('WE IS CONNECTED YA"LL');
    RedisDB.get("theHomie", (err, value) => {
      if(err) {
        console.error('there be an error' + err);

      }
      else {
        console.log("this be the value " + value);
        console.log(RedisDB.port, RedisDB.host);
      }
      });
  });
  //const redisDb = redis.createClient(/* port, ipaddress */)
  // authorize the redis client
  //redisDb.auth(/* username, password*/)
  return next();
}

module.exports = controller;