const mongoose = require ('mongoose')

const URI = "mongodb+srv://mongodb:mongoDb@cluster0.drnfb.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true },  () => {console.log('you are connected')}); 
//checking to see if we can pull data from DB database.collection.find
// console.log(sample_airbnb.collection.find("_id"))

const db = mongoose.connection;
const schema = new mongoose.Schema({
  name: String,
  summary: String
})

const reviews = mongoose.model('listingsAndReviews', schema)

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function() {
    console.log('in db')
    // reviews.findOne({ name: 'Ribeira Charming Duplex'})
    
})

  reviews.find({}, (err, result) => {
  if(err) {console.log('error')};
  console.log(result);
}); // .find method?

// name of the collection

// mongoose.collection('listingsAndReviews').find({ name: 'Ribeira Charming Duplex' });