let assert = require("assert");
let yearsAgo = require("../yearAgo");
describe('The yearsAgo function', function(){

    it('should return how many years ago that was', function(){
  var num = 2011;
        assert.equal(7,yearsAgo(num));
    });

    it('should return how many years ago that was', function(){
  var num = 2018;
      assert.equal(0,yearsAgo(num));
    });



    it('should return how many years ago that was', function(){
      var num = 2018;
      assert.notEqual(1,yearsAgo(num),"incorrect number of years");
    });
});
