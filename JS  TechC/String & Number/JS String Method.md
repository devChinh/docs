I.  chuỗi và làm việc với chuỗi trong javascript

        + length()
        + indexOf()
        + slice()
        + substring()
        + substr()
        + replace()
        + toUpperCase()
        + toLowerCase()
        + concat()
        + trim()
        + split()
        + charAt()


1. length : kiểm tra độ dài của chuỗi

2 . indexOf : thức trả về vị trí của phần tử  xuất hiện lần đầu tiên của một chuỗi 
VD : 

let str = "Please locate where 'locate' occurs!"
str.indexOf("locate")

- chấp nhận tham số thứ hai làm vị trí bắt đầu cho tìm kiếm
- Nếu không tìm thấy phần tử trong chuỗi thì sẽ trả về -1

Note : 
JavaScript đếm các vị trí từ 0.
Vị trí đầu tiên là 0
Vị trí thứ hai là 1

3 .  slice cắt kí tự 

slice() trích xuất một phần của chuỗi và trả về phần được trích xuất trong một chuỗi mới.

Phương thức nhận 2 tham số: vị trí bắt đầu và vị trí kết thúc (không  bắt buộc vị trí  kết thúc , nếu k có vị trí kết thúc thì nó sẽ cắt từ vị trí bắt đầu đến hết chuỗi)

VD  :
let text = "Apple, Banana, Kiwi"
let part = text.slice(7, 13);


+ Nếu một tham số là số âm, vị trí được tính từ cuối chuỗi:

VD : 
let text = "Apple, Banana, Kiwi"
let part = text.slice(-12 , -6)

4. substring() tương tự như slice()

Sự khác biệt là các giá trị bắt đầu và kết thúc nhỏ hơn 0 được coi là 0 substring() có nghĩ là nó k làm gì cả 

VD : 
let str = "Apple, Banana, Kiwi"
let part = str.substring(7, 13)

5 . substr() tương tự như slice()

Sự khác biệt là tham số thứ hai chỉ định độ dài của phần được trích xuất chứ k còn là vị trí kết thúc nữa

VD :
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6)

Note : Nếu tham số đầu tiên là số âm, vị trí sẽ được tính từ cuối 
chuỗi như slice()


6 Replace : ghi đè 
Phương replace()thức thay thế một giá trị được chỉ định bằng một giá trị khác trong một chuỗi

VD :
let text = "Please visit Microsoft and Microsoft ";
let newText = text.replace("Microsoft", "TechC")

Note : 
+ Phương thức replace() trả về một chuỗi mới
+ Phương thức replace() chỉ thay thế kết quả phù hợp đầu tiên
+ Theo mặc định, phương thức replace() này có phân biệt chữ hoa chữ thường. Viết MICROSOFT (với chữ hoa) sẽ không hoạt động

7 . toUpperCase : chuyển chuỗi thành chữ hoa

8 . toLowerCase : chuyển chuỗi thành chữ thường

9 . concat : nối hai hoặc nhiều chuỗi

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(text2)

Phương thức  concat() này có thể được sử dụng thay cho toán tử cộng. Hai dòng này thực hiện tương tự:

VD : 

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

10 . Trim : loại bỏ khoảng trốnng bên lề của 2 bên

VD : 
let text1 = "      Hello World!      ";
let text2 = text1.trim();

11 . Split : cắt chuỗi thành các phần tử riêng biệt bằng cách tìm điểm chung
và một chuỗi có thể được chuyển đổi thành một mảng với split()

VD : 
let text = "Hello my name Cikey"
text.split(" ")

12.  charAt : lấy 1 kí tự bởi 1 index cho trước

VD : 
let text = "HELLO WORLD"
let char = text.charAt(0)