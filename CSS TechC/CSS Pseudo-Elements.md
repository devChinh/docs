1. Pseudo-Element( phần tử giả ) là gì

Phần tử giả CSS được sử dụng để tạo kiểu cho các phần cụ thể của phần tử.

Ví dụ, nó có thể được sử dụng để:

        + Định kiểu chữ cái đầu tiên hoặc dòng, của một phần tử
        + Chèn nội dung trước hoặc sau nội dung của một phần tử

Cú pháp của phần tử giả:

    selector::pseudo-element {
    property: value;
    }

2 Phần tử giả  ::first-line

 được sử dụng để thêm một kiểu đặc biệt vào dòng đầu tiên của văn bản

 Lưu ý: Phầntử giả ::first-line  chỉ có thể được áp dụng cho các phần tử cấp khối (block)

 Các thuộc tính sau áp dụng cho phần tử giả  ::first-line 

            + font 
            + color 
            + background 
            + word-spacing
            + letter-spacing
            + text-decoration
            + vertical-align
            + text-transform
            + line-height
            + clear

3 . Phần tử giả :: first-letter

Phần tử giả ::first-letter được sử dụng để thêm một kiểu đặc biệt vào chữ cái đầu tiên của văn bản

Các thuộc tính sau áp dụng cho phần tử giả  :: first-letter

            + font 
            + color  
            + background 
            + margin 
            + padding 
            + border 
            + text-decoration
            + vertical-align 
            + text-transform
            + line-height
            + float
            + clear

4 . Phần tử giả :: selection

Phần tử giả ::selection khớp với phần của phần tử được người dùng chọn ( bôi đen )

        + color 
        + background
        + cursor
        + outline

5  Phần tử giả :: marker

Phần tử giả ::marker chọn các điểm đánh dấu của các mục danh sách (list)

6 Phần tử giả :: before

Phần tử ::before có thể được sử dụng để chèn một số nội dung vào trước nội dung của một phần tử.

VD :  
h1::before {
  content: url(smiley.gif);
}

6 Phần tử giả :: after

Phần tử ::after  có thể được sử dụng để chèn một số nội dung vào sau nội dung của một phần tử

VD :
h1::after {
  content: url(smiley.gif);
}



