Để giải quyết vấn đề callback hell là quá nhiều callback lồng nhau để xử lý đồng thời nhiều việc một lúc thì promise ra đời

- Promise là một thư viện chuẩn của javascript

-Tưởng tượng promise nó như là một cái liên kết giữa một nhà sản xuất ca nhạc và những con người yêu âm nhạc

- Thì khi mà sản xuất âm nhạc thì chắc chắn rồi sẽ phải cần thời gian để build và và promise sẽ tạo ra một lời hứa là sẽ xong bài hát này trong 2 ngày chẳng hạn thì khi mà thời gian như đã hứa là 2 ngày xong thì nếu mà bài hát hoàn thành tốt thì promise sẽ thông báo và đưa bài hát đến người nghe , còn nếu mà bài hát bị fail thì promise cũng vẫn sẽ thông báo cho người dùng biết là sản phẩm bị fail và mong người dùng đợi sản phẩm khác ra mắt

1 . Promise

Cú pháp : 
    var promise = new Promise(function(resolve, reject) {
      //asynchronous code goes here
    })


- Trong đó sẽ nhận 1 tham số là một function , và đối số của nó resolve và reject là các lệnh gọi lại do chính JavaScript cung cấp

- Khi trình thực thi nhận được kết quả, dù sớm hay muộn, không quan trọng, nó sẽ gọi một trong các lệnh gọi lại sau:

  + resolve(value)- nếu công việc kết thúc thành công, có kết quả value.
  + reject(error)- nếu một lỗi đã xảy ra, error là đối tượng lỗi

Tóm lại: người thực thi chạy tự động và cố gắng thực hiện một công việc. Khi kết thúc quá trình, nó sẽ gọi resolve nếu nó thành công hoặc reject nếu có lỗi

2 . 1 promise có 3 trạng thái 

+ pending là Khi khởi tạo : new Promise 

  var promise = new Promise(function(resolve, reject) {
    
  })

Giai đoạn này gồm có  :  state(trạng thái) : "peding"
                          result : undefined


+ resolve : công việc kết thúc thành công 

  var promise = new Promise(function(resolve, reject) {
      resolve("get data thành cong")
  })

Giai đoạn này gồm có  : state : "fulfilled"
                        result : value


+ rejected :  có lỗi xảy ra  

  var promise = new Promise(function(resolve, reject) {
      resolve("get data thành cong")
  })


Giai đoạn này gồm có  : state : "rejected"
                        result : error



+ state - ban đầu "pending", sau đó chuyển thành "fulfilled" khi nào resolve được gọi hoặc "rejected" khi nào reject được gọi.

+ result - ban đầu undefined, sau đó chuyển thành valuekhi nào resolve(value)được gọi hoặc errorkhi nào reject(error)được gọi.


II . 

Đối tượng Promise đóng vai trò là liên kết giữa trình thực thi (“mã sản xuất” hoặc “ca sĩ”) và các chức năng tiêu thụ (“người hâm mộ”), sẽ nhận được kết quả hoặc lỗi. Các chức năng tiêu dùng có thể được đăng ký (đăng ký) bằng các phương pháp .then và .catch.

Điều quan trọng nhất, cơ bản là .then.

Cú pháp là:

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
Đối số đầu tiên của .thenlà một hàm chạy khi lời hứa được giải quyết và nhận kết quả.

Đối số thứ hai của .thenlà một hàm chạy khi lời hứa bị từ chối và nhận được lỗi.


.catch là phương thức nhận dữ liêu error trả về

.finally không có đối số , và hàm này sẽ xử  lý logic cuối cùng khi mà chạy xong một trong 2 thằng then hoặc catch

Và không biết lời hứa có thực hiện được hay không , và nhiệm vụ chung của nó là thực hiện các thủ thục hoàn thiện chung


III . Khi nào thì cần sử dụng 

Nhiều trường hợp bắt buộc trong lập trình chúng ta phải lập trình đồng bộ, nghĩa là bạn phải chạy function 1 để có data 1, dùng data 1 để query data 2


https://firebasestorage.googleapis.com/v0/b/anonystick-83a85.appspot.com/o/img%2F1552272366081?alt=media&token=abccf254-336e-40be-9976-8e30ff511136

Thì lộ trình học JavaScrip và React sẽ là như này

Lộ trình sẽ học trong khoảng 3 tháng nha em : 1 tháng rưỡi học JS 1 tháng học React và nửa tháng còn lại mình sẽ thực hành nha em làm project bằng React nhé

- Học phí của 3 tháng này là 2tr em nha 

- Nhưng mà đợt này các bạn đki thì anh sẽ tặng em thêm 1 khoá học CSS và Responsive , thực hành cắt giao diện trên figma và clone lại website , bắt đầu học vào tuần sau luôn 

Thế nên là lộ trình của em sẽ được học là khoảng 4 tháng rưỡi là Học CSS -JavaScript - React  , trong đó khoá CSS và Responsive sẽ là free em nhé


Mình sẽ học là thứ 3-5-7 và vào lúc 9h tối hàng tuần qua gg meet nha em

Mỗi buổi học sẽ đều có tài liệu , record và bài tập đầy đủ chất lượng cho các em luôn

