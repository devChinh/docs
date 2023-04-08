1 Pseudo-classes( lớp giả ) là gì

Pseudo-classes dùng để xác định trạng thái đặc biệt của một phần tử.

Ví dụ, Pseudo-classe có thể được sử dụng để:

Thiết lập thuộc tính style cho phần tử khi người dùng di chuyển (hover) qua nó

Cú pháp : 
selector:pseudo-class {
  property: value;
}

2. Một số pseudo-class ( lớp giả ) thông dụng

Trong CSS có hỗ trợ một số pseudo-class sau:

+ :active -khi phần tử được chọn (tức là click chuột vào phần tử)
+ :visited - khi liên kết đã được truy cập. (:link, :visited dành cho liên kết, không áp dụng cho các phần tử khác như div, span ...)
+ :link  -khi liên kết chưa được truy cập lần nào (mặc định)(:link, :visited dành cho liên kết, không áp dụng cho các phần tử khác như div, span ...)
+ :hover -  khi di chuyển chuột lên phần tử

Note : :hover áp dụng sau :link and :visited, :active áp dụng sau :hover

+ :checked : khi check vào ô input có type là checked

+ :focus :  khi ấn chuột vào ô input có type là text để nhập thông tin vào

+ :first-child : khớp với một phần tử được chỉ định là phần tử con đầu tiên của phần tử khác

+ :last-child : chọn khớp với mọi phần tử là phần tử con cuối cùng của phần tử cha của nó

+ :nth-child(n)  : Bộ chọn khớp với mọi phần tử là phần tử con thứ n của phần tử cha của nó.:nth-child(n)

+ :disabled : chọn những thẻ có thuộc tính disabled và css cho nó
VD : 
input:disabled {
  background:red;
}
<input type="text" value="Disneyland" disabled>

+ :empty chọn khớp với mọi phần tử không có phần tử con ( nghĩa là không có nội dung hoặc không có phần tử con)
