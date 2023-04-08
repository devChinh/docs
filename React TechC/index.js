function nguyento(n){
    var kt = 1
    if (n <2) 
         return kt = 0;  
    var i = 2;
    while(i <n){
        if( n % i==0 ) {
            kt = 0
            break 
        }
        i++
    }
    return kt
}

var array = [1,2,3,4,5,6,7,8,9]
// var array = [4,6,8]

var result = []

for (var i = 0; i < array.length; i++){
  if (nguyento(array[i]) == 1)  
     result.push( array[i] )
}
var a = result.reduce((total,value)=>{
    return total + value
},0)

if(result.length == 0){
    console.log('not found')
}
else{
    console.log(result)
    console.log('===',a)
}
