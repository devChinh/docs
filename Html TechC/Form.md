I . Biểu mẫu HTML
-Phần tử HTML <form>được sử dụng để tạo một biểu mẫu HTML cho đầu vào của người dùng

1 . Thẻ <input>
- Thẻ input là phần tử biểu mẫu được sử dụng nhiều nhất
- Một thẻ <input> có thể được hiển thị theo nhiều kiểu khác nhau , tuỳ vào thuộc tính type
VD : 
<input type = "text">	         : Hiển thị trường nhập văn bản một dòng
<input type = "radio">	       :Hiển thị một nút radio (để chọn một trong nhiều lựa chọn)
<input type = "checkbox">  :	Hiển thị hộp kiểm (để chọn không hoặc nhiều lựa chọn)
<input type = "submit">      :	Hiển thị nút gửi (để gửi biểu mẫu)
<input type = "button" >      :	Hiển thị một nút có thể 

2.Thẻ <label>
- Viết trước thẻ <input> để xác định nội dung cần nhập vào thẻ input hay hay xác định nhãn cho các phần tử biểu mẫu
- Thuộc tính for của thẻ <label>phải bằng thuộc tính id của <input> phần tử để liên kết chúng lại với nhau.

*Note :
- Lưu ý rằng mỗi trường đầu vào phải có một thuộc tính name được gửi.
- Nếu thuộc tính name bị bỏ qua, giá trị của trường đầu vào sẽ hoàn toàn không được gửi
- Value là giá trị được hiển thị của thẻ input đó

3. Các ví dụ
+ Trường văn bản
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>

+ Nút radio
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>

+ Hộp kiểm
<form>
  <input type="checkbox" id="bike" name="bike" value="Bike">
  <label for="bike"> I have a bike</label><br>
  <input type="checkbox" id="car" name="car" value="Car">
  <label for="car"> I have a car</label><br>
  <input type="checkbox" id="boat" name="boat" value="Boat">
  <label for="boat"> I have a boat</label>
</form>

4 . Thuộc tính action của thẻ form 
- Xác định hành động  sẽ được thực hiện khi biểu mẫu được gửi  
- Thông thường , dữ liệu sẽ được gửi lên server để xử lý và lưu trữ khi người dùng nhấp vào nút gửi
- Hoặc có thể điều hướng sang một trang khác để xử lý dữ liệu
*Note : Nếu thuộc tính action bị bỏ qua thì , hành động được đặt thành trang hiện tại

VD : 
    <form action="./index2.html" target="_blank">
        <input type="radio" id="html" name="html_language" value="HTML">
        <label for="html">HTML</label><br>
        <input type="radio" id="css" name="css_language" value="CSS">
        <label for="css">CSS</label><br>
        <input type="radio" id="javascript" name="js_language" value="JavaScript">
        <label for="javascript">JavaScript</label>
         <input type="submit" value="submit">
      </form>

+ Thuộc tính target  : 

   _blank    : phản hồi được hiển thị trong cửa sổ hoặc tab mới
   _self       : phản hồi được hiển thị trong cửa sổ hiện tại

5 Thuộc tính method của form

-  chỉ định phương thức HTTP sẽ được sử dụng khi gửi dữ liệu biểu mẫu
-  Phương thức HTTP mặc định khi gửi dữ liệu biểu mẫu là GET

Note : Khi gửi một biểu mẫu , hay dữ liệu lên server  thì tuyệt đối không được sử dụng method GET  vì nó là dữ liệu nhạy cảm và dữ liệu biểu mẫu đã gửi sẽ hiển thị lên URL , thay vào đó ta sẽ sử dụng method POST 

-Remember :  Luôn sử dụng POST nếu dữ liệu biểu mẫu chứa thông tin nhạy cảm hoặc thông tin cá nhân!

II.Các phần tử <form>
- Phần tử HTML <form>có thể chứa một hoặc nhiều phần tử biểu mẫu sau:

      + <input>
      + <label>
      + <select>
      + <textarea>
      + <button>
      + <fieldset>
      + <legend>
      + <datalist>
      + <option>

1 . <select>

- xác định danh sách thả xuống

VD : 
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>

- trong thẻ <select> có các thẻ <option>  xác định các phần tử tuỳ chọn có thể được chọn

- Theo mặc định thì phần tử <option > đầu tiên là tuỳ chọn đầu tiên trong danh sách thả xuống được chọn   

- Để xác định một tùy chọn đã chọn trước, hãy thêm thuộc tính <select> vào <option>

- Sử dụng thuộc tính <size> để chỉ định số lượng giá trị hiển thị

-Sử dụng thuộc tính <multiple> để cho phép người dùng chọn nhiều giá trị : nhấn giữ chuột để chọn
 
2 . <textarea>

- xác định trường nhập nhiều dòng (vùng văn bản)

VD : 
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>

-Thuộc tính <rows>  chỉ định số dòng có thể nhìn thấy trong một vùng văn bản.

- Thuộc tính <cols> chỉ định chiều rộng có thể nhìn thấy của một vùng văn bản.

3 . <button>

Phần tử <button>xác định một nút có thể nhấp

4 . <fieldset>
- Phần <fieldset>tử được sử dụng để nhóm dữ liệu liên quan trong một biểu mẫu.
 
- Phần tử <legend> xác định chú thích cho <fieldset> phần tử

VD : 
<form action="/action_page.php">
    <fieldset>
    <legend>Infomation user</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>

5 . <datalist>

-Phần tử <datalist>chỉ định danh sách các tùy chọn được xác định trước cho một <input>phần tử.
-Người dùng sẽ thấy danh sách thả xuống gồm các tùy chọn được xác định trước khi họ nhập dữ liệu.
-Thuộc tính list của <input>phần tử, phải tham chiếu đến id thuộc tính của <datalist>phần tử.

