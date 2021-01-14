// require module to easily use mongodb
const mongoose = require('mongoose')
// our db URI
const URI = 'secret';
// connect to said db
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('you are connected') });

// schema to interact with current collection
const reviews = mongoose.model('Reviews', new mongoose.Schema({ name : String, summary : String}), "listingsAndReviews");
// find a
reviews.findOne({'name': 'ibeira Charming Duplex'}, (err, result) => {
    // for(let i = 0; i < 10 ; i++){
    //     console.log(result[i]['name']);

    // }
    // console.log(`The length of result: ${result.length}`);
    console.log(result)
})