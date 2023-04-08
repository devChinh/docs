Đối với HTML DOM, mọi thành phần đều được xem là một node (nút), được biểu diễn trên 1 cây cấu trúc dạng cây gọi là DOM Tree. Các phần tử khác nhau sẽ được phân loại node khác nhau nhưng quan trọng nhất là 3 loại: node gốc (document node), node phần tử (element node), node văn bản (text node).

 ảnh mình hoạ : https://topdev.vn/blog/wp-content/uploads/2021/01/dom-tree.png

        + Node gốc: chính là tài liệu HTML, thường được biểu diễn bởi thẻ <html>.
        + Node phần tử: biểu diễn cho 1 phần tử HTML.
        + Node văn bản: mỗi đoạn kí tự trong tài liệu HTML, bên trong 1 thẻ HTML đều là 1 node văn bản. Đó có thể là tên trang web trong thẻ <title>, tên đề mục trong thẻ <h1>, hay một đoạn văn trong thẻ <p>.
        + Ngoài ra còn có node thuộc tính (attribute node) và node chú thích (comment node).

ảnh minh hoạ : https://topdev.vn/blog/wp-content/uploads/2021/01/Example-of-DOM-Node-Tree.png

- Quan hệ giữa các node : 

+ Node gốc (document) luôn là node đầu tiên.
+ Tất cả các node không phải là node gốc đều chỉ có 1 node cha (parent).
+ Một node có thể có một hoặc nhiều con, nhưng cũng có thể không có con nào.
+ Những node có cùng node cha được gọi là các node anh em (siblings).
+ Trong các node anh em, node đầu tiên được gọi là con cả (firstChild) và node cuối cùng là con út (lastChild).