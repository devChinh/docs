Các phương thức HTML DOM là các hành động bạn có thể thực hiện (trên Phần tử HTML) - có nghĩ là truy xuất đến các tài liệu HTML như là truy xuất một thẻ p chẳng hạn

Cùng tìm hiểu là làm thế nào để thao tác với DOM nha !

Ví dụ :
Thuộc tính DOM HTML là các giá trị (của Phần tử HTML) mà bạn có thể đặt hoặc thay đổi - có nghĩ là bạn sẽ thay đổi màu sắc hay nội dung của thẻ p vừa được truy xuất ở trên

Ví dụ sau thay đổi nội dung  <p>có id="demo"

<p id="demo"></p>

<script>
    document.getElementById("demo").innerHTML = "Hello World!";
</script>

Trong ví dụ trên, getElementById là một phương thức , trong khi innerHTML là một thuộc tính 

Note :

+ getElementById là sử dụng id để tìm phần tử HTML sẽ tìm hiểu sâu hơn trong phần DOM Element

+ Thuộc tính innerHTML hữu ích để lấy hoặc thay thế nội dung của các phần tử HTML