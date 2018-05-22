module.exports =function(check,check2){
  var reg1= check;
  var reg2 =check2;

  var Reg =reg1.endsWith(reg2);
  return Reg;
}
