const redis = require('redis');
// Navi says hi!
const controller = {};

controller.redisConnect = (req, res, next) => {
  // grab user info off request body
  const { port, ipaddress, username, password } = req.body;
  console.log('In the controller:', port);
  // use user data from frontend to create a redis client
  const RedisDB = redis.createClient({
    host : ipaddress,
    port : port,
    password : password
  });

  RedisDB.on('error' , err => {

    res.locals.login = false;
    console.log('heidi did this error' + err);
  })

  RedisDB.on('ready', () => {
    const thePing = RedisDB.ping();
    console.log(thePing);

    res.locals.login = true;
    res.locals.allMemory = RedisDB.server_info.total_system_memory_human;
    res.locals.usedMemory = RedisDB.server_info.used_memory_human;

    return next();
  })

  

  
};

module.exports = controller;

// console.log('after connect, before redis on error');

//   RedisDB.on('err' , err => {
//     console.log('heidi did this error' + err);
//   })

//   RedisDB.on('connect' , () => {
//     RedisDB.set("theHomie", "isHeidi", (err) => {if(err) console.error('look here error' + err)});
//     console.log('WE IS CONNECTED YA"LL');
//     RedisDB.get("theHomie", (err, value) => {
//       if(err) {
//         console.error('there be an error' + err);

//       }
//       else {
//         console.log("this be the value " + value);
//         console.log( RedisDB.server_info.total_system_memory_human, RedisDB.server_info.used_memory_human);

//         console.log(ipaddress, port);
//       }
//       });
//   });