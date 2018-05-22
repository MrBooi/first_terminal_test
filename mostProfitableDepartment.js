module.exports =function(Sales){
var MostProfitable ={};
var Department ="";
    var num =0;
 for(var i=0;i<Sales.length;i++){
   var temp = Sales[i];
   var tempDep = temp.department;
   //console.log(tempDep);
   if(MostProfitable[tempDep]===undefined){
      MostProfitable[tempDep]=0;
      }
   else{
   MostProfitable[tempDep]=MostProfitable[tempDep]+ temp.sales;
   }


   if(MostProfitable[tempDep]>num){
        num =MostProfitable[tempDep];
            Department =tempDep;
        }


 }

return Department;
}
