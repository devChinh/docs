I . Vòng lặp for
-Vòng lặp for trong javascript là vòng lặp được dùng để lặp một mảng hoặc một danh sách nằm trong khoảng (min -> max)

 1 .Cú pháp : 
var i = 0;
for (i = 0; i < 100; i++){
    // Dòng lệnh xử lý vòng lặp
}

-var i = 0; là khai báo biến điều khiển vòng lặp i
-(i = 0) là điểm bắt đầu lặp (lặp từ 0)
-(i < 100) là điều kiện dừng vòng lặp, nghĩa là lặp nếu i < 100. Bạn có thể dùng một điều kiện bất kì thông qua các toán tử miễn là nó trả về true hoặc false như (i <= 100, i == 100)
-(i++) là tăng bước nhảy, bạn có thể dùng công thức khác như i+=2, i-=2, i--, ...

2 .Cách sử dụng vòng lặp for trong javascript

VD1 :
var i
for (i = 0; i < 10; i++){
    console.log(i + '<br/>')
}

- có thể khai báo biến i trong vòng lặp
for (var i = 0; i < 10; i++){
    console.log(i + '<br/>')
}

VD2 : lặp với bước nhảy tăng N đơn vị
var i
var n = 2
for (i = 0; i < 10; i+=n){
    console.log(i + '<br/>')
}

3 . Vòng lặp lồng nhau 
VD : 
for (var i = 0; i <= 9; i++)
{
    for (var j = 0; j <= 9; j++){
        console.log(i,j)
    }
}

II. Vòng lặp while  / do while
- Vòng lặp while và do while dùng để lặp với trường hợp tá không biết chính xác số lần lặp là bao nhiêu và trường hợp điều kiện dừng vòng lặp quá phức tạp

1 . vòng lặp while
while (condition){
    // do something
}

Note : Trong đó condition là điều kiện dừng vòng lặp, nếu condition đúng thì vòng lặp sẽ được thực thi cho tới khi condition có giá trị sai. Chính vì vậy nếu condition luôn luôn đúng thì vòng lặp sẽ dẫn tới lặp vô hạn.

VD : 
var i = 1;
while (i <= 10){
    console.log(i + '<br/>');
    i++; // tăng i lên nếu không sẽ bị lặp vô hạn
}

VD : Lặp với điêu kiện phức tạp hơn ,lấy thông tin từ người dùng, nếu người dùng nhập vào số trong khoảng 1 -> 10 thì dừng, ngược lại thì yêu cầu họ nhập lại.

var value = null;
while (value < 1 || value > 10){
    value = prompt("Nhập vào số từ 1 -> 10");
}
alert("Số bạn vừa nhập là " + value);

2 . Vòng lặp do while

do {
    // some thing
}
while (condition);

VD : Lặp với điêu kiện phức tạp hơn ,lấy thông tin từ người dùng, nếu người dùng nhập vào số trong khoảng 1 -> 10 thì dừng, ngược lại thì yêu cầu họ nhập lại

var value = null;
 
do {
    value = prompt("Nhập vào số từ 1 -> 10");
}
while (value < 1 || value > 10);
 
alert("Số bạn vừa nhập là " + value);

