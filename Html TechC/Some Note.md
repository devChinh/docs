1. Luôn khai báo loại tài liệu

Luôn khai báo loại tài liệu là dòng đầu tiên trong tài liệu 

Loại tài liệu chính xác cho HTML là:<!DOCTYPE html>

2 .Sử dụng tên phần tử chữ thường

HTML cho phép trộn chữ hoa và chữ thường trong tên phần tử.

Tuy nhiên, khuyên là nên sử dụng tên phần tử viết thường, bởi vì:
    +Việc trộn tên viết hoa và viết thường trông rất tệ
    +Các nhà phát triển thường sử dụng tên viết thường
    +Chữ thường trông gọn gàng hơn
    + Viết thường dễ viết hơn
Tốt:
<body>
<p>This is a paragraph.</p>
</body>
Xấu:
<BODY>
<P>This is a paragraph.</P>
</BODY>

3 Đóng tất cả các phần tử HTML
Trong HTML, bạn không phải đóng tất cả các phần tử (ví dụ: <p>phần tử).
Tuy nhiên, nên đóng tất cả các phần tử HTML, như sau:

Tốt:
<section>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
</section>
Xấu:
<section>
  <p>This is a paragraph.
  <p>This is a paragraph.
</section>

4 .Sử dụng tên thuộc tính viết thường

HTML cho phép trộn chữ hoa và chữ thường trong tên thuộc tính.

Tuy nhiên,  nên sử dụng tên thuộc tính chữ thường, bởi vì:
        + Việc trộn tên viết hoa và viết thường trông rất tệ
        + Các nhà phát triển thường sử dụng tên viết thường
        + Chữ thường trông gọn gàng hơn
        + Viết thường dễ viết hơn

Tốt:
<a href="">  HTML tutorial </a>
Xấu:
<a HREF="">HTML tutorial</a>

5 . Luôn trích dẫn các giá trị thuộc tính
HTML cho phép các giá trị thuộc tính không có dấu ngoặc kép.

Tuy nhiên, nên trích dẫn các giá trị thuộc tính, bởi vì:

        +Các nhà phát triển thường trích dẫn các giá trị thuộc tính
        +Các giá trị được trích dẫn dễ đọc hơn
        +Bạn PHẢI sử dụng dấu ngoặc kép nếu giá trị chứa khoảng trắng

Tốt:
<table class="striped">
Xấu:
<table class=striped>

6 .Luôn chỉ định alt, chiều rộng và chiều cao cho Hình ảnh
Luôn chỉ định thuộc tính alt cho hình ảnh. Thuộc tính này rất quan trọng nếu hình ảnh vì lý do nào đó không thể hiển thị.

Ngoài ra, hãy luôn xác định width và height của hình ảnh. Điều này làm giảm hiện tượng nhấp nháy, vì trình duyệt có thể dành dung lượng cho hình ảnh trước khi tải.

Tốt:
<img src="html5.gif" alt="HTML5" style="width:128px;height:128px">
Xấu:
<img src="html5.gif">

7 .Dấu cách và dấu bằng
HTML cho phép khoảng trắng xung quanh các dấu bằng. Nhưng không gian ít hơn sẽ dễ đọc hơn và nhóm các thực thể lại với nhau tốt hơn.

Tốt:
<link rel="stylesheet" href="styles.css">
Xấu:
<link rel = "stylesheet" href = "styles.css">

8 .Dòng trống và thụt đầu dòng
Không thêm dòng trống, khoảng trắng hoặc thụt lề mà không có lý do.

Để dễ đọc, hãy thêm các dòng trống để phân tách các khối mã lớn hoặc hợp lý.

Để dễ đọc, hãy thêm hai khoảng cách thụt lề. Không sử dụng phím tab.

Tốt:
<body>

<h1>Famous Cities</h1>

<h2>Tokyo</h2>
<p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>

<h2>London</h2>
<p>London is the capital city of England. It is the most populous city in the United Kingdom.</p>

<h2>Paris</h2>
<p>Paris is the capital of France. The Paris area is one of the largest population centers in Europe.</p>

</body>
Xấu:
<body>
<h1>Famous Cities</h1>
<h2>Tokyo</h2><p>Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
<h2>London</h2><p>London is the capital city of England. It is the most populous city in the United Kingdom.</p>
<h2>Paris</h2><p>Paris is the capital of France. The Paris area is one of the largest population centers in Europe.</p>
</body>

9 . Không bao giờ bỏ qua phần tử <title>
Phần <title>tử này là bắt buộc trong HTML.

Nội dung của tiêu đề trang rất quan trọng đối với việc tối ưu hóa công cụ tìm kiếm (SEO)! Tiêu đề trang được sử dụng bởi các thuật toán của công cụ tìm kiếm để quyết định thứ tự khi liệt kê các trang trong kết quả tìm kiếm.

Phần tử <title>:
+xác định tiêu đề trong thanh công cụ của trình duyệt
+cung cấp tiêu đề cho trang khi nó được thêm vào mục yêu thích
+hiển thị tiêu đề cho trang trong kết quả của công cụ tìm kiếm
+Vì vậy, hãy cố gắng đặt tiêu đề chính xác và có ý nghĩa nhất có thể

