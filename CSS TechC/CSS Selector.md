I. Selector ( bộ chọn) 
- Trong một file HTML thì có rất nhiều thẻ giống nhau và thông thường chúng ta sẽ đặt các ID, class cho các thẻ để phân biệt, vậy thì trong CSS sẽ dựa vào các ID và class đó để truy xuất tới và cách truy xuất đó ta gọi là selector

II .Các Selector thông dụng

1 . Bộ chọn phần tử CSS

+ Bộ chọn phần tử chọn các phần tử HTML dựa trên tên các thẻ html

VD :
h1 {
  text-align: center;
  color: red;
}

2 . Bộ chọn phân cấp :
Phân cấp nghĩa là sẽ dựa vào cấp cha để tìm cấp con

HTML :

<div>
    <p>
        Nội dung sẽ có màu đỏ vì nó nằm trong thẻ p.
    </p>
</div>
<p>
    Nội dung không có màu vì nó nằm ngoài thẻ p.
</p>

CSS : 
div p{
    color: red
}

Như vậy để phân cấp thì ta sẽ dùng khoảng trắng (space) để ngăn cách giữa các thẻ, thẻ nào nằm đầu tiên là thẻ cha, tiếp theo là thẻ con.

2 . Bộ chọn id CSS

+Bộ chọn id sử dụng thuộc tính id của một phần tử HTML để chọn một phần tử cụ thể.
+Id của một phần tử là duy nhất trong một trang, do đó, bộ chọn id được sử dụng để chọn một phần tử duy nhất!

+Giả sử bạn có nhiều thẻ div và bạn muốn viết CSS cho một thẻ DIV nào đó thôi thì bạn có thể chọn giải pháp là Selector theo ID của HTML. Chúng ta sử dụng dấu thăng (#) để đại diện cho ID.

HTML:
<div id="active">
    ACTIVE
</div>
<div>
    NON-ACTIVE
</div>
CSS:
#active{
    background: red
}

Ở đoạn code CSS trên bạn có thể viết lại thế này:

div#active{
    background: red
}

Đoạn code div#active có nghĩa tìm là thẻ div có id là active

3 .Bộ chọn lớp CSS

Với ID là duy nhất thì class ngược lại, nghĩa là  có thể cho nhiều thẻ HTML có cùng tên class, điều này khá tiện lợi cho CSS. Ví dụ bạn cần style cho một số thẻ div nào đó thôi thì nếu bạn dùng ID thì không hay lắm vì phải viết nhiều lần, chính vì vậy ta sẽ chọn class. Selector cho class sẽ là dấu chấm (.)

HTML:
<div class="bg-yellow">
    Yellow
</div>
<div>
    NONE
</div>
<div class="bg-yellow">
    Yellow
</div>
<div class="bg-yellow">
    Yellow
</div>

CSS:
.bg-yellow{
    background: yellow
}

Note : Giả sử bạn thiết lập class="bg-yellow" thêm một thẻ p nữa nhưng bạn muốn chỉ có thẻ div là có tác dụng thì làm thế nào? Đơn giản bạn chỉ cần thêm tên thẻ div đằng trước dấu chấm là được.

div.bg-yellow{
    background: yellow
}

4 .Bộ chọn chung CSS
Bộ chọn phổ quát (*) chọn tất cả các phần tử HTML trên trang.

Quy tắc CSS bên dưới sẽ ảnh hưởng đến mọi phần tử HTML trên trang

* {
  text-align: center;
  color: blue;
}

III . Một số lưu ý về CSS Selector

1 .Thứ nhất là phải phân biệt được hai loại là ID selector và Cl selector:

+Với ID thì trong mỗi trang web nó là duy nhất nên thông thường chúng ta hay dùng nó ở những vị trí không có tính chất lặp đi lặp lại nhiều lần
+Với Class thì ta có thể đặt nhiều vị trí, chính vì vậy nếu website bạn có nhiều block giống nhau thì hãy chọn class

1 . Thứ hai là phải hiểu dù ID hay class thì đều tuân theo quy luật phâp cấp, nghĩa là khi truy vấn selector thì sẽ ghi cấp cha rồi tới cấp con. Ví dụ giờ viết CSS cho thẻ h2 có class="title" nằm trong thẻ  div có id="main".

html : <div id="main">               
            <h2 class ="title>
             <p>abc</p>
            </h2>
            </div>

               =>  CSS :  div#main h2.title p a{ code  }

3. Thứ ba hiểu được sự khác nhau giữa ghi liền và ghi có khoảng trắng giữa id hoặc class và tên thẻ. Ví dụ:

div#main: chọn thẻ div có id="main" 
div #main: Chọn thẻ có id="main" nằm trong thẻ div