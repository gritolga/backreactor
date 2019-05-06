const mongoose = require("mongoose");

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before tests run
before(function(done){
    mongoose.connect('mongodb://localhost/cardsDB', { useNewUrlParser: true });
    //mongoya baglaninca yapilacaklar:
    mongoose.connection.once('open', function(){
        console.log('Connection has benn made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error',error);
    });
});

// Drop the cards collection before each test
beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.cards.drop(function(){
            done();
    });
})