// require module to easily use mongodb
const mongoose = require('mongoose')
<<<<<<< HEAD
=======

>>>>>>> main
const URI = process.env.SECRET;

// connect to said db
mongoose.connect(URI, 
  { useNewUrlParser: true, 
   useUnifiedTopology: true 
  }, () => { console.log('You are connected to MongoDB') 
});

// schema to interact with current collection
const reviews = mongoose.model('listingsAndReviews', new mongoose.Schema({ name : String, _id: String }), "listingsAndReviews");

// export mongoose model
module.exports = reviews;


