Event  là một hành động tác động lên các đối tượng HTML, qua đó ta có thể bắt được sự kiện và yêu cầu javascript thực thi một chương trình nào đó

I. Các kiểu viết Event trong Javascript

1. Viết ngay trong thẻ HTML 

VD : 

<div id="series" onclick="alert('Bạn vừa click')">Học JS</div>


2.  Gọi một hàm để xử lý event đó

VD : 
 <div id="series" onclick="show()">Học JS</div>
    <script type="text/javascript">
        function show(){
            alert('Bạn vừa click vào')
        }
    </script>


3. Dùng DOM để truy xuất đến thẻ muốn gán Event

 <div id="jav" >Học javascript</div>

   <script type="text/javascript">
        //chọn thẻ có id = jav
        var element = document.getElementById('jav');
        //Thêm sự kiện
        element.onclick = function (){
            alert('Bạn vừa click vào');
        }
    </script>

II . Các sự kiện phổ biến

+ onclick	      :         Sự kiện xảy ra khi click vào thẻ HTML

+ ondbclick       :   	Sự kiện xảy ra khi double click vào thẻ HTML

+ onchange	     :    Sự kiện xảy ra khi giá trị (value) của thẻ HTML đổi. Thường dùng trong các đối thẻ form input

+ onmouseover	:   Sự kiện xảy ra khi con trỏ chuột bắt đầu đi vào thẻ HTML

+ onmouseout	  :   Sự kiện xảy ra khi con trỏ chuột bắt đầu rời khỏi thẻ HTML

+ onkeydown	    :    Sự kiện xảy ra khi gõ một phím bất kì vào ô input

+ onload	       :       Sự kiện xảy ra khi thẻ HTML bắt đầu chạy, nó giống như hàm khởi tạo trong lập trình hướng đối tượng vậy đó

+ onkeyup	:         Sự kiện xảy ra khi bạn gõ phím nhưng lúc bạn nhả phím ra sẽ được kích hoạt

+ onkeypress	:     Sự kiện xảy ra khi bạn nhấn môt phím vào ô input

+ onblur	:          Sự kiện xảy ra khi con trỏ chuột rời khỏi ô input

+ oncopy	:        Sự kiện xảy ra khi bạn copy nội dung của thẻ

+ onpaste	:            Sự kiện xảy ra khi bạn dán nội dung vào thẻ


