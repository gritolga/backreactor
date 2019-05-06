const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: String,
    img: String,
    text: String,
    rownum: Number
});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;