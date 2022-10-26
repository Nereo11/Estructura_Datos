var array = [];
let num0;

for(i = 0; i < 100000; i++){
num0 = Math.floor(Math.random() * 100000);
array.push(num0);
};


function secuencial(num){
for(var i=0; i < array.length;i++){
  if(array[i]==num){
    console.log("El numero:", num," esta dentro del array")
    console.log('Posición', i)
    console.log('Pasos', i)
      return   
    //En caso de querer saber todas las posiciones donde se encuentra ese numero se elimina "return"
  }
  
}return  console.log("No se encontro")
}

console.log(array)
console.log(secuencial(10))