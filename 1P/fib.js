var a = 0;
var b = 1;
var sum = 1;
var arreglo = [0];
var k = 0;

for(i = 0; i < 11; i++){
//Si comienza de 0 el arreglo se pone al principio, si comienza de 1 se pondria al final
 arreglo.push(sum);
 sum = a + b;
 a = b;
 b = sum;

  k++
};





console.log(arreglo);
console.log('Pasos: ', k);