JavaScript Template Literals  là một cú pháp mới để khai báo String trong Javascript được giới thiệu trong ES6(là phiên bản nâng cấp của ES5 ) Nó cho phép chúng ta sử dụng multi-line string, sử dụng biến, biểu thức, hàm bên trong string mà không phải thông qua phép cộng string

- JavaScript Template Literals sử dụng dấu tích (``) thay vì dấu ngoặc kép ("") để xác định một chuỗi

Tạo multi-line string từ template literals

VD : 
var multiLine = `i am cikey
    i am a teacher`


VD  : let text = `Hello World!`  hiện thị như là một string bình thường 


- Các ký tự mẫu cung cấp một cách dễ dàng để nội suy các biến và biểu thức thành chuỗi
Phương pháp này được gọi là nội suy chuỗi
Cú pháp là: ${...}

VD : 
let firstName = "John"
let lastName = "Doe"

let text = `Welcome ${firstName}  ${lastName}!`

VD : 
var cat = `Con mèo`
var embededVar = `${cat} đang bay?`; // Con mèo đang bay?

var price = 500
var embededEx = `1 cái kem giá ${price}đ // 1 cái kem giá 500đ

Tự động thay thế các biến bằng các giá trị thực của biến đó được gọi là nội suy chuỗi 

VD : Template Literals cho phép các biểu thức trong chuỗi:

Thí dụ
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`