VD : 
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>


III .  Các loại đầu vào

+ <input type="button"> : xác định một nút
+ <input type="radio"> : xác định một nút radio
+ <input type="checkbox"> : xác định một hộp kiểm
+ <input type="color"> : xác định một ô màu 
+ <input type="date"> : được sử dụng cho các <input> đầu vào phải chứa ngày tháng.
+ <input type="datetime-local">:được sử dụng cho các <input> đầu vào phải chứa ngày tháng  và giờ
+ <input type="email"> : được sử dụng cho các trường <input> nhập phải chứa địa chỉ e-mail.
+ <input type="file"> : xác định trường chọn tệp và nút "Duyệt qua" để tải tệp lên.
+ <input type="hidden"> : định nghĩa một trường nhập ẩn 
+ <input type="image"> : định nghĩa một hình ảnh như một nút gửi
+ <input type="month"> : cho phép người dùng chọn một tháng và năm.
+ <input type="number"> : định nghĩa một trường nhập số
+ <input type="password"> : xác định một trường mật khẩu
+ <input type="range"> : tạo một thanh kéo và xác định một phạm vi đầu vào nào đó , mặc định là 100 
+ <input type="reset"> : xác định nút đặt lại sẽ đặt lại tất cả các giá trị biểu mẫu về giá trị mặc định của chúng
+ <input type="search"> : sử dụng cho các trường tìm kiếm 
+ <input type="submit"> : xác định một nút để gửi dữ liệu biểu mẫu đến trình xử lý biểu mẫu 
+ <input type="tel"> : định nghĩa một trường phải chứa số điện thoại 
+ <input type="text"> : xác định trường nhập văn bản một dòng
+ <input type="time"> : cho phép người dùng chọn thời gian
+ <input type="url">  : định nghĩ một trường nhập  phải chứa địa chỉ URL.
+ <input type="week"> : cho phép người dùng chọn một tuần và năm.

IV . Thuộc tính đầu vào

+ <value> : giá trị ban đầu cho trường đầu vào 
VD : <input type="text" id="fname" name="fname" value="Cikey">

+ <disabled> : chỉ định rằng một trường đầu vào nên bị vô hiệu hoá
VD :   <input type="text" id="fname" name="fname" value="John" disabled>

+ <readonly> : dữ liệu đầu vào chỉ đọc được được và không thể sửa đổi 
VD :   <input type="text" id="fname" name="fname" value="Cikey" readonly>

+ <size> : chỉ định độ rộng hiển thị của trường đầu vào
VD :   <input type="text" id="fname" name="fname" size="50">

+ <maxlength>  : chỉ định số kí tự tối đa được phép trong trường đầu vào
VD :    <input type="text" id="pin" name="pin" maxlength="4" size="4">

Note : Khi maxlength được đặt, trường nhập sẽ không chấp nhận nhiều hơn số ký tự được chỉ định. Tuy nhiên, thuộc tính này không cung cấp bất kỳ phản hồi nào. Vì vậy, nếu  muốn cảnh báo người dùng, bạn phải viết mã JavaScript.

+ <pattern> : chỉ định một biểu thức chính quy mà giá trị của trường đầu vào được kiểm tra dựa trên, khi biểu mẫu được gửi

VD :   <input type="text" id="country_code" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">

+ <step> : chỉ định khoảng số hợp pháp cho một trường đầu vào
Ví dụ: nếu bước = "3", các số hợp pháp có thể là -3, 0, 3, 6, v.v.
VD : <input type="number" id="points" name="points" step="3">

+ <autofocus> : chỉ định rằng trường nhập sẽ tự động lấy tiêu điểm khi tải trang
VD :   <input type="text" id="fname" name="fname" autofocus>

+ <list> : đề cập đến một <datalist>phần tử có chứa các tùy chọn được xác định trước cho phần tử <input>

+ <min> & <max>
Đầu vào các thuộc tính  min và max chỉ định các giá trị tối thiểu và tối đa cho một trường
VD :   <input type="text" id="country_code" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code"><br><br>
 đầu vào
Thuộc tính min và max hoạt động với các loại đầu vào sau: số, phạm vi, ngày, ngày giờ-cục bộ, tháng, giờ và tuần.

VD : <input type="date" id="datemin" name="datemin" min="2000-01-02">

+ <multiple> : Thuộc tính đầu vào multiplechỉ định rằng người dùng được phép nhập nhiều giá trị vào một trường đầu vào.

 VD :  <input type="file" id="files" name="files" multiple>

+ <placeholder> : chỉ định một gợi ý ngắn mô tả giá trị mong đợi của trường đầu vào (giá trị mẫu hoặc mô tả ngắn về định dạng dự kiến)

VD :  <input type="text" id="name" name="name" placeholder="your name" >

+ <required> : chỉ định rằng một trường đầu vào phải được điền trước khi gửi biểu mẫu
VD :  <input type="text" id="username" name="username" required>

+  <width> & <height> :  thuộc tính chỉ định chiều cao và chiều rộng của một <input type="image">phần tử.

VD :   <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">

+ <autocomplete> : chỉ định xem biểu mẫu hoặc trường nhập liệu có nên bật hoặc tắt tính năng tự động hoàn thành hay không
- Tự động điền cho phép trình duyệt dự đoán giá trị. Khi người dùng bắt đầu nhập vào một trường, trình duyệt sẽ hiển thị các tùy chọn để điền vào trường, dựa trên các giá trị đã nhập trước đó