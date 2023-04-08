Khi table chưa áp dụng thuộc tính CSS nào nhìn rất là xấu..  Vậy CSS có những thuộc tính nào để định dạng cho bảng (table) trở nên thân thiện với người dùng hơn. Mình sẽ cùng tìm hiểu một số thuộc tính thường hay sử dụng cho bảng (table) như border, width, height, padding, hover, nth-child, color... 

1 . Đường viền bảng (border)

+ border là thuộc tính dùng để thiết lập đường viền cho bảng (table), dòng (tr), ô dữ liệu (td) hay tiêu đề (th)

+ Thuộc tính  border-collapse đặt liệu các đường viền bảng có được thu gọn thành một đường viền duy nhất hay không

2 Chiều rộng và chiều cao của TABLE

width, height là 2 thuộc tính cho phép mình thiết lập độ rộng và độ cao cho table, tr, th

3 Căn chỉnh bảng CSS 

+ Căn chỉnh theo chiều ngang 

text-align là thuộc tính cho phép mình chỉnh nội dung sang trái (left), phải (right) hoặc giữa (center) theo chiều ngang.

thuộc tính text-align của thẻ th có giá trị mặc định là canh giữa (center) nên muốn căn giữa thì chỉ cần css cho thẻ td

+ Căn chỉnh theo chiều dọc 

vertical-align là thuộc tính cho phép mình chỉnh nội dung ở trên (top), ở dưới (bottom) hay ở giữa (center) theo chiều dọc.

4 .Color , Background

Color, background-color là 2 thuộc tính cho phép mình có thể thiết lập màu chữ (color), màu nền (background-color) cho td, th.

5 Padding

 là thuộc tính để thiết lập khoảng trắng giữa nội dung (text) của td, th


+ Sử dụng bộ chọn :hover  cho phép mình thiết lập các thuộc tính CSS lên table, tr, th, td khi rê chuột vào chúng.

+ Sử dụng bộ chọn nth-child() là thuộc tính cho phép mình thiết lập các thuộc tính CSS lên dòng chẵn (even) hay dòng lẻ (odd) hay một số cụ thể nào đó

6 . Table đáp ứng (reponsive)

Bảng đáp ứng sẽ hiển thị thanh cuộn ngang nếu màn hình quá nhỏ để hiển thị toàn bộ nội dung , sử dụng thuộc tính : overflow-x:auto


