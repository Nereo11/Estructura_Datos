var arreglo = [];
let num0;
var a = 0;
var majority = 0;

for(i = 0; i < 5; i++){
num0 = Math.floor(Math.random() * 6);
arreglo.push(num0);
};
function up(a,b){ //Acomoda de manera correcta el arreglo
  return a-b
}
arreglo.sort()
console.log(arreglo.sort(up))
const repe = (arreglo) => {
    let variable = 0;
    let contador = 0;
    let cuenta = 0;
    arreglo.map(p => {
        cuenta = 0
        arreglo.map(x => {
            if (p == x) { cuenta++
                        a++}
        })
        if (cuenta > contador) {
            contador = cuenta;
            variable = p;
        }
    });
  
  if(contador >= [arreglo.length/2]){
   console.log("Numero Repetido : ", variable)
  console.log("Numero de veces repetidas: ", contador)
    console.log("Pasos", a)
  }else{console.log("No es majority")}
}

repe(arreglo);