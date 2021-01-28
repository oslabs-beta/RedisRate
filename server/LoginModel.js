const { Pool } = require('pg');

// set up URI, set to process env
const PG_URI = "postgres://ypokusyr:OJ4Ka4LaJgPRyws7UnhXPG3OgYdNLrhN@ziggy.db.elephantsql.com:5432/ypokusyr";

// add URI to env file

// create a pool
const pool = new Pool({
  connectionString: PG_URI
});

// export our model
module.exports = pool;
// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
// };