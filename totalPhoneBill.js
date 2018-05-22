module.exports =function(totalBill){
   var SMS =[];
 var Call=[];
var total =0.0;
   var  bill= totalBill.split(',');
  for(var i =0; i< bill.length;i++){
    var space =bill[i].trim();
     if(space.startsWith('c')){
      Call.push(space);
        }
     else{
      SMS.push(space);
            }
  }

  total = (Call.length*2.75) + (SMS.length*0.65);
  var BillTotal= total.toFixed(2);

   console.log(BillTotal);

  return "R"+BillTotal;
}
