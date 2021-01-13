// require in our database and our mongoDB model
const redis = require('redis');
const redisDb = redis.createClient()

const DbController = {};

DbController.test = (req, res, next) => {
  redisDb.set('testK', 'testVal', redis.print);
  redisDb.get('testK', redis.print);
  next();
}

redisDb.set('testK', 'testVal', redis.print);
redisDb.get('testK', redis.print);

// recieve the request from the server file

  // look for the requested data in redis cache
    //if found, send back to front end

  // if not found, send query to mongo
    // save in cache
    // return data to frontend

module.exports = DbController;