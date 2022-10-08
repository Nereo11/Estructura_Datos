function Queue() {
    this.dataStore = []
    this.top = 10

    this.enqueue= function(element) {
	if (this.full())
    console.log('full stack')
    else{
    this.dataStore.push(element)
    }
    }

    this.dequeue= function() { 
       if (this.empty())
            console.log('empty')
        else
            console.log(this.dataStore.shift(),'Eliminado')
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
}
class Stack {
    constructor(){
        this.data = []
        this.top = 5
    }

    push(o){//validate stack not full
        if (this.isFull())
            console.log('full stack')
        else{
            this.data.push(o)
            console.log(o,'added')
        }
    }

    peek(){
        return this.data[this.data.length-1]
    }

    pop(){//validate stack not empty
        if (this.isEmpty())
            console.log('empty stack')
        else
            console.log(this.data.pop(),'popped')
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

let q = new Queue()
let s = new Stack()


for(i = 0; i < 10; i++){
var num0 = Math.floor(Math.random() * 11);
  var n = num0;

  
  if(n < q.front){
  var b = q.front
  s.push(b)
  q.dequeue()
  q.enqueue(n)
  var b = s
  }else{
   q.enqueue(num0); 
  }


  
};
console.log(q.toString());