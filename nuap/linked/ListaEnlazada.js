/*function Linked(n) {//node
    this.head = n//node
    this.tail = n//node
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.getTail = gatTail
    //this.contains = contains
    this.insertAfter = insertAfter
}

function getHead(){return this.head}

function prepend(n){//new node
    n.next = this.head
    this.head=n
    this.size++
}//Agrega al principio

function append(n){//new node
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){//exists
	//console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

function getTail(params) {
  
}getTail()

function contains(v){}

function insertAfter() {
  
}

let n = new Linked()*/



export default
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
 /*  let elemento = this.head;
    
    //if (!elemento) return null;
 
    while (elemento.data !== data){
      elemento = elemento.next
    }if(elemento.data == data){
      return console.log(data)
    }
   */
    let c=this.head
    while(c){//exists
	//console.log(c.key)
      if(c.data == data){
      console.log("El dato : " + data + " si existe")
      return true }
	c=c.next
  } console.log("El dato que busca no fue creado")
      return false;
  } 
  
  getTail(){
    
    return console.log (this.tail.data)//[this.next-1]
  }
  
  insertAfter(n,d){
    let c = this.head
    
    
    while(c){
     if(c.data == d){
       let m =  new Node(n)
       m.next=c.next
       c.next=m
       return 
     }
      c = c.next
    } return console.log("Ese nodo no existe");
  
    
  }
  
  insertBefore(n,d){
     
     let c = this.head
     let l = c

    
    while(c){
      if(c.data == d){
      //Nodo anterior
       if(d == this.head.data){
       let m =  new Node(n)
        m.next = this.head
        this.head=m
        m.next = l
       return
       }
       else{
       let m =  new Node(n)
       m.next= l.next
       l.next=m
       return }
     }
      l = c
      c = c.next
    } return console.log("Ese nodo no existe");
  }
  
  
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}
  

//let Lista = new LinkedList()





