Quy tắc  !important trong CSS được sử dụng để thêm mức độ quan trọng cho thuộc tính / giá trị hơn bình thường.

Trên thực tế, nếu bạn sử dụng quy tac !important, nó sẽ ghi đè TẤT CẢ các quy tắc tạo kiểu trước đó cho thuộc tính cụ thể trên phần tử đó!

VD : 

#myid {
  background-color: blue;
}

.myclass {
  background-color: gray;
}

p {
  background-color: red !important;
}

Trong ví dụ trên. cả ba đoạn văn sẽ có màu nền đỏ, mặc dù bộ chọn ID và bộ chọn lớp có độ đặc hiệu cao hơn nhưng quy tắc !important sẽ  ghi đè thuộc tính background-color trong cả hai trường hợp

- Cách duy nhất để ghi đè một quy tắc !important  là đưa một quy tắc !important  khác vào một khai báo có cùng selector cụ thể

VD : 


<p>This is some text in a paragraph.</p>

<p class="myclass">This is some text in a paragraph.</p>

<p id="myid">This is some text in a paragraph.</p>

#myid {
  background-color: blue !important;
}

.myclass {
  background-color: gray !important;
}

p {
  background-color: red !important;
}

Note: Sẽ rất tốt nếu  biết về !important quy tắc này , không nên sử dụng nó trừ khi  hoàn toàn phải làm như vậy

- Có thể một hoặc hai cách sử dụng hợp lý  !important

+Một cách để sử dụng !importantlà nếu bạn phải ghi đè một kiểu mà không thể ghi đè theo bất kỳ cách nào khác

+Một cách khác để sử dụng !important là: Giả sử bạn muốn có giao diện đặc biệt cho tất cả các nút (button) trên một trang để sau này bất kỳ chỗ nào trên trang web của mình có thẻ button đều sẽ được áp dụng các thuộc tính CSS đó






