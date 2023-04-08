1. Cách khai báo 1 biến 
 -  sử dụng từ khoá : <var> , <let> , <const>
VD : var number 
 - dùng từ khoá var để khai báo 1 biến
- gán giá trị cho biến bằng dấu "="
 vd : var number = 1 
        var name = "Cikey" 
        var myAddress = "Ha Noi"
Hoặc : var number = 1 , name = "Cikey" , myAddress = "Ha Noi"

2 .Các kiểu dữ liệu 
 + number  VD :  1 , 3, 4 , 5,6
 + string :   VD : cikey , bảo , khoa 
  + object  : {name : 'cikey' , address : 'Ha Noi'}
 + array :     VD :  [1,2,3,4,5] , ['a' , 'b' , 'c' , 'd'] , [{name : 'cikey'} , {address : 'Ha Noi '}]
 
 + undefined  : có nghĩa là không xác định. Trong javascript, khi bạn khai báo một biến nhưng chưa gán giá trị cho nó, giá trị của biến đó sẽ là undefined

 VD : var test;
alert(test);      //undefined

var test = undefined;
alert(test)       //undefined

 + null : có nghĩa là giá trị rỗng hoặc giá trị không tồn tại, nó có thể được sử dụng để gán cho một biến như là một đại diện không có giá trị

 var test = null;
alert(test);          //null

 + boolean : true và false

Note : Khi thêm một số và một chuỗi, JavaScript sẽ coi số đó là một chuỗi

VD : var x = 16 + "Volvo"  =>  16Volvo
        var  x = "Volvo" + 16  => Volvo16

* JavaScript đánh giá các biểu thức từ trái sang phải. Các trình tự khác nhau có thể tạo ra các kết quả khác nhau

VD : let x = 16 + 4 + "Volvo"  => 20Volvo       
Trong ví dụ này, JavaScript coi 16 và 4 là số, cho đến khi nó đến "Volvo".

let x = "Volvo" + 16 + 4 => Volvo164
Trong ví dụ này , vì toán hạng đầu tiên là một chuỗi nên tất cả các toán hạng đều được coi là chuỗi


- JavaScript có các kiểu động. Điều này có nghĩa là cùng một biến có thể được sử dụng để chứa các kiểu dữ liệu khác nhau:

Thí dụ

let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

- Chuỗi JavaScript

Chuỗi (hoặc chuỗi văn bản) là một chuỗi các ký tự như "John Doe" , "Cikey", "abc" , .. bản chất là nó như kiểu dữ liệu string 

Chuỗi được viết với dấu ngoặc kép hoặc đơn


3 . Typeof & Console.log

- Hàm console.log là hàm dùng để in giá trị của một ô biến , debug ,kiểm tra một biến bên ngoài ô console của inspect element
- Để xem những lỗi error của trình duyệt trong quá trình mình code

Cú pháp : console.log(value)

VD
Cách 1 : 
var name = "cikey"
console.log(name)

Cách 2 : 
console.log("cikey")

 - Typeof trả về một chuỗi là loại JS cho một giá trị nhất định nào đó
 VD  : var name = "Cikey"
 - Cú pháp :  typeof name or typeof (name) => string

 Note : Đối với mảng , object và null thì typeof đều ra object

4 . Các hàm  alert , confirm ,prompt

- Đây là ba hàm thường được sử dụng tạo hộp thoại thông báo và lấy thông tin từ người dùng.

-Hàm alert() : dùng để thông báo cho trình duyêt một popup , có 1 tham số truyền vào , đó là nội dung mà ta muốn thông báo tới người dùng

- Hàm confirm() cũng sẽ xuất hiện một thông báo popup nhưng nó có thêm hai sự lựa chọn là Yes và No, nếu người dùng chọn Yes thì nó trả về TRUE và ngược lại nếu chọn NO thì nó sẽ trả về FALSE. Nó cũng có một tham số truyền vào và tham số này chính là nội dung thông báo.

-Hàm prompt() dùng để lấy thông tin từ người dùng, gồm có hai tham số truyền vào là nội dung thông báo và giá trị ban đầu nếu người dùng không nhập vào thì giá trị nó sẽ trả về là NULL







