1 . Thuộc tính margin

Margin được sử dụng để tạo không gian xung quanh các phần tử, bên ngoài bất kỳ đường viền xác định nào

- Nói dễ hiểu hơn là dùng để tạo khoảng cách giữa hai thẻ HTML

Chúng ta có 5 cách sử dụng như sau:

+ margin-left: 12px : khoảng cách lề trái 20px 
+ margin-top:30px : khoảng cách lề trên 20px
+ margin-right: 20px : khoảng cách lề phải 20px
+ margin-bottom: 20px : khoảng cách lề dưới 20px
+ margin : 20px : tất cả lề trên, lề dưới, lề trái, lề phải đều có khoảng cách 20px 
 
 Tất cả các thuộc tính  có thể có các giá trị sau:

            + auto 
            + length - chỉ định lề bằng px, pt, cm, v.v.
            + % - chỉ định lề tính bằng% chiều rộng của phần tử chứa
            + inherit - chỉ định rằng lề phải được kế thừa từ phần tử mẹ
  Note :  giá trị âm được cho phép

Để rút ngắn mã, có thể chỉ định tất cả các thuộc tính ký quỹ trong một thuộc tính.

Thuộc tính margin này là thuộc tính viết tắt cho các thuộc tính ký sau:

            + margin-top
            + margin-right
            + margin-bottom
            + margin-left

VD :
-Nếu thuộc tính margin có bốn giá trị: margin : 50px 50px 75px 80px;

                + lề trên là 25px
                + lề phải là 50px
                + lề dưới là 75px
                + lề trái là 100px

-Nếu thuộc tính margin có ba giá trị: margin: 25px 50px 75px

                + lề trên là 25px
                + lề phải và trái là 50px
                + lề dưới là 75px

-Nếu thuộc tính margin có hai giá trị: margin: 25px 50px;

                + lề trên và dưới là 25px
                + lề phải và trái là 50px
-Nếu thuộc margintính có một giá trị: margin: 25px;

               +cả bốn lề đều là 25px


- Giá trị tự động (auto)

Bạn có thể đặt thuộc tính margin thành căn auto giữa theo chiều ngang của phần tử bên trong vùng chứa của nó.

Khi đó, phần tử sẽ chiếm chiều rộng được chỉ định và không gian còn lại sẽ được chia đều giữa lề trái và lề phải.

-Giá trị kế thừa (inherit)

Ví dụ này cho phép lề trái của phần tử <p class = "ex1"> được kế thừa từ phần tử mẹ (<div>):

VD : 

div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
}

 Note : Khi sử dụng thuộc tính margin thì sẽ không ảnh hưởng tới chiều rộng của đối tượng HTML, nghĩa là nếu bạn thiết lập chiều rộng width:100px và margin:20px thì lúc chiều rộng ( khoảng cách ) của đói tượng so  với lề là 100px + 20px = 120px. Nghĩa lả chiều rộng width:100px sẽ không thay đổi

 Note : Lề trên và dưới của các phần tử đôi khi được thu gọn thành một lề duy nhất bằng lề lớn nhất trong hai lề.
Điều này không xảy ra ở lề trái và lề phải! Chỉ lề trên và dưới!

VD :
HTML 
<h1>Heading 1</h1>
<h2>Heading 2</h2>

CSS
h1 {
  margin: 0 0 50px 0;
}

h2 {
  margin: 20px 0 0 0;
}

Trong ví dụ trên, phần tử <h1> có lề dưới là 50px và phần tử <h2> có lề trên được đặt thành 20px.
Thông thường dường như cho thấy rằng lề dọc giữa <h1> và <h2> sẽ là tổng cộng 70px (50px + 20px). Nhưng do Margin Collapse, margin thực tế cuối cùng là 50px.


2 Thuộc tính padding

Các thuộc tính CSS padding được sử dụng để tạo không gian xung quanh nội dung của phần tử, bên trong bất kỳ đường viền xác định nào.

 Hiểu đơn giản : Dùng để tạo khoảng giữa thẻ HTML và nội dung ( content ) của nó

Chúng ta cũng có 5 cách dùng tương tự như margin:

