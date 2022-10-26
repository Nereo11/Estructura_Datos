class Stack {
    constructor(){
        this.data = []
        //this.top = 10
    }

    push(o){//validate stack not full
     this.data.push(o)
        /*if (this.isFull())
            console.log('full stack')
        else{
            this.data.push(o)
            console.log(o,'added')
        }*/
    }

    print(){
      console.log(this.data)
    }
  
    peek(){
        return this.data[this.data.length-1]
    }

    pop(){//validate stack not empty
      if (this.isEmpty())
            console.log('empty stack')
        else
           this.data.pop()
      
        /*if (this.isEmpty())
            console.log('empty stack')
        else
            console.log(this.data.pop(),'popped')*/
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
}

console.time('Tiempo')

let s = new Stack()
let q = new Stack()

var pasos = 0;

for(var i = 0; i < 10; i++){
var num0 = Math.floor(Math.random() * 11);
  pasos++;
  var n = num0;
  var c = s.peek();
  var d = q.peek();
  var aux = 0;

  while(aux == 0){
   if(s.isEmpty == true){
     pasos++;
     s.push(n);
     pasos++;
   }
    else{
      if(n <= s.peek()){
        pasos++;
        c = s.peek();
        pasos++;
        q.push(c);
        pasos++;
        s.pop();
        pasos++;
      }else{
        
        s.push(n);
        pasos++;
        aux++;
      }
    }
  }
    if(q.size() > 0){
      pasos++;
    while(q.size() > 0){
      d = q.peek();
      pasos++;
      s.push(d);
      pasos++;
      q.pop();
      pasos++;
     }
      pasos++;
   } 
};



console.log(s.size());
console.log(s.print());
console.log("Pasos : " + pasos)
console.timeEnd('Tiempo')

////////////////////////////////////////////
/*
let s = new Stack()
let q = new Stack()

var pasos = 0;

for(var i = 0; i < 100; i++){
var num0 = Math.floor(Math.random() * 101);
  pasos++;
  var n = num0;
  var c = s.peek();
  var d = q.peek();
  var aux = 0;

  while(aux == 0){
   if(s.isEmpty == true){
     pasos++;
     s.push(n);
     pasos++;
   }
    else{
      if(n <= s.peek()){
        pasos++;
        c = s.peek();
        pasos++;
        q.push(c);
        pasos++;
        s.pop();
        pasos++;
      }else{
        
        s.push(n);
        pasos++;
        aux++;
      }
    }
  }
    if(q.size() > 0){
      pasos++;
    while(q.size() > 0){
      d = q.peek();
      pasos++;
      s.push(d);
      pasos++;
      q.pop();
      pasos++;
     }
      pasos++;
   } 
};



console.log(s.size());
console.log(s.print());
console.log("Pasos : " + pasos)
console.timeEnd('Tiempo')
*/
////////////////////////////////////////////
/*let s = new Stack()
let q = new Stack()

var pasos = 0;

for(var i = 0; i < 1000; i++){
var num0 = Math.floor(Math.random() * 1001);
  pasos++;
  var n = num0;
  var c = s.peek();
  var d = q.peek();
  var aux = 0;

  while(aux == 0){
   if(s.isEmpty == true){
     pasos++;
     s.push(n);
     pasos++;
   }
    else{
      if(n <= s.peek()){
        pasos++;
        c = s.peek();
        pasos++;
        q.push(c);
        pasos++;
        s.pop();
        pasos++;
      }else{
        
        s.push(n);
        pasos++;
        aux++;
      }
    }
  }
    if(q.size() > 0){
      pasos++;
    while(q.size() > 0){
      d = q.peek();
      pasos++;
      s.push(d);
      pasos++;
      q.pop();
      pasos++;
     }
      pasos++;
   } 
};



console.log(s.size());
console.log(s.print());
console.log("Pasos : " + pasos)
console.timeEnd('Tiempo')
*/