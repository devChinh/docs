 Chúng ta đã học về DOM khá nhiều rồi như: DOM Element, DOM HTML, DOM CSS và  bản chất của các đối tượng trả về khi sử dụng DOM Element(getElementBuyId ,getElementByClassName ,...) để truy vấn đó chính là DOM Nodes (nút)

Khi  sử dụng DOM Element để truy vấn tới một đối tượng HTML nào đó thì kết quả nó sẽ trả về một object và object đó ta gọi là DOM Nodes

1. DOM Node - document.createElement()

Ví dụ:

var node = document.getElementById("some-id")

Với cách này bắt buộc phải tồn tại một đối tượng HTML đang hiển thị trên website thì mới khởi tạo thành công. Giả sử nếu  muốn tạo một Node mới hoàn toàn v không liên quan tới những thẻ HTML đang hiển thị trên website thì làm thế nào? Rất đơn giản chúng ta sẽ sử dụng phương thức document.createElement() với tham số truyền vào là tên của thẻ HTML cần tạo

VD :

var p = document.createElement("p")

Sau khi khởi tạo xong bạn hoàn toàn có thể sử dụng các phương thức, thuộc tính của DOM HTML, DOM CSS như là thẻ p này đã có trên trang web này của mình rồi

p.innerHTML = "Học DOM Nodes"

Để thêm Node này vào trang web thì chúng ta sử dụng phương thức appendChild (sẽ học ở bên dưới)

document.getElementsByTagName('body')[0].appendChild(p);

2 DOM Node - document.createTextNode()

Text node là một node đặc biệt, nó không phải là một thẻ HTML thông thường mà chỉ là một chuỗi (string) nên thông thường chúng ta sử dụng nó để thay thế cách gán thông thường như là innerHTML 

  
          // Tạo mới một thẻ p
          var p = document.createElement("p");
          // Tạo text node
          var text = document.createTextNode("Học DOM Nodes");
          // Thêm nội dung HTML vào thẻ p
          p.appendChild(text);
          Thay vì 
          var  text =  p.innerHTML = "Học DOM Nodes"

3.Phương thức appendChild()

Dùng để thêm (bổ sung) vào vị trí cuối cùng của đối tượng một thẻ HTML nào đó

VD : 
	        // Tạo mới một thẻ h1
            var h1 = document.createElement("h1");

            // Thêm nội dung HTML vào thẻ h1
            h1.innerHTML = "Học DOM Nodes"

            // Đưa thẻ h1 vào trong thẻ div có id=TOP
            document.getElementById('TOP').appendChild(h1);
          });

4 Phương thức insertBefore()

Được dùng để thêm một Node vào đằng trước một node con nào đó. Phương thức này có hai tham số truyền vào insertBefore(node_insert, node_child), trong đó:

    + node_insert là node bạn muốn thêm vào
    + node_child là node con mà bạn muốn thêm vào đằng trước nó

VD : 
          	// Tạo mới một thẻ h1
            var h1 = document.createElement("h1");

            // Thêm nội dung HTML vào thẻ h1
            h1.innerHTML = "Chào mừng bạn đến với TechC"

            // Lấy node để thêm insertBefore vào
            var element = document.getElementById("content");
            
            // Lấy thẻ cần insertBefore
            var element_child = document.getElementsByTagName("h5")[1];
            
            // Insert Before
            element.insertBefore(h1, element_child);

5 . Phương thức removeChild()
Được dùng để xóa một node con ra khỏi node hiện tại

<div id="content">
          	<h5>chúc vui vẻ khi học bài</h5>
</div>
   
            // Lấy thẻ cần remove
            var need_remove = document.getElementsByTagName("h5")[0];
            
            // Remove
            document.getElementById("content").removeChild(need_remove);

6 . Phương thức replaceChild()

Dùng để replace (thay thế) một node con nào đó bằng một node khác mới hoàn toàn

Ví dụ:


      	<div id="content">
          	<h5>chúc vui vẻ khi học bài</h5>
      	</div>
         
            // Tạo mới một thẻ
            var h1 = document.createElement("h1");
            h1.innerHTML = "Xin chào!";
                
            // Lấy thẻ cần replace
            var replace = document.getElementsByTagName("h5")[0];
            
            // Replace
            document.getElementById("content").replaceChild(p, replace);