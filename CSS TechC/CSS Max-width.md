1 Sử dụng width hay max-width ?

Như đã đề cập trong các bài học trước  trước , một phần tử cấp khối (block) luôn chiếm toàn bộ chiều rộng có sẵn (trải dài sang trái và phải hết mức có thể).

Những khi mà đặt CSS là width : 500px chẳng hạn thì trên giao diện , trên thiết bị nào nó cũng sẽ có width là 500px nên là  khi cửa sổ trình duyệt nhỏ hơn chiều rộng của phần tử thì trình duyệt sẽ thêm một thanh cuộn ngang vào trang , đó thường là điều mà chúng ta không mong muốn

Trong trường hợp này, việc sử dụng max-width thay thế sẽ cải thiện khả năng xử lý các cửa sổ nhỏ của trình duyệt. Điều này quan trọng khi làm cho một trang web có thể sử dụng được trên các thiết bị nhỏ hơn 

Và tuỳ vào trường hợp , tuỳ vào cái layout mình đang làm mà chọn width hay max-width sao cho phù hợp chứ không phải lúc nào 100% cũng dùng max-width hay width

VD : 
HTML
<div class="ex1">This div element has width: 500px;</div>
<br>
<div class="ex2">This div element has max-width: 500px;</div>

CSS
div.ex1 {
  width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}

div.ex2 {
  max-width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}
