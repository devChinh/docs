I . CSS Align ( căn chỉnh trong CSS)

Align là sự thiết lập vị trí của phần tử (hoặc nội dung của phần tử) theo một vị trí nào đó, ví dụ thiết lập phần tử div căn giữa, nội dung của phần tử div canh phải , giữa , trái ,  ...

Trong CSS có rất nhiều thuộc tính cho phép mình căn chỉnh (align) một phần tử như margin, padding,  text-align, position, float... 

Hôm nay mình sẽ cùng tìm hiểu một số align thường hay sử dụng nhất

II .  Một số cách align trong CSS

1 Căn chỉnh phần tử nằm ở giữa (sử dụng margin)

Trong CSS có thuộc tính margin có giá trị là auto cho phép căn chỉnh (align) phần tử nằm ở giữa so với phần tử cha của nó.

Note : 
Thuộc tính margin: auto chỉ căn giữa cho phần tử block như div, h1-h6, p, ... còn các phần tử inline như span, a... sẽ không được áp dụng.

Đặt chiều rộng của phần tử sẽ ngăn phần tử kéo dài ra các cạnh của vùng chứa

Sau đó, phần tử sẽ chiếm chiều rộng được chỉ định và không gian còn lại sẽ được chia đều giữa hai lề

Lưu ý: Căn giữa không có hiệu lực nếu thuộc tính width không được đặt (hoặc được đặt thành 100%)

2 . Căn giữa văn bản

Để chỉ căn giữa văn bản bên trong một phần tử, hãy sử dụng text-align: center

Note : thuộc tính  text-align cũng chỉ áp dụng cho phần tử block

3 . Căn giữa một hình ảnh

Để căn giữa một hình ảnh, hãy đặt lề trái và phải auto và biến nó thành một phần tử block vì img mặc định là thẻ inline

4 Căn chỉnh phần tử nằm trái hoặc nằm phải (sử dụng float)

Để căn chỉnh phần từ nằm trái hoặc nằm phải mình dùng thuộc tính float

Note : Nếu một phần tử cao hơn phần tử chứa nó và nó được thả nổi, nó sẽ tràn ra bên ngoài vùng chứa của nó. Bạn có thể sử dụng "clearfix hack" để sửa lỗi này 

Cú pháp của thuật ngữ "clearfix hack " :
                                                                    .clearfix::after {
                                                                    content: "";
                                                                    clear: both;
                                                                    display: table;
                                                                    }

5 .Căn giữa nội dung của phần tử theo chiều dọc (sử dụng padding)

Trong CSS có rất nhiều cách để căn giữa phần tử theo chiều dọc

Note : Để căn giữa theo cả chiều dọc và chiều ngang, hãy sử dụng padding và text-align: center

6 .Căn giữa theo chiều dọc - Sử dụng chiều cao dòng (sử dụng line-height)

Một thủ thuật khác là sử dụng thuộc tính line-height có giá trị bằng với thuộc tính height

7 Căn trái và Phải - Sử dụng position

Một phương pháp để căn chỉnh các phần tử là sử dụng position: absolute;


8  Sử dụng postion và  transform

9 Căn giữa theo chiều dọc - Sử dụng Flexbox