module.exports = {
  multiply: function(num1,num2){
    if(num1 == 0 || num2 == 0){
      return 0;
    }


    else {
      return (num1 +  multiply(num1,num2-1));
    }
  }
}
