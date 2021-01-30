const redis = require('redis');

const redisController = {};

redisController.redisConnect = (req, res, next) => {
  const { port, ipaddress, username, password } = req.body;
  console.log('In the controller:', port);
  const RedisDB = redis.createClient({
    host: ipaddress,
    port: port,
    password: password
  });

  RedisDB.on('error', err => {
    res.locals.login = false;
    console.log('Error connecting to Redis client:' + err);
  })

  // PULL METRICS FROM CLIENT'S REDIS
  RedisDB.on('ready', () => {
    // check if connected
    const thePing = RedisDB.ping();
    console.log(thePing);
    // if successfully connected, 
    // return true to isUserLoggedIn frontend state
    res.locals.login = true;

    // MEMORY
    res.locals.allMemory = RedisDB.server_info.total_system_memory_human;
    res.locals.usedMemory = RedisDB.server_info.used_memory_human;
    res.locals.memoryFragmentation = RedisDB.server_info.mem_fragmentation_ratio;
    res.locals.evictedKeys = RedisDB.server_info.evicted_keys;

    // LATENCY
    /*** threshold needs to be set *** 
      latency monitor
      slowlog
    */
    res.locals.opsPerSec = RedisDB.server_info.instantaneous_ops_per_sec;
    res.locals.totalConnections = RedisDB.server_info.total_connections_received;
    // calculate keyspace hits rate from hits and misses
    let hits = parseInt(RedisDB.server_info.keyspace_hits);
    let misses = parseInt(RedisDB.server_info.keyspace_misses);
    res.locals.keyspaceHits = RedisDB.server_info.keyspace_hits;
    res.locals.keyspaceMisses = RedisDB.server_info.keyspace_misses;
    res.locals.hitRate = (hits / (hits + misses));
    
    // THROUGHPUT
    res.locals.connectedClients = RedisDB.server_info.connected_clients;
    res.locals.blockedClients = RedisDB.server_info.blocked_clients;
    res.locals.connectedSlaves = RedisDB.server_info.connected_slaves;
    res.locals.keyspace = RedisDB.server_info.keyspace;
    res.locals.totalCommands = RedisDB.server_info.total_commands_processed;

    /* COMMANDSTATS
    let stats;
    RedisDB.info('commandstats', (err, result) => {
      console.log(result)
      // res.json(result)
    })
    */

    return next();
  })
};

module.exports = redisController;

