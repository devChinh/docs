1 . Tìm hiểu về Object Literals Syntax

- Object literals (đối tượng theo nghĩa đen) là một trong những patterns (mẫu) phổ biến nhất để tạo đối tượng (object) trong javascript vì tính đơn giản của nó và Object literals trong ES6 sẽ làm cho code sạch hơn và linh hoạt hơn.

2 . Sử dụng Object Literals để Object property initializer shorthand (tạo nhanh thuộc tính đối tượng)

- Trước khi có ES6, một đối tượng theo nghĩa đen là một tập hợp các cặp tên-giá trị. Ví dụ

  function createMachine(name, status) {
    return {
        name: name,
        status: status
    }
  }

- Hàm createMachine() nhận hai đối số là name , status và trả về một đối tượng mới theo nghĩa đen với hai thuộc tính: name và status

- Các thuộc tính name và status đều nhận các giá trị của các tham số truyền vào . Cú pháp này có vẻ dư thừa vì được đề cập hai lần trong cả tên và giá trị của thuộc tính

- ES6 cho phép bạn loại bỏ sự trùng lặp khi một thuộc tính của một đối tượng giống với tên biến cục bộ bằng cách bao gồm tên không có dấu hai chấm và giá trị

Ví dụ, bạn có thể viết lại createMachine()hàm trong ES6 như sau:

    function createMachine(name, status) {
        return {
            name,
            status
        }
    }

- Khi một thuộc tính của một đối tượng bằng chữ chỉ có một tên, công cụ JavaScript sẽ tìm kiếm một biến có cùng tên trong phạm vi xung quanh. Nếu công cụ JavaScript có thể tìm thấy một thuộc tính, nó sẽ gán giá trị của biến cho thuộc tính đó.

- Trong ví dụ này, công cụ JavaScript gán các giá trị thuộc tính name và status của đối số status và name

Tương tự, có thể xây dựng một đối tượng bằng chữ từ các biến cục bộ như trong ví dụ sau:

        let name = 'Computer'
        let status = 'On'

        let machine = {
           name,
           status
        }

3 . Computed property name (tên thuộc tính được tính toán)

- Trước ES6, có thể sử dụng dấu ngoặc vuông [] để khởi tạo các thuộc tính (key) được tính toán cho các thuộc tính trên đối tượng

- Dấu ngoặc vuông cho phép sử dụng các ký tự chuỗi và biến làm tên thuộc tính

VD :

    let name = 'machine name'
    let machine = {
        [name]: 'server',  // dùng biến
        'machine hours': 10000 // dùng kí tự chuỗi
    }

console.log(machine[name])
console.log(machine['machine hours'])

- Biến name được khởi tạo thành giá trị là 'machine name'. Vì cả hai thuộc tính machine của đối tượng đều chứa khoảng trắng nên chỉ có thể tham chiếu chúng bằng cách sử dụng dấu ngoặc vuông

* Trong ES6, tên thuộc tính được tính toán là một phần của cú pháp nghĩa đen của đối tượng và nó sử dụng ký hiệu dấu ngoặc vuông.

- Khi một tên thuộc tính được đặt bên trong dấu ngoặc vuông, công cụ JavaScript sẽ đánh giá nó dưới dạng một chuỗi. Điều đó có nghĩa là có thể sử dụng một biểu thức làm tên thuộc tính. Ví dụ:

        let prefix = 'machine'
        let machine = {
            [prefix + ' name']: 'server',
            [prefix + ' hours']: 10000
        };

        console.log(machine['machine name']); // server
        console.log(machine['machine hours']); // 10000

4 . Concise method syntax (Cú pháp phương thức ngắn gọn)

- Trước ES6, khi định nghĩa một phương thức cho một đối tượng theo nghĩa đen, thì cần chỉ định tên và định nghĩa hàm đầy đủ như trong ví dụ sau:

  let server = {
  name: "Server",
  restart: function () {
  console.log("The" + this.name + " is restarting...")
  }
  }

- ES6 làm cho cú pháp tạo một phương thức của đối tượng theo nghĩa đen trở nên ngắn gọn hơn bằng cách loại bỏ dấu hai chấm (:) và functiontừ khóa.

Ví dụ sau viết lại đối tượng server trên bằng cú pháp ES6.

    let server = {
        name: 'Server',
        restart() {
            console.log("The" + this.name + " is restarting...")
        }
    }

- Cú pháp tốc ký này còn được gọi là cú pháp phương pháp ngắn gọn . Việc có khoảng trắng trong tên thuộc tính là hợp lệ. Ví dụ:

  let server = {
  name: 'Server',
  restart() {
  console.log("The " + this.name + " is restarting...")
  },
  'starting up'() {
  console.log("The " + this.name + " is starting up!")
  }
  }

  server['starting up']()

Trong ví dụ này, phương thức 'starting up'có khoảng trắng trong tên của nó. Để gọi phương thức,cần sử dụng cú pháp sau: object_name['property name']()
