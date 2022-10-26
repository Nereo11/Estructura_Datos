import LinkedList from '../../../../nuap/linked/ListaEnlazada.js'
let Lista = new LinkedList()

Lista.prepend(1)
Lista.prepend(2)
Lista.prepend(3)
Lista.prepend(5)

Lista.traverse()
Lista.contains(3)
Lista.getTail()