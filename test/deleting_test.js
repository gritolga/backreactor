const assert = require('assert');
const Cards = require('../models/cards');

//describe tests
describe('Deleting Records',function(){

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

    it('Deletes one record from the database', function(done){
        Cards.findOneAndRemove({title: 'Mage'}).then(function(){
            Cards.findOne({title: 'Mage'}).then(function(result){
                assert(result === null);
                done();
                });
            });
        });
    });