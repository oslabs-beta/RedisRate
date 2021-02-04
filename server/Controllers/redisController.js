const redis = require('redis');

const redisController = {};

redisController.redisConnect = (req, res, next) => {
  const { port, ipaddress, username, password } = req.body;
  console.log('In the controller:', port);

  const retry_strategy = (options) => {
    if (options.error && options.error.code === "ECONNREFUSED") {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error("The server refused the connection");
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error("Retry time exhausted");
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
  }

  const RedisDB = redis.createClient({
    host: ipaddress,
    port: port,
    password: password,
    retry_strategy: retry_strategy
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

   

    return next();
  })
};

module.exports = redisController;

