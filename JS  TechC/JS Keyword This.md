I . What is this

Trong JavaScript, thistừ khóa đề cập đến một đối tượng 

Đối tượng this phụ thuộc vào cách đang được gọi (được sử dụng hoặc được gọi)

Từ khóa this đề cập đến các đối tượng khác nhau tùy thuộc vào cách nó được sử dụng

1 . Khi ở một mình 

+  <this>  tham chiếu đến đối tượng toàn cục  // window

2 . Trong một method

- Khi được sử dụng trong một phương thức đối tượng, this tham chiếu đến đối tượng

VD : 

const person = {
  firstName: "John"
  lastName: "Doe"
  fullName : function() {
    return this.firstName + " " + this.lastName
  }
}

person.fullName() // John Doe

- Trong ví dụ trên đầu trang này, this đề cập đến đối tượng person
- Bởi vì phương thức fullName là một phương thức của đối tượng person


3 . this trong một  Function (Default)

VD  :

function myFunction() {
  return this
}

console.log(myFunction())   // window


4 this trong một  Event Handlers

- Trong trình xử lý sự kiện HTML, this đề cập đến phần tử HTML đã nhận sự kiện

VD : 

<button onclick="this.style.display='none'">Click to Remove Me!</button>

- Trường hợp này thì this chính là thẻ button





