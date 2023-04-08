1. Background CSS
- Đây là một thuộc tính khá quan trọng mà bạn cần phải nắm vững vì hầu hết các trang web đều có sử dụng thuộc tính này để tạo background với các hình ảnh hoặc màu sắc (color)

chúng ta sẽ tìm hiểu một số thuốc tính backgrounds sau:

        + background
        + background-color
        + background-image
        + background-repeat
        + background-attachment
        + background-position

2 .CSS thiết lập màu nền cho background

+ Để thiết lập màu nền cho background thì ta sử dụng thuộc tính CSS backgroud-color hoặc background với giá trị của nó là màu sắc của background , có thể sử dụng mã màu hoặc tên màu bằng tiếng anh đều được

3 .CSS thiết lập hình nền cho backround

+ Thiết lập hình nền thì ta sử dụng thuộc tính CSS backgrond hoặc background-image với tham số truyền vào là URL của hình ảnh.

VD :
body{
    background-image: url('');
}

Hoặc : 
body{
    background-image: url('');
}

Note : nhưng ảnh sẽ bị  lặp nhiều lần và đó là điều không ai mong muốn

4 .Cho phép lặp hoặc không lặp background

- background-repeat :
        +no-repeat : không lặp
        +repeat : cho phép lặp
        +repeat-x : lặp theo chiều ngang
        +repeat-y : lặp theo chiều đứng

VD : 
body{
   background-image : url('');
   background-repeat: no-repeat;
}

5. Thiết lập vị trí hiển thị cho background

Trường hợp bạn sử dụng background không lặp và  muốn background hiển thị ở một ví trí nào đó như center, left, right, ... thì  sử dụng thuộc tính background-position. Cấu trúc của nó là:

 + background-position: position1 position2

-Trong đó position1 và   gồm các giá trị sau:

        +bottom: ở dưới
        +left: bên trái
        +right: bên phải
        +center: ở giữa
        +top: ở trên

Lưu ý: khi  chọn giá trị thì phải chọn đúng chuẩn như: left bottom, left top, right top, .. chứ không thể chọn left right

Thực tế thì thuộc tính backgroud-position là viết tắt của hai thuộc tính background-position-x và backgroud-position-y nên thay vì truyền hai tham số vào background-position thì bạn có thể sử dụng nó để thay thế

6 . Thiết lập background đứng im khi scroll (fixed background)

Nếu màn hình dài quá thì khi  lăn chuột background   sẽ kéo theo nên nếu  muốn nó đứng im thì có thể sử dụng thuộc tính background-attachment. Thông thường chúng ta sử dụng hai thuộc tính:

-background-attachment :
    +fixed: sẽ đứng im
    +scroll: sẽ di chuyển theo khi kéo

7. Sử dụng thuộc tính background nâng cao
Nếu  cảm thấy các thông số thiết lập background quá dài thì có thể sử dụng thuộc tính background ở dạng ghi tắt

VD : 
body
{
    height: 1000px;
    background: url('https://freetuts.net/upload/config/images/hoc-lap-trinh-online.png') no-repeat bottom fixed;
}

8. Sử dụng selector và background

Các ví dụ trên  dùng cho thẻ body nhưng trong thực tế bạn có thể dùng nó cho bất kì thẻ nào bằng cách sử dụng selector trong css.

Ví dụ: thiết lập background cho thẻ h1:

h1{
    height: 1000px;
    background: url('') no-repeat bottom fixed;
}

Ví dụ: Thiết lập background cho thẻ có id="demo" :

#demo
{
       height: 1000px;
    background: url('') no-repeat bottom fixed;
}






