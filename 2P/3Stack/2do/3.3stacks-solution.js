/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Using a array-based stack implementation
 * method search
 *
 */

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
s.push(4)
s.push(0)
s.push(3)
s.push(2)
s.push(1)
s.push(5)
console.log('size',s.size())
s.search(3)
var n = 100;
console.log(s.peek())
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
console.log('size',s.size())
s.pop()
s.push(n)