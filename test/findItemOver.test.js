let assert = require("assert");
let findItemsOver = require("../findItemsOver");
describe('The findItemOver function', function(){

    it('should return products that have quantity higher than the threshold', function(){
      var itemList = [
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];

       var threshold =30;
  // output is not the same with what is expected
      //  assert.equal(findItemsOver(itemList, threshold),1 ));
      assert.equal(findItemsOver(itemList,30),1);
    });

    it('should return products that have quantity higher than the threshold', function(){

      var itemList1 = [
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 37},
          {name : 'apples', qty : 3},
      ];
       var threshold =30;

      assert.equal(findItemsOver(itemList1,30),2);
    });

    it('should return products that have quantity higher than the threshold', function(){

      var itemList1 = [
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 37},
          {name : 'apples', qty : 33},
      ];
       var threshold =30;

      assert.notEqual(findItemsOver(itemList1,30),2,"Error the expected output does dont match");
    });

    it('should return products that have quantity higher than the threshold', function(){

      var itemList = [
          {name : 'pears', qty : 17},
          {name : 'bananas', qty : 37},
          {name : 'apples', qty : 13},
      ];
       var threshold =0;

      assert.notEqual(findItemsOver(itemList,30),2,"Error the expected output does dont match");
    });

});
