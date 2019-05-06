const assert = require('assert');
const Cards = require('../models/cards');

//describe tests
describe('Saving Records',function(){

    //save test
    it('Save records', function(done){
        
        var cardow = new Cards({
            title: 'Archer',
            img: 'cardimage.png',
            text: 'An archer',
            rownum: 0
        });

        cardow.save().then(function(){
            assert(cardow.isNew === false);
            done();
        });

    });

    //save test
});