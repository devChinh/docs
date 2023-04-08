1 . Tham Số (Parameter) Được Định Nghĩa Trong Hàm

Ví dụ chúng ta có một hàm JavaScript có tên là hello và được định nghĩa như sau:

function hello(name) {
    alert("Xin chào, " + name);
}

Lúc này chúng ta nói hàm hello trên có một tham số là name.

Ghi nhớ: Tham số của hàm (function parameter) là biến được định nghĩa trong hàm.

2 . Đối Số (Argument) Là Giá Trị Truyền Vào Khi Gọi Hàm

Vẫn ví dụ trên bây giờ chúng ta gọi hàm hello:

hello("TechC Academy");

Lúc này chúng ta nói giá trị của đối số truyền vào là chuỗi TechC Academy

Ghi nhớ: Đối số của hàm (function argument) là giá trị thực tế truyền vào cho tham số khi gọi hàm.

Tham Số Mặc Đinh (Default Parameter)

Một số ngôn ngữ hỗ trợ lập trình viên gán giá trị mặc định cho tham số của hàm. Lúc này khi gọi hàm mà chúng ta lại không truyền vào giá trị cho tham số thì giá trị mặc định sẽ được sử dụng. Tính năng này được gọi là tham số mặc định của hàm.

function hello(name = "TechC Academy") {
     alert("Xin chào, " + name);
}

Tham số name được định nghĩa với giá trị mặc định như trên được gọi là tham số mặc định. Lúc này nếu như khi gọi hàm hello() mà bạn không truyền vào giá trị nào cho tham số name ở trên thì giá trị mặc định (là chuỗi TechC Academy) sẽ được sử dụng:

hello(); // Hiển thị: "Xin chào, TechC Academy"