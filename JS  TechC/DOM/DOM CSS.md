DOM CSS là  truy xuất đến DOM của các thẻ HTML và thay đổi các thuộc tính CSS của nó thông qua đối tượng style

Các thẻ html đều có thuộc tính style, nhưng ta không thể sử dụng DOM HTML để thiết lập hay xóa bỏ CSS được mà phải thông qua một đối tượng biệt khác, đó là <style>

Đối tượng style này sẽ chứa tất cả các thuộc tính của CSS giúp ta dễ dàng thao tác với chúng

Cú pháp thiết lập CSS bằng Javascript:
document.getElementById("object").style.cssName = 'something'

Cú pháp lấy giá trị CSS bằng Javascript:
document.getElementById("object").style.cssName;

Trường hợp thuộc tính có dấu gạch ngang như: font-size, line-height, margin-bottom thì thì nó sẽ có tên là fontSize, lineHeight, marginBottom ,nghĩa là sẽ bỏ đi dấu gạch ngang và viết hoa ký tự đầu tiên của chữ thứ hai

VD :
document.getElementById("object").style.fontSize = 'something';
document.getElementById("object").style.lineHeight = 'something';
document.getElementById("object").style.marginBottom = 'something';

VD : 
<h1 id="id1">My Heading 1</h1>

<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>