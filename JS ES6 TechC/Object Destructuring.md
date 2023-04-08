I . Object destructuring

-  Học cách sử dụng phép gán hủy cấu trúc (destructing) ES6 để gán các thuộc tính của một đối tượng cho các biến có cùng tên theo mặc định

1. Introduction to the JavaScript object destructuring

- Giả sử  có một personđối tượng với hai thuộc tính: firstNamevà lastName.

        let person = {
            firstName: 'John',
            lastName: 'Doe'
        }

- Trước ES6, khi bạn muốn gán các thuộc tính của đối tượng person cho các biến, bạn thường làm như sau:

        let firstName = person.firstName
        let lastName = person.lastName

- Trong ES6 giới thiệu cú pháp destructuring đối tượng cung cấp một cách khác để gán các thuộc tính của một đối tượng cho các biến:

        let { firstName: fname, lastName: lname } = person;

- Trong ví dụ này, các thuộc tính firstName và lastName được gán cho các biến fName và lName tương ứng

Trong cú pháp này: let { property1: variable1, property2: variable2 } = object

- Định danh trước dấu hai chấm ( :) là thuộc tính của đối tượng và định danh sau dấu hai chấm là biến.

- Nếu các biến có cùng tên với các thuộc tính của đối tượng, bạn có thể làm cho mã ngắn gọn hơn như sau:

        let { firstName, lastName } = person

        console.log(firstName) // 'John'
        console.log(lastName) // 'Doe'


2 . Setting default values  (Đặt giá trị mặc định )

- Bạn có thể gán giá trị mặc định cho biến khi thuộc tính của đối tượng không tồn tại.

        let person = {
            firstName: 'John',
            lastName: 'Doe',
            currentAge: 28
        };

        let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

        console.log(middleName); // ''
        console.log(age); // 28

- Trong ví dụ này, chúng ta gán một chuỗi rỗng cho biến middleName khi đối tượng person không có thuộc tính middleName

- Ngoài ra,  có thể gán thuộc tính currentAge cho biến age có giá trị mặc định là 18.

Tuy nhiên, khi đối tượng người có thuộc tính middleName, nhiệm vụ hoạt động như bình thường:

            let person = {
                firstName: 'John',
                lastName: 'Doe',
                middleName: 'C.',
                currentAge: 28
            };

            let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;

            console.log(middleName); // 'C.'
            console.log(age); // 28

3 . Nested object destructuring (Phá hủy đối tượng lồng nhau)

        let employee = {
        id: 1001,
        name: {
                firstName: 'John',
                lastName: 'Doe'
        }
        }

       let {
        name: {
                firstName,
                lastName
        }
        } = employee

        console.log(firstName) // John
        console.log(lastName) // Doe

4 . Destructuring function arguments

        let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`)

        let person = {
        firstName: 'John',
        lastName: 'Doe'
        }

        display(person)
