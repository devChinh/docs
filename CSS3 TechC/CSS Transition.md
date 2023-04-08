- CSS Transition nó xác định một quá trình chuyển đổi khi có một hành động ví dụ  như là hover thay đổi width , height hay là dùng transform để là thay đổi kích thước hoặc vị trí thì Transition  sẽ làm các hành động đó  trở nên mượt mà và trơn tru, trong một khoảng thời gian nhất định 

            + transition
            + transition-delay
            + transition-duration
            + transition-property
            + transition-timing-function

VD chung : 

        div {
        width: 100px;
        height: 100px;
        background: red;
        transition-property: width;
        transition-duration: 2s;
        transition-timing-function: linear;
        transition-delay: 1s;
        }

        div:hover {
        width: 300px;
        }


1 . transition-property

+ transition-property:  width , weight

Xác định hiệu ứng của quá trình chuyển đổi cho các thuộc tính css, mỗi thuộc tính 
cách nhau bằng dấu phẩy

+ transition-property: all	
 Xác định hiệu ứng của quá trình chuyển đổi cho tất cả thuộc tínhhe

2 . transition-duration

- Quá trình chuyển đổi mất bao nhiêu thời gian

VD : 	transition-duration: 10s 	

3 . transition-timing-function

+ transition-timing-function: ease

	Xác định một hiệu ứng của quá trình chuyển đổi với một sự khởi đầu chậm, sau đó nhanh chóng, sau đó kết thúc chậm

+ transition-timing-function: ease-in

	Xác định một hiệu ứng của quá trình chuyển đổi với một khởi đầu chậm chạp

+ transition-timing-function: ease-out

   Xác định một hiệu ứng của quá trình chuyển đổi với một kết thúc chậm

+ transition-timing-function: ease-in-out

	Xác định một hiệu ứng của quá trình chuyển đổi với một khởi đầu và kết thúc chậm

+ transition-timing-function: linear

   Xác định một hiệu ứng của quá trình chuyển đổi với cùng một tốc độ từ đầu đến cuối

4 . transition-delay	

Xác định thời gian chờ đợi trước khi các hiệu ứng của quá trình chuyển đổi sẽ bắt đầu

VD : transition-delay: 3s 

5 . transition [property] [duration] [timing-function] [delay]	

+ Đây là thuộc tính tập hợp các thuộc tính trên

 VD : transition: height 2s ease 3s 

