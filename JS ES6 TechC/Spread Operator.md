1 . Giới thiệu về Spread Operator (toán tử trải rộng)

- ES6 cung cấp một toán tử mới được gọi là toán tử trải rộng bao gồm ba dấu chấm (...)

- Spread Operator cho phép chúng ta sao chép nhanh chóng tất cả hoặc một phần của một mảng hoặc đối tượng hiện có sang một mảng hoặc đối tượng khác


VD : 

const odd = [1,3,5];
const combined = [2,4,6, ...odd]
console.log(combined)

- Output : [ 2, 4, 6, 1, 3, 5 ]

- Giải thích : Trong ví dụ này, dấu ba chấm ( ...) nằm ở phía trước mảng odd là toán tử trải rộng. Toán tử trải rộng ( ...) giải nén các phần tử của mảng odd

* Note : Lưu ý rằng ES6 cũng có dấu ba chấm ( ...) là tham số còn lại (Rest Paramerters ) thu thập tất cả các đối số còn lại của hàm vào một mảng

- Sự khác biệt là:

+ Toán tử trải rộng (spread operator) ( ...) giải nén các phần tử của một đối tượng có thể lặp lại

+ Tham số còn lại (rest parameters) ( ...) đóng gói các phần tử vào một mảng và dùng cho trường hợp là nhận giá trị từ đối số làm tham số

+ Và tham số còn lại (Rest Paramerters) phải là đối số cuối cùng của hàm . Tuy nhiên, toán tử trải rộng (Spread Operator) có thể ở bất cứ đâu

VD : 

    const odd = [1,3,5]
    const combined = [...odd, 2,4,6]
    console.log(combined)

    const odd = [1,3,5]
    const combined = [2,...odd, 4,6]
    console.log(combined)

2 .Các ví dụ về toán tử trải rộng JavaScript

VD1 : Xây dựng mảng chữ

    let initialChars = ['A', 'B']
    let chars = [...initialChars, 'C', 'D']
    console.log(chars); // ["A", "B", "C", "D"]

VD2 : Nối các mảng

    let numbers = [1, 2]
    let moreNumbers = [3, 4]
    let allNumbers = [...numbers, ...moreNumbers]
    console.log(allNumbers); // [1, 2, 3, 4]

VD3 : Sao chép một mảng

    let scores = [80, 70, 90]
    let copiedScores = [...scores]
    console.log(copiedScores); // [80, 70, 90]

VD4 : Nối các object

    let obj1 = {a: 1, b: 2, c: 3}
    let obj2 = {d: 4, e: 5, f: 6}

    let merge = {...obj1, ...obj2}
    // merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

VD5 : Sao chép một object

    let obj = {a: 1, b: 2, c: 3}
    let copy = {...obj}
    // copy is {a: 1, b: 2, c: 3}

VD6 : Trong trường hợp Spread Operator với chuỗi thì Spread Operator cho phép chuyển đổi một chuỗi thành nhiều argument

    let chars = ['A', ...'BC', 'D']
    console.log(chars); // ["A", "B", "C", "D"]

VD7 : Trường hợp muốn truyền một mảng vào làm đối số 

    function compare(a, b) {
        return a - b;
    }

    compare([2,4])

- Với trường hợp này thì kết quả tham số nhận được là a là [2,4] còn b là undefined , đó là kết quả mà mình không mong muốn

- Cách giải quyết là dùng Spread Operator như sau :  compare(...[2,4]) thì khi đó tham số nhận được là a = 2 , b = 4

*Note : Mặc dù thực tế rằng spread operator trải đều hoạt động trên cả array và object, bạn không thể trộn và khớp các loại dữ liệu này với nhau. Như ví dụ dưới đây

    let obj = {a:1, b:2, c:3}
    let copy = [...obj] // this won't work!