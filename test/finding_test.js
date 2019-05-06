const assert = require('assert');
const Cards = require('../models/cards');

//describe tests
describe('Finding Records',function(){

    var cardow;

    beforeEach(function(done){
        cardow = new Cards({
            title: 'Mage',
            img: 'cardimage1.png',
            text: 'A mage',
            rownum: 1
        });

        cardow.save().then(function(){
            done();
        }); 
    })

    it('Finds one record from the database', function(done){

        Cards.findOne({title: 'Mage'}).then(function(result){
            assert(result.title === 'Mage');
            done();
        });

    });

    it('Finds one record by ID from the database', function(done){

        Cards.findOne({_id: cardow._id}).then(function(result){
            assert(result._id.toString() === cardow._id.toString());
            done();
        });

    });

});