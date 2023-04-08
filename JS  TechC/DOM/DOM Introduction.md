1 . DOM là gì ?
- DOM Javascript là viết tắt của chữ Document Object Model, dịch tạm ra là mô hình các đối tượng trong tài liệu HTML. Thông qua mô hình DOM ta có thể truy xuất đến các thẻ HTML một cách dễ dàng.

Hình ảnh demo : https://www.w3schools.com/js/pic_htmltree.gif

Trong mỗi thẻ HTML sẽ có những đặc tính (Properties) và có phân cấp cha – con với các thẻ HTML khác. Sự phân cấp và các thuộc tính của thẻ HTML này ta gọi là selector và trong DOM sẽ có nhiệm vụ xử lý các vấn đề như đổi thuộc tính của thẻ, đổi cấu trúc HTML của thẻ.

Có thể thấy tất cả các thẻ HTML sẽ được quản lý trong đối tượng document. Thẻ cao nhất là thẻ html, tiếp theo là phân nhánh body và head. Bên trong head thì có những thẻ như style, title,… và bên trong body thì là vô số các thẻ HTML khác. Như vậy trong Javascript, để thao tác với các thẻ HTML ta phải thông qua đối tượng document.

Với mô hình đối tượng, JavaScript có tất cả sức mạnh cần thiết để tạo HTML động:

+ JavaScript có thể thay đổi tất cả các phần tử HTML trong trang
+ JavaScript có thể thay đổi tất cả các thuộc tính HTML trong trang
+ JavaScript có thể thay đổi tất cả các kiểu CSS trong trang
+ JavaScript có thể xóa các phần tử và thuộc tính HTML hiện có
+ JavaScript có thể thêm các phần tử và thuộc tính HTML mới
+ JavaScript có thể phản ứng với tất cả các sự kiện HTML hiện có trong trang
+ JavaScript có thể tạo các sự kiện HTML mới trong trang

-Javascript muốn truy xuất đến một thẻ html nào thì phải thông qua đối tượng document Nó được lưu trữ trong một biến toàn cục tên là document

VD : Thêm một content vào một thẻ p rỗng

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

2 . Các loại DOM trong Javascript

Việc xử lý và làm việc với đối tượng HTML rất phức tạp và đa dạng. Xét về tính chất thì người ta chia ra làm 8 loại DOM khác nhau như sau

Danh sách chia nhóm DOM:

    + DOM document: có nhiệm vụ lưu trữ toàn bộ các thành phần trong tài liệu của website

    + DOM element: có nhiệm vụ truy xuất tới thẻ HTML nào đó thông qua các thuộc tính như tên class, id, name của thẻ HTML

    + DOM HTML: có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML

    + DOM CSS: có nhiệm vụ thay đổi các định dạng CSS của thẻ HTML

    + DOM Event: có nhiệm vụ gán các sự kiện như onclick(), onload() vào các thẻ HTML

    + DOM Listener: có nhiệm vụ lắng nghe các sự kiện tác động lên thẻ HTML đó

    + DOM Navigation dùng để quản lý, thao tác với các thẻ HTML, thể hiện mối quan hệ cha - con của các thẻ HTML
    
    + DOM Node, Nodelist: có nhiệm vụ thao tác với HTML thông qua đối tượng (Object)



