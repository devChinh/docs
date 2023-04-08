1. Function là gì ?

- Function hay còn gọi là hàm , là tập hợp một đoạn code dùng để xử lý một nhiệm vụ nào đó , code bên trong function không được biên dịch cho tới khi được gọi đến . Chính vì vậy khi sử dụng function sẽ giúp chương trình được linh hoạt hơn

2 . Lợi ích của việc sử dụng function
Ví dụ khi code từng đoạn code riêng lẻ và khi cần thì phải code lại , giả sử khi cần xử lý vấn đề đó trong 1000 trường hợp thì ta lại phải code lại 1000 lần như rất là mất thời gian , khi đó ngta sẽ nghĩ ngay đến việc sử dụng hàm , hàm sẽ gom một số đoạn code vào khối xử lý và khi cần thì gọi ra dùng

Giả sử mình viết chương trình kiểm tra số chẵn hay lẻ như sau:

var number = 2;
 
if (number % 2 == 0){
   alert('Số chẵn');
}
else {
   alert('Số lẻ');
}

Nếu mình cần kiểm tra cho 100 số thì sẽ viết lặp lại đoạn code trên 100 lần, điều này quả là tệ hại  Nhưng đừng lo bởi khi sử dụng hàm trong Javascript thì ta sẽ gom chúng vào thư viện riêng và chỉ gọi tới khi cần

3 . Cách tạo một function trong javascript

Cú pháp :
function name_of_function(var1 , var 2, var 3) {
// code
}

Function là từ khoá của js nên bắt buộc phải như vậy
Name_of_function : là tên của hàm , thông thường đặt tên có nghĩa với đoạn code mà chúng ta viết bên trong , ví dụ : findNumberMax – không đặt tên bằng tiếng việt
Var 1, var 2, var 3 là tham số truyền vào . Ví dụ viết hàm kiểm tra số chẵn hay lẻ thì tham số truyền vào là số cần kiểm tra đó . Đương nhiên là các bạn có thể tạo một hàm mà không cần truyền tham số

4 Hàm có return và hàm không có return

Hàm có return là hàm sử dụng từ khoá return để đặt ở cuối hàm , với mục đích trả về kết quả để sử dụng tiếp ở những đoạn code bên ngoài
Hàm không có return là hàm không có sử dụng từ khoá return đặt trong hàm

Như vậy tuỳ vào mục đích sử dụng mà ta dùng có return hoặc không có return . Nhưng thông thường ta sử dụng return ở những trường hợp cần lấy kết quả trả về của hàm đó để xử lý tiếp

VD về hàm có return :

// Khai báo hàm
function tinh_tong(a, b)
{
    // trả về kết quả là a + b
    return a + b;
}

Note : khi viết câu lệnh return thì các code ở dưới sẽ không được thực thi nữa nên là lưu í hãy viết return ở cuối cùng của hàm 

// Sử dụng
var so1 = 1;
var so2 = 2;

// truyền so1 và so2 vào hàm
var ketqua = tinh_tong(so1, so2);

alert(ketqua);

VD hàm không có return

// Khai báo hàm
function tinh_tong(a, b)
{
    document.write('Tổng là ' + (a + b));
}

// Sử dụng
var so1 = 1;
var so2 = 2;

// truyền so1 và so2 vào hàm
tinh_tong(so1, so2);

5 . Giá trị mặc định của tham số
Có một số trường hợp bạn muốn một tham số nào đó có thể cần truyền vào hoặc không cần truyền vào đều được , lúc này ra phải sử dụng nó như là một giá trị mặc định

VD: 
function showMessage(message = "Hello")
{
   // Nếu message không được truyền vào hoặc giá trị nó là rỗng
   // thì sẽ được thay thế bằng giá trị 'Không có tin nhắn'
   message = message || 'Không có tin nhắn <br/>';
   document.write(message);
}

// Cách 1: không truyền đối số
showMessage();

// Cách 2: Truyền đối số
showMessage('Chào mừng bạn đến với TechC Academy');

