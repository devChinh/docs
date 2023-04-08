1 . Một chút về OOP trước khi vào es6

- Khi chưa có classes ES6 thì việc khởi tạo các đối tượng khá là cực và rườm rà 

const user1 = {name: 'messi', age: 31, email: 'messi@gmail.com'}
const user2 = {name: 'ronaldo', age: 32, email: 'ronaldo@gmail.com'}
const user3 = {name: 'nani', age: 31, email: 'nani@gmail.com'}

- Chính vì thế mà classes ES6 của js được sinh ra để giai quyết vấn đề này

2 .  OOP với ES6

- Cú pháp của classes ES6

    class User {
    constructor(name, age, emmail){
                this.name = name;
                this.age = age;
                this.email = email;
            }
    }

    const user1 = new User('messi', 31, 'messi@gmail.com')
    const user2 = new User('ronaldo', 32, 'ronaldo@gmail.com')
    const user3 = new User('nani', 31, 'nani@gmail.com')

