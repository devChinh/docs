Các phương pháp tìm kiếm trong chuỗi Javascript 

+ indexOf() ()
+ lastIndexOf ()
+ search()
+ match()
+ matchAll ()
+ includes()

1. lastIndexOf()

- trả về chỉ mục của lần xuất hiện cuối cùng của một văn bản được chỉ định trong một chuỗi

let text = "Please locate where 'locate' occurs!"
text.lastIndexOf("locate")

- Cả  indexOf() và lastIndexOf() trả về -1 nếu không tìm thấy văn bản

- lastIndexOf() chấp nhận tham số thứ hai làm vị trí bắt đầu cho tìm kiếm

VD : 

let text = "Please locate where 'locate' occurs!"
text.indexOf("locate", 15)

- lastIndexOf() tìm kiếm ngược (từ cuối đến đầu), nghĩa là: nếu là tham số thứ hai là 15, tìm kiếm bắt đầu ở vị trí 15 và tìm kiếm đến đầu chuỗi

2 . search()

 - cũng giống như indexOf()

 VD  :
 let str = "Please locate where 'locate' occurs!"
str.search("locate")

- Nhưng mà khác indexOf() là nó search() không chấp nhận tham số thứ 2

3 . match()

- Phương thức match() trả về một mảng chứa kết quả của việc so khớp một chuỗi với một chuỗi

VD  :

let text = "The rain in SPAIN stays mainly in the plain"
text.match("ain")

- match() sẽ chỉ trả về kết quả phù hợp đầu tiên trong chuỗi

3 . matchAll()

- Phương thức matchAll()  trả về một trình lặp có chứa kết quả của việc so khớp một chuỗi với một chuỗi

4 . includes()

- Phương includes()thức trả về true nếu một chuỗi chứa một giá trị được chỉ định.
Nếu không, nó sẽ trở lại false.

VD : 
let text = "Hello world, welcome to the universe.";
text.includes("world")

- nhận tham số thứ 2 là vị trí bắt đầu kiểm tra

VD : Kiểm tra xem một chuỗi có bao gồm "world" hay không. Bắt đầu ở vị trí 12:

let text = "Hello world, welcome to the universe."
text.includes("world", 12)






