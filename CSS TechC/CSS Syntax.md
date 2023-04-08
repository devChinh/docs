1 .Chúng ta có ba cách viết CSS đó là viết

+ inline: viết trực tiếp trên thẻ thông qua thuộc tính style
+ external: viết riêng một thẻ có phần đuôi .css rồi sau đó import vào bằng thẻ link.
+ internal: viết tại file html hiện tại và nằm trong thẻ style

Chúng ta chia một đoạn mã CSS ra gồm hai phần đó là:

selector: selector sẽ trỏ đến những đối tượng (html) chịu ảnh hưởng bởi CSS
declaration: các thuộc tính CSS dùng để style cho thẻ selector 

VD : 
h1 {
    background: red;
    color: blue
}

+ h1 là selector
+ các thuộc tính background, color nằm bên trong cặp dấu ngoặc {} chính là declaration

2 . Một số lưu ý dành cho các bạn khi viết CSS như sau:

+Không nên viết dạng inline bởi vì nó khó quản lý và không tốt cho SEO
+Dạng internal có thể chấp nhận được nhưng bạn nên đặt CSS ở trên thẻ head, dạng này cũng không tốt cho SEO
+Dạng external khuyến khích sử dụng vì nó mang tích tách biệt HTML và CSS, rất tốt cho SEO lẫn coder vì dễ quản lý



