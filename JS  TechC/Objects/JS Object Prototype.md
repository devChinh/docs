I .  Object prototype (khuôn , nguyên mẫu) là gì

1 .  Như đã học ở phần trước object constructor như là một cái khung , một bản vẻ của một ngôi nhà còn prototype như là các nguyên liệu của ngôi nhà
 
VD : có một hàm tạo 

 function User(fname , lname , age  ,address){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = address;
}

// prototype giúp thêm một thuộc tính ở bên ngoài hàm tạo

User.prototype.classname = "TechC"
User.prototype.getName = function(){
        return this.classname
    }

2 .  có thể đính kèm các thuộc tính mới vào một đối tượng bất kỳ lúc nào 

Ví dụ: Đính kèm thuộc tính vào đối tượng

        function Student() {
            this.name = 'John'
            this.gender = 'Male'
        }

        var studObj1 = new Student()
        studObj1.age = 15
        alert(studObj1.age) // 15

        var studObj2 = new Student()
        alert(studObj2.age) // undefined

- Như bạn có thể thấy trong ví dụ trên, thuộc tính age được gắn vào cá thể studObj1
Tuy nhiên, cá thể studObj2 sẽ không có thuộc tính tuổi vì nó chỉ được định nghĩa trên cá thể studObj1

-  Nếu muốn tất cả đối tượng được khởi tạo đều có chung một thuộc tính nào đó 


        function Student() {
            this.name = 'John'
            this.gender = 'M'
        }

        Student.prototype.age = 15

        var studObj1 = new Student()
        alert(studObj1.age) // 15

        var studObj2 = new Student()
        alert(studObj2.age) // 15

3 . Để xem các constructor và các phương thức hay thuộc tính được khởi tạo từ prototype của một khuôn thì có 2 cách

    + Student.prototype
    + studObj1.__proto__


2 . Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. Tất cả các object trong javascript đều có một prototype, và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình

-vì vậy tất cả các đối tượng trong Javascript ( như là number , array  , object , ...) đều có một prototype riêng để lưu trữ các thành phần đó. Lúc này khi bạn tạo mới một instance(thực thể) thì instance đó sẽ kế thừa tất cả các phương thức và thuộc tính chứa trong prototype của đối tượng

VD : 

    + new Array()
    + new Number()
    + new Object()
    + new String()

- Ví dụ khi tạo một đối tượng array thì prototype của nó là các tất cả các phương thức để thao tác với mảng như là concat , map , string , .... 

- Ví dụ khi tạo một đối tượng number thì prototype của nó là các tất cả các phương thức để thao tác với number  như là toFixed , to String , ...


- Ví dụ, khi  tạo một instance của đối tượng Number thì instance này sẽ có tất cả các hàm xử lý number của đối tượng Number

// Tạo mới đối tượng Number
var age = new Number(12) 

age.name = "Cikey"
age.address = "HaNoi"
 
// Lúc này sẽ sử dụng được các phương thức
age.toString()
age.toFixed()
age.toPrecision()
age.valueOf()

Như vậy, mỗi object sẽ được chia làm 2 phần

    +Phần đầu tiên là những thuộc tính riêng của instance

    +Phần thứ hai là prototype, chứa những phương thức và thuộc tính được kế thừa từ object. Cụ thể trong ví dụ này là object Number


