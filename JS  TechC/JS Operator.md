1 . toán tử toán học 
- Là các phép cộng , trừ , nhân , phép chia lấy dư ,  ++ , --

VD : 
var a = 10 , b = 20
var c = a * b 

- Phép ++ là tăng giá trị hiện tại lên 1 đơn vị. Phép này có hai cách sử dụng đó là đặt nó trước biến và đặt nó sau biến

+ Trường hợp đứng trước biến thì nó sẽ tăng trước khi lấy giá trị
VD : var c = 12;
 
alert(++c); // kết quả là 13
 
alert(c); // kết quả là 13

+ Trường hợp đứng sau biến thì nó sẽ lấy giá trị rồi tăng lên
VD : 
var c = 12;

alert(c++); // kết quả là 12
 
alert(c); // kết quả là 13


2 . toán tử gán 
- sử dụng dấu "="

var a = 1 ;  có nghĩ là đang gán  biến a cho  giá trị là 1 

 a += b   <=> a = a + b 

 a -= b   <=> a = a - b

 a *= b  <=> a = a * b

 a /= b   <=> a = a / b

 VD : 
 var x = 12
var y = 10

x += y   :  tương đương x = x + y
->lúc này x = 22

 3 . toán tử quan hệ 
  + toán tử < : nhỏ hơn
 VD : a < b  :  trả về TRUE nếu a nhỏ hơn b và FALSE nếu b nhỏ hơn a

  + toán tử > : lớn hơn
  VD : a > b : trả về TRUE nếu a lớn hơn b và FALSE nếu b lớn hơn a

  + toán tử <= : nhỏ hơn hoặc bằng
  VD : a <= b : trả về TRUE nếu a nhỏ hơn hoặc bằng b và FALSE nếu a lớn hơn b

   + toán tử >= : lớn hoặc bằng 
   VD : a >= b : Trả về TRUE nếu a lớn hơn hoặc bằng b và FALSE nếu a nhỏ hơn b

    + toán tử != : khác  -
    VD : a !=b   : trả về TRUE nếu a khác b và FALSE nếu a bằng b

    + Toán tử ==   : so sánh 2 biến
    VD : a==b :   Trả về TRUE nếu a bằng b và FALSE nếu a khác b


4. toán tử luận lý 

 &&  :  toán tử và và - phải tất cả điều kiện cùng đúng  mới trả về true còn chỉ cần duy nhất 1 điều kiện sai thì trả false
  
  ||  : toán tử hoặc - chỉ cần 1 điều kiện đúng là sẽ trả về true
 
   !   :  toán tử not - áp dụng cho kiểu dữ liệu boolean