const assert = require('assert');
const Cards = require('../models/cards');

//describe tests
describe('Updating Records',function(){

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

    it('Updates one record in the database', function(done){
        Cards.findOneAndUpdate({title: 'Mage'}, {title: 'Arcane Warior'}).then(function(){
            Cards.findOne({_id: cardow._id}).then(function(result){
                assert(result.title === 'Arcane Warior');
                done();
            })
        });
    });

    it('Increments the rownum by 1', function(done){
        Cards.update({}, {$inc:{rownum:1}}).then(function(){
           Cards.findOne({title: 'Mage'}).then(function(record){
                assert(record.rownum === 2);
                done();
           }); 
        });
    });

});