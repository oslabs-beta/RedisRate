const db = require('./LoginModel.js');
const theCrypt = require('bcrypt');

// bcrypt.hash, makes hash and compare funcs, compares pass
// to hash 

// table should consit of fName, lName, user, pass, also need to add PK to link to FK
// for new table of metrics, will come back to.

// BCRYPT

// piece of middleware
const loginController = {}


// method, first check if login is valid, get user and check
loginController.validateUser = (req, res, next) => {
  // accept from body user, pass, deconstruct
  const { username, password } = req.body;  
  // string for query
  const query = `SELECT pass FROM users WHERE users.user=$1`;
  // invoke db method to get user from db, pass in query
  db.query(query, [username])
    // if theres not a match
    .then((result) => {
      console.log(result.rows[0].pass)
      // use bcrypt to compare the user's text password with their hash in the db
      theCrypt.compare(password, result.rows[0].pass)
        .then((response) => {
        // if there's no match
        if (!response) {
          console.log('user unable to be validated:', err);
          // send back false to prevent user from being redirected
          res.locals.isUserLoggedIn = false;
          return next();
        }
        // if there is a match
        console.log('user verified');
        // send back true to redirect user to Navigation
        res.locals.isUserLoggedIn = true;
        return next();
        })
    })
    .catch((err) => {
      console.log('User could not be validated:', err)
    })

}

// sign up method, add user and login
loginController.addUser = (req, res, next) => {

// accept from body, fName, lName, user, pass deconstruct
  const { firstName, lastName, username, password } = req.body;
  // add query here for adding to database
  const query = 'INSERT INTO users ("user", "pass", "lName", "fName") VALUES ($1, $2, $3, $4)';
  // bcrypt.hash said password and then pass as arg to db.query method
  theCrypt.hash(password, 13, (err, hash) => {
    if (err) {
      console.log('error creating hash')
      return next(err);
    }
    console.log(hash)
    db.query(query, [username, hash, lastName, firstName])
    .then((response) => {
      console.log('User Added!');
      res.locals.isUserLoggedIn = true;
      return next();
    })
    .catch(err => {
      console.log('Error adding user to db, ' + err);
      res.locals.isUserLoggedIn = false;
      return next();
    })
  });

 

  // invoke db method to put into database
    // db.query(query, [firstName, lastName, username, password], (err, response) => {
    //     if(err) {
    //       console.log('Error adding user to db, ' + err);
    //       res.locals.isUserLoggedIn = false;
    //       return next();
    //     } else {
    //         console.log('User Added!');
    //         res.locals.isUserLoggedIn = true;
    //         return next();
    //     }

    // })
}

module.exports = loginController;