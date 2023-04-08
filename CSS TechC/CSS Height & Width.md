CSS thuộc tính height và width  được sử dụng để đặt chiều cao và chiều rộng của một phần tử.
Thuộc tính CSS max-width được sử dụng để đặt chiều rộng tối đa của một phần tử

1 .CSS Cài đặt chiều cao và chiều rộng
Thuộc tính height và width được sử dụng để thiết lập chiều cao và chiều rộng của một phần tử.

Các thuộc tính chiều cao và chiều rộng không bao gồm phần đệm, đường viền hoặc lề

Các thuộc tính heightvà width có thể có các giá trị sau:

        + auto- Đây là mặc định. Trình duyệt tính toán chiều cao và chiều rộng
        + length- Xác định chiều cao / chiều rộng bằng px, cm, v.v.
        + %- Xác định chiều cao / chiều rộng theo phần trăm của khối chứa
        + initial- Đặt chiều cao / chiều rộng thành giá trị mặc định của nó
        + inherit- Chiều cao / chiều rộng sẽ được kế thừa từ giá trị mẹ của nó

2 , Đặt chiều rộng tối đa ( max -width )

Thuộc tính max-width được sử dụng để đặt chiều rộng tối đa của một phần tử

max-width có thể được chỉ định trong các giá trị chiều dài , như px, cm, v.v., hoặc phần trăm (%) của khối chứa hoặc đặt thành 0 (đây là mặc định. Có nghĩa là không có chiều rộng tối đa).

voi <div> có width là 500px  khi cửa sổ trình duyệt nhỏ hơn chiều rộng của phần tử (500px). Sau đó, trình duyệt sẽ thêm một thanh cuộn ngang vào trang.

Trong trường hợp này, việc sử dụng max-width thay thế sẽ cải thiện khả năng xử lý các cửa sổ nhỏ của trình duyệt , làm cho phần tử tương thích trên các thiết bị


Lưu ý: Nếu vì lý do nào đó bạn sử dụng cả thuộc tính width và thuộc tính max-width trên cùng một phần tử, và giá trị của thuộc tính width lớn hơn thuộc tính max-width thuộc tính max-width sẽ được sử dụng (và thuộc tính width sẽ bị bỏ qua)
