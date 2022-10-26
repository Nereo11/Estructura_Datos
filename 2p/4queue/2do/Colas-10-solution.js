function Queue() {
    this.dataStore = []
   // this.top = 10

    this.enqueue= function(element) {
      this.dataStore.push(element)}
	/*if (this.full())
    console.log('full stack')
    else{
    this.dataStore.push(element)
    }
    }*/

    this.dequeue= function() { 
       if (this.empty())
            console.log('empty')
        else
         this.dataStore.shift()
            //console.log(this.dataStore.shift(),'Eliminado')
    }

    this.front= function() {
	return this.dataStore[0]
    }

    this.back= function() {
	return this.dataStore[this.dataStore.length-1]
    }

    this.toString= function() {
	let retStr = "";
	for (let i = 0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	}
	return retStr
    }

    this.empty= function() {
	if (this.dataStore.length == 0)
	    return true	
	else 
	    return false
	
    }

    this.full= function() {
	if (this.dataStore.length === this.top)
	    return true	
	else 
	    return false
    }

    this.size=function() {
      return this.dataStore.length;
    }
}
/*class Stack {
    constructor(){
        this.data = []
        //this.top = 5
    }

    push(o){//validate stack not full
   this.data.push(o)}

    peek(){
        return this.data[this.data.length-1]
    }

    pop(){//validate stack not empty
        if (this.isEmpty())
            console.log('empty stack')
        else
            this.data.pop()
    }

    isEmpty(){
        if (this.data.length === 0)//this.size()
            return true
        else
            return false
    }

    isFull(){
        if (this.data.length === this.top)
            return true
        else
            return false
    }

    size(){
     return this.data.length
    }

    search(k){
    for(var i=0; i < this.data.length;i++){
      if(this.data[i]==k){
      console.log("El numero:", k," esta dentro ")
      console.log("La posicion del numero:", k," es:  ", i)
      return}
      }return  console.log("No se encontro")
    }
  
    traverse(){}

    toString(){}
    makeEmpty(){
        this.data = []
    }
}*/

console.time('Tiempo')
/*
let s = new Queue()
let q = new Queue()

var pasos = 0;

for(var i = 0; i < 10; i++){
var num0 = Math.floor(Math.random() * 11);
  pasos++;
  var n = num0;
  var c = s.front();
  var d = q.front();
  var aux = 0;

  while(aux == 0){
   if(s.empty == true){
      pasos++;
     s.enqueue(n);
     pasos++;
   }
    else{
      if(n >= s.front()){
         pasos++;
        c = s.front();
         pasos++;
        q.enqueue(c);
         pasos++;
        s.dequeue();
        pasos++;
      }else{
        q.enqueue(n);
        if(s.size() > 0){
        while(s.size() > 0){
           pasos++;
           c = s.front();
           pasos++;
          q.enqueue(c);
           pasos++;
          s.dequeue();
          pasos++;
     }
          pasos++
   } 
         pasos++;
        aux++;
      }
    }
  }
    if(q.size() > 0){
    while(q.size() > 0){
       pasos++;
      d = q.front();
       pasos++;
      s.enqueue(d);
       pasos++;
      q.dequeue();
      pasos++;
     }
      pasos++;
   } 
};

console.log(s.toString());
console.log("Pasos : " + pasos);
console.timeEnd('Tiempo')
*/
////////////////////////////////
/*
let s = new Queue()
let q = new Queue()

var pasos = 0;

for(var i = 0; i < 100; i++){
var num0 = Math.floor(Math.random() * 101);
  pasos++;
  var n = num0;
  var c = s.front();
  var d = q.front();
  var aux = 0;

  while(aux == 0){
   if(s.empty == true){
      pasos++;
     s.enqueue(n);
     pasos++;
   }
    else{
      if(n >= s.front()){
         pasos++;
        c = s.front();
         pasos++;
        q.enqueue(c);
         pasos++;
        s.dequeue();
        pasos++;
      }else{
        q.enqueue(n);
        if(s.size() > 0){
        while(s.size() > 0){
           pasos++;
           c = s.front();
           pasos++;
          q.enqueue(c);
           pasos++;
          s.dequeue();
          pasos++;
     }
          pasos++
   } 
         pasos++;
        aux++;
      }
    }
  }
    if(q.size() > 0){
    while(q.size() > 0){
       pasos++;
      d = q.front();
       pasos++;
      s.enqueue(d);
       pasos++;
      q.dequeue();
      pasos++;
     }
      pasos++;
   } 
};

console.log(s.toString());
console.log("Pasos : " + pasos);
console.timeEnd('Tiempo')
*/
////////////////////////////////
let s = new Queue()
let q = new Queue()

var pasos = 0;

for(var i = 0; i < 1000; i++){
var num0 = Math.floor(Math.random() * 1001);
  pasos++;
  var n = num0;
  var c = s.front();
  var d = q.front();
  var aux = 0;

  while(aux == 0){
   if(s.empty == true){
      pasos++;
     s.enqueue(n);
     pasos++;
   }
    else{
      if(n >= s.front()){
         pasos++;
        c = s.front();
         pasos++;
        q.enqueue(c);
         pasos++;
        s.dequeue();
        pasos++;
      }else{
        q.enqueue(n);
        if(s.size() > 0){
        while(s.size() > 0){
           pasos++;
           c = s.front();
           pasos++;
          q.enqueue(c);
           pasos++;
          s.dequeue();
          pasos++;
     }
          pasos++
   } 
         pasos++;
        aux++;
      }
    }
  }
    if(q.size() > 0){
    while(q.size() > 0){
       pasos++;
      d = q.front();
       pasos++;
      s.enqueue(d);
       pasos++;
      q.dequeue();
      pasos++;
     }
      pasos++;
   } 
};

console.log(s.toString());
console.log("Pasos : " + pasos);
console.timeEnd('Tiempo')
