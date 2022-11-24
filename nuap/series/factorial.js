export default

function factorial (n) {
   if (n == 0){
     return 1
     }
     if (n == 1) {//base case
        return n
    } else {
    
    return  n * factorial( n - 1)
    
    }
}
