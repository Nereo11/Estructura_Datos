/* let graph =  [
    [0, 2, 5, 7],//1 
    [2, 0, 8, 3],//2 
    [5, 8, 0, 1],//3 
    [7, 3, 1, 0],//4
] */

import {Graph} from '../../../nuap/graph/digraph.js'

 let g = new Graph(10);
 g.addEdge(0,1);
 g.addEdge(0,2);
 g.addEdge(0,4);
 g.addEdge(1,3);
 g.addEdge(2,4);
 g.addEdge(2,5);
 g.addEdge(2,6);
 g.addEdge(5,4);
 g.addEdge(8,4);
 g.addEdge(9,4);
 g.deletEdge(0,4);
 g.deletEdge(0,1);
 g.showGraph();
 
 g.search(0);



//INTEGRANTES
//Aranda Peregrina Nereo Uriel
//Castrejón Mejía Evelyn Fernanda
//Cervantes Ramírez José Luis
//Torres Lozoya Jorge Antonio
//Verdín Aguilar Mónica Gabriela