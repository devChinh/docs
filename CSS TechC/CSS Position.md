1 Position 

Thuộc tính position chỉ định loại phương pháp định vị được sử dụng cho một phần tử (tĩnh, tương đối, cố định, tuyệt đối)

Thuộc tính position trong CSS dùng để xác định vị trí hiển thị cho thẻ HTML và thường được dùng để xây dựng CSS cho menu đa cấp, tooltip hoặc một số chức năng khác. Position có tổng cộng 5 giá trị như : 

            + static
            + relative
            + fixed
            + absolute
            + sticky


1 .Position : Relative ( vị trí tương đối)

Một phần tử có posion: Relative được định vị so với vị trí bình thường của nó

Khi sử dụng thuộc tính : relative này thì có thể sử dụng các thuộc tính như : 
                    +top: lên phía trên
                    +right: qua bên phải
                    +bottom: xuống phía dưới
                    +left: qua bên trái

2 . Position : absolute  (vị trí tuyệt đối)

Một phần tử có vị trí: tuyệt đối  được định vị tương đối với thẻ cha có Position : relative  được định vị gần nhất 

VD như này :
<div class="relative">This div element has position: relative;
  <div class="absolute">This div element has position: absolute;</div>
</div>

Tuy nhiên; nếu một phần tử được định vị tuyệt đối không có  một thẻ cha nào đó  được định vị ( position : relative ) thì nó sẽ sử dụng phần thân tài liệu ( là thẻ body ) và di chuyển cùng với việc cuộn trang

VD như này : 
 <div class="absolute">This div element has position: absolute;</div>

Khi sử dụng thuộc tính : absolut này thì có thể sử dụng các thuộc tính như : 
                    +top: lên phía trên
                    +right: qua bên phải
                    +bottom: xuống phía dưới
                    +left: qua bên trái


3 Quan hệ giữa position relative và absolute trong CSS

Ta có thể ví một thẻ có CSS position :  relative như một cái khung và một thẻ có CSS position : absolute là một hòn bi di chuyển bên trong cái khung nên nó có thể lăn tới bất kì vị trí nào, thậm chí nó có thể lăn ra bên ngoài khung. Và để thiết lập vị trí thì ta sử dụng bốn thuộc tính sau:

                    +top: lên phía trên
                    +right: qua bên phải
                    +bottom: xuống phía dưới
                    +left: qua bên trái

4 . Position : Static (tĩnh)

 Đây được xem là giá trị hiển thị Position trong css một cách mặc định (default), các thành phần sẽ nằm theo thứ tự của văn bản

 Các phần tử được định vị tĩnh không bị ảnh hưởng bởi các thuộc tính top, bottom, left, and right

5 : Position : Fixed ( cố định)

Một phần tử có position : fixed ,  được định vị so với chế độ xem, có nghĩa là nó luôn ở cùng một vị trí ngay cả khi trang được cuộn.

Và để thiết lập vị trí thì ta sử dụng bốn thuộc tính sau:

                    +top: lên phía trên
                    +right: qua bên phải
                    +bottom: xuống phía dưới
                    +left: qua bên trái

6 Position : Sticky (dính)

Một phần tử với position: sticky được định vị dựa trên vị trí cuộn của người dùng

Một phần tử cố định kêt hợp giữa relative và fixed, tùy thuộc vào vị trí cuộn. Nó được định vị tương đối cho đến khi một vị trí bù nhất định được đáp ứng trong khung nhìn - sau đó nó "dính" vào vị trí (như vị trí: fixed)

Và position cũng sử dụng được các thuộc tính sau :

                    +top: lên phía trên
                    +right: qua bên phải
                    +bottom: xuống phía dưới
                    +left: qua bên trái




