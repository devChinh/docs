I. JavaScrip viết ở đâu

1. Thẻ <script>
Trong HTML, mã JavaScript được chèn vào giữa các thẻ <script>và </script>

VD :
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

2 Có thể đặt thẻ Script ở  trong <head> hoặc <body> hoặc tạo 1 tệp có đuôi là .js

 -Ví dụ  JavaScript function được đặt trong <head>phần của trang HTML

 <!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>

- Ví dụ này, JavaScript function được đặt trong <body>phần của trang HTML.

<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>

- JavaScript bên ngoài

Tập lệnh cũng có thể được đặt trong các tệp bên ngoài:

Tệp bên ngoài: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

dùng thuộc tính src trong thẻ script để đưa logic code js vào trong trang web

<script src="myScript.js"></script>

3 . Ưu điểm của JavaScript bên ngoài
Đặt tập lệnh vào các tệp bên ngoài có một số lợi thế

        + Nó phân tách HTML và mã
        + Nó làm cho HTML và JavaScript dễ đọc và dễ bảo trì hơn
        + Các tệp JavaScript được lưu trong bộ nhớ cache có thể tăng tốc độ tải trang

Để thêm nhiều file JavaScript :

<script src="myScript1.js"></script>
<script src="myScript2.js"></script>