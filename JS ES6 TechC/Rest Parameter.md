1 . Rest Parameters (tham số phần còn lại)

- ES6 cung cấp một loại tham số mới được gọi là tham số còn lại có tiền tố là ba dấu chấm (...)
- Trong trường hợp có nhiều đối số truyền vào thì ta có thể dùng Rest Parameters để  giảm thiểu số lần nhập tham số tương ứng

- cú pháp sau:

    function fn(a,b,...args) {
       //code
    }

- Tham số cuối cùng ( args) được bắt đầu bằng dấu ba chấm ( ...). Nó được gọi là tham số nghỉ ( ...args)

- Tất cả các đối số bạn truyền vào hàm sẽ tương đương lần lượt với danh sách tham số. Trong cú pháp trên, đối số đầu tiên tương ứng  a, đối số thứ hai tương ứng  b và đối số thứ ba, thứ tư, v.v., sẽ được lưu trữ trong tham số còn lại args dưới dạng một mảng. Ví dụ truyền đối số như sau:

  fn(1,2,3,"A","B","C")

- Thì mảng  args lưu trữ các giá trị sau : 

   [3,"A","B","C"]

- Nếu bạn chỉ truyền hai tham số đầu tiên, thì tham số còn lại sẽ là một mảng trống : 

   fn(1,2)

- Thì args sẽ là :  []

* Note : Lưu ý rằng các tham số còn lại phải xuất hiện ở cuối danh sách đối số nếu không sẽ xảy ra lỗi

   function fn(a,...rest, b) {
   // error
   }

VD : 

+ thay vì dùng parameter như bình thường : 

  function fn(a,b,c,d,e,f){
     // code
  }

  fn(1, 2, 3, "A", "B", "C")

+ dùng Rest parameter :

 function fn(a,b,...rest){
     // code
  }

  fn(1, 2, 3, "A", "B", "C")

2 . Các ví dụ về Rest Parameters

VD1 : 

   function sum(...args) {
      let total = 0;
      for (const a of args) {
         total += a;
      }
      return total;
   }

   sum(1, 2, 3)

Output là : 6

VD 2 : Giả sử rằng người gọi sum() hàm có thể truyền đối số với nhiều loại kiểu dữ liệu khác nhau như số , chuỗi và boolean và bạn chỉ muốn tính tổng các số:

   function sum(...args) {
   return args
      .filter(function (e) {
         return typeof e === 'number'
      })
      .reduce(function (prev, curr) {
         return prev + curr
      });
   }

let result = sum(10,'Hi',null,undefined,20)
console.log(result)

- Output : 30


VD 3 : 

   const combine = (...args) => {
   return args.reduce(function (prev, curr) {
      return prev + ' ' + curr
   });
   };

   let message = combine('JavaScript', 'Rest', 'Parameters')
   console.log(message)  // JavaScript Rest Parameters