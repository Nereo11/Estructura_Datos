
/*function preorder(n){
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}*/
function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

import preorder from '../../../../../nuap/tree/preorder.js'




let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)

let q1 = new Node(-2)
let q2 = new Node(7)

p.l = o1
p.r = o2

o2.l = q1 
o2.r = q2 

preorder(p)