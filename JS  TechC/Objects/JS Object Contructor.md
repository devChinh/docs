1 Object constructor ( xây dựng đối tượng)


Định nghĩa một object constructor :

VD: 

// đây được coi như là một bản thiết kế chung cho tất cả các user
// hàm này được gọi là một hàm tạo hoặc là một object constructor
// và hàm này không phải là một đối tượng nó chỉ mô tả thiết kế của đối tượng 

  function User(fname , lname , age  ,address){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = address;
}

// khởi tạo các user dùng từ khoá new và tên bản thiết kế

var user1 = new User('Cikey'  , 'Tong' , '30' , 'HaNoi')
var user2 = new User('Bao' , 'Le' , '22'  , 'Ha Long')

- Muốn xem 1 đối tượng được xây dụng từ contructor nào 

VD : user1.constructor

-  Có thể tạo những thuộc tính riêng của một đối tượng đó mà không nằm trong bản thiết chung

VD :   user1.title =  'ten toi la cikey'
          user1.comment  = "day la comment cua cikey"

- Có thể tạo 1 phương thức ở bên trong object contructor

VD : 
  function User(fname , lname , age  ,address){
    this.fname = fname
    this.lname = lname
    this.age = age
    this.address = address
    this.getName = function(){
        return `${this.fname} ${this.lname}`
    }
}

// gọi phương thức 
user1.getName()





