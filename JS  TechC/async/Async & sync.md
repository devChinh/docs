

1 . Đồng bộ trong JavaScript

- Là thực hiện công việc một các tuần tự , code sẽ được chạy từ trên xuống dưới lần lượt , công việc này thực hiện xong rồi mới đến công việc khác

- Nhược điểm : khi làm một việc nào đó mất thời gian chẳng hạn là gửi một resquest
 lên server (call API) hay là thực hiện một event nào đó chẳng hạn thì khi đó không thể thực hiện bất cứ các công việc khác được trước khi mà các việc mất thời gian trên

 2 Bất đồng bộ trong JavaScript

 - Qúa trình bất đồng bộ là các câu lệnh chạy không theo thứ tự và các câu lệnh có thể chạy cùng một lúc mà không cần phải chờ đợi câu lệnh trước
 
 VD  : 

 console.log(1)
 setTimeOut(() =>{
    console.log(2)
 })
 console.log(3)

 => với bất đồng bộ thì trong khi setTimeOut cần 3s để chạy đoạn code bên trong thì các đoạn code bên dưới vẫn được chạy . do đó hiệu suất của chương trình tăng lên rất nhiều

 + Khuyết điểm : Chính vì các câu lệnh được thực hiện đồng thời và thứ tự trả về lộn xộn nên khó kiểm soát cũng như debug code

 + Ưu điểm : tối ưu hệ thống , quản lý thời gian chờ , giúp code chạy nhanh hơn

 3 . Cách cách xử lý với quá trình bất đồng bộ trong javascript

 + Callback
 + Promise
 + Async/ await

- Vì JavaCript là ngôn ngữ Single Threed ( đơn luồng)  chính vì thế nó phải xử lý cơ chế bất đồng bộ 

- Các hàm

https://kungfutech.edu.vn/bai-viet/javascript/bat-dong-bo-voi-callback-promise-asyn-await
