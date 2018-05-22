let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('should returns number of registration in any selected town', function(){
          var regNum ="CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864";
          var town = "CL";
        assert.equal(countAllFromTown(regNum,town),1);
    });

});