padding-left: 20px : khoảng cách lề trái so với nội dung bên trong 20px 
padding-top:20px : khoảng cách lề trên so với nội dung bên trong 20px
padding-right: 20px : khoảng cách lề so với nội dung bên trong phải 20px
padding-bottom: 20px : khoảng cách so với nội dung bên trong lề dưới 20px
padding : 20px : tất cả lề trên, lề dưới, lề trái, lề phải so với nội dung bên trong đều có khoảng cách 20px 

Tất cả các thuộc tính padding có thể có các giá trị sau:

        + length - chỉ định một khoảng đệm bằng px, pt, cm, v.v.
        + % - chỉ định một khoảng đệm tính bằng% chiều rộng của phần tử chứa
        + thừa kế - chỉ định rằng phần đệm phải được kế thừa từ phần tử mẹ

Note : giá trị âm không được phép

- Để rút ngắn mã, có thể chỉ định tất cả các thuộc tính đệm trong một thuộc tính.

Thuộc t padding là một thuộc tính viết tắt cho các thuộc tính đệm riêng lẻ sau:

                + padding-top
                + padding-right
                + padding-bottom
                + padding-left

Vì vậy, đây là cách nó hoạt động:

-Nếu thuộc tính padding có bốn giá trị: padding : 25px 50px 75px 100px

        + đệm trên cùng là 25px
        + đệm bên phải là 50px
        + đệm dưới cùng là 75px
        + đệm bên trái là 100px


-Nếu thuộc tính padding có ba giá trị: padding : 25px 50px 75px

        + đệm trên cùng là 25px
        + đệm phải và trái là 50px
        + đệm dưới cùng là 75px

-Nếu thuộc paddingtính có hai giá trị: padding : 25px 50px

        + đệm trên và dưới là 25px
        + đệm phải và trái là 50px

Nếu thuộc tính padding có một giá trị: padding : 25px

        +tất cả bốn padding là 25px


+ Note : Khi sử dụng thuộc tính padding thì chiều rộng của của thẻ sẽ cộng thêm khoảng cách của padding. Ví dụ ta có  padding-left: 20px và width: 100px thì chiều rộng của thể là 120px , đó thường là  một kết quả mình không mong muốn

- Để khắc phục vấn đề này ta sẽ sử dụng một thuộc tính :   box-sizing: border-box;

Để giữ chiều rộng vẫn như ban đầu  bất kể số lượng padding,  có thể sử dụng thuộc tính box-sizing  Điều này làm cho phần tử duy trì chiều rộng thực của nó đúng như giá trị mình set ban đầu ,  nếu bạn tăng khoảng đệm (padding), không gian nội dung có sẵn sẽ giảm để cộng lại thì vẫn ra giá trị ban đầu


3 Mô hình box model 

Là một mô hình hộp CSS
Trong CSS, thuật ngữ "mô hình hộp" được sử dụng khi nói về thiết kế và bố cục

Mô hình hộp CSS về cơ bản là một hộp bao bọc xung quanh mọi phần tử HTML. Nó bao gồm: lề ( margin), đường viền (border ), phần đệm (padding) và nội dung thực tế (content)

demo : https://freetuts.net/upload/tut_post/images/2015/09/14/440/box-model.gif

Giải thích các phần khác nhau:

        +Nội dung - Nội dung của hộp, nơi văn bản và hình ảnh xuất hiện
        +Padding - Xóa một khu vực xung quanh nội dung. Lớp đệm trong suốt
        +Đường viền - Đường viền bao quanh phần đệm và nội dung
        +Margin - Xóa một khu vực bên ngoài biên giới. Lề là minh bạch

Note :  Để đặt chiều rộng và chiều cao của một phần tử một cách chính xác trong tất cả các trình duyệt, bạn cần biết cách hoạt động của mô hình hộp
- Phải biết tính toán height và width trong mô hình  box model

Tổng chiều rộng của một phần tử sẽ được tính như sau:

Tổng chiều rộng phần tử = chiều rộng + phần đệm bên trái + phần đệm bên phải + đường viền trái + đường viền bên phải + lề trái + lề phải

Tổng chiều cao của một phần tử sẽ được tính như sau:

Tổng chiều cao của phần tử = chiều cao + phần đệm trên cùng + phần đệm dưới cùng + đường viền trên + đường viền dưới + lề trên + lề dưới




