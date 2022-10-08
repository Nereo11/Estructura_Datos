var array = [];
let num0;
var a = 0;

for(i = 0; i < 5; i++){
num0 = Math.floor(Math.random() * 6);
array.push(num0);
};
console.log(array);


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
  
  if(contador >= [array.length/2]){
   console.log("Numero Repetido : ", variable)
  console.log("Numero de veces repetidas: ", contador)
    console.log("Pasos", a)
  }else{console.log("No es majority")
       console.log("Pasos", a)}
}

repe(array);