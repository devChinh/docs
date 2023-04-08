I Định nghĩa đối tượng

JavaScript object sử dụng cặp dấu ngoặc {} để biểu diễn:

{
  key1: value1,
  key2: value2,
  key3: value3,
  ...
}

Trong đó:

key1, key2, key3,...: là tên thuộc tính, có kiểu dữ liệu là string 
value1, value2, value3,...: là giá trị tương ứng của các thuộc tính. Value có thể thuộc bất kỳ kiểu dữ liệu nào (kể cả object).
Các cặp key-value ngăn cách nhau bởi dấu phẩy ,

VD : const person = {name : 'cikey'}

Trong đó :
+ name  : được gọi là property name (key)
+ cikey :  được gọi là property value (value)

II Cách cách khởi tại 1 object

1 . Object literal

-Đây là cách đơn giản và rõ ràng nhất để tạo object. Nhược điểm là nó chỉ tạo ra một object duy nhất, nên muốn tạo ra nhiều object cùng lúc cần dùng cách khác.

let shortObj = { name: "John", age: 20 };
let longObj = {
    name: "John",
    age: 20
}

- Hoặc

var Comment = {};
 
// Thêm thuộc tính
Comment.title = 'abc';
Comment.content = 'abc';
Comment.fullname = 'abc';
Comment.email = 'abc';

2 . Sử dụng từ khoá new và object constructor

let john = new Object()

john.name = "John"
john.age = 20

- Cách này sử dụng từ khóa new và Object constructor. Đầu tiên dòng 1 chỉ tạo ra object rỗng, và rồi bạn mới thêm các thuộc tính vào bằng cách gán value cho nó

3 Define a constructor ( định nghĩ một constructor)

-Cách này khá giống cách ở trên, nhưng chúng ta sử dụng constructor tùy chỉnh thay vì Object. Constructor chỉ là một function bình thường, gán giá trị cho this, và được gọi bằng new keyword

function createPerson(name, age) {
    this.name = name;
    this.age = age;
}

let john = new createPerson("John", 20);

-Cách này trước khi JS có class được dùng khá nhiều, vì nó có thể tạo ra được nhiều object tương tự nhau


4 Instantiate from class (khởi tạo từ class)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let john = new Person("John", 20);

5 Ngoài khởi tạo các cặp key  : value còn có thể khởi tạo một phương thức trong object (một function)

VD  : 

var Comment = {
  addComment : function(){
    // do something
  },
  validateComment : function(){
    // do something
  }
};
 
 hoặc 

let Comment = {}

Comment.addComment = function(){
    // do some thing
};
 
Comment.validateComment = function(){
    // do some thing
};

các gọi phương thức tương tự như gọi key : objectName : methodName()

VD :   Comment.addComment()

III .  Cách gọi thuộc tính, phương thức của Object?

Tổng quát cách gọi thuộc tính :  objectNam.key hoặc objectname["key"]

var Car = {
    modal : "Lexus",
    type: "500",
    color: "White"
};

Car.modal // Lexus
Car["type"] // 500
Car.color // White

+ Cập nhật JavaScript object

Để thay đổi giá trị thuộc tính của object, bạn chỉ cần sử dụng cách truy cập ở trên và gán giá trị mới cho thuộc tính đó

let myComputer = {
  type: "laptop"
};

myComputer.type = "desktop" or myConputer["type"] = "desktop"

+ Xóa một thuộc tính của object

Để xóa một thuộc tính của object trong JavaScript, bạn sử dụng toán tử delete

let myComputer = {
  type: "laptop"
};

delete myComputer["type"] or delete myComputer["type"]


IV : Mảng chứa object  - object chứa object

1 .object chứa object

Ví dụ 1: Gom các thuộc tính của Comment vào một đối tượng Info.

var Comment = {
    info : {
        title : "",
        content : "",
        email : "",
        fullname : ""
    }
};

Ví dụ 2: Gom các phương thức (hàm) của Comment vào đối tượng func.

var Comment = {
    func : {
        addComment : function(){
            // Something
        },
        validateComment : function(){
            // Something
        }
    },
};

Lúc này để truy xuất tới các thuộc tính và phương thức này ta chỉ việc sử dụng dấu chấm và bổ sung thêm một cấp nữa.

Comment.info.title = "Comment tại TechC"
Comment.func.addComment()

2 . Mảng chứa object

var Comment = [{
    title   : "",
    content : "",
    email   : "",
    fullname : "" 
}];
 
// Sử dụng
Comment[0].title = "Tiêu đề bình luận"

Hoặc

// Đối tượng Comment
var Comment = {
    title   : "",
    content : "",
    email   : "",
    fullname : ""
}
 
// Khởi tạo mảng
var CommentArray = []
 
// Gán giá trị cho phần tử mảng
CommentArray[0] = Comment
 
// Gọi tới thuộc tính
Comments[0].title = "Tiêu đề bình luận"

