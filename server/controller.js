const redis = require('redis');
const { promisify } = require("util");
// Navi says hi!
const controller = {};

controller.redisConnect = (req, res, next) => {
  // grab user info off request body
  const { port, ipaddress, username, password } = req.body;
  console.log('In the controller:', port);
  // use user data from frontend to create a redis client
  const RedisDB = redis.createClient({
    host: ipaddress,
    port: port,
    password: password
  });

  RedisDB.on('error', err => {
    res.locals.login = false;
    console.log('heidi did this error' + err);
  })

  RedisDB.on('ready', () => {
    const thePing = RedisDB.ping();
    console.log(thePing);

    res.locals.login = true;
    // console.log('server info: ', RedisDB.server_info)

    // MEMORY
    res.locals.allMemory = RedisDB.server_info.total_system_memory_human;
    res.locals.usedMemory = RedisDB.server_info.used_memory_human;
    res.locals.memoryFragmentation = RedisDB.server_info.mem_fragmentation_ratio;
    res.locals.evictedKeys = RedisDB.server_info.evicted_keys;


    // LATENCY
    // *** threshold needs to be set *** 
    res.locals.opsPerSec = RedisDB.server_info.instantaneous_ops_per_sec;
    res.locals.hitRate = (RedisDB.server_info.keyspace_hits / (RedisDB.server_info.keyspace_hits + RedisDB.server_info.keyspace_misses))
    // total_connections_received
    res.locals.totalConnections = RedisDB.server_info.total_connections_received
    // latency monitor
    // slowlog
    // avg response time

    // THROUGHPUT
    res.locals.connectedClients = RedisDB.server_info.connected_clients
    res.locals.connectedSlaves = RedisDB.server_info.connected_slaves
    // keyspace
    // RedisDB.info(redis.print)
    // const getCmdStats = promisify(RedisDB.info).bind(RedisDB);
    // getCmdStats.then(console.log).catch(console.log)
    let stats;
    RedisDB.info('Commandstats', function (err, result) {
      // MAYBE AUTH
      if (err) console.log(err)
      if (result) stats = result
      
      // res.locals.commandstats = stats;
    })
    res.locals.commandstats = stats;
    



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