1. Giới thiệu JavaScript Constructor Function

Ví dụ có một object bằng literal syntax

let person = {
    firstName: 'Cikey',
    lastName: 'Tong'
}

- Trong thực tế, bạn sẽ thường xuyên gặp trường hợp cần phải tạo nhiều object tương tự object person

- Để làm việc này dễ dàng,  có thể sử dụng <constructor function> như là một cái khuôn, sau đó  dùng cái khuôn để tạo ra các object tương tự nhau


+ VD1 : Một cái xe đều có tên , cân nặng , chiều dài , chiều rộng ... 

function Car ( name , weight , width , height){
    this.name = name
    this.weight = weight
    this.width = width
    this.height = height
}

const car1 = new Car('Ford', 2000kg , 2m , 2m)
const car2 = new Car('Honda', 2500kg , 3m , 1m)

+ VD2 :

// constructor function

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}


- Để khởi tạo một object (instance) từ Person, mình sử dụng toán tử new

    let person = new Person('Cikey', 'Tong')

- Về cơ bản, toán tử new làm những việc sau đây:

    + Tạo một object rỗng và gán nó vào this
    + Gán giá trị cho property firstName và lastName lần lượt là 'Cikey' và 'Tong'
    + Trả về keyword this

- có thể mô phỏng tương đương như sau:

        function Person(firstName, lastName) {
        // this = {};

        // add properties to this

        this.firstName = firstName
        this.lastName = lastName

        // return this
        }


Lưu ý : Việc viết hoa chữ cái đầu tiên của hàm khởi tạo nó không phải là bắt buộc nhưng mà nên viết vì nó là quy ước chung của các lập trình viên


2 .Thêm method vào JavaScript constructor function

Để thêm method cho một object thông qua constructor function,  có thể sử dụng keyword this

VD : 

        function Person(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        }
    }

Bây giờ,  có thể khởi tạo object có method getFullName

let person = new Person('Cikey', 'Tong')
console.log(person.getFullName())


