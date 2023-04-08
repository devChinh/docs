1. Object-fit trong CSS

Thuộc tính CSS object-fitđược sử dụng để chỉ định cách thay đổi kích thước của <img> hoặc <video> để phù hợp với vùng chứa của nó.

Đầu tiên, tại sao lại phải học thuộc tính này. Lý do rất đơn giản vì hình ảnh có vô vàn kích thước khác nhau và trên thẻ img trong đoạn mã HTML không thể nào xử lý được hết các tình huống đó. Chính vì vậy mà thuộc tính object-fit ra đời

2. Các giá trị của object-fit

Thuộc tính object-fit có tất cả 5 giá trị. Trong phần này ta sẽ lần lượt tìm hiểu ý nghĩa từng giá trị một. Ta hãy bắt đầu

    + fill: hình ảnh được thay đổi kích thước để lấp đầy kích thước đã cho

    + contain: Hình ảnh vẫn giữ nguyên tỷ lệ co, nhưng được thay đổi kích thước để vừa với kích thước đã cho ( Ví dụ ảnh ban đầu là có kích thước là 1000x500 có nghĩ là tỷ lệ width / height là 2 , thì khi set width : 500px , height : 500px và cho nó thêm một cái object-fit : contain thì width và height sẽ trở thành : 500px và 250px vì tỷ lệ ban đầu  width / height của ảnh là 2 )

    + cover: hình ảnh sẽ giữ nguyên tỷ lệ như ban đầu và lấp đầy kích thước đã cho. Hình ảnh sẽ được cắt bớt để vừa với width và height đã set

    + none: ảnh giữ nguyên kích thước gốc, không thay đổi chiều cao và chiều rộng.

    + scale-down: giá trị này hơi phức tạp nếu kích thước gốc của ảnh nhỏ hơn chiều rộng và chiều dài của khung thì giá trị này tương đương với giá trị none, nếu ngược lại thì giá trị này tương đương giá trị contain