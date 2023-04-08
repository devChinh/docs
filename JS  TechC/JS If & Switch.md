1 . Câu lệnh if else 

-Câu lệnh if trong Javascript dùng để kiểm tra một mệnh đề nào đó có đúng hay không, nếu đúng thì thực thi những câu lệnh bên trong và ngược lại nếu sai thì nó sẽ bỏ qua những câu lệnh đó

Cú pháp : 
if (condition){
    // code
}

if(condition){
   // code1
}else{
   // code2
}

- Trong đó condition là mệnh đề điều kiện và luôn luôn phải có một trong hai giá trị là true/false hoặc giá trị tương đương như :
+NULL , undefined , chuỗi rỗng  , số 0  => False
+ number khác 0 , array , string , object => TRUE

VD : 
        var a = 12;
        var b = 10;
        
        if (a == b){
            alert('a và b bằng nhau');
        }
        else{
            alert('a và b khác nhau');
        }

 VD : kết hợp nhiều if else
        var a = 12;
        
        if (a > 12){
            alert('a > 12');
        }
        else if (a < 12){
            alert('a < 12');
        }
        else{
            alert('a = 12');
        }
    
VD : Lệnh if else lồng nhau 

        var a = 13;
        
        // Nếu a > 12
        if (a > 12)
        {
            // Khai báo biến b
            var b = 20;
            
            // Nếu a bằng b
            if (a == b)
            {
                alert(' a = b ');
            }
            else { // ngược lại a khác b
                alert(' a != b ');
            }
         }

2 . Toán tử 3 ngôi 
- Nó cũng giống câu điều kiện if else dùng để kiểm tra một mệnh đề nào đó nhưng mà giúp code clean và tối ưu hơn

Cú pháp : variable_name = (condition) ? value1 : value2

VD khi dùng if else 
var exp = 3;
var salary;
if (exp > 3) {
   salary = 1000;
} else {
   salary = 500;
}
console.log(salary) // 500

=> Khi chuyển qua toán tử 3 ngôi 
var exp = 1;
var salary = exp > 3 ? 1000 : 500;
console.log(salary) // 500

VD khi dùng if else lồng nhau

var exp = 2;
var salary;
if ( exp < 1 ) {
   salary = 1000;
} else if ( exp < 2 ) {
   salary = 1500;
} else if ( exp < 3 ) {
   salary = 2000;
} else {
   salary = 3000;
}
console.log(salary) // 2000

=> Khi chuyển qua toán tử 3 ngôi 

var exp = 2;
var salary = exp < 1 ? 1000 : 
                 exp < 2 ? 1500 :
                      exp < 3 ? 2000 : 3000
console.log(salary) // 2000

3 .  Switch case

-Lênh switch case có công dụng giống như lệnh if else đó là đều dùng để rẻ nhánh chương trình, ứng với mỗi nhánh sẽ có một điều kiện cụ thể và điều kiện đó phải sử dụng toán tử so sánh bằng, còn đối với lệnh if else thì bạn có thể truyền vào một mệnh đề bất kì và sử dụng nhiều toán tử khác nhau.

- Cú pháp :
switch (variable)
{
    case value_1 : {
        // do some thing
        break;
    }
    case value_2 : {
        // do some thing
        break;
    }
    default : {
        // do something
    }
}

VD : 
var number = parseInt(prompt("Nhập số cần kiểm tra"));
 
var mod = (number % 2);
 
switch (mod)
{
    case 0 : {
        console.log(number + " là số chẵn")
        break;
    }
    case 1: {
        console.log(number + " là số lẽ")
        break;
    }
    default : {
        console.log("Ký tự bạn nhập không phải số");
    }
}

VD : Nhóm các case 

var color = prompt("Nhập màu cần kiểm tra");
 
switch (color){
    case 'red' : 
    case 'yellow' : 
    case 'blue' : 
        document.write("Bạn nhập màu " + color + ", đúng rồi đó");
        break; 
    default :
        document.write("Màu bạn nhập không có trong hệ thống");
}