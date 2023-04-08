I. Class

1 . Class là gì 

- Như là 1 địa chỉ để phân biệt các phần tử trong html và  dễ dàng css cho nó
-Thuộc tính HTML class được sử dụng để chỉ định một lớp cho một phần tử HTML.
- Nhiều phần tử HTML có thể chia sẻ cùng một lớp
- và class có thể được sử dụng cho bất kì phần tử nào 
- Tên lớp thì phần biệt chữ hoa và thường : abc khác Abc


2 . Cú pháp cho CSS

-  Để sử dụng class để CSS :    viết một kí tự dấu chấm sau là tên lớp sau đó xác định các thuộc tính CSS trong dấu ngoặc nhọn
vd :  
<p class="demo">abc</p>
.demo {
  background-color: tomato;
  color: white;
  padding: 10px;
}

3 Nhiều lớp học (class)

- Các phần tử có thể có nhiều class
- Để xác định nhiều lớp , hãy tách tên lớp bằng một khoảng trắng

VD : 
<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>

4 Các phần tử khác nhau có thể chia sẻ cùng một lớp

Các phần tử HTML khác nhau có thể trỏ đến cùng một tên lớp.
Trong ví dụ sau, cả hai <h2>và <p> trỏ đến lớp "demo" và CSS cùng một kiểu

VD : 
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>


II. ID

1 .ID là gì
- Cũng như là class là một địa chỉ để phân biệt phần tử và để CSS  cho phần tử theo ID đó

-Thuộc tính HTML id được sử dụng để chỉ định một id duy nhất cho một phần tử HTML.
-Bạn không thể có nhiều hơn một phần tử có cùng một id trong một tài liệu HTML.

- Thuộc tính id chỉ định một id duy nhất cho một phần tử HTML. Giá trị của id thuộc tính phải là duy nhất trong tài liệu HTML.

2 Cú pháp 
 - viết một ký tự  #, theo sau là tên id. Sau đó, xác định các thuộc tính CSS trong dấu ngoặc nhọn {}.

 * Note :  + ID cũng phân biệt chữ hoa chữ thường 
                +  không được bắt đầu bằng số , không được chứa khoảng trắng

3 Sự  khác nhau giữa class và id

- Vì trong html chỉ có thể có duy nhất 1 ID còn class thì ngược lại , nên trong trường hợp muốn css cho nhiều phần thử giống nhau thì thì class tiện hơn rất nhiều

4 Dùng ID để tạo liên kết dấu trang    
- Dấu trang HTML được sử dụng để cho phép người đọc chuyển đến các phần cụ thể của trang web.

VD : 
<p><a href="#C2">Jump to Chapter 4</a></p> 
<p><a href="#C4">Jump to Chapter 10</a></p>

<h2>Chapter 1</h2>
<p>This chapter explains ba bla bla</p>

<h2 id="C2">Chapter 2</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 3</h2>
<p>This chapter explains ba bla bla</p>

<h2 id="C4">Chapter 4</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 5</h2>
<p>This chapter explains ba bla bla</p>
