const Cards = require('../models/cards');
const mongoose = require("mongoose");


exports.Insert = function(p_title, p_img, p_text) {
   
    mongoose.connect('mongodb://localhost/cardsDB', { useNewUrlParser: true });

    var cardow = new Cards({
        title: p_title,
        img: p_img,
        text: p_text,
        rownum: 1
    });
    
    cardow.save().then(function(){
        console.log('Inserted')
    });
};