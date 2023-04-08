HTML DOM là các cách truy xuất đến các phần tử HTML  cho phép JavaScript thay đổi nội dung và giá trị thuộc tính của các phần tử HTML

1. Thay đổi nội dung HTML

Cách dễ nhất để sửa đổi nội dung của một phần tử HTML là sử dụng thuộc tính innerHTML

Để thay đổi nội dung của một phần tử HTML, hãy sử dụng cú pháp sau:

document.getElementById(id).innerHTML = new HTML

Ví dụ này thay đổi nội dung của một <p>phần tử:

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

Hoặc như này

<script>
const element = document.getElementById("p1").innerHTML;
element.innerHTML = "New text";
</script>

2 . Thay đổi giá trị của một thuộc tính

Để thay đổi giá trị của thuộc tính HTML, hãy sử dụng cú pháp sau:

document.getElementById(id).attribute = new value

Ví dụ này thay đổi giá trị của thuộc tính src của một <img>phần tử:

Thí dụ
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>

3 . Nội dung HTML động

JavaScript có thể tạo nội dung HTML động

Thí dụ
<!DOCTYPE html>
<html>
<body>
Nội dung HTML động
JavaScript có thể tạo nội dung HTML động:

VD :
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Date : " + Date();
</script>

Bổ sung thêm một phương thức : document.write ()

Trong JavaScript, document.write()có thể được sử dụng để ghi trực tiếp vào luồng đầu ra HTML