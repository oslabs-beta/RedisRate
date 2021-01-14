// require in our database and our mongoDB model
const redis = require('redis');
const redisDb = redis.createClient()

// requirements for MongoDB
const mongoDB = require('../mongodb.js');

const DbController = {};

DbController.checkCache = (req, res, next) => {
  // get the query string send from the client
  // maybe an id

  redisDb.get(req.body.id, (err, value) => {
    // if the id is found
    if (value) {
      console.log('found name in cache SO FAST')
      // save the username to be used on the frontEnd
      res.locals.testData = value;
      res.status(200).json(value);
    } else if (!value) {
      next();
    }
  });
}

DbController.mongoDb = (req, res, next) => {
  console.log('Did not find in cache, looking in mongo')
  // look for listing id based on schema
  // 'name':'Ribeira Charming Duplex'}
  mongoDB.findById(req.body.id)
  .then(result => {
    res.locals.name = result.name;
    // set the retrieved data in the cache
    redisDb.set(req.body.id, result.name)
    redisDb.expire(req.body.id, 500)
    next();
  })
  .catch(err => console.log(err))
}
    

module.exports = DbController;