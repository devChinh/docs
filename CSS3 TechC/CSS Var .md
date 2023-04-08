Hàm var() được sử dụng để chèn giá trị của một biến CSS.

1 . Cách hoạt động của var ()

Trước hết: Các biến CSS có thể có phạm vi toàn cục hoặc cục bộ

Các biến toàn cục có thể được truy cập / sử dụng thông qua toàn bộ tài liệu, trong khi các biến cục bộ chỉ có thể được sử dụng bên trong bộ chọn nơi nó được khai báo

- Ưu điểm của việc sử dụng var () là:

    + làm cho mã dễ đọc hơn (dễ hiểu hơn)
    + giúp thay đổi các giá trị màu dễ dàng hơn nhiều

Để tạo một biến với phạm vi toàn cục, hãy khai báo nó bên trong bộ chọn :root

VD : 

:root {
  --blue: #1e90ff
  --white: #ffffff
}

body { 
    background-color: var(--blue)
}

h2 {
     border-bottom: 2px solid var(--blue)
}


2 .Ghi đè biến toàn cục bằng biến cục bộ

VD : 

:root {
  --blue: #1e90ff
  --white: #ffffff
}

.container {
  color: var(--blue)
}

button {
  --blue: #0000ff /* local variable will override global */
  color: var(--blue)
}


3 . Sử dụng biến trong truy vấn phương tiện

VD : 

.container {
  --fontsize: 25px;
}

.container {
  font-size: var(--fontsize);
}

