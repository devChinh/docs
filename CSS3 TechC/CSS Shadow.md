- Hiệu ứng bóng CSS

Với CSS, bạn có thể thêm bóng vào văn bản và các phần tử.

        + text-shadow
        + box-shadow

1 . text-shadow trong CSS3 : áp dụng bóng cho văn bản

Cú pháp như sau : 

  text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit

Trong đó:

    + h-shadow : vị trí bóng ngang so với chữ, số âm sẽ đẩy lên trên và số dương sẽ đẩy xuống dưới

    + v-shadow : vị trí bóng dọc so với chữ, số âm sẽ đẩy lui phía sau và số dương sẽ đẩy tới phía trước

    + blur-radius : độ nhòe của chữ bóng, tính bằng pixel

    + color : màu sắc của bóng


2. box-shadow trong CSS3

Hiệu ứng tương tự như text-shadow nhưng nó có tác dụng đối với đường viền (lề) chứ không phải tác dụng với đoạn text


Cú pháp của box-shadow như sau:

    box-shadow: h-shadow v-shadow blur spread color |inset|initial|inherit

Trong đó:

        + h-shadow : vị trí bóng ngang so với chữ, số âm sẽ đẩy lên trên và số dương sẽ đẩy xuống dưới

        + v-shadow : vị trí bóng dọc so với chứ, số âm sẽ đẩy lui phía sau và số dương sẽ đẩy tới phía trước

        + blur-radius : độ nhòe của chữ bóng, tính bằng pixel

        + spread: kích thước của bóng tối

        + color : màu sắc của bóng

        + inset: thay đổi bóng từ bên ngoài vào trong thay vì từ trong ra ngoài

        + initial: thiết lập giá trị mặc định

        + inherit: kế thừa giá trị từ thẻ HTML cha


