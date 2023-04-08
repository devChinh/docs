1 . Default Paramerter Value giúp đặt giá trị mặc định cho tham số 


VD : function say(message='Hi') {
    console.log(message);
}

say()
say('Hello') 


- Trong JavaScript, các tham số hàm mặc định cho phép bạn khởi tạo các tham số đã đặt tên với các giá trị mặc định nếu không có giá trị nào hoặc undefined được truyền vào hàm

2 . Cú pháp

function  function_name( param1 = defaultValue1 , param2 = defaultValue2 ) {  
   // code
}

3 . Ví dụ về tham số mặc định

VD1 : 

function sum(a=5, b=7)  
{  
    return a+b
}  

console.log(" Sum of the numbers is : " + sum())
console.log(" Sum of the number is : " + sum(3))
console.log(" Sum is : " + sum(7,3))


VD 2 : 

function example1(y = 8) {  
  console.log(y)
}  

example1(undefined)

VD3 : 

function example2(a = 5)  
{  
    console.log(typeof a)
    console.log("The value of a is: " + a)
}  

example2()
example2(undefined) 
example2('')
example2(null)

VD4 : 

function combine(value, array = []) {  
    array.push(value)  
    return array  
}  

console.log(combine(1))
console.log(combine(2))  

VD5 : 

function add(x, y = 1, z = 2) {
    return x + y + z
}

add(10)
add(10, 20)
add(10, 20, 30)

