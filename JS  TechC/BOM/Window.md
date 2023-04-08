I . window

 - Đối tượng window có rất nhiều thuộc tính và phương thức riêng. Ví dụ, đối tượng document là một thuộc tính của window (window.document). Vì vậy, ta có thể ví window là một đối tượng toàn cục và có cấp độ cao nhất trong sơ đồ object BOM của Javascript.

1  Window trong javascript là gì?

- Trong javascript, window là một đối tượng thuộc nhóm BOM - tức là một object có những phương thức và thuộc tính được dùng để xử lý trình duyệt

- Công dụng của window chủ yếu là các thao tác với trình duyệt như: Tính chiều cao - di chuyển - thay đổi kích thước - mở ra một tab mới - lấy đường dẫn url của website

2. Window.innerHeight - lấy kích thước trình duyệt

Để lấy kích thước chiều cao và chiều rộng của trình duyệt thì chúng ta sử dụng đối tượng window

    // lấy chiều cao
    var heightBrowser = window.innerHeight

    // lấy chiều rộng
    var widthBrowser = window.innerWidth

3. Thao tác đối tượng window trong javascript

Đối tượng window cung cấp một số phương thức giúp thao tác với trình duyệt dễ dàng hơn.

I . window.location.href - lấy url website

- Nếu bạn muốn lấy đường dẫn hiện tại của trang web thì sử dụng lệnh sau.

let url = window.location.href

II .  window.open() - mở một cửa sổ mới

Cú pháp: window.open(url, name, options)

Trong đó:

+ url : là đường dẫn website bạn muốn mở
+ name: là tên bạn đặt cho cửa sổ này
+ options: là một chuỗi các thông số được cách nhau bởi dấu phẩy, sau đây là các thông số thông dụng:
                height=pixels : chiều cao của cửa sổ
                width=pixels: chiều rộng của cửa sổ
                top=pixels: vị trí hiển thị cửa sổ so với lề trên
                left=pixels: vị trí hiển thị cửa sổ so với lề trái
                menubar=yes|no|1|0: có hiển thị thanh menu hay không
                resizable=yes|no|1|0: có hiển thị biểu tượng resize cửa sổ hay không
                scrollbars=yes|no|1|0: có hiển thị thanh cuộn hay không
                status=yes|no|1|0: có hiển thị thanh trạng thái hay không
                titlebar=yes|no|1|0: có hiển thị titlebar hay không
                toolbar=yes|no|1|0: có hiển thị toolbar hay không
                fullscreen=yes|no|1|0: có hiển thị biểu tượng fullscreen hay không

VD : 

     <script language="javascript">         
        var windowChild = null
        function openWindow()
        {
          windowChild = window.open('https://abc.com', "windowChild", "width=500, height=500")
        }
      </script>
      <a href="#" onclick="return openWindow()">Open</a>

III . window.close() - đòng cửa sổ

- Sau khi mở cửa sổ thì để đóng cửa sổ đó chúng ta sử dụng lệnh windowObj.close(), trong đó windowObj là cửa sổ mà ta sử dụng lệnh window.open() tạo ra

VD : 

        <script language="javascript">
         
        var windowChild = null;
         
        function openWindow()
        {
            windowChild = window.open('https://abc.com', "windowChild", "width=500, height=500");
        }
         
        function closeWindow()
        {
            windowChild.close()
        }

        </script>
        <a href="#" onclick=" openWindow()">Open</a>
        <a href="#" onclick=" closeWindow()">Close</a>

IV . window.moveTo() - di chuyển cửa sổ

- Sau khi mở một cửa sổ nếu muốn di chuyển nó thì ta dùng lệnh windowObj.moveTo(top, left), trong đó:

    + top: là số pixels so với lề trên
    + left: là số pixels so với lề trái

VD  :

    <script language="javascript">
         
        var windowChild = null
         
        function openWindow()
        {
            windowChild = window.open('https://abc.com', "windowChild", "width=500, height=500")
        }
         
        function moveWindow()
        {
            windowChild.moveTo(500, 100);
        }
      </script>
      <a href="#" onclick=" openWindow()">Open</a>
      <a href="#" onclick=" moveWindow()">Move</a>

V . window.resizeTo() - thay đổi kích thước cửa sổ

- Lúc mở cửa sổ bạn sẽ thiết lập height và with cho window, tuy nhiên nếu sau khi mở bạn muốn thay đổi thì sử dụng hàm windowObj.resizeTo(width, height), trong đó:

    + width: chiều rộng của cửa sổ
    + height: chiều cao của cửa sổ
    
    <script language="javascript">
         
        var windowChild = null;
         
        function openWindow()
        {
            windowChild = window.open('https://abc.com', "windowChild", "width=500, height=500")
        }
         
        function resizeWindow()
        {
            windowChild.resizeTo(1000, 1000)
        }
        </script>
         <a href="#" onclick=" openWindow()">Open</a>
        <a href="#" onclick=" resizeWindow()">Resize</a>

