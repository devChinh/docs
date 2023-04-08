 I . Display 
 Thuộc tính display là thuộc tính CSS quan trọng nhất để kiểm soát bố cục.

Thuộc tính display chỉ định cách một phần tử được hiển thị.

Mọi phần tử HTML đều có giá trị hiển thị mặc định tùy thuộc vào loại phần tử đó. Giá trị hiển thị mặc định cho hầu hết các phần tử là block hoặc inline

Các thuộc tính của display chính bao gồm:

        + inline: hiển thị trên một hàng
        + block: hiển thị dạng khối
        + inline-block: kết hợp cả 2 cách hiển thị trên
        + none: không hiển thị

II . Phân biệt display inline - block của thẻ HTML

1. Phân biệt display inline - block của thẻ HTML
Trước tiên chúng ta cần tìm hiểu hai thuộc tính inline và block của thẻ HTML.

Inline:
Là cách hiển thị trên một hàng và chiều rộng của thẻ đó sẽ phụ thuộc vào nội dung bên trong của thẻ. Vì vậy nhiều thẻ có thể nằm trên cùng một hàng và một số thuộc tính CSS không sử dụng được như thuộc tính margin-top, margin-bottom. Các thẻ HTML được hiển thị mặc định inline là: span, a, strong, b, i, ...

Ví dụ: Trong ví dụ này mình sử dụng thẻ span

<body>
    <span>
        Dòng thứ nhất: 
    </span>
    <span>
        Dòng thứ hai: 
    </span>
    <span>
        Dòng thứ ba: 
    </span>
</body>

- ra giao diện sẽ thấy 3 thẻ này nằm cùng 1 hàng

Block:
Là cách hiển thị chiêm một khoảng rộng (một khối) và có chiêu rộng bằng 100%. Vì vậy khi bạn dùng thẻ này thì mặc dù nội dung ngắn nhưng các thẻ khác ở phía dưới vẫn phải nằm ở vị trí bên dưới nó. Các thẻ HTML hiển thị mặc đinh block là: div, p, h1 -> h6, header, footer, section, nav, ...

<body>
    <div>
        Dòng thứ nhất: 
    </div>
    <div>
        Dòng thứ hai: 
    </div>
    <div>
        Dòng thứ ba: 
    </div>
</body>

- ra giao diện sẽ thấy 3 thẻ này nằm 3 hàng riêng biệt

Inline-block
Là cách hiển thị kết hợp cả hai cách trên, nghĩa là bạn có thể sử dụng CSS để chia khổi và nằm cùng trên cùng một hàng. Thuộc tính này thường được sử dụng khi bạn muốn một thẻ hiển thị dạng khối và có thể nằm trên cùng một hàng.

2. Ghi đè Giá trị Hiển thị Mặc định
Như đã đề cập, mọi phần tử đều có giá trị hiển thị mặc định. Tuy nhiên,  có thể ghi đè điều này

- Môt thẻ span mặc định là thẻ inline có thể dùng CSS display : block để biến nó thành 1 thẻ block

Thay đổi phần tử nội tuyến thành phần tử khối hoặc ngược lại, có thể hữu ích để làm cho trang trông theo một cách cụ thể và vẫn tuân theo các tiêu chuẩn web

Một ví dụ phổ biến là tạo các từ phần tử nội tuyến  cho menu ngang:

Note : inline và inline-block đều  giúp các thẻ  nằm cùng một hàng nhưng 

+Kiểu inline thì không thể set width và height , sử dụng margin và padding left & right thì được còn top và bottom thì không

+Còn dùng inline -block có thể set width, height, margin, padding đủ 4 hướng

+ Display: block luôn được xuống dòng và chiếm toàn bộ width nếu width không được set, set được width, height, margin, padding đầy đủ 4 hướng (top, bottom, right, left).

VD : 
HTML
<ul>
  <li><a href="/html/default.asp" target="_blank">HTML</a></li>
  <li><a href="/css/default.asp" target="_blank">CSS</a></li>
  <li><a href="/js/default.asp" target="_blank">JavaScript</a></li>
</ul>
CSS 
li {
  display: inline;
}

3. Ẩn thẻ HTML với thuộc tính display none

+ Nếu bạn muốn ẩn một thẻ HTML nào đó thì bạn sẽ sử dụng thuộc tính display:none, vì nó ẩn thẻ cấp cao nhất nên tất cả các thẻ con của nó cũng sẽ ẩn theo
+ Việc ẩn một phần tử có thể được thực hiện bằng cách đặt thuộc displaytính thành none. Phần tử sẽ bị ẩn và trang sẽ được hiển thị như thể phần tử không có ở đó

Note : visibility:hidden cũng ẩn một phần tử.

Tuy nhiên, phần tử sẽ vẫn chiếm dung lượng như trước. Phần tử sẽ bị ẩn, nhưng vẫn ảnh hưởng đến bố cục

