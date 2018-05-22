let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('The findItemsOver20 function', function(){

it('should return all the products that have a quantity higher than 20', function(){
  var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];

        assert.equal(findItemsOver20(itemList),2);

    });


    it('should return all the products that have a quantity higher than 20', function(){

      var itemList1 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 40},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
      ];
            assert.equal(findItemsOver20(itemList1),1);

        });


        it('should return all the products that have a quantity higher than 20', function(){
          var itemList1 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 40},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
          ];

                assert.notEqual(findItemsOver20(itemList1),2,"output is not the same with what is expected");

            });

            // it('should return all the products that have a quantity higher than 20', function(){
            //   var itemList = [
            //     {name : 'apples', qty : 10},
            //     {name : 'pears', qty : 40},
            //     {name : 'bananas', qty : 17},
            //     {name : 'apples', qty : 3},
            //   ];
            //
            //         assert.notEqual(findItemsOver20(itemList),1,"output is not the same with what is expected");
            //
            //     });
});
