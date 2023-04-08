1 . Hoisting trong javascript là gì?

- Hoisting là vấn đề liên quan đến cách khai báo biến trong Javascript. Theo quy tắc chung của hầu hết các ngôn ngữ lập trình, để sử dụng một biến thì bạn phải khai báo nó trước. Nhưng javascript thì lại khác, có một số trường hợp bạn có thể sử dụng biến rồi mới khai báo sau

Bắt đầu với ví dụ 1 nào :

VD1 : 
   console.log(a)

- Kết quả không có gì lạ: lỗi a is not define, bởi biến a chưa được khai báo ở đâu cả

VD2 : 

    console.log(a)
    a = 'Hello Hoisting'

- Ví dụ này có vẻ phức tạp hơn ví dụ trên "rất nhiều" nhưng kết quả vẫn chỉ có một: a is not define

VD3 : 

    var a
    console.log(a)

- Output sẽ là undefined vì a đã được khai báo nhưng vẫn chưa được gán giá trị

VD4 : 

    console.log(a)
    var a

- Thật tình cờ và thật bất ngờ, kết quả ra trùng với Ex3, đều là undefined . Tại sao nó lại giống như là VD3 

- Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng


Chúng ta sẽ tiếp tục làm Ex5 và phần giải thích làm rõ hơn cho ví dụ 4.

VD5: 
    console.log(a)
    var a = 'Hello Hoisting'

=>  var a
    console.log(a)
    a = 'Hello Hoisting'

- Giải thích:

- Trình biên dịch của Javascript sẽ phân tách phần var a = 'Hello Hoisting' thành 2 phần là khai báo và gán giá trị

    + Khai báo: var a
    + Gán giá trị a = 'Hello Hoisting'

-  Theo Hoisting, Javascipt sẽ chuyển phần khai báo lên trên top. Vì vậy, sẽ chỉ có phần khai báo được chuyển lên trên top, còn phần gán giá trị vẫn giữ nguyên thứ tự nên vẫn ở dưới Vậy nên Output sẽ là undefined


2 Hoisting với Function

    console.log(sum(6,9))

    function sum(a,b){
        return a + b
    }

=>  function sum(a,b){
        return a + b
    }

    console.log(sum(6,9))

3 . Hoisting với const và let

- Khi khai báo biến với từ khoá const và let thì nó vẫn được hoisted nhưng mà nó chỉ được đưa từ khoá khai báo biến lên đầu  thôi còn giá trị của biến thì sẽ bị đưa vào một vùng được gọi là không được cho phép kết nối

VD : console.log(fullname)
    const fullname = "tong van chinh"

- Nó sẽ báo lỗi : cannot access "fullname: before initialization


4 . Tổng kết

+ Trình biên dịch của Javascript sẽ chuyển phần khai báo của biến và hàm lên trên top, nó được gọi là Hoisting
+ Chỉ có phần khai báo được đưa lên top, không phải phần gán giá trị
+ Phần khai báo hàm được đưa lên trước phần khai báo của biến