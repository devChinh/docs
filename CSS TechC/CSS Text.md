CSS cung cấp cho chúng ta một số thuộc tính định dạng text như màu sắc, hiển thị chữ in hoa hoặc in thường, vị trí hiển thị, ... Những thuộc tính này khá hay và rất quan trọng vì nó quyết định tính thẩm mỹ cho các dòng chữ trong website.

Một số thuộc tính định dạng cho text như sau:

        + color
        + text-decoration
        + text-transform
        + text-align
        + text-indent
        + text-shadow

I. Chon màu cho chữ với color
Ta sử dụng thuộc tính <color> để gán màu sắc cho chữ.

Trong CSS thì ta sử dụng 3 cách biểu diễn <color> như sau:

HEX: có định dạng #ma_mau
RGB: có định dạng rgb(xxx,yyy,zzz)
Tên màu: ví dụ red, blue

VD :
.color-red{
    color: red;
}
 
.color-pink{
    color:#d624d0
}

II. Thiết lập chữ in hoa và in thường

Nếu  muốn một thẻ nào đó luôn luôn hiển thị in hoa hoặc luôn luôn hiển thị in thường mặc dù ta nhập vào là hoa hay thường thì sử dụng thuộc tính <text-transform> với các thuộc tính

        + uppercase: chuyển đổi in hoa
        + lowercase: chuyển đổi in thường
        + none: không chuyển đổi gì cả (mặc định)
        + capitalize  : viết hoa chữ cái đầu

Ví dụ: Dùng CSS chuyển in hoa và in thường

.upper{
    text-transform: uppercase;
}
 
.lower{
    text-transform: lowercase;
}

III . Thiết lập vị trí của text (giữa, trái, phải)
Nếu muốn đoạn text hiển thị ở gữa màn hình hoặc bên trái, bên phải thì sử dụng thuộc tính <text-align> với các giá trị:

        +center : hiển thị ngay giữa
        +left: hiển thị bên trái
        +right: hiển thị bên phải
        +justify : hiển thị canh đều so với lề phải và lề trái

IV. Thiết lập gạch  chân cho chữ

        + text-decoration-line
        + text-decoration-color
        + text-decoration-style
        + text-decoration-thickness
        + text-decoration

 1 . Thuộc tính text-decoration-line đặt loại trang trí văn bản để sử dụng (như gạch dưới, gạch ngang, dòng qua )
        + none
        + underline	
        + overline	
        + line-through	
        + initial	
        + inherit

2 .Thuộc tính text-decoration-color được sử dụng để thiết lập màu sắc của đường trang trí

3 . Thuộc tính text-decoration-style được sử dụng để thiết lập phong cách của đường trang trí

4 . Thuộc tính text-decoration-thickness  được sử dụng để thiết lập độ dày của đường trang trí

5 .Thuộc tính text-decoration là một thuộc tính viết tắt cho:

        +text-decoration-line(yêu cầu)
        +text-decoration-color(không bắt buộc)
        +text-decoration-style(không bắt buộc)
        +text-decoration-thickness(không bắt buộc)

V . Khoảng cách văn bản

        + text-indent :  được sử dụng để chỉ định thụt lề của dòng đầu tiên của văn bản

        + letter-spacing : được sử dụng để chỉ định khoảng cách giữa các ký tự trong văn bản

        + line-height : được sử dụng để chỉ định khoảng cách giữa các dòng  và chỉ định chiều cao của một dòng

        + word-spacing :  tăng hoặc giảm khoảng trắng giữa các từ

        + white-space :  cách xử lý khoảng trắng bên trong một phần tử : 
                                - normal	
                                - nowrap	
                                - pre
                                - pre-wrap	
                                - initial	
                                - inherit

VI . Bóng văn bản (shadow)

Thuộc tính <shadow> thêm bóng cho văn bản.

Trong cách sử dụng đơn giản nhất,  chỉ xác định bóng ngang (2px) và bóng dọc (2px):

VD : 
h1 {
  text-shadow: 2px 2px;
}

Tiếp theo, thêm một màu (đỏ) vào bóng:

VD : 

h1 {
  text-shadow: 2px 2px red;
}

Sau đó, thêm hiệu ứng mờ (5px) vào bóng:

VD : 
h1 {
  text-shadow: 2px 2px 5px red;
}