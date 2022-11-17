class Tree {
  constructor(){
    this.head = null; //Nodo raiz
  }
  raiz(data){
    const node = new Node(data)
    
    if (this.head === null) {
      this.head = node
      return true
    } else {
      return console.log("Ya existe nodo raiz")
    }
  }
  
  right(data){
    const node = new Node(data)
    
    if(this.raiz == true){
    if (this.r === null) {
      this.r = node
      
    } 
      else {
      return console.log("Ya existe nodo")
    }
    }  else {return console.log("No existe nodo raiz")}
  
  }



  
}

class Node {
  constructor(data) {
    this.data = data;
    this.l = null
    this.r = null
  }
}