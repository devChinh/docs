Trong bài này chúng ta sẽ tìm hiểu đến DOM Element Javascript, ta sẽ học cách truy xuất đến một thẻ HTML bất kì thông qua các thuộc tính như id, class, name hay thậm chí là tên của thẻ HTML.

1 Sử dụng getElementById để tìm theo ID

Để truy xuất tới một thẻ HTML theo ID ta sử dụng cú pháp sau:

var element = document.getElementById('idname')

VD

<p id="demo"></p>

// Lấy thẻ p
var element = document.getElementById('demo')

Note : Vì ID trên một trang web là duy nhất nên là chắc chắc truy xuất được 1 thẻ duy nhất mà theo mong muốn của mình

Nếu phần tử được tìm thấy, phương thức sẽ trả về phần tử dưới dạng một đối tượng (object) (trong phần tử)

Và mình có thể truy xuất đến các thuộc tính trong object đó : object.property

Nếu phần tử không được tìm thấy, phần tử sẽ chứa undefined


2. Sử dụng getElementsByTagName để tìm theo tên thẻ html

Tên thẻ HTML chính là tên các thẻ như p, a, div, ... Và ta sẽ truy xuất tới nó bằng cú 
pháp sau:
var element = document.getElementsByTagName('tagname')

// Lấy thẻ p
var element = document.getElementsByTagName('p');

Note : Giả sử muốn truy xuất một thẻ p thông qua getElementsByTagName  , nhưng trên trang web của chúng ta lại có 30 thẻ p chẳng hạn thì khi đó chúng ta sẽ có một mảng gồm các thẻ p trên trang web của chúng ta làm phần tử của mảng
- Để truy xuất đến thẻ p mà mình muốn làm việc thì đơn giản là dùng cú pháp truy cập tương tự khi lấy phần tử trong một mảng : element[1]

3. Sử dụng getElementsByClassName để tìm theo tên class

Để tìm các thẻ HTML có class nào đó thì ta dùng cú pháp sau:

var element = document.getElementsByClassName('classname');

// Lấy thẻ p có class demo
var element = document.getElementsByTagName('demo');

Tương tự như tìm theo tên thẻ HTML, thì tìm theo tên class sẽ trả về một mảng các object nên bạn sẽ phải sử dụng cú pháp truy xuất mảng để chọn đúng đối tượng muốn lấy :  element[1]

4 . Tìm các phần tử HTML bằng Bộ chọn (selector) CSS

Nếu bạn muốn tìm tất cả các phần tử HTML khớp với một bộ chọn CSS được chỉ định (id, class, type , thuộc tính, giá trị của thuộc tính, v.v.), nó như là tổng hợp của byId , byClassName , byTagName hãy sử dụng querySelectorAll()

Ví dụ truy xuất đến một danh sách tất cả các <p>phần tử với class="intro"

const x = document.querySelectorAll("p.#demo") // 20p id demo 

Có thể dùng :  document.querySelector nó cũng tương tự như  querySelectorAll nhưng mà thay vì lấy tất cả các selector mà mình truyền vào thì nó sẽ chỉ lấy cái selector đầu tiên