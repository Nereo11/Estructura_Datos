var a = 0;
var sum = 0;
var arreglo = [];
var i = 0;
var k = 0;

  function isPrime(n) 
 {
     if (n<=1)return false;
     for (var i = 2; i <= n-1; i++)
         if (n % i == 0) return false;
       k++
   return true;
 }


while(i<36){
  if(isPrime(i)){
    arreglo.push(i)

  }
  i++
}


console.log('Pasos: ',k);
console.log(arreglo);