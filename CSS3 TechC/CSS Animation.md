CSS animation là công nghệ được giới thiệu trong phiên bản CSS3. Nó cho phép chúng ta tạo hiệu ứng chuyển động mà không phải sử dụng Javascript 

            + @keyframes
            + animation-name
            + animation-duration
            + animation-delay
            + animation-iteration-count
            + animation-direction
            + animation-timing-function
            + animation-fill-mode
            + animation

I Ví dụ và giải thích animation 

1 VD : 
         div {
                width: 100px;
                height: 100px;
                background-color: blueviolet;
                border-radius: 50%;
                animation: toReg 3s 0.5s ease-in-out infinite;
            }
 
            @keyframes toReg {
                to {
                border-radius: 0%;
                background-color: aquamarine;
            }
        }
    
2 . Giải thích Animation

- Trước tiên cần khai báo một trạng thái cần di chuyển bằng từ khóa @keyframes như sau

        @keyframes toReg {
          from {
            background-color: red;
            border-radius: 5px;
        }
          to {
            background-color: yellow;
            border-radius: 0px;
        }
    }

+ Từ khoá from có nghĩ là trạng thái bắt đầu muốn được đặt của đối tượng
+ Từ khóa to có nghĩa là trạng thái cuối cùng muốn đặt được của đối tượng

+ Ngoài ra, ta còn có thể dùng tỷ lệ phần trăm theo vì từ khóa to và from

@keyframes toReg {
           0% {
            background-color: red;
            border-radius: 5px;
        }
          100% {
            background-color: yellow;
            border-radius: 0px;
        }
 }

- Để sử dụng trạng thái này vào thẻ div thì mình sử dụng thuộc tính animation như sau:

        div {
        animation: toReg 3s 0.5s ease-in-out infinite;
        }

Ở ví dụ trên , chuyển trạng thái từ đối tượng hình tròn màu tím sang hình vuông màu xanh ngọc trong khoảng thời gian 3 giây và chờ 0.5 giây trước khi bắt đầu. Để thiết lập hiệu ứng lập lặp vô tận thì thêm giá trị infinite, còn toReg là tên của hiệu ứng


II . Các thuộc tính của Animation

 1 . animation-name

Chỉ định tên của hiệu ứng, phần mà được định nghĩa trong quy tắc keyframe.

2. animation-duration 

Chỉ định thời gian từ lúc hiệu ứng bắt đầu cho đên khi kết thúc

VD :   animation-duration: 4s

3 .  animation-delay

Chỉ định thời gian chờ trước khi hiệu ứng bắt đầu thực thi

VD : animation-delay: 2s

4  . animation-iteration-count

Chỉ định số lần hiệu ứng lập lại

    div {
    animation-iteration-count: 2;
    }

    Trong tình huống này, hiệu ứng sẽ được thực thi hai lần.

Lưu ý nếu muốn hiệu ứng thực thi vô tận thì thiết lập giá trị này bằng infinite

5 .  animation-direction

Định dạng hướng di chuyển của đối tượng.

Có bốn giá trị:

    + normal: di chuyên về phía trước.
    + reverse: di chuyển theo hướng về phía sau.
    + alternate: di chuyển về phía trước rồi di chuyển về phía sau.
    + alternate-reverse: di chuyển về phía sau rồi di chuyển về phía trước


6 .  animation-timing-function

Định dạng cách thay đổi trạng thái của đối tượng.


        + linear: giữ tốc độ như nhau từ lúc bắt đầu cho đến khi kết thúc.
        + ease: bắt đầu chậm sau đó nhanh và kết thúc chậm dần.
        + ease-in: bắt đầu chậm.
        + ease-out: kết thúc chậm.
        + ease-in-out: bắt đầu chậm và kết thúc chậm


7 . animation-fill-mode

Định dạng trạng thái của đối tượng

    + forwards: trạng thái của đối tượng sẽ đẽ thể hiện như cấu hình cuối cùng trong quy tắc keyframe
    + backwards: trạng thái của đối tượng sẽ đẽ thể hiện như cấu hình đầu tiên trong quy tắc keyframe (lưu ý chỉ trong thời gian diễn ra hiệu ứng)
    + both: sự hòa trộn giữa forwards và backwards

8 . Animation shorthand

 + animation: [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] 