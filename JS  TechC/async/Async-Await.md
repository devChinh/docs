Có một cú pháp đặc biệt để làm việc với các Promise theo kiểu thoải mái hơn, được gọi là “async / await”. Nó dễ hiểu và dễ sử dụng một cách đáng ngạc nhiên

- Khi thêm async vào trước một funtion thì nó sẽ trở thành một Promise

VD : 

async function f() {
  return 1;
}

- Có thể trả về rõ ràng như một lời hứa

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1

- Từ khóa await làm cho JavaScript đợi cho đến khi lời hứa đó lắng xuống và trả về kết quả của nó.

Thay vì : 

async function f() {

   let promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve("done!"), 1000)
   })
 
   let result =  promise.then(data => console.log(data)); // wait until the promise resolves (*)
   
   console.log(result); // "done!"
 }
 
 f();

Hãy sử dụng : 

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f()


Việc thực thi hàm “tạm dừng” và tiếp tục khi lời hứa kết thúc, với việc result trở thành kết quả của nó. Vì vậy, đoạn mã trên hiển thị "đã xong!" trong một giây.

Hãy nhấn mạnh: await theo đúng nghĩa đen thì sẽ tạm dừng việc thực thi hàm cho đến khi lời hứa giải quyết và sau đó tiếp tục nó với kết quả lời hứa. Điều đó không tốn bất kỳ tài nguyên CPU nào, vì công cụ JavaScript có thể thực hiện các công việc khác trong thời gian chờ đợi: thực thi các tập lệnh khác, xử lý các sự kiện, v.v.

Nó chỉ là một cú pháp thanh lịch hơn để nhận được kết quả hứa hẹn hơn promise.then. Và, nó dễ dàng hơn để đọc và viết



ES6 là sinh ra promise
ES7 sinh ra async / await


 Callback có rất nhiều nhược điểm. 
 Khi ta có nhiều thao tác bất đồng bộ, các callback phải chờ nhau
  thực hiện, thời gian để hoàn thành sẽ bị kéo dài hơn. Ngoài ra, 
  việc viết các callback lồng nhau cũng làm cho mã nguồn của ta rắc 
  rối và khó bảo trì

