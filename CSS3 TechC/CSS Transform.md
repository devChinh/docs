 CSS Transform cho phép  di chuyển, xoay, chia tỷ lệ và làm nghiêng các phần tử

Với thuộc tính CSS transform, bạn có thể sử dụng các phương pháp chuyển đổi 2D sau:

    + translate()
    + rotate()
    + scaleX()
    + scaleY()
    + scale()
    + skewX()
    + skewY()
    + skew()

1. translate()

- Phương thức translate() di chuyển một phần tử khỏi vị trí hiện tại của nó (theo các tham số cho trục X và trục Y)

+ Ví dụ sau di chuyển phần tử <div> 50 pixel sang bên phải và 100 pixel xuống từ vị trí hiện tại của nó:

            div {
            transform: translate(50px, 100px)
            }

2 . rotate()

-Phương rotate()pháp quay một phần tử theo chiều kim đồng hồ hoặc ngược chiều kim đồng hồ theo một mức độ nhất định

+ Ví dụ sau đây xoay phần tử <div> theo chiều kim đồng hồ với 20 độ

                div {
                transform: rotate(20deg)
                }

+ Ví dụ sau đây xoay phần tử <div> ngược chiều kim đồng hồ với 20 độ

                div {
                transform: rotate(-20deg)
                }

3 .  scale()

Phương thức scale() tăng hoặc giảm kích thước của một phần tử (theo các tham số cho chiều rộng và chiều cao)

+ Ví dụ sau tăng phần tử <div> lên hai lần chiều rộng ban đầu và ba lần chiều cao ban đầu: 

            div {
            transform: scale(2, 3);
            }

+ Ví dụ sau giảm phần tử <div> xuống còn một nửa chiều rộng và chiều cao ban đầu của nó:

            div {
            transform: scale(0.5, 0.5);
            }

4 .  scaleX ()

- Phương thức scaleX() tăng hoặc giảm chiều rộng của một phần tử

+ Ví dụ sau tăng phần tử <div> lên hai lần chiều rộng ban đầu của nó

        div {
        transform: scaleX(2);
        }

+ Ví dụ sau giảm phần tử <div> xuống còn một nửa chiều rộng ban đầu của nó: 

        div {
        transform: scaleX(0.5);
        }

5 .   scaleY ()

- Phương thức scaleY() tăng hoặc giảm chiều cao của một phần tử.

+ Ví dụ sau tăng phần tử <div> lên ba lần chiều cao ban đầu của nó: 


            div {
            transform: scaleY(3);
            }

+ Ví dụ sau giảm phần tử <div> xuống còn một nửa chiều cao ban đầu của nó: 

            div {
            transform: scaleY(0.5);
            }


6 . skew()

Phương pháp  skew() xiên một phần tử dọc theo trục X và Y theo các góc đã cho.

+ Ví dụ sau làm nghiêng phần tử <div> 20 độ dọc theo trục X và 10 độ dọc theo trục Y:

        div {
        transform: skew(20deg, 10deg);
        }