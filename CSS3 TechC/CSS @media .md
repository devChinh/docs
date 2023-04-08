@media CSS là một tính năng mới của CSS3, tính năng này cho phép ta tùy chỉnh CSS cho nhiều thiết bị khác nhau từ máy tính cho đến điện thoại smart phone và các thiết bị in ấn. Thuộc tính này có cú pháp như sau

@media not|only mediatype and (media feature) {
    CSS-Code
}

Trong đó mediatype gồm các thuộc tính hay sử dụng sau:

    + all: Dùng cho mọi thiết bị
    + print: Dùng cho máy in
    + screen: Dùng cho máy tính và các thiết bị smart phone

Thực tế vẫn còn nhiều nữa nhưng với lập trình web thì chúng ta thường sử dụng ba thuộc tính đó thôi. Và trước khi đi vào tìm hiểu các thuộc tính thì ban phải phân biệt hai khái niệm sau:

    + Device: Là thiết bị sử dụng website như Laptop, Desktop, Iphone, ..
    + Viewport: Là kích thước hiển thị của giao diện

Và media featured thì gồm các thuộc tính sau:

    + max-width: Chiều rộng tối đa của viewport
    + min-width: Chiều rộng tối thiểu của viewport
    + max-height: Chiều cao tối đa của viewport
    + min-height: Chiều cao tối thiểu của viewport
    + min-device-width: Chiều rộng tối thiểu của device
    + max-device-width: Chiều rộng tối đa của device
    + min-device-height: Chiều cao tối thiểu của device
    + max-device-height: Chiều cao tối đa của device
