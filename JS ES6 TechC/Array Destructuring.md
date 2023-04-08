
-  ES6 cung cấp một tính năng mới gọi là destructing  cho phép bạn hủy cấu trúc các thuộc tính của một đối tượng hoặc các phần tử của một mảng thành các biến riêng lẻ.

I . Array destructuring

-  Học cách sử dụng phép gán hủy cấu trúc (destructing) ES6 để hủy cấu trúc các phần tử trong một mảng thành các biến riêng lẻ.

- Giả sử rằng bạn có một hàm trả về một mảng số như sau:

    function getScores() {
    return [70, 80, 90]
    }

- Sau đây gọi hàm getScores() và gán giá trị trả về cho một biến:

    let scores = getScores()

- Để có được điểm số cá nhân, bạn cần phải làm như thế này:

        let x = scores[0]
            y = scores[1]
            z = scores[2]

- Trước ES6, không có cách nào trực tiếp để gán các phần tử của mảng được trả về cho nhiều biến như x và y z

May mắn thay, bắt đầu từ ES6, bạn có thể sử dụng destructing để gán các biến như sau:

    let [x, y, z] = getScores()

    console.log(x); // 70
    console.log(y); // 80
    console.log(z); // 90

- Các biến x và  y và z sẽ lấy giá trị của các phần tử thứ nhất, thứ hai và thứ ba của mảng được trả về.

- Lưu ý rằng các dấu ngoặc vuông []trông giống như cú pháp mảng nhưng không phải vậy.

- Nếu getScores()hàm trả về một mảng gồm hai phần tử, thì biến thứ ba sẽ là undefined như sau :

        function getScores() {
        return [70, 80];
        }

        let [x, y, z] = getScores();

        console.log(x); // 70
        console.log(y); // 80
        console.log(z); // undefined

- Trong trường hợp hàm getScores() trả về một mảng có nhiều hơn ba phần tử thì các phần tử còn lại sẽ bị loại bỏ. Ví dụ:

        function getScores() {
        return [70, 80, 90, 100]
        }

        let [x, y, z] = getScores()

        console.log(x); // 70
        console.log(y); // 80
        console.log(z); // 90

1 . Array Destructuring  and Rest syntax

- Có thể lấy tất cả các phần tử còn lại của một mảng và đặt chúng vào một mảng mới bằng cách sử dụng cú pháp rest (...) :

        let [x, y ,...args] = getScores()
        console.log(x) // 70
        console.log(y) // 80
        console.log(args) // [90, 100]

- Các biến x và y nhận  giá trị của hai phần tử đầu tiên của mảng được trả về. Và biến args nhận tất cả các đối số còn lại là 2 phần tử cuối cùng của mảng trả về.

Lưu ý rằng có thể hủy cấu trúc một mảng trong phép gán tách biệt với khai báo của biến. Ví dụ:

        let a, b
        [a, b] = [10, 20]
        console.log(a) // 10
        console.log(b) // 20

2 . Đặt giá trị mặc định

- Nếu giá trị được lấy từ mảng là undefined,  có thể gán cho biến một giá trị mặc định, như sau : 

        let a, b
        [a = 1, b = 2] = [10]
        console.log(a) // 10
        console.log(b)  // 2
    
3 . Phá hủy mảng lồng nhau

Hàm sau đây trả về một mảng chứa một phần tử là một mảng khác hoặc mảng lồng nhau:

        function getProfile() {
            return [
                'John',
                'Doe',
                ['Red', 'Green', 'Blue']
            ];
        }

Vì phần tử thứ ba của mảng được trả về là một mảng khác, nên bạn cần sử dụng cú pháp phá hủy mảng lồng nhau để phá hủy cấu trúc của nó, như sau:

            let [
                firstName,
                lastName,
                [
                    color1,
                    color2,
                    color3
                ]
            ] = getProfile();

console.log(color1, color2, color3); // Red Green Blue

4 . Các ứng dụng gán cấu trúc mảng


-  Hoán đổi biến : việc phá hủy mảng giúp dễ dàng hoán đổi giá trị của các biến mà không cần sử dụng biến tạm thời

        let a = 10, 
            b = 20;

        [a, b] = [b, a];

        console.log(a)  // 20
        console.log(b)  // 10


-  Các hàm trả về nhiều giá trị : trong JavaScript, một hàm có thể trả về một giá trị. Tuy nhiên, bạn có thể trả về một mảng chứa nhiều giá trị, ví dụ:

        function stat(a, b) {
            return [
                a + b,
                (a + b) / 2,
                a - b
            ]
        }

let [sum, average, difference] = stat(20, 10)
console.log(sum, average, difference) // 30, 15, 10
