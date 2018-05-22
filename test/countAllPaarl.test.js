let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should returns all the registration numbers in the string for Paarl', function(){
          var regNum ="CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864";
          var check =[ 'CJ 678 543', 'CJ 67890' ];
        assert.equal(countAllPaarl(regNum),2);

    });

});
