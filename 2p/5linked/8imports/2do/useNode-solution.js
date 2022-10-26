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


import LinkedList from '../../../../nuap/linked/ListaEnlazada.js'

let Lista = new LinkedList()

Lista.prepend("a")
Lista.prepend("b")
Lista.prepend("e")


Lista.insertAfter("c","b")
Lista.insertBefore("u","c")
//Lista.getTail()

Lista.traverse()