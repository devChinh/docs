1 iframe là gì ? 

-Thẻ HTML <iframe>chỉ định một khung nội tuyến.

- Giúp hiện thị nội dung của một trang web khác vào một khung nội tuyến

-Khung nội tuyến được sử dụng để nhúng tài liệu khác vào tài liệu HTML hiện tại.

2 . Cú pháp 

<iframe src="url" title="description"></iframe>

-Trong thẻ iframe có thể sử dụng các thuộc tính height , width  , style 

Vd : 
<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>

3 . iframe nhắm mục tiêu cho một liên kết 
-Một iframe có thể được sử dụng làm khung mục tiêu cho một liên kết.

 - Để đưa một trang web khác vào khung nội tuyến thì cần có thuộc tính target của liên kết và phải tham chiếu đến thuộc tính name của iframe

 VD : 

 <iframe src="./index.html" name="iframe_a" height="900px" width="900px" title="Iframe Example"></iframe>
   <p><a href="https://shopguitarcaugiay.com" target="iframe_a">Click vào đây để chuyển trang web</a></p>



