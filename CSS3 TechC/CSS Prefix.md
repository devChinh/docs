- Prefix nghĩa là tiền tố hay là phần thêm vào phía trước các thuộc tính 
CSS3, giúp cho các trình duyệt khác nhau có thể hiểu được thuộc tính CSS3 đó vì không phải trình duyệt nào cũng hỗ trợ một thuộc tính CSS3 nào đó. Ví dụ, thuộc tính transition trong CSS3 hiện tại cần phải viết đầy đủ như sau để các trình duyệt khác nhau có thể hiểu được.

        .example {
        -webkit-transition: all 4s ease;
        -moz-transition: all 4s ease;
        -ms-transition: all 4s ease;
        -o-transition: all 4s ease;
        transition: all 4s ease;
        }

Và rất nhiều thuộc tính CSS3 khác nữa...

- Có nhiều thuộc tính CSS3 vẫn đang thử nghiệm. Một thuộc tính CSS thử nghiệm đều phải sử dụng prefix, và như chúng ta đã biết, mỗi trình duyệt có tiền tố riêng của nó. Firefox sử dụng -moz-, Internet Explorer sử dụng -ms-, Chrome và Safari sử dụng -webkit-, và sử dụng Opera -o-(hoặc -webkit-).

