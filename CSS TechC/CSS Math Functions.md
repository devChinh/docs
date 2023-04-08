Các hàm toán học CSS cho phép các biểu thức toán học được sử dụng làm giá trị thuộc tính

1 . Hàm calc ()

- Cú pháp CSS :  calc(expression)

+ expression là yêu cầu một biểu thức toán học kết quả sẽ được sử dụng làm giá trị
Các toán tử sau có thể được sử dụng: + - * /

Hàm calc() thực hiện một phép tính được sử dụng làm giá trị thuộc tính

VD : Giả sử màn hình laptop của chúng ta có width là 1024px và  muốn set cho một thẻ div có widh nhỏ hơn màn hình của mình 100px  là 924px thì như bình thường chúng ta sẽ có CSS width : 924px đúng không ? 
Những mà như mình đã nói đơn vị px là đơn vị Units tuyệt đối nên là ở laptop hay moblie thì nó vẫn là 924px nên là sẽ không tốt cho việc resposve sau này nên là mình sẽ thay thế các trên bằng : width : calc(100% + 100px)


2 Hàm max ()

Hàm max() sử dụng giá trị lớn nhất, từ danh sách giá trị được phân tách bằng dấu phẩy, làm giá trị thuộc tính.

- Cú pháp CSS : max(value1, value2, ...)

value1, value2, ... là bắt buộc và danh sách các giá trị được phân tách bằng dấu phẩy - trong đó giá trị lớn nhất được chọn

VD : Sử dụng max () để đặt chiều rộng của # div1 thành giá trị nào lớn nhất, 50% hoặc 300px:

#div1 {
  background-color: yellow;
  height: 100px;
  width: max(50%, 300px);
}

3 . Hàm min ()

Hàm min()sử dụng giá trị nhỏ nhất, từ danh sách giá trị được phân tách bằng dấu phẩy, làm giá trị thuộc tính


- Cú pháp CSS : min(value1, value2, ...)

value1, value2, ... là bắt buộc và danh sách các giá trị được phân tách bằng dấu phẩy - trong đó giá trị nhỏ nhất được chọn

VD : Sử dụng min () để đặt chiều rộng của # div1 thành giá trị nào nhỏ nhất, 50% hoặc 300px:

#div1 {
  background-color: yellow;
  height: 100px;
  width: min(50%, 300px);
}

    