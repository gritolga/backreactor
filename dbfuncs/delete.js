const Cards = require('../models/cards');
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);

exports.Delete = function(p_deletetitle) {

    mongoose.connect('mongodb://localhost/cardsDB', { useNewUrlParser: true });

    Cards.findOneAndRemove({title: p_deletetitle}, function( error, result){
        if(error) {
            console.log('error')
        }
    });

};