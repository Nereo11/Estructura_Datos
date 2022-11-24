 class Graph {
    constructor(v){
     this.vertices = v;
     this.edges = 0;
     this.adj = [];
     for (var i = 0; i < this.vertices; ++i) {
     this.adj[i] = [];
     this.adj[i].push("");
     }
    }

     addEdge(v,w) {
     this.adj[v].push(w);
     this.edges++;
     }
     
      deletEdge(v,w) {
        this.adj[v].splice(this.adj[v].indexOf(w), 1)
        //this.adj[w].splice(this.adj[w].indexOf(v),1)
      this.edges--;
     }
     
     /*eliminar(v) {
          for (var i = 0; i < this.vertices; ++i){
          if(v == i){
        //let filtro;
        //filtro=this.adj.filter((e,i)=>i==v)
        this.adj[v].splice(0)//(this.adj[v].indexOf(v),1);
        this.adj[i].pop()
        return
         //this.edges--;
          }
      }//console.log("Este nodo no existe")
     
     }*/
     
      search(v){
          for (var i = 0; i < this.vertices; ++i){
          if(v == i){
        let filtro;
        filtro=this.adj.filter((e,i)=>i==v)
        console.log(i);
        console.log(filtro);
        return
          }
      }console.log("Este nodo no existe")
      }

   showGraph() {
     for (var i = 0; i < this.vertices; ++i) {
     console.log(i + " -> ");
     for (var j = 0; j < this.vertices; ++j) {
     if (this.adj[i][j] != undefined)
     console.log(this.adj[i][j] + ' ');
     }
     console.log();
    }
     }
 }


export {Graph}