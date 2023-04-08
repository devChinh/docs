 JS Math cho phép  thực hiện các nhiệm vụ toán học trên các con số

I . Thuộc tính toán học

Cú pháp:  Math.property

Math.PI       // trả về số  PI
Math.SQRT2    // trả về căn bậc hai của 2

II . Phương pháp toán học

Cú pháp :  Math.method(number)

1 . Math.round (x)

- 	Trả về x được làm tròn thành số nguyên gần nhất của nó

VD : 

    Math.round(4.6)  // 5
    Math.round(4.5)  // 5
    Math.round(4.4)  // 4

2 . Math.ceil ()

- trả về giá trị của x được làm tròn lên thành số nguyên gần nhất của nó

VD : 

    Math.round(4.6)  // 5
    Math.round(4.2)  // 5
    Math.round(4.1)  // 5

3 . Math.floor ()

 - trả về giá trị của x được làm tròn xuống số nguyên gần nhất của nó:

VD : 
    Math.floor(4.9) // 4
    Math.floor(4.7) // 4
    Math.floor(4.4) // 4
    Math.floor(4.2) // 4

4 . Math.sign ()

- trả về -1 nếu x là âm  0 nếu x là 0  hoặc 1 nếu x là dương

VD : 
    Math.sign(-4) // -1
    Math.sign(0) // 0
    Math.sign(4) // 1

5 . Math.pow ()

-trả về giá trị của x thành lũy thừa của y

VD :  Math.pow(8, 2) // 64

6 . Math.sqrt ()

-trả về căn bậc hai của x

VD : Math.sqrt(64) // 8

7 . Math.abs ()

- trả về giá trị tuyệt đối (dương) của x

VD : 

    Math.abs(-4.7)  // 4.7
    Math.abs(-4.2)  // 4.2

8 . Math.min () và Math.max ()

Math.min()và Math.max() có thể được sử dụng để tìm giá trị thấp nhất hoặc cao nhất trong danh sách các đối số

VD : 
Math.min(0, 150, 30, 20, -8, -200)  // -200

Math.max(0, 150, 30, 20, -8, -200) // 150