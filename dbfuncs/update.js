const Cards = require('../models/cards');
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);

exports.Update = function(p_findtitle, p_column, p_var) {

    mongoose.connect('mongodb://localhost/cardsDB', { useNewUrlParser: true });

    if (p_column.toString() === 'title') {
        Cards.findOneAndUpdate({title: p_findtitle.toString()}, {title: p_var}, function( error, result){
            if(error) {
                console.log('error')
            }
        });
    } else if (p_column.toString() === 'img'){
        Cards.findOneAndUpdate({title: p_findtitle.toString()}, {img: p_var}, function( error, result){
            if(error) {
                console.log('error')
            }
        });
    } else if (p_column.toString() === 'text') {
        Cards.findOneAndUpdate({title: p_findtitle.toString()}, {text: p_var}, function( error, result){
            if(error) {
                console.log('error')
            }
        });
    };

};