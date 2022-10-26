var a = 200;
var b = 300;
var num;
var mul = 1;
var res;
var k = 0;

for ( a = 200; a<b; a++) {
  
  var x = 7; 
  num = a % x;
  
    if(num == 0){
    
     res = mul*=a;
    k++
   }
};
console.log('Resultado:',res);
console.log('Pasos:',k);