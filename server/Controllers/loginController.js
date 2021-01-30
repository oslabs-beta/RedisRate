const db = require('../LoginModel.js');
const theCrypt = require('bcrypt');

const loginController = {}

loginController.validateUser = (req, res, next) => {
  const { username, password } = req.body;  
  const query = `SELECT pass FROM users WHERE users.user=$1`;
  db.query(query, [username])
    .then((result) => {
      console.log(result.rows[0].pass)
      // use bcrypt to compare the user's text password with their hash in the db
      theCrypt.compare(password, result.rows[0].pass)
        .then((response) => {
        // if there's not a match
        if (!response) {
          console.log('user hash unable to be validated');
          // return false to prevent user from being redirected
          res.locals.isUserLoggedIn = false;
          return next();
        }
        // if there is a match
        console.log('user validated');
        // send back true to redirect user to Navigation
        res.locals.isUserLoggedIn = true;
        return next();
        })
    })
    .catch((err) => {
      console.log('Error validating user: ' + err)
    })
}

loginController.addUser = (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;
  const query = 'INSERT INTO users ("user", "pass", "lName", "fName") VALUES ($1, $2, $3, $4)';
  theCrypt.hash(password, 13, (err, hash) => {
    if (err) {
      console.log('error creating hash')
      return next(err);
    }
    // After the user's password has been encrypted, store in PSQL
    db.query(query, [username, hash, lastName, firstName])
    .then(() => {
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
}

module.exports = loginController;