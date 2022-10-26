var a = 200;
var b = 300;
var num;
var sum = 0;
var k = 0;

for ( a = 200; a<b; a++) {
  
  var x = 7; 
  num = a % x;
  
    if(num == 0){
      sum = sum + a;
      k++;
   }
};
console.log('Suma: ', sum);
console.log('Numero de pasos', k);