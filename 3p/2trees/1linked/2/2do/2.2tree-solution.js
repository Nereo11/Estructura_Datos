//import Node from '../../../../../nuap/linked/node.js'

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

import inorder from '../../../../../nuap/tree/inorder.js'
import posorder from '../../../../../nuap/tree/posorder.js'




let p = new Node('+')
let o1 = new Node(1)
let o2 = new Node(2)

let q1 = new Node(3)
let q2 = new Node(4)

p.l = o1
p.r = o2

o2.l = q1 
o2.r = q2 

inorder(p)
console.log("-------- INORDER")
posorder(p)
console.log("-------- POSORDER")