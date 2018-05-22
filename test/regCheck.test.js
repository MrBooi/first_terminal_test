let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck function', function(){

    it('should return true if registration number endswith the same letters of what will be entered by the user', function(){
      var reg1 = "DV 23 NB GP";
      var reg2 = "GP";

        assert.equal(regCheck(reg1,reg2),true);
    });



    it('should return true if registration number endswith the same letters of what will be entered by the user', function(){
      var reg1 = "DV 23 NB CA";
      var reg2 = "CA";

        assert.equal(regCheck(reg1,reg2),true);
    });





    it('should return false if registration number does not endswith the same letters of what will be entered by the user', function(){
      var reg1 = "DV 23 NB GB";
      var reg2 = "GP";

        assert.equal(regCheck(reg1,reg2),false);
    });


    it('should return false if registration number does not endswith the same letters of what will be entered by the user', function(){
      var reg1 = "DV 23 NB CA";
      var reg2 = "GP";

        assert.equal(regCheck(reg1,reg2),false);
    });
});
