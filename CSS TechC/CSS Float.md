I . Thuộc tính float ( left - right - none) trong CSS

Thuộc tính CSS float chỉ định cách một phần tử sẽ nổi

Thuộc tính float được sử dụng để định vị và định dạng nội dung, ví dụ: để một hình ảnh nổi bên trái văn bản trong vùng chứa

Thuộc tính Float trong CSS đóng vai trò rất quan trọng trong việc xây dựng chia bố cục HTML của một trang web. Như các bạn biết, hiện nay người ta sử dụng thẻ div và các thẻ HTML5 như thẻ header, footer, article để chia layout. Nhưng bản chất các thẻ đó lại hiển thị dạng block nên không thể chia ra các khối header, footer, sidebar như giao diện design được. 

Để giải quyết vấn đề này thì ta sử dụng thuộc tính float trong css. Chúng ta có ba giá trị của float hay sử dụng nhất đó là

        + left: Nằm phía bên trái
        + right: Nằm phía bên phải
        + none: Nằm tại chính vị trí của nó (trạng thái bình thường)

VD :  Sử dụng float:left và float:right để chia bổ cục như ảnh sau : 
Image : https://freetuts.net/upload/tut_post/images/2015/09/13/438/thuoc-tinh-float-trong-css-left-right-none-1.png


II . Clear

Khi chúng tôi sử dụng thuộc tính float và chúng tôi muốn phần tử tiếp theo bên dưới (không phải ở bên phải hoặc bên trái), chúng tôi sẽ phải sử dụng thuộc tính clear 

Thuộc tính clear chỉ định điều gì sẽ xảy ra với phần tử bên cạnh phần tử nổi.

Thuộc tính clear có thể có một trong các giá trị sau:

                + none- Phần tử không bị đẩy xuống dưới phần tử nổi bên trái hoặc bên phải. Đây là mặc định
                + left- Phần tử được đẩy xuống bên dưới các phần tử nổi bên trái
                + right- Phần tử được đẩy xuống bên dưới các phần tử nổi bên phải      
                + both- Phần tử được đẩy xuống bên dưới cả phần tử nổi bên trái và bên phải
                + inherit- Phần tử kế thừa giá trị rõ ràng từ cha của nó

Khi xóa float,  nên khớp phần rõ ràng với phần nổi: Nếu một phần tử được làm nổi ở bên trái, thì bạn nên xóa ở bên trái. Phần tử nổi của bạn sẽ tiếp tục nổi, nhưng phần tử đã xóa sẽ xuất hiện bên dưới phần tử đó trên trang web