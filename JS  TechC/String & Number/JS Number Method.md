I . Các phướng thức làm việc với số

+ toString ()	
+ toFixed ()	

1 . toString()

Phương thức toString()  trả về một số dưới dạng một chuỗi (typeof == string)

VD : 
let x = 123;
x.toString()

2 . toFixed() 

- làm tròn số thập và một số  được viết với một số thập phân được chỉ định

VD : 
let x = 9.656
x.toFixed(0)
x.toFixed(2)
x.toFixed(4)
x.toFixed(6)

II . Phương thức chuyển đổi thành số

        + number()
        + parseInt()
        + parseFloat()

1 . number()

Phương pháp Number() có thể được sử dụng để chuyển đổi các biến JavaScript thành số

VD : 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");

Nếu không thể chuyển đổi số, NaN(Không phải là Số) sẽ được trả về

2 . parseInt()

- parseInt() phân tích cú pháp một chuỗi và trả về một số nguyên. Khoảng trắng được cho phép và chỉ số đầu tiên được trả lại , nếu là số thì sẽ được làm tròn

VD : 

  parseInt("-10") + "<br>" +
  parseInt("-10.33") + "<br>" +
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10");  

Nếu không thể chuyển đổi số, NaN(Không phải là Số) sẽ được trả về

3 .parseFloat()

phân tích cú pháp một chuỗi và trả về một số. Khoảng trắng được cho phép. Chỉ số đầu tiên được trả lại , số sẽ được giữ nguyên như khi truyền vào

Thí dụ
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

Nếu không thể chuyển đổi số, NaN(Không phải là Số) sẽ được trả về

III . Phương thức đối tượng số

1 .Phương thức Number.isInteger()  trả về true nếu đối số là số nguyên.

VD : 

Number.isInteger(10) //true
Number.isInteger(10.5) // false









