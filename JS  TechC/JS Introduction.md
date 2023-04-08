I . Trong bài này mình sẽ làm một vài ví dụ về những gì javascript có thể làm

1. JavaScript có thể thay đổi nội dung HTML

Một trong nhiều phương pháp HTML JavaScript là getElementById() với innerHTML

Ví dụ dưới đây "tìm" một phần tử HTML (với id = "demo") và thay đổi nội dung phần tử (innerHTML) thành "Hello JavaScript"

Thí dụ
document.getElementById("demo").innerHTML = "Hello JavaScript"

 2 . JavaScript có thể thay đổi giá trị thuộc tính HTML 
 
 ví dụ JavaScript thay đổi giá trị của thuộc tính src của <img>thẻ

 <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the

3 JavaScript có thể thay đổi style HTML (CSS)

VD : document.getElementById("demo").style.fontSize = "35px";

4 JavaScript có thể ẩn hiện các phần tử HTML 

VD : document.getElementById("demo").style.display = "block";

Note : JavaScript chấp nhận cả dấu ngoặc kép và dấu nháy đơn



