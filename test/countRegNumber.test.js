let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should display the number registration in the list', function(){
      var str ='CA 182736,CY 523519,CJ 812328';
        assert.equal(countRegNumber(str),3);
    });



    it('should display the number registration in the list', function(){
      var str ='CA 182736,CY 523519,CJ 812328,CJ 123';
        assert.equal(countRegNumber(str),4);
    });




    it('should display an error if the number registration in the list does contain the same length', function(){
      var str ='CA 182736,CY 523519,CJ 812328,CJ 123';
        assert.notEqual(countRegNumber(str),3,"answers do match");
    });

});
