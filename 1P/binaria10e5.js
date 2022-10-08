var array = [];
let num0;
let k = 0;


for(i = 0; i < 1000000; i++){
num0 = Math.floor(Math.random() * 1000000);
array.push(num0);
};

function up(a,b){return a-b}

binarySearch = function(item){
array.sort(up); //{1}
var low = 0, //{2}
high = array.length - 1, //{3}
mid, element;
while (low <= high){ //{4}
mid = Math.floor((low + high) / 2); //{5}
element = array[mid];//{6}

if (element < item) { //{7}
low = mid + 1;//{8}
} else if (element > item) { //{9}

high = mid - 1; //{10}
} else {
return mid;
//return -1;//{11}
} 
  k++; //contador de pasos aqui!!!! 
}//{12}
  
};

//var y = binarySearch(array[5]);
console.log(array.sort(up));

//console.log(array[10])
console.log(binarySearch(27));
//console.log(array[y])
console.log('pasos', k)
 