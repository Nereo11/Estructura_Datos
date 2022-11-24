export default

function power(r,n) {
  
    if (n == 0){
     return 1
     }
     if (n == 1) {//base case
        return r
        
    } else {
    
    return  r * power(r, n - 1)
    
    }

}   



