//1.- inserAfter
//
//-> c char
//<--True is inserted
//<--False if not found
//
//insertBefore(newNode,'b')
//

//2.- insertBefore
//
//-> c char
//<--True is inserted
//<--False if not found
//
//insertBefore(newNode,'b')
//utilizamos variable temporal para guardar nodo anterior y despues insertarlo
class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null 
    this.tail = null
    this.Size = 0
   
  }

  prepend(data) {
    const node = new Node(data)

    if (this.head === null) {
      this.head = node
      //this.tail = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
      this.tail = current.next
    }

    this.Size++
  }

   append(data) {
    if (this.head === null) {
      return null
    }

    let current = this.head
    let prev = null
    while (current.data !== data) {
      prev = current
      current = current.next
    }
    if (prev === null) {
      this.head = current.next
    } else {
      prev.next = current.next
    }
    this.Size--
    return data
  }

  size() {
    return this.Size
  }

  isEmpty() {
    return this.head === null
  }

  traverse(){
    let c=this.head
    while(c){//exists
	//console.log(c.key)
	console.log(c.data)
	c=c.next
  }
  }
  
  contains(data){
    let elemento = this.head;
    
    //if (!elemento) return null;
 
    while (elemento.data !== data){
      elemento = elemento.next
    }if(elemento.data == data){
      return console.log(data)
    }
  }  

  getTail(){
    
    return console.log (this.tail.data)//[this.next-1]
  }
  
  insertAfter(){}
  
  insertBefore(){}

  
  
  
}
let Lista = new LinkedList()

Lista.prepend("a")
Lista.prepend("b")
Lista.prepend("d")
Lista.traverse()

Lista.insertAfter("")