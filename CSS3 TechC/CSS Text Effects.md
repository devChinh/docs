Tìm hiểu các thuộc tính tạo hiệu ứng cho chữ sau : 

        + text-overflow
        + word-wrap
        + word-break
        + writing-mode

1 . text-overflow

Thuộc tính CSS text-overflow chỉ định cách báo hiệu nội dung bị tràn không được hiển thị cho người dùng

    + text-overflow: clip  
    đoạn văn bản overflow sẽ bị ẩn đi,
    + text-overflow: ellipsis 
    phần bị ẩn đi sẽ được thay thế bằng dấu '...'

VD : 

<p class="test1">This is some long text that will not fit in the box</p>

p.test1 {
  white-space: nowrap
  width: 200px
  border: 1px solid #000000
  overflow: hidden
  text-overflow: ellipsis
}

2 . word-wrap

Thuộc tính CSS word-wrap cho phép các từ dài có thể được ngắt và quấn vào dòng tiếp theo

 + word-wrap: break-word Những từ quá dài sẽ xuống hàng

 VD :

<p class="test">This paragraph contains a very long word: thisisaveryveryveryveryveryverylongword. The long word will break and wrap to the next line.</p>

p.test {
  width: 11em; 
  border: 1px solid #000000;
  word-wrap: break-word;
}

3 . work-break

- word-break: break-all có nghĩ là  khi hết đoạn thì một từ sẽ tự động ngắt ở bất kỳ chữ nào để xuống hàng  
- word-break: keep-all có nghĩ là  khi hết đoạn thì một từ sẽ tự động ngắt nhưng mà không được tách các chữ một từ riêng biệt


p.test1 {
  width: 140px; 
  border: 1px solid #000000;
  word-break: keep-all;
}

p.test2 {
  width: 140px; 
  border: 1px solid #000000;
  word-break: break-all;
}

<p class="test1">This paragraph contains some text. This line will-break-at-hyphens.</p>

<p class="test2">This paragraph contains some text. The lines will break at any character.</p>

4 . writing-mode

- writing-mode: vertical-rl giúp viết chứ nằm dọc


p.test1 {
  writing-mode: vertical-rl; 
}

<p class="test1">Some text with default writing-mode.</p>





