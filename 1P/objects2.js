let obj = {}


for(var i = 0; i < 10000;i++){
let name = ('name' + (Math.floor(Math.random()*10000 + 1)))
obj [name]=name
}




var obk = Object.keys(obj)

function up(a,b){ //Acomoda de manera correcta el arreglo
  return b-a
}
// console.log(obk.sort(up))

console.log(obj)
console.log(obk.sort((p,q)=>p < q ? - 1 : p > q ? 1 : 0))




//let obj2 = {};

var obj2 = obk.map(function(elemento){
  var dividir = elemento.split("|");
  return {name: dividir[0]};
});


console.log(obj2);

// var obk2  
// console.log(obk2)
// console.log(obk2.sort((p,q)=>p < q ? - 1 : p > q ? 1 : 0))




//obk.sort((p,q)=>p < q ? - 1 : p > q ? 1 : 0))