module.exports =function(regNumbers){
 var RegNum = regNumbers.split(',');

  var mylist =[];
  for(var i=0;i<RegNum.length;i++){
    var space = RegNum[i].trim();
    console.log(space);
    if(space.startsWith('CJ')){
       mylist.push(space);

    }
}
    return mylist.length;
}
