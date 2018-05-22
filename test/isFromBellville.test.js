let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville function', function(){

    it('if registration startsWith CY Pass it should return true', function(){
        var reg = ("CY 123");
        assert.equal(isFromBellville(reg),true);
    });

    it('If registration startsWith CY Pass it should return true', function(){
        var reg = ("CY");
        assert.equal(isFromBellville(reg),true);
    });


    it('if registration does not startsWith CY it should return false ', function(){
        // this test will fail - can you fix it?
            var reg = ("CA 123");
        assert.equal(isFromBellville(reg),false);
    });

    it('If registration startsWith CY Pass it should return true', function(){
        var reg = "CA";
      //  assert.equal(isFromBellville(reg),false);
        assert.notEqual(isFromBellville(reg), true,"Registration number you entered does not start with CY");
    });
});
