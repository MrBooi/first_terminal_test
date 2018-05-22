module.exports =function(shift){
  var price = "";
  if(shift=='morning'){
     price ="R20";
     return price;
     }
  else if(shift=='afternoon'){
          price ="R10";
    return price;
          }
  if(shift=='nightshift'){

    return "free";
     }

}
