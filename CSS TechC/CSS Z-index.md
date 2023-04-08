Như các bạn đã biết , bình thường thẻ html phân cấp rất rõ ràng , nên các vị trị , các phần tử sẽ không bị đè lên nhau 

Nhưng vấn đề hiển thị của HTML lại phụ thuộc vào CSS và các thẻ có thể bị đè lên nhau bằng cách sử dụng các thuộc tính đặc biệt trong CSS như float, position. Và để giải quyết vấn đề đó chúng ta sẽ cần đến z-index

1. Thuộc tính z-index trong CSS
Thuộc tính z-index được sinh ra nhằm giải quyết cấp độ hiển thị của các thẻ HTML lên trình duyệt Browser, hay nói cách khác z-index giống như đánh số thứ tự hiển thị, thẻ nào có z-index cao thì nằm phía trên và thẻ nào có z-index thấp thì nằm phía dưới.

Tuy nhiên không phải lúc nào cũng sử dụng được z-index nên bạn phải biết các tính chất sau:

+ chỉ thiết lập z-index được cho các thẻ có khai báo position:absolute
+ Giá trị của z-index là một con số (âm hoặc dương).
+ Hai thẻ có cùng z-index thì sẽ tuân theo quy luật thẻ nào nằm dưới thì được hiển thị phía trên, thẻ con sẽ nằm trên thẻ cha.
+ Giá trị z-index mặc định của các thẻ HTML là 1, vì vậy các thẻ HTML thông thường nếu nằm phía dưới thì nó sẽ đè thẻ phía trên


2. Ví dụ z-index trong CSS
Để bạn hiểu rõ hơn thì chúng ta sẽ làm một số ví dụ về z-index trong CSS để các bạn dễ hiểu bài hơn


VD : có 2 thẻ div
        <div id="map1">
        </div>
        <div id="map2">
        </div>

- z-index khi không có position absolute

Trong ví dụ này ta cho thẻ div#map2 có margin-top: -50px để nó đè thẻ div#map1 và này ta thiết lập z-index cho #map1 lớn hơn #map2.

CSS : 
#map1{
    width: 200px;
    height: 100px;
    background: blue;
    z-index: 2;
}
#map2{
    width: 200px;
    height: 100px;
    background: yellow;
    margin-top: -50px;
    z-index:1
}

Chạy lên thẻ div màu vàng sẽ đè một phần của thẻ div màu xanh. Điều này là ĐÚNG bởi vì cả hai thẻ không có thuộc tính position nên không sử dụng z-index và lúc nó sẽ hiển thị tuân theo quy luật mặc định của HTML.


- z-index giữa absolute và không có absolute

Trong ví dụ này ta khai báo thẻ div màu xanh ,  vàng là position:absolute và màu xanh không có, lúc này thẻ màu vàng có thể sử dụng được thuộc tính z-index. Tuy nhiên việc sử dụng là không cần thiết bởi vì theo cách hiển thị mặc định thì thẻ vàng luôn luôn đè lên thẻ xanh. Vậy câu hỏi đặt ra là làm sao thẻ vàng nằm dưới thẻ xanh? Chúng ta xem đoạn CSS sau:

#map1{
    width: 200px;
    height: 100px;
    background: blue;
}
#map2{
    width: 200px;
    height: 100px;
    position:absolute;
    top: 50px;
    left: 8px;
    background: yellow;
    z-index:-1
}
Chạy lên và thẻ vàng nằm dưới thẻ xanh và kết quả này giống với mong đợi của chúng ta. Nhìn lại CSS thì ban thấy mình khai báo thẻ vàng có z-index:-1. Như vậy ta sử dụng giá trị âm để xử lý cho trường hợp này.


- z-index giữa hai thẻ có absolute
Trường hợp này thì thẻ nào có z-index cao thì sẽ nằm trên.

CSS : 
#map1{
    width: 200px;
    height: 100px;
    position:absolute;
    top: 50px;
    left: 50px;
    background: blue;
    z-index: 2;
}
#map2{
    width: 200px;
    height: 100px;
    position:absolute;
    top: 80px;
    left: 70px;
    background: yellow;
    z-index:1
}
Kết quả thẻ xanh nằm trên vì nó có z-index cao hơn