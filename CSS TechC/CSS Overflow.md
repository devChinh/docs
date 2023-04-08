Thuộc tính CSS overflow kiểm soát những gì xảy ra với nội dung quá lớn để vừa với một khu vực được chỉ định

- khi nội dung của một phần tử nào đó quá lớn so với kích cỡ của phần tử thì phần nội dung đó sẽ bị tràn ra khỏi khu vực được chỉ định cho phần tử đó. Vậy để khắc phục khó khăn đó :

Trong CSS có thuộc tính overflow cho phép mình khắc phục khó khăn trên bằng cách cắt đi phần nội dung bị tràn hoặc thêm thanh cuộn cho phần tử đó.

Thuộc tính overflow có các giá trị sau:

            + visible- Mặc định. Phần tràn không được cắt bớt. Nội dung hiển thị bên ngoài hộp của phần tử
            + hidden- Phần tràn bị cắt bớt và phần còn lại của nội dung sẽ không hiển thị
            + scroll- Phần tràn được cắt bớt và một thanh cuộn được thêm vào để xem phần còn lại của nội dung
            + auto- Tương tự như scroll, nhưng nó chỉ thêm thanh cuộn khi cần thiết

1. overflow-x

overflow-x là thuộc tính cho phép điều khiển nội dung bị tràn theo chiều ngang (nghĩa là bên trái (left) và bên phải (right) của phần tử). Tương tự thuộc tính overflow, thuộc tính overflow-x cũng có giá trị như visible, hidden, auto, scroll.

3. overflow-y

overflow-y là thuộc tính cho phép điều khiển nội dung bị tràn theo chiều dọc (nghĩa là bên trên (top) và bên dưới (bottom) của phần tử). Tương tự thuộc tính overflow, thuộc tính overflow-y cũng có giá trị như visible, hidden, auto, scroll.