I. Array

Cú pháp : const array_name = [item1, item2, ...]

- trong array có thể truyền vào number , object  , string , null , ..
- các giá trị trong mảng gọi phần tử của mảng
- index trong array bắt đầu từ số 0
- cách để lấy một phần tử trong array : arr_name[index]

II . Cách cách khai báo 1 array trong javascript

1.  Khai báo với từ khóa new Array()

Cú pháp: Có thể tạo mảng rỗng hoặc gán giá trị ngay lúc khởi tạo.

var name_array = new Array()
// Hoặc
var name_array = new Array(1,2,3)

2. Khai báo với cặp dấu ngoặc vuông []

var name_array = []
// Hoặc
var name_array = [1,2,3]

3 . Gán giá trị cho phần tử

var name_array = []

name_array[0] = 'abc'
name_array[1] = 'xyz'

4 Ghi đè giá trị phần tử

var name_array = [1,2,3,4]
name_array[0] = 'abc'

5 . Xoá một phần tử trong array bằng method delete

    const fruits = ["Banana", "Orange", "Apple", "Mango"]
    delete fruits[0]

Note : Khi dùng phương thức delete thì bản chất là nó vẫn chiếm một vị trí trong mảng đó và khi đó giá trị của nó là undefined


