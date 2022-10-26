var a = 0;
var sum = 0;
var arreglo = [];
var k = 0;

for(i = 1; i < 12; i++){
//Si comienza de 0 el arreglo se pone al principio, si comienza de 1 se pondria al final
 sum = a + i;
 a = sum;
  
 arreglo.push(sum);
  k++
};





console.log(arreglo);
console.log('Pasos: ', k);