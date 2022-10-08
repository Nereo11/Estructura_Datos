let obj = {'z': 'Hola'}



for(var i = 0; i < 10000;i++){
let name = ('name' + (Math.floor(Math.random()*10000 + 1)))
obj [name]=name 
}



console.log(Object.values(obj).sort)

// obj.name.sort();




console.log(obj);