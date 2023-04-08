I. Khái niệm.
Date là một object hổ trợ ta có thể lấy thời gian ở client, qua đó ta có thể sử dụng các giá trị này cho các công việc khác cần nó.

Ví dụ như check xem người dùng login được bao lâu nếu quá thời gian cho phép thì sẽ tự động logout ra chẳng hạn,...

II. Tạo  một đối tượng ngày

Note : Theo mặc định, JavaScript sẽ sử dụng múi giờ của trình duyệt và hiển thị ngày tháng dưới dạng chuỗi văn bản đầy đủ:

Thứ Bảy, ngày 29 tháng 10 năm 2022 11:43:14 GMT + 0700 (Giờ Đông Dương)

new Date()


new Date(date string)
VD : 

const d = new Date("2022-03-25") 
const d = new Date("October 13, 2014 11:13:00");

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

VD : const d = new Date(2018, 11, 24, 10, 33, 30, 0);

new Date(milliseconds)

Note : 
JavaScript đếm các tháng từ 0 đến 11 :

Tháng 1 = 0 

Tháng 12 = 11 

+ Chỉ định một tháng cao hơn 11, sẽ không gây ra lỗi nhưng thêm phần tràn vào năm tiếp theo

III. Các định dạng của date trong JavaScript

Trong JavaScript có 4 định dạng cơ bản của một chuỗi ngày tháng gồm: short date, long date, full date và ISO date.

1. Định dạng short date.

Định dạng short date được lưu ở dạng MM/DD/YYYY, YYYY/MM/DD, MM-DD-YYYY hoặc YYYY-MM-DD

VD: 

let shortDate_1 = new Date("08-08-2021");
let shortDate_2 = new Date("08/08/2021");
let shortDate_3 = new Date("2021/08/08");
let shortDate_4 = new Date("2021-08-08");


2. Định dạng long date.

Một chuỗi ngày tháng năm thuộc định dạng long date có kiểu Month DD YYYY. Với Month ở đây là chữ đầy đủ của tháng hoặc chữ viết tắt của tháng. Ưu điểm của dạng này là bạn đổi vị trí của nó với nhau thì Date object cũng tự động convert lại theo đúng định dạng.


let longDate_1 = new Date("Aug 08 2021");
let longDate_2 = new Date("2021 Aug 08");
let longDate_3 = new Date("08 2021 Aug");
let longDate_4 = new Date("August 08 2021");


3. Định dạng full date.

Một chuỗi ngày tháng năm được xem là full date thì sẽ có dạng Day Month DD YYYY với Day là thứ trong tuần (viết bằng tiếng anh nhé) có thể ghi đầy đủ hoặc viết tắt, Month cũng vậy.

let fullDate_1 = new Date("Sunday August 08 2021");
let fullDate_2 = new Date("Sun Aug 08 2021");

4. Định dạng ISO date.

Định dạng ISO date là định dạng theo chuẩn ISO 8601 sẽ có dạng YYYY-MM-DD, YYYY-MM hoặc YYYY

Lưu ý: nếu bạn truyền vào không đủ (ngày, tháng, năm hay giờ,  phút , giây) thì mặc định các tham số khác sẽ lấy thời gian nhỏ nhất.

var ISO_1 = new Date("2021-08-08");

var ISO_2 = new Date("2021-08");

var ISO_3 = new Date("2021");

+Note : Không phụ thuộc vào định dạng đầu vào, JavaScript sẽ (theo mặc định) xuất ngày tháng ở định dạng chuỗi văn bản đầy đủ

Sat Oct 29 2022 13:40:58 GMT+0700 (Giờ Đông Dương)


IV. Các hàm xử lý date trong JavaScript

1. Get date.

Nhóm gồm 10 hàm hổ trợ lấy các mốc thời gian thông dụng bao gồm:

    + getDate(): hàm trả về ngày trong tháng (từ ngày 1 - 31).
    + getDay(): hàm trả về ngày trong tuần (0-6), với chủ nhật là 0, thứ 2 là 1, thứ 3 là 2 ,...
    + getMonth(): hàm trả về tháng trong năm (từ 0 - 11), do đó ta cần cộng thêm 1 nha.
    + getFullYear(): hàm trả về năm dạng đầy đủ dạng YYYY.
    + getHours(): hàm trả về số giờ dạng 24h ( từ 0 - 23)
    + getMinutes() trả về phút trong giờ (0 - 59).
    + getSeconds() trả về số giây trong phút (0 - 59).
    + getMilliSeconds() trả về tích tắc trong giây (0 - 999).
    + getTime() Trả về thời gian dạng mili giây.

2 . Set date 

Nhóm này gồm 9 hàm hổ trợ tạo một mốc thời gian, bao gồm:///

    + setDate(): hàm giúp ta thiết lập ngày (từ 1 - 31).
    + setFullYear(): hàm giúp ta thiết lập năm đầy đủ theo dạng YYYY.
    + setYear(): hàm giúp ta thiết lậpnăm 2 số cuối YY.
    + setHours(): hàm giúp ta thiết lập số giờ (0 - 23)
    + setMiliSeconds(): hàm giúp ta thiết lập số mili giây (0 - 999)
    + setMinutes(): hàm giúp ta thiết lập số phút (0 - 59)
    + setMonth(): hàm giúp ta thiết lập tháng (0 - 11)
    + setSeconds(): hàm giúp ta thiết lập số giây (0 - 59)
    + setTime(): hàm giúp ta thiết lập thời gian đã được convert sang dạng miliseconds