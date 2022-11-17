export default

function posorder(n){
  //
  if (n!==null){
    posorder(n.l)
    //console.log(n.d)
    posorder(n.r)
    console.log(n.d)
  }
}
