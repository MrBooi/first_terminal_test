let assert = require("assert");
let fromWhere = require("../fromWhere");
describe('The fromWhere function', function(){

it('should returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function(){

        assert.equal(fromWhere('CA'),"Cape Town");
    });


    it('should returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function(){

            assert.equal(fromWhere('CY'),"Bellville");
        });

    it('should returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function(){

                assert.equal(fromWhere('CJ'),"Paarl");
    });


it('should returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function(){

                assert.equal(fromWhere('CK'),"Some other place!");
    });

});
