//var my_module = require('./multiply');
//var ans = my_module.multiply(4,3);
//console.log(ans);
var mult = function(num1,num2){
  if(num1 == 0 || num2 == 0){
    return 0;
  }


  else {
    return (num1 +  mult(num1,num2-1));
  }
}

var che = mult(5,3);
console.log(che);
