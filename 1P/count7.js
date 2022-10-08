var a = 200;
var b = 300;
var num;
var sum = 0;
var mul;
var k = 0;

for ( a = 200; a<b; a++) {
  
  var x = 7; 
  num = a % x;
  
    if(num == 0){
      sum = sum+ 1;
      
   }
  k++
};
console.log(sum);
console.log('Pasos: ',k);
console.time('Se necesitarón');
console.timeEnd('Se necesitarón');