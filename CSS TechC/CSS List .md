I. Một số thuộc tính chính của list

1. list-style-type : 

list-style-type là thuộc tính cho phép chỉ định loại đánh dấu mục của danh sách nào sẽ được hiển thị, ví dụ như là hình tròn, hình vuông, chữ la mã ...

list-style-type có rất nhiều giá trị, tuy nhiên mình chỉ giới thiệu những giá trị hay sử dụng sau:

                + circle: giá trị hiển thị là hình tròn
                + square:  giá trị hiển thị là hình vuông
                + upper-roman: giá trị hiển thị là chữ la mã hoa như I, II, II, IV ...
                + lower-roman: giá trị hiển thị là chữ la mã thường như i, ii, iii, iv ...
                + upper-latin: giá trị hiển thị là chữ cái latin hoa như A, B, C ...
                + lower-alpha: giá trị hiển thị là chữ cái alphabet như a, b, c ...
                + none: không hiển thị gì cả
                + decimal: giá trị hiển thị là số như 1, 2, 3 ...
                + decimal-leading-zero: giá trị hiển thị là số nhưng sẽ thêm số 0 phía trước số, nếu số < 10 như 01, 02, 03 ...

2. list-style-image :

list-style-image là thuộc tính dùng hình ảnh (image) để làm đánh dấu mục của danh sách

 ul {
        list-style-image: url('css-list-image-ex.gif');
}

3 list-style-position : 

list-style-position là thuộc tính dùng để thiết lập vị trí hiển thị của các đánh dấu mục của danh sách.

list-style-position có 2 giá trị chính đó là:

+ outside: đánh dấu mục của danh sách sẽ nằm bên ngoài các phần tử của danh sách
+ inside: đánh dấu mục của danh sách sẽ nằm bên trong các phần tử của danh sách.

4. list-style : 

list-style là thuộc tính trình bài cách viết ngắn gọn của 3 thuộc tính list-style-type, list-style-image, list-style-position.

Cú pháp:
selector {
  list-style: type image position;
}

Note : Thứ tự của 3 thuộc tính list-style-type, list-style-image, list-style-position mình có thể thay đổi được và kết quả các thứ tự thay đổi là như nhau. Trong 2 thuộc tính list-style-type và list-style-image thì thuộc tính list-style-image sẽ được áp dụng, còn thuộc tính list-style-type sẽ không được áp dụng, chỉ khi hình ảnh bị lỗi thì thuộc tính list-style-type mới được áp dụng.


