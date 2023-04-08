1.  JSON 

- là viết tắt của JavaScript Object Notation, là một kiểu định dạng dữ liệu tuân theo một quy luật nhất định mà hầu hết các ngôn ngữ lập trình hiện nay đều có thể đọc được. JSON là một tiêu chuẩn mở để trao đổi dữ liệu trên web

2 . Định nghĩa

Định dạng JSON sử dụng các cặp key – value để dữ liệu sử dụng. Nó hỗ trợ các cấu trúc dữ liệu như đối tượng và mảng. Ví dụ một tập tin có tên  test.json với nội dung như ở dưới đây sử dụng format kiểu JSON để lưu trữ thông tin:

{
    "name" : "TechC",
    "title" : "Học lập trình web",
    "description" : "là khoá học bao gồm cả FE và BE "
}

Ta có thể thấy cú pháp của JSON có 2 phần đó là key và value:

+ Chuỗi JSON được bao lại bởi dấu ngoặc nhọn {}

+ Các key, value của JSON bắt buộc phải đặt trong dấu nháy kép "" , nếu bạn đặt nó trong dấu nháy đơn thì đây không phải là một chuỗi JSON đúng chuẩn.

+ Nếu có nhiều dữ liệu thì dùng dấu phẩy , để ngăn cách
+ Các key của JSON bạn nên đặt chữ cái không dấu hoặc số, dấu _ và không có khoảng trắng., ký tự đầu tiên không nên đặt là số.

+ JSON cũng bao gồm các kiểu dữ liệu như thông thường : Number , boolean , array , object , string , null

+ Khi mà bạn xem data được lấy từ API t thì dữ liệu trả về sẽ ở dưới dạng JSON và khi đó bạn cần chuyển nó sang JavaScriptType để sử dụng 

+ Stringify  :   là phương thức giúp chuyển đổi JavaScript Types sang kiểu JSON
+ Parse : là phương thức giúp chuyển đổi kiểu JSON sang JavaScript Types

VD : 
var a = "1"
console.log(JSON.parse(a))

var a = 1
console.log(JSON.stringify(a))

3 . JSON server

