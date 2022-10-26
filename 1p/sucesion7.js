var a = 200;
var b = 300;
var array = [ ];
var num;
var k = 0;

for ( a = 200; a<b; a++) {
  
  var x = 7; //Numero multiplo 
  
  num = a % x; //El operador módulo 
  
    if(num == 0){
    array.push(a);
      k++;
   }
};
console.log(array);
console.log('Numero de pasos', k);
