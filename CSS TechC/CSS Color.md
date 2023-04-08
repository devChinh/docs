1 . Tìm hiểu về color trong CSS
- Giới thiệu về màu (color) trong CSS, nó cũng là một phần hết sức quan trọng cho một trang web vì nó tạo cho trang web của mình trở nên sinh động và cuốn hút hơn.

-Có thể thiết lập màu cho màu nền (background) hay màu cho đường viền (border) hay màu cho chữ (text) hay màu cho đường khung của bảng (table)....

2 . Sử dụng màu trong CSS như thế nào

Để sử dụng màu trong CSS chúng ta có thể sử dụng tên màu (color name) hoặc giá trị RGB, Hex, HSL, RGBA, HSLA. Mình sẽ đi qua chi tiết từng cái một

+ Color name
Color name nghĩa là mình dùng tên màu để làm giá trị

VD : 
h1 {
    background-color: yellow;
    color: red;
    border: 1px solid blue;
}

+ RGB
RGB nghĩa là mình sử dụng bộ ba giá trị đó là đỏ (red), xanh lá cây (green), xanh da trời (blue) để xác định một màu nào đó. Mỗi tham số rgb(red, green, blue) sẽ có giá trị là số nguyên đi từ 0 đến 255. Mỗi lần tăng hoặc giảm một trong 3 giá trị đó sẽ ra một màu khác nhau

Một số tham số đặc biệt như :
        -rgb(255,0,0) = red
        -rgb(0,255,0) = green
        -rgb(0,0,255) = blue
        -rgb(0,0,0) = black
        -rgb(255,255,255) = white
Cú pháp CSS:
selector {
        thuộc tính: rgb(red, green, blue);
}

VD :
h1 {
    background-color: rgb(23, 123, 213);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(1, 1, 1);
}

+ Hex
Hex nghĩa là sử dụng bộ giá trị #RRGGBB để xác định một màu nào đó. Trong đó RR (red), GG (green), BB (blue) có giá trị trong hệ cơ số  từ 00 đến FF.

Tương tự như RGB, Hex cũng có một số bộ đặc biệt như:

#ff0000 = red
#00ff00 = green
#0000ff = blue
#000000 = black
#ffffff = white
Cú pháp CSS:

selector {
         thuộc tính: #RRGGBB;
}

VD : 

h1 {
    background-color: #09aaff;
    color: #ffffff;
    border: 1px solid #000000;
}

