I . Comment trong JS

Nhận xét JavaScript có thể được sử dụng để giải thích mã JavaScript và làm cho nó dễ đọc hơn

1 . Nhận xét dòng đơn

Nhận xét dòng đơn bắt đầu bằng //
Bất kỳ văn bản nào giữa // và cuối dòng sẽ bị JavaScript bỏ qua (sẽ không được thực thi)

Ví dụ này sử dụng chú thích một dòng trước mỗi dòng mã:

VD : 

// Change heading:
document.getElementById("myH").innerHTML = "My First Page"

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph."

Ví dụ này sử dụng một dòng chú thích ở cuối mỗi dòng để giải thích mã:

VD : 
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2

2 Nhận xét nhiều dòng

Nhận xét nhiều dòng bắt đầu bằng /*và kết thúc bằng */
Bất kỳ văn bản nào giữa /*và */sẽ bị JavaScript bỏ qua

VD : 
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

3 Sử dụng nhận xét để ngăn chặn việc thực thi

Việc sử dụng các chú thích để ngăn chặn việc thực thi mã là phù hợp để kiểm tra mã.

Việc thêm // vào phía trước một dòng mã sẽ thay đổi các dòng mã từ một dòng thực thi thành một nhận xét

VD : 

//document.getElementById("myH").innerHTML = "My First Page"
document.getElementById("myP").innerHTML = "My first paragraph."

/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/

