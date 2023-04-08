1 Bố cục của một trang web sẽ có dạng :

+ <!DOCTYPE html> : khai báo hiểu dữ liệu hiển thị là html để trình duyệt biết
+ <html> : là cặp thẻ nằm ngoài cùng và nó có nhiệm vụ là bao hết nội dung của trang web lại. Thẻ này là bát buộc.
+ <head> :  là phần khai báo thông tin của trang web
+ Thẻ meta : dùng để cung cấp thông tin của website cho công cụ tìm kiếm. Một số thẻ meta tiểu biểu như: title, description, content-type, view-port...
+ <title> nằm bên trong thẻ <head> và đây chính là khai báo tiêu đề cho trang web.
+ body : là thành phần quan trọng nhất , nó chứa các đoạn mã dùng để hiển thị trên website
+ Các thẻ còn lại nằm trong thẻ body chính là các thẻ định dạng dữ liệu

Như vậy trong một website chúng ta chia làm hai phần chính : 
 + Phần 1 : Là những khai báo thông tin cho website và ta đặt nó trong thẻ head
 + Phần 2 : Là phần hiển thị định dạng nội dung của trang web mà ta đặt trong thẻ body

2 . Bố cục cơ bản và bao quát nhất của hầu hết các trang web
  + Headers
  + Menu
  + Main content
  + Sidebar
  + Footer

2 . Html cơ bản 
  - Tiêu đề html : Các tiêu đề của html được xác định bằng các thẻ từ h1 - h6
   VD : <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
  - Đoạn văn html : các đoạn html được xác định bằng thẻ p 
   VD : <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
  - Liên kết html : Các thẻ liên kết được xác định bằng thẻ a 
     VD : <a href="https://www.w3schools.com">This is a link</a>
  - Hình ảnh html : thẻ img , src = source
     Vd : <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">

3 . Phần tử html 

   - Quy tắc viết các phần tử trong html : khi mở một thẻ tagname phải đóng nó lại
    <tagname > Nội dung ... </tagname>
    - Các phần tử lồng  nhau : Các phần tử trong html có thể lồng vào nhau ( nghĩ là các phần tử này có thể chứa các phần tử khác )

    -Phần tử HTML trống : phần tử không có nội dung gọi là phần tử trống
     vd thẻ <br> là để ngắt dòng 
    -html không phân biệt chữ hoa chữ thường : 
      thẻ <P> cũng giống như thẻ <p>  , nhưng mà nên viết bằng chữ thường 

4 . Thuộc tính HTML 

   - tất cả các phần tử html có thể có thuộc tính
   - các thuộc tính cung cấp thông tin bổ sung cho các phần tử
   - các thuộc tính luôn được chỉ định trong thẻ bắt đầu
   - các thuộc tính thường có trong các cặp tên / và có kiểu : name = "value"
                
   vd trong thẻ a 
   <a href="https://www.w3schools.com">Visit W3Schools</a>
   + có thuộc tính là href , thuộc tính này chỉ định các url của trang mà liên kết chuyển đến
   <img src="img_girl.jpg">
   + thuộc tính src : chỉ định đường dẫn đến đường dẫn mà hình ảnh sẽ được hiển thị
   - có 2 các để chỉ URL trong thẻ img
    + URL tuyệt đối : là liên kết đến hình ảnh bên ngoài được lưu trữ ở một trang web khác
    + URL tương đối : mình sẽ download ảnh đấy về máy , xong rồi cho vào thư mục của tệp 

