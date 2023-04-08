Tính cụ thể là gì?

Nếu có hai hoặc nhiều quy tắc CSS trỏ đến cùng một phần tử, bộ chọn có giá trị đặc hiệu cao nhất sẽ "thắng" và khai báo kiểu của nó sẽ được áp dụng cho phần tử HTML đó

VD 1 : 

  <style>
    p {color: red;}
  </style>

<p>Hello World!</p>

VD 2 : 
 <style>
    .test {color: green;}
    p {color: red;}
  </style>

<p class="test">Hello World!</p>

VD3: 
  <style>
    #demo {color: blue;}
    .test {color: green;}
    p {color: red;}
  </style>

<p id="demo" class="test">Hello World!</p>

  <style>
    #demo {color: blue;}
    .test {color: green;}
    p {color: red;}
  </style>

<p id="demo" class="test" style="color: pink;">Hello World!</p>


1 . Hệ thống phân cấp tính đặc hiệu

Mỗi bộ chọn CSS đều có vị trí của nó trong hệ thống phân cấp tính cụ thể.

Có bốn danh mục xác định mức độ cụ thể của một bộ chọn:

Kiểu nội tuyến - Ví dụ: <h1 style = "color: pink;">
ID - Ví dụ: #navbar
Lớp, lớp giả, bộ chọn thuộc tính - Ví dụ: .test,: hover, [href]
Phần tử và phần tử giả - Ví dụ: h1,: before

2 Làm thế nào để tính toán cụ thể?

Thuộc lòng cách tính độ đặc hiệu!

Bắt đầu từ 0, thêm 100 cho mỗi giá trị ID, thêm 10 cho mỗi giá trị lớp (hoặc lớp giả hoặc bộ chọn thuộc tính), thêm 1 cho mỗi bộ chọn phần tử ( thẻ p , img , h1 , .... ) hoặc phần tử giả.

Lưu ý: Kiểu nội tuyến nhận giá trị đặc trưng là 1000 và luôn được ưu tiên cao nhất!

Selector	Specificity Value(giá trị cụ thể)	Calculation (tính toán)

p	                                        1	                                      1
p.test	                                  11	                  1 + 10
p#demo                                101	                  1 + 100
<p style="color: pink;">	  1000	                  1000
#demo 	                                100	                  100
.test	                                     10	                                                   10
p.test1.test2	                         21	                 1 +  + 10 + 10
#navbar p#demo	                  201             	100 + 1 + 100


Bộ chọn có giá trị độ đặc hiệu cao nhất sẽ thắng và có hiệu lực!

Hãy xem xét ba đoạn mã sau:

Thí dụ
A: h1  
B: h1#content
C: <h1 id="content" style="color: pink;">Heading</h1>  

Độ đặc hiệu của A là 1 (bộ chọn một phần tử)
Độ cụ thể của B là 101 (một tham chiếu ID + một bộ chọn phần tử)
Độ đặc hiệu của C là 1000 (kiểu nội tuyến)

Vì quy tắc thứ ba (C) có giá trị cụ thể cao nhất (1000), khai báo kiểu này sẽ được áp dụng

- Ví dụ về quy tắc cụ thể hơn

+ Tính cụ thể ngang nhau (selector giống nhau ): thì CSS  mới nhất thắng và ăn vào trang web của mình

Thí dụ

h1 {background-color: yellow;}
h1 {background-color: red;}

+ Bộ chọn ID có độ đặc hiệu cao hơn bộ chọn thuộc tính - Hãy xem ba dòng mã sau:

Thí dụ

div#a {background-color: green;}
#a {background-color: yellow;}
div[id=a] {background-color: blue;}

quy tắc đầu tiên cụ thể hơn hai quy tắc còn lại và do đó sẽ được áp dụng.

+ Bộ chọn theo ngữ cảnh cụ thể hơn bộ chọn phần tử đơn lẻ - Biểu định kiểu được CSS gần với phần tử cần tạo kiểu hơn. Vì vậy, trong tình huống sau

From external CSS file:
#content h1 {background-color: red;}

In HTML file:
<style>
#content h1 {background-color: yellow;}
</style>

 CSS trong thẻ style sẽ được áp dụng

+ Một bộ chọn lớp đánh bại bất kỳ số lượng bộ chọn phần tử nào - một bộ chọn lớp chẳng hạn như .intro đánh bại h1, p, div, v.v.:

Thí dụ
.intro {background-color: yellow;}
h1 {background-color: red;}

CSS của .intro sẽ được áp dụng

CSS Specificity
