Emmet là một trong những tính năng built-in (được xây dựng sẵn trong vscode) Với Emmet, bạn có thể đẩy nhanh tốc độ làm việc HTML & CSS

1 . Gõ dấu ! thì sẽ tạo cho mình sẵn một khung html basic

2. Các tag cơ bản
Để tạo các thẻ – tag HTML thì chỉ cần gõ tên thẻ và Enter. Emmet sẽ đặt con trỏ chuột trong thẻ đó, lúc này có thể tiếp tục type bên trong thẻ rồi.

Thử type div sau đó Enter, hoặc h1 Enter, hoặc p Enter.
Ngoài ra thì cũng có: bq cho <blockquote>, hdr cho <header>, ftr cho <footer>, btn cho <button>, và sect cho section

3 .Classes  & ID
Nếu bạn đã quen với CSS thì Emmet cũng dùng cách tương tự, dấu . để refer đến class. Để define class với thẻ thì chỉ cần thêm như thế này:

div.wrapper —> <div class="wrapper"></div>
h1.header.center —> <h1 class="header center"></h1>

Làm với ID thì cũng khá tương tự:
div#hero —> <div id="hero"></div>


4 . Ghép chuỗi

Ghép 2 cái trên thì ta có:
div#hero.wrapper —> <div id="hero" class="wrapper"></div>

5 .Attributes – thuộc tính
Ta cũng có thể chỉ định attribute cho tag

img[src="cat.jpg"][alt="Cute cat pic"] —> <img src="cat.jpg" alt="Cute cat pic" />

6.  Content – nội dung
Để “bọc” content trong tag, chỉ cần bỏ chúng giữa 2 dấu ngoặc {}

p{This is a paragraph} —> <p>This is a paragraph</p>

7. Siblings & Children ( anh em & con cái)
Tương tự với siblings và children thì dùng ký tự dấu cộng + và dấu lớn hơn >

section+section —> <section></section><section></section>
ul>li —> <ul><li></li></ul>

8. Climbing up (leo cây) : với dấu : ^

div+div>p>span+em^bq

Kết quả: 
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>

Ở đây  muốn để blockquote nó xuất hiện ngang hàng – same level với paragraph. Vì thế nên mới cần climb up, nếu không thì blockquote sẽ bị nhét vào trong paragraph.

9 .Nhóm
Nếu cấu trúc phức tạp thì bạn có thể nhóm thẻ – group tag thay vì dùng climb up. Ví dụ này mình tạo header và footer (không climb) sử dụng ngoặc đơn ().

div>(header>ul>li>a)+footer>p

Kết quả : 
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>

10 . Phép nhân và ký hiệu $
Bạn có thể tạo tag theo cấp số nhân bằng (*) và đánh số các items theo thứ tự với ký hiệu dollar ($).

ul>li*5 —> <ul><li></li><li></li><li></li><li></li><li></li></ul>
ul>li{Item $}*3 —> <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

11 .Tag ngầm
Có một số thẻ tag không cần type ra mà có thể ngầm hiểu:

Một class lúc đầu không có tag thì sẽ được hiểu là <div>.
.wrapper —> <div class="wrapper"></div>

Class với thẻ emphasis sẽ được hiểu là <span>.
em>.emphasis —> <em><span class="emphasis"></span></em>

Class xác định bên trong list sẽ được hiểu là list item.
ul>.item —> <ul><li class="item"></li></ul>

Class xác định trong table được hiểu là <tr> còn trong row thì là <td>.
table>.row>.col —> <table><tr class="row"><td class="col"></td></tr></table>


12 . Lorem Ipsum
“Lorem Ipsum” là đoạn text fake rất phổ biến được dùng để hiển thị random các giá trị dữ liệu trên trang. Chỉ cần gõ  lorem và bấm Enter. Emmet sẽ tạo ra 30 từ ngẫu nhiên có thể dùng để dàn nội dung trong project.

 cũng có thể tự cho số lượng chữ theo nhu cầu : lorem10 sẽ cho  10 từ random.

Gộp chung lại : 
Thử gộp chung những điều ở trên lại: ul.my-list>lorem10.item-$*5