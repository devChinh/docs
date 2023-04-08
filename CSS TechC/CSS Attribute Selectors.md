Có thể tạo kiểu cho các phần tử HTML thông qua selector đến các thuộc tính hoặc giá trị của thuộc tính thẻ HTML

1 . bộ chọn [attribute]chọn được sử dụng để chọn các phần tử có thuộc tính được chỉ định

VD  :

<a href="http://www.techcacademy.com" target="_blank">disney.com</a>

- Selector đến thẻ a có thuộc tính là target
a[target] {
  background-color: yellow;
}

2 . bộ chọn [attribute="value"]chọn được sử dụng để chọn các phần tử có thuộc tính và giá trị được chỉ định

<a href="http://www.techcacademy.com" target="_blank">disney.com</a>


- Selector đến thẻ a có thuộc tính target = _blank
a[target="_blank"] {
  background-color: yellow;
}


3 . Bộ chọn [attribute~="value"]chọn được sử dụng để chọn các phần tử có giá trị thuộc tính chứa một từ được chỉ định

VD : 
<img src="img.jpg" title="my-flower flower" width="150" height="113">
<img src="img.gif" title="flower" width="224" height="162">

- Selector đến thẻ thẻ nào đó có title = flower

[title~=flower] {
  border: 5px solid yellow;
}

4 .Bộ [attribute*="value"]chọn được sử dụng để chọn các phần tử có giá trị thuộc tính chứa một giá trị được chỉ định.

Ví dụ sau chọn tất cả các phần tử có giá trị thuộc tính lớp có chứa "te":

Lưu ý: Giá trị không nhất thiết phải là một từ nguyên vẹn!  

Thí dụ
<div class="first_test">The first div element.</div>
<div class="second">The second div element.</div>
<div class="my-test">The third div element.</div>
<p class="mytest">This is some text in a paragraph.</p>

[class*="te"] {
  background: yellow;
}

