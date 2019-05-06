const Cards = require('../models/cards');
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/cardsDB', { useNewUrlParser: true });

exports.allCards = function(res) {
    Cards.find({lean: true}, function(err, cards){
        return res.end(JSON.stringify(cards));
        });
    };

exports.Test = function() {
      return 'Successfuly called select.js function';
};