1 Danh sách HTML

- Tạo cách danh sách
- thường được áp dụng để làm thanh navlink , menu trong layout

- Danh sách không theo thứ tự :

- Bọc bằng thẻ <ul> và thẻ <li> bên trong để chưa nội dung list
- Các mục trong danh sách sẽ được đánh dấu bằng dấu tròn nhỏ màu đen

- Danh sách HTML có theo thứ tự

- Dùng thẻ <ol> thay vì <ul>
- Các mục trong danh sách sẽ được đánh dấu bằng số

- Danh sách mô tả

- Thẻ <dl> xác định các danh sách mô tả , thẻ <dt> xác định các thuật ngữ (tên) , thẻ <dd> mô tả từng thuật ngữ

2 Danh sách không theo thứ tự

- Dùng thuộc tính CSS : list-style-type để xác định kiểu đánh dấu của danh sách đó
VD :
<ul style="list-style-type:disc">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
  +list-style-type:disc :kiểu đĩa
  +list-style-type:circle : kiểu vòng tròn
  +list-style-type:square : kiểu hình vuông
  - list-style-type:none : không có
- Các thẻ danh sách có thể lồng vào nhau : nhưng nhớ là khi khởi tại 1 danh sách thì phải có thẻ <ul> , <ol> bọc bên ngoài

3 Danh sách có thứ tự

- thuộc tính type của thẻ <ol> xác định các loại đánh dấu danh sách
  VD :
  <ol type="1">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
      + type = '1' : Các mục trong danh sách sẽ được đánh số bằng số (mặc định)
      + type = 'A' : Các mục trong danh sách sẽ được đánh số bằng chữ hoa (mặc định)
      + type = 'a' : Các mục trong danh sách sẽ được đánh số bằng chữ thường (mặc định)
      + type = 'I' : Các mục trong danh sách sẽ được đánh số bằng số la mã viết hoa (mặc định)
      + type = 'i' : Các mục trong danh sách sẽ được đánh số bằng số la mã viết thường (mặc định)
- có thể viết các danh sách lồng nhau
- đếm danh sách kiểm soát :
  - Theo mặc định, danh sách có thứ tự sẽ bắt đầu đếm từ 1. Nếu bạn muốn bắt đầu đếm từ một số được chỉ định, bạn có thể sử dụng thuộc tính start
  VD :
  <ol start="50">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
