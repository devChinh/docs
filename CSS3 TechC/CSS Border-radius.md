CSS Rounded Corners có nghĩ là  góc làm tròn CSS

Với thuộc tính CSS border-radius,  có thể cho bất kỳ phần tử nào là "các góc tròn"

Thuộc tính border-radius  là một thuộc tính viết tắt cho các thuộc tính 
border-top-left-radius, và border-top-right-radius , border-bottom-right-radius ,border-bottom-left-radius

- Thuộc tính border-radius  có thể có từ một đến bốn giá trị. Đây là các quy tắc

+ Bốn giá trị - border-radius: 15px 50px 30px 5px;

    + 15px : border-top-left-radius
    + 50px : border-top-right-radius
    + 30px : border - bottom-right-radius
    + 5px : border - bottom-left-radius

+ Ba giá trị - border-radius: 15px 50px 30px;
    
    + 15px : border-top-left-radius
    + 50px : border-top-right-radius và border - bottom-left-radius
    + 30px : border - bottom-right-radius

+ Hai giá trị - border-radius: 15px 50px

    + 15px : border-top-left-radius và border - bottom-right-radius
    + 50px : border-top-right-radius và border - bottom-left-radius

+ Một giá trị - border-radius: 15px; (giá trị áp dụng cho tất cả bốn góc, được làm tròn bằng nhau)

Note  : Đơn vị là các Units thông thường : px , rem , em , % , ...

Tự custom một phần tử radius : https://9elements.github.io/fancy-border-radius/#21.64.59.56--357.357

- Và một góc cũng có thể nhận 2 giá trị

 + Một giá trị : border-top-left-radius : 10px 
 + Hai giá trị : border-top-left-radius : 10px 15px

-  Để viết cho một góc nhận 2 giá trị ta viết như sau 

+ border-radius : 10px 15px 12px 20px / 12px 24px 13px 18px

