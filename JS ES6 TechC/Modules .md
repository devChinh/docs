- Trong phần này , mình sẽ tìm hiểu về các mô-đun ES6 và cách xuất các biến, hàm từ một mô-đun này và sử dụng lại chúng trong các mô-đun khác

- Mô-đun ES6 là một tệp JavaScript chỉ thực thi ở chế độ nghiêm ngặt. Điều đó có nghĩa là bất kỳ biến hoặc hàm nào được khai báo trong mô-đun sẽ không được tự động thêm vào phạm vi toàn cầu , có nghĩ là nó chỉ được sử dụng trong phạm vi của nó thôi nhưng mà nếu mà mình muốn dùng hàm , biến của modules này sang modules khác thì sẽ phải dùng export và import

1. Exporting

- Để xuất một biến , một hàm , hay một class , bạn đặt từ khóa export trước nó như sau:

Trong file log.js :

            export let message = 'Hi'

            export function getMessage() {
            return message
            }

            export function setMessage(msg) {
            message = msg
            }

            export class Logger {

            }

- Trong ví dụ này, chúng ta có mô-đun log.js với một biến, hai hàm và một class. Chúng tôi đã sử dụng từ khóa export để xuất tất cả các từ khoá định dạng trong mô-đun

JavaScript cho phép bạn định nghĩa một biến, một hàm hoặc một lớp trước rồi xuất nó sau như sau:

                function foo() {
                console.log('foo')
                }

                export foo

2 . Importing

- Sau khi bạn xác định mô-đun có xuất (exporting), bạn có thể truy cập các biến, hàm và lớp đã xuất trong mô-đun khác bằng cách sử dụng từ khóa import . Sau đây minh họa cú pháp:

        import { what, ever } from './other_module.js'

- Trong cú pháp này:

  - Đầu tiên , chỉ định nội dung cần nhập bên trong dấu ngoặc nhọn, được gọi là liên kết.
  - Sau đó, chỉ định mô-đun mà từ đó bạn nhập các liên kết đã cho

- Lưu ý rằng khi bạn nhập một liên kết từ một mô-đun, liên kết đó sẽ hoạt động giống như nó đã được xác định bằng cách sử dụng const . Điều đó có nghĩa là bạn không thể có một số nhận dạng khác có cùng tên hoặc thay đổi giá trị của liên kết

- Xem ví dụ sau:

        // greeting.js

        export let message = 'Hi';

        export function setMessage(msg) {
        message = msg;
        }

- Khi bạn import biến message và hàm setMessage(), bạn có thể sử dụng hàm setMessage() để thay đổi giá trị của biến message như hình bên dưới:

       // app.js

       import {message, setMessage } from './greeting.js'

       console.log(message); // 'Hi'

       setMessage('Hello')
       console.log(message); // 'Hello'

- Tuy nhiên, bạn không thể trực tiếp thay đổi giá trị của biến message . Biểu thức sau đây gây ra lỗi:

        message = 'Hallo'; // error

3 . Import toàn bộ mô-đun dưới dạng đối tượng

    import * as cal from './cal.js'

    cal.a
    cal.b
    cal.sum()

4 . Giới hạn của import và export

- Lưu ý rằng bạn phải sử dụng câu lệnh import hoặc bên ngoài các câu lệnh và hàm khác

* Ví dụ sau đây gây ra một : exportSyntaxError

        if( requiredSum ) {
        export sum
        }

* Tương tự, import câu lệnh sau đây cũng gây ra một SyntaxError:

        function importSum() {
        import {sum} from './cal.js'
        }

5 . Bí danh

- JavaScript cho phép bạn tạo bí danh cho các biến, hàm hoặc lớp khi bạn xuất và nhập

+ VD ở file math.js

        function add( a, b ) {
        return a + b
        }

        export { add as sum }

- Trong ví dụ này, thay vì xuất hàm add(), chúng ta đã sử dụng từ khóa as để gán cho hàm sum() một bí danh

- Vì vậy, khi bạn nhập chức năng add() từ math.js, thì sẽ sử dụng sum thay vì add

        import { sum } from './math.js'

- Nếu  muốn sử dụng một tên khác khi import , bạn có thể sử dụng từ khóa as như sau

        import {sum as total} from './math.js'


6 . Re-exporting

- Có thể export các liên kết mà bạn đã import. Điều này được gọi là re-export 

Ví dụ:

        import { sum } from './math.js'
        export { sum }

- Trong ví dụ này, chúng ta đã import  sum từ module math.js  và export lại nó Mệnh đề sau tương đương với mệnh đề trên

        export {sum} from './math.js'

Trong trường hợp muốn đổi tên các ràng buộc trước khi xuất lại, bạn sử dụng từ khóa as . Ví dụ sau về import  sum từ module math.js và export lại dưới dạng tệp add

        export { sum as add } from './math.js'
        
6 . Export default

Sau đây file sort.js  có export mặc định.

        export default function(arr) {
        // code here
        } 

Lưu ý rằng  không cần chỉ định tên cho hàm vì mô-đun đại diện cho tên hàm.

        import sort from sort.js
        sort([2,1,3])

-  Mã sort định danh đại diện cho chức năng mặc định của module sort.js .  Lưu ý rằng  không cần sử dụng dấu ngoặc nhọn {} bao quanh với kiểu export default

- Ví dụ về export và export default

+ file sort.js

        export default function(arr) {
           // code here
        }
        export function heapSort(arr) {
         // code here
        }

Để nhập cả các liên kết mặc định và không mặc định, bạn chỉ định một danh sách các liên kết sau từ khóa import với các quy tắc sau:

        + Ràng buộc mặc định phải đến trước.
        + Liên kết không mặc định phải được bao quanh bởi dấu ngoặc nhọn
        
Xem ví dụ sau:

        import sort, {heapSort} from './sort.js'
        sort([2,1,3])
        heapSort([3,1,2])

