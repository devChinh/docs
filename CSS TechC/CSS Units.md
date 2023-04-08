Đơn vị CSS

CSS có một số đơn vị khác nhau để thể hiện độ dài.

Nhiều thuộc tính CSS nhận các giá trị "độ dài", chẳng hạn như width,margin , padding , font-size , ...

Độ dài là một số theo sau là đơn vị độ dài, chẳng hạn như 10px, 2emv.v.

Đối với một số thuộc tính CSS, độ dài âm được phép.

Có hai loại đơn vị độ dài: tuyệt đối và tương đối

1 . Độ dài tuyệt đối

Các đơn vị độ dài tuyệt đối là cố định và độ dài được biểu thị bằng bất kỳ đơn vị nào trong số này sẽ xuất hiện chính xác như kích thước đó.

Đơn vị độ dài tuyệt đối không được khuyến khích sử dụng trên màn hình, vì kích thước màn hình thay đổi rất nhiều (khi responsive). Tuy nhiên, chúng có thể được sử dụng nếu phương tiện đầu ra được biết, chẳng hạn như cho bố cục in.

+ cm	:      centimeters
+ mm   :	  millimeters
+ in	   :     inches (1in = 96px = 2.54cm)
+ px      :  	pixels (1px = 1/96th of 1in)   // hay dùng
+ pt	  :      points (1pt = 1/72 of 1in)
+ pc	  :       picas (1pc = 12 pt)

2. Độ dài tương đối

Đơn vị độ dài tương đối chỉ định độ dài liên quan đến một thuộc tính độ dài khác. Các đơn vị độ dài tương đối mở rộng quy mô tốt hơn giữa các phương tiện kết xuất khác nhau.

+ em	: Liên quan đến kích thước phông chữ (font-size) của phần tử  (2em có nghĩa là gấp 2 lần kích thước phông chữ hiện tại)

+ rem  : Liên quan đến kích thước phông chữ (font-size) của phần tử gốc

+ vw :Tương đối với 1% chiều rộng của khung nhìn 

+ vh :Tương đối với 1% chiều cao của khung nhìn 

+ vmin	Tương đối với 1% kích thước nhỏ hơn của khung nhìn (1vmin = 1vw hoặc 1vh, tùy theo giá trị nào nhỏ hơn.)

+ vmax :Tương đối với 1% kích thước lớn hơn của khung nhìn (1vmin = 1vw hoặc 1vh, tùy theo giá trị nào nhỏ hơn.)

+ %	dựa theo độ rộng của  phần tử mẹ

