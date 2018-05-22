let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");
describe('The totalPhoneBill function', function(){

    it('should calculate the total bill for the data provided.', function(){
     var store ='call, sms, call, sms, sms';
     var bill = "R7.45";
        assert.equal(bill,totalPhoneBill(store));
    });


    it('should calculate the total bill for the data provided.', function(){
     var store ='call, sms, call, sms';
     var bill = "R6.80";
        assert.equal(bill,totalPhoneBill(store));
    });



    it('should fail if the bill is not the same.', function(){
     var store ='call, sms, call, sms, sms';
     var bill = "R6.80";
        assert.notEqual(bill,totalPhoneBill(store),"Bill does not match");
    });



});
