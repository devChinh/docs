1 . Bảng HTML

- Cái chính là học html để hiểu bảng trong html được tạo nên ntn , những bên cạnh đó vẫn dùng một số thuộc tính CSS để hỗ trợ bài giảng thực tế và hiệu quả hơn cũng coi như là vừa học html học luôn CSS , vì đằng nào sau này cũng sẽ học CSS mà

- Để tạo một bảng sẽ dùng thẻ <table>
- Mỗi hàng trong bảng được bọc bởi thẻ <tr>
- <th> là thẻ dùng để viết tiêu đề của bảng
- <td> là thẻ dùng để viết các nội dung của tiêu đề
- Thẻ <caption> xác định ghi chú bảng và phải được chèn ngay sau thẻ mở <table>
- Thẻ <colgroup> chỉ định các col trong bảng để định dạng , hữu ích để áp dụng cho toàn bộ col hay thì lập lại style cho từng ô trong bảng
- Thẻ <col> chỉ định thuộc tính cột cho mỗi cột cho thẻ <colgroup> , thuộc tính span chỉ định số cột một thẻ <col> sẽ chiếm
- Thẻ <thead> dùng để nhóm các tiêu đề trong bảng
- Thẻ <tbody> dùng để nhóm các nội dung của tiêu đề trong bảng
- Thẻ <tfooter> dùng để nhóm các nội dung của chân trang trong bảng

- 3 thẻ này luôn đi với nhau để chỉ đinh từng phần của bảng ( header , body , footer)

2. Đường viền bảng

- Sử dụng thuộc tính css : border : 1px solid
- Tạo bo góc đường viền : border-radius
- Thuộc tính : border-collapse : collapse giúp các đường viền được thu gọn lại thành một đường viên duy nhất

3 . Kích thước bảng

- Có thể có các kích thước khác nhau cho từng cột , hàng hoặc toàn bộ bảng sử dụng style width ( chiều rộng ) , hoặc height(chiều cao) để làm việc đó

4 . Tiêu đề bảng

- tiêu đề bảng được xác định bằng thẻ <th> . Mỗi thẻ <th> đại diện cho 1 ô trong bảng
- Tiêu đề bảng dọc : để sử dụng cột đầu tiên là tiêu đề bảng , xác định ô đầu tiên của mỗi thẻ <tr> là thẻ <th>
- Căn chỉnh tiêu đề : sử dụng thuộc tính CSS : text-align : center
- Tiêu đề cho nhiều cột : Sử dụng thuộc tính colspan

5 .Padding và spacing ( phần đệm và khoảng cách)

- Sử dụng thuộc tính padding : để đệm trên các ô trong bảng
- Sử dụng thuộc tính border-spacing : để tạo khoảng các giữa các ô trong bảng

6 .Colspan và Rowspan

- Colspan để tạo ô mở rộng trên nhiều cột , đại diện cho số cột sẽ kéo dài
- Rolspan để tạo ô mở rộng trên nhiều hàng , đại diện cho số hàng sẽ kéo dài

7 Thực hành tạo kiểu bảng :

- Bảng kiểu màu đan xen
- :nth-child(3) vị trí thứ n của phần tử con của phần tử cha của nó
- :nth-child(n) được gọi là một pseudo class , Một Pseudo class trong CSS được dùng để xác định trạng thái đặc biệt của một phần tử , hover, visited, focus, focus-within, disable, checked....

- odd là vị trí lẻ vd : 1,3,5
- even là vị trí chẵn vd : 2,4,6

8 . thực hành tạo bảng colgroup

- sử dụng các thuộc tính css : + width + visibility + background + border
