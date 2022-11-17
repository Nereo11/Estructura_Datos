export default

function inorder(n){
  //
  if (n!==null){
    //console.log(n.d)
    inorder(n.l)
    console.log(n.d)
    inorder(n.r)
  }
}