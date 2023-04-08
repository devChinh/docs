I . Các phương thức làm việc với Array trong javascript

1.  toString()

 -  biến 1 mảng thành 1 chuỗi và trả về dữ liệu dưới dạng  chuỗi (string)

VD  : let string = Array.toString()

+ Hàm sẽ trả về một chuỗi, và mảng cũ không ảnh hưởng gì cả

2 .  join()

    - truyền 1 tham số là kí tự muốn chèn ở các phần tử của mảng , tạo các kí tự   giữa các phần tử mảng và trả về dữ liệu dưới dạng chuỗi (string)

Cú pháp : array.join(separator)

Trong đó:
    + separator là kí tự sẽ ngăn cách các phần tử với nhau, mặc định mang giá trị là dấu ","
    + Hàm sẽ trả về một chuỗi, và mảng cũ không ảnh hưởng gì cả.


3.   Pop()

    + Hàm array.pop() có chức năng xóa bỏ phần tử cuối cùng của mảng, hàm sẽ trả về phần tử bị xóa
    + Hàm array.pop() sẽ thay đổi chiều dài của mảng
    + Hàm array.pop() không có tham số truyền vào

4 .   Push()

    + Hàm push() sẽ thêm mới một hoặc nhiều phần tử vào cuối mảng, hàm trả về chiều dài của mảng mới.
    + Hàm push() sẽ làm thay đổi chiều dài của mảng
    + tham số truyền vào là giá trị của phần tử được thêm

5 .  Shift()

    + Hàm array.shift() có chức năng xóa bỏ phần tử đầu tiên của mảng, hàm sẽ trả về phần tử bị xóa
    + Hàm array.shift() sẽ thay đổi chiều dài của mảng
    + Hàm array.pop() không có tham số truyền vào

6  . Unshift()

    + Hàm unshift() sẽ thêm mới một hoặc nhiều phần tử vào cuối đầu mảng, hàm trả về chiều dài của mảng mới.
    + Hàm push() sẽ làm thay đổi chiều dài của mảng
    + tham số truyền vào là giá trị của phần tử được thêm

7 . concat :

Công dụng của hàm này khá đơn giản, đó là gộp nhiều mảng lại với nhau

+Cú pháp : array1.concat(array2, array3, ..., arrayX)

8 . splice 

+ Splice  là hàm dùng để xóa các phần tử trong mảng, hoặc thay thế một phần tử trong mảng thành một hoặc nhiều phần tử khác. 

Hay nói cách khác : 
    + Bạn có thể dùng hàm array splice để xóa phần tử.
    + Hoặc dùng để bổ sung phần tử vào một vị trí nào đó trong mảng

Cú pháp như sau:

    + splice(start)
    + splice(start, deleteCount)
    + splice(start, deleteCount, item1)
    + splice(start, deleteCount, item1, item2, itemN)

Trong đó:

    + start - là vị trí chỉ mục bắt đầu thay thế.
    + deleteCount - là số phần tử sẽ bị lại bỏ, tính tử vị trí chỉ mục start, và bao gồm cả phần tử start. Nếu start mang giá trị 0 thì sẽ không có phần tử nào bị loại bỏ
    + item1,., itemN - các phần tử sẽ được thêm vào từ vị trí start. Sau khi thêm, phần tử thứ start của mảng sẽ là item1


+ Giá trị trả về: Là một mảng chứa tất cả những phần tử đã bị xóa. Nếu chỉ xóa một phần tử thì sẽ return về mảng có 1 phần tử. Nếu không có phần tử nào bị xóa thì sẽ return về mảng rỗng


9 . isArray()

Cú pháp của isArray như sau: Array.isArray(obj)

Trong đó: obj là đối tượng cần kiểm tra

Hàm trả về là true nếu obj là một mảng, false nếu obj không phải là mảng

 