+Note : nên dùng url tương đối , vì khi lấy url tuyệt đối thì khi mà ảnh của trang web đó thay đổi thì ảnh của mình sẽ thay đổi theo luôn , và nhiều khi còn bị hỏng tên miền

    - thuộc tính chiều dài chiều rộng : chỉ định chiều cao và chiều rộng của hình ảnh ( tính bằng pixel)
       <img src="img_girl.jpg" width="500" height="600">
    - thuộc tính alt : thay thế hình ảnh bằng văn bản nếu hình ảnh bị lỗi
    - thuộc tính style : Thuộc tính style được sử dụng để thêm kiểu vào một phần tử, chẳng hạn như màu sắc, phông chữ, kích thước, v.v.
       <p style="color:red;">This is a red paragraph.</p>
    - thuộc tính lang : luôn bao gồm langthuộc tính bên trong <html>thẻ, để khai báo ngôn ngữ của trang Web. Điều này có nghĩa là để hỗ trợ các công cụ tìm kiếm và trình duyệt
    - thuộc tính tiêu đề : Thuộc titletính xác định một số thông tin bổ sung về một phần tử , giá trị của thuộc tính title sẽ được hiển thị dưới dạng chú giải công cụ khi bạn di chuột qua phần tử:

5 . Đoạn văn html 
  phần tử p xác định một đoạn văn , một đoạn văn luôn bắt đầu trên một dòng mới và các trình duyệt sẽ tự động thêm một số khoảng trắng (lề) vào trước và sau một đoạn văn.

  - hiển thị html : 
     + Bạn không thể chắc chắn HTML sẽ được hiển thị như thế nào
     + Màn hình lớn hay nhỏ và các cửa sổ được thay đổi kích thước sẽ tạo ra các kết quả khác nhau
     + Trình duyệt sẽ tự động loại bỏ bất kì khoảng trắng và dòng thừa khi trang được hiển thị lên 
    
  - quy tắc ngang html 
     Thẻ <hr> dùng để tạo một dòng kẻ ngang giúp tách nội dung trong trang 
     Thẻ <hr> cũng là một thẻ trống

  -  ngắt dòng html 
     Thẻ <br>  dùng để ngắt dòng xuống một dòng mới
     Thể <br> cũng là một thẻ trống
 
  - Giải pháp của vấn đề bài thơ 
    Thẻ <pre> xác định  văn bản định dang trước

5 : Style HTML

 - Thuộc tính HTML styleđược sử dụng để thêm kiểu vào một phần tử, chẳng hạn như màu sắc, phông chữ, kích thước, v.v.
 - cú pháp : <tagname style="property : value" ></tagname>

6 : Định dạnh HTML

- html có một số thẻ để xác định văn bản có ý nghĩa được biệt  (tạo cho nó một điểm nhấn)
- Các phần tử định dạng được thiết kế để hiển thị các loại văn bản đặc biệt
        + <b>- Chữ in đậm
        + <strong>- Văn bản quan trọng
        + <i>- Văn bản in nghiêng
        + <em>- Đoạn văn bản được nhấn mạnh , in nghiêng
        + <mark>- Văn bản được đánh dấu
        + <small>- Văn bản nhỏ hơn
        + <del>- Văn bản đã xóa
        + <ins>- Đã chèn văn bản
        + <sub>- Văn bản chỉ số
        + <sup>- Văn bản siêu cấp

7 .  Commnent trong html
 <!-- --> hoặc ctrl+k Ctrl + C
 - giúp thể hiện ý nghĩa  của đoạn code

8 .   HTML favicon
  Thể hiện một hình ảnh trên thanh tiêu đề trang web
  
 <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  

9 : Màu HTML 
- Màu color : red , green , blue , ...
- Màu rgb : đại diện cho các nguồn sáng Đỏ , Xanh Lá , Và xanh da trời
  + Mỗi tham số của màu có giá trị từ 0 - 255
  + vd : rgb(255,0,0) được hiển thị là màu đỏ , vì màu đỏ được đặt giá trị cao nhất , còn lại gtri bằng 0
  + Để hiện thị màu đen : rbg(0,0,0)
  + Để hiển thị màu trắng : rbg(255,255,255)
- Màu rbga : cũng là  màu rbg nhưng có thể alpha (độ mờ)
- Màu HEX : là màu được chỉ định bằng giá trị thập lục phân 
  + #rrggbb : lần lượt rr(đỏ) , gg(xanh lá) , bb(xanh da trời)
- Màu HSL : viết tắt của màu sắc , độ bão hoà , màu sắc

