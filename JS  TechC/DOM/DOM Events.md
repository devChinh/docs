JavaScript có thể được thực thi khi một sự kiện xảy ra, như khi người dùng nhấp vào một phần tử HTML


- Cách cách để viết sự kiện cho thẻ html trong javaScript

+ Viết ngay trong thẻ HTML 

VD : 

<div id="series" onclick="alert('Bạn vừa click')">Học JS</div>

+ Gọi một hàm để xử lý event đó

VD : 
 <div id="series" onclick="show()">Học JS</div>
    <script type="text/javascript">
        function show(){
            alert('Bạn vừa click vào')
        }
    </script>


+ Dùng DOM để truy xuất đến thẻ muốn gán Event

 <div id="jav" >Học javascript</div>

   <script type="text/javascript">
        //chọn thẻ có id = jav
        var element = document.getElementById('jav');
        //Thêm sự kiện
        element.onclick = function (){
            alert('Bạn vừa click vào');
        };
    </script>


Các sự kiện phổ biến hay gặp vad dùng 