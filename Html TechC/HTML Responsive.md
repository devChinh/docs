I . Thiết kế web đáp ứng (responsive)
Thiết kế web đáp ứng là về việc sử dụng HTML và CSS để tự động thay đổi kích thước, ẩn, thu nhỏ hoặc phóng to một trang web để làm cho trang web trông đẹp mắt trên tất cả các thiết bị (máy tính để bàn, máy tính bảng và điện thoại)

- Tối ưu trải nghiệm người dùng :
 +  Hiển thị rõ ràng các phần tử (hình ảnh  , cỡ chữ , nút bấm, ...)
 +  ẩn / hiện các thành phần phù hợp theo kích thước màn hình

1 . Đặt chế độ xem
Để tạo một trang web đáp ứng, hãy thêm <meta> thẻ sau vào tất cả các trang web của mình

- <meta name="viewport" content="width=device-width, initial-scale=1.0">

+ Thao tác này sẽ đặt chế độ xem trên trang của bạn, sẽ cung cấp cho trình duyệt hướng dẫn về cách kiểm soát kích thước và tỷ lệ của trang

2 . Hình ảnh đáp ứng
Hình ảnh đáp ứng là hình ảnh có tỷ lệ phù hợp với bất kỳ kích thước trình duyệt nào

+ Sử dụng thuộc tính width : nếu thuộc tính CSS width được đặt thành 100%, hình ảnh sẽ phản hồi và tăng giảm tỷ lệ hợp lý với khung hình

+ Sử dụng thuộc tính max-width : 100% 
+ Nếu thuộc tính max-width được đặt thành 100%, hình ảnh sẽ giảm tỷ lệ nếu cần, nhưng không bao giờ tăng tỷ lệ để lớn hơn kích thước ban đầu

3 .Kích thức văn bản tương ứng
+Kích thước văn bản có thể được đặt bằng đơn vị "vw", có nghĩa là "chiều rộng khung nhìn".
+Bằng cách đó, kích thước văn bản sẽ tuân theo kích thước của cửa sổ trình duyệt

4 . Dùng thuộc tính CSS   Media Queries 

+ Với @media , bạn có thể xác định các kiểu hoàn toàn khác nhau cho các kích thước trình duyệt khác nhau là : mobile , tablet , desktop

Mobile : 0 - 740px
Tablet : 740px - 1023px
Desktop: > 1024px

VD : @media not|only mediatype and (media feature) {
    CSS-Code;
}

-media feature : là các điều kiện để hiện thị trang web

-Trong đó mediatype gồm các thuộc tính hay sử dụng sau:
    + all: Dùng cho mọi thiết bị
    + print: Dùng cho máy in
    + screen: Dùng cho máy tính và các thiết bị smart phone











