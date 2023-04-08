
I .Var

1 .  Khai báo biến với var được xác định có phạm vi toàn cục (global scope) ,phạm vi cục bộ/ hàm (function scope) nếu khai báo trong hàm

- Khái niệm phạm vi (scope) nghĩa là xác định vị trí có thể sử dụng biến

VD : 

var tester = “hey hi”;

    function newFunction() {

        var hello = “hello”

    }
    
    conseole.log(tester) // hey hi
    console.log(hello) // error: hello is not defined

- Vì biến tester được khai báo  nằm ngoài một hàm và một biến khi khi báo bên ngoài khối khai báo hàm có thể dùng trong toàn bộ window. Biến được khai báo trong hàm thì chỉ có thể truy cập ở trong khối khai báo của hàm

2 . Các biến khai báo với var có thể được tái khai báo và cập nhật

- Các biến có thể tái khai báo và cập nhật biến trong cùng phạm vi và sẽ không xuất hiện lỗi. Ví dụ biến greeter được khai báo lại trong cùng phạm vi

    var greeter = “hey hi”
    var greeter = “say Hello instead”

Tương tự như

    var greeter = “hey hi”
    greeter = “say Hello instead”


II . Let

1 . Let được định phạm vi trong khối mã (Block-scoped)

+ Một khối là một đoạn mã được bao bởi cặp dấu mở ngoặc nhọn và đóng ngoặc nhọn { }. Mọi lệnh trong cặp dấu là một khối mã (Block)

Biến khai báo với let trong khối mã chỉ có thể dùng trong khối mã đó. Ví dụ:

   let greeting = “say Hi”

   let times = 4

   if (times > 3) {

        let hello = “say Hello instead”

        console.log(hello);// “say Hello instead”

    }

   console.log(hello) // hello is not defined

2 . Let có thể được cập nhật nhưng không được khai báo lại

Giống với khai báo dùng var, biến khai báo với let có thể được cập nhật trong phạm vi tồn tại. Nhưng không giống với var, biến let không thể khai báo lại trong phạm vi tồn tại. Ví dụ:

    let greeting = “say Hi”

    greeting = “say Hello instead”

Biến greeting có thể cập nhật nội dung mới là “say Hello instead”. Chương trình sẽ báo lỗi khi thực hiện khai báo lại greeting giống với ví dụ dưới đây:

    let greeting = “say Hi”;

    let greeting = “say Hello instead”; // error: Identifier ‘greeting’ has already been declared

+ Note :  nếu cùng tên biên được định nghĩa khác phạm vi tồn tại thì sẽ không có lỗi xảy ra:

    let greeting = “say Hi”;

    if (true) {

        let greeting = “say Hello instead”;

        console.log(greeting); // “say Hello instead”

    }

    console.log(greeting); // “say Hi”

+Note  :  Trong thực tế, dùng let tốt hơn var. Khi dùng let, chúng ta không bận tâm biến có dùng trùng tên với biến khai báo trước đó ở phạm vi tồn tại khác. Điều này, khắc phục được hạn chế của var mà chúng ta đã bàn luận trước đó.

III . Const

- Khai báo const được định phạm vi theo khối mã (Block-scoped)

1 . Const không thể được cập nhật và khai báo lại

Không thể cập nhật và khai báo lại nghĩa là giá trị của biên không thể được thay đổi và không thể khai báo biến có trùng tên trong cùng phạm vi tồn tại

Ví dụ:

    const greeting = “say Hi”;

    greeting = “say Hello instead”;// error: Assignment to constant variable.

Khi thay đổi giá trị của biến greeting sẽ nhận được lỗi

Ví dụ về khai báo lại biến:

    const greeting = “say Hi”;

    const greeting = “say Hello instead”;// error: Identifier ‘greeting’ has already been declared

Biến greeting được khai báo lại và sẽ có lỗi xảy ra.


IV : Tóm tắt

Tóm lại, sự khác nhau giữa var, let, const có thể được tóm lược như sau:

+ Khai báo var được định phạm vi toàn cục (global) hay hàm (function) trong khi let và const được định phạm vi là khối mã (block)

+ Biến var có thể được cập nhật và khai báo lại trong phạm vi tồn tại; biến let có thể được cập nhật nhưng không thể khai báo lại; biến const không thể cập nhật và không thể khai báo lại.

+ Trong khi var và let có thể được khai báo không khởi gán giá trị, const phải khởi gán giá trị khi khai báo.
