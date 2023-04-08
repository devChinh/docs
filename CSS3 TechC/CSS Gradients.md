1 . CSS Gradient Là Gì?

CSS gradient cho phép bạn hiển thị các chuyển tiếp mượt mà giữa hai hoặc nhiều màu được chỉ định

II . Cách dùng

- CSS gradient có 2 kiểu hiển thị :

+ Linear Gradients : Hiểu đơn giản là trải dài gradient
+ Radial Gradients: Gradient tập trung về 1 điểm trung tâm

1. Linear Gradient

Cú pháp của linear gradient :

 background: linear-gradient(hướng, màu thứ nhất, màu thứ hai, ...)

- linear-gradient có 4 hướng như sau:

        + Từ trên xuống dưới (linear-gradient(to bottom, color1, color2,..))
        + Từ dưới lên trên (linear-gradient(to top, color1, color2,..))
        + Từ trái qua phải (linear-gradient(to right, color1, color2,..))
        + Từ phải qua trái (linear-gradient(to left, color1, color2,..))

Nếu k xét hướng thì mặc định là :  từ trên xuống dưới

- Hướng đường chéo : 
  background-image: linear-gradient(to bottom right, red, yellow)

Trang tự custom màu radients : https://cssgradient.io

1.1 Ngoài ra có thể sử dụng đơn vị Angels để xác định hướng của màu

+ Top to Bottom: background-image: linear-gradient(180deg, red, yellow)

+ Left to Right: background-image: linear-gradient(90deg, red, yellow)

+ Bottom to Top: background-image: linear-gradient(0deg, red, yellow)

+ Right to Left: background-image: linear-gradient(-90deg, red, yellow)

1.2 Mutiple color stops

- Mutiple color stops nôm na là điểm dừng của một màu trong một đống màu mà chúng ta đã cho và từ đó nó sẽ bắt đầu chuyển hóa thành màu khác bằng việc đặt %

 + background: linear-gradient(color %stop, color %stop, color %stop,...)

 VD :   background:linear-gradient(to right,red 60%, yellow 70%, blue 90%);

* Note : trường hợp các màu không set % hiển thị, tức là chúng sẽ được chia đều % cho nhau


2 . Radial Gradient

- Cú pháp của radial gradient : background: radial-gradient( màu bắt đầu, ..., màu kết thúc)

III . Ứng dụng màu gradient

1 . Tạo Border cho phần tử

.border-gradient {
   border: 10px solid;
   border-image-source: linear-gradient(45deg, #1b2a49, #bada55);
   border-image-slice: 1;
 }

2 . Tạo Text Gradient

HTML:

<div class="text-gradient">TechC Academy</div>

CSS:

.text-gradient {
  text-align: center;
  font-size: 100px;
  background: linear-gradient(to right, #bada55 0%, #1b2a49 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color:transparent;
}


3 .  Tạo Gradient Button

HTML:

<button class="btn">Niềm Vui Lập Trình</button>

CSS:

    .btn {background-image: linear-gradient(to right, #B3FFAB 0%, #12FFF7 51%, #B3FFAB 100%)}
    .btn {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    border: none;
    cursor: pointer;
    }
    .btn:hover {
    background-position: right center;
    color: #fff;
    text-decoratio
    }
