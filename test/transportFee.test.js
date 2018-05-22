let assert = require("assert");
let transportFee = require("../transportFee");
describe('The transportFee function', function(){

    it('should return the right price based on the shift you are working', function(){
  var shift = 'afternoon';
        assert.equal(transportFee(shift),'R10');
    });

    it('should return the right price based on the shift you are working', function(){
  var shift = 'morning';
        assert.equal(transportFee(shift),'R20');
    });


    it('should return the right price based on the shift you are working', function(){
  var shift = 'nightshift';
        assert.equal(transportFee(shift),'free');
    });


    it('should return an error if the output is not what is expected', function(){
  var shift = 'shift';
        assert.notEqual(transportFee(shift),'not found',"error place check again before you enter Ok button");
    });
});
