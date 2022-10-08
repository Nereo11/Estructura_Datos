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


let s = new Stack()

for(i = 0; i < 10; i++){
var num0 = Math.floor(Math.random() * 11);
  var n = num0;

  
  if(n < q.front){

  }else{
   s.enqueue(num0); 
  }


  
};
console.log(s.toString());