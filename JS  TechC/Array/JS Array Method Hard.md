I . Các phương thức làm việc với Array trong javascript

1 . map()

    + cho chép  lặp qua các phần tử trong mảng
    + tham số truyền vào là một function
    +  cho phép xử lý giá trị của mảng đó và trả về một mảng mới bằng với độ dài bằng mảng ban đầu

Cú pháp : 

        array_name.map(function(item){
            // item chính là phần tử đang lặp
            return item; // giá trị trả về sẽ thay thế cho giá trị ban đầu của phần tử
        })

VD : 
        var domain = [
            "techC.net", 
            "techcAcademy.net", 
            "hocitcungdevC.org"
        ];
        
        domain.map(function(item){
            console.log(item);
        });

Kết quả:

        techC.net
        techcAcademy.net
        hocitcungdevC.org

 2. filter()
 
    + lặp qua tất cả các phần tử trong mảng và  kiểm tra theo một điều kiện nào đó
    + tham số truyền vào là một function
     + trả về một mảng mới theo đúng điều kiện đó

Cú pháp : 

    array_name.filter(function(value){
        return codition
    })

+ Condition là điều kiện và return condition là trả về mảng mới theo điều kiện đó 
+ Còn value chính là giá trị của mỗi phần tử trong mỗi lần lặp

VD1 : 

    var numbers = [100, 200, 300, 400, 500];

    var selected_number = numbers.filter(function(value){
        return true;
    });

    console.log(selected_number);// 100, 200, 300, 400, 500

VD 2 : 

    var numbers = [5, 10, 20, 22, 60, 75, 90];

    var new_numbers = numbers.filter(function(item){
        return item > 20
        return item < 20
        return item \ 2 === 0
        return item + 2 === 22
        return item % 2 === 0
    });

    console.log(new_numbers);
    // Kết quả: [22, 60, 90]


 3  find()
 
   + sẽ lặp qua và sử dụng các phần tử của mảng để thực hiện kiểm tra cho đến khi có giá trị thoả mãn và kiểm trả về true
   + Khi đó hàm find sẽ trả trả về giá trị giá trị của phần tử thoả mãn đầu tiên và bỏ qua không kiểm tra các phần tử còn lại
   +Hàm find sẽ không thay đổi mảng ban đầu

Cú pháp :

    array_name.find(function(currentValue, index, arr){
        return condition
    })

Trong đó:

    + currentValue - giá trị của phần tử hiện tại
    + index - chỉ số của phần tử hiện tại
    + arr - mảng mà phần tử hiện tại thuộc về

VD  : 
    const ages = [3, 10, 28, 20 , 30]

    function checkAge(age) {
    return age > 20;
    }

    let age = ages.find(checkAge)
    console.log(age) // 28



 4 . every()
 
   + lặp qua tất cả các phần tử trong mảng và kiểm tra tất cả các phần tử đấy có thoả mãn một điều kiện nào đó hay không
    +  nếu tất cả các phần tử thoả mãn điều kiện thì mới trả về true , còn chỉ cần 1 phần tử không thoả mãn điều kiện thì sẽ trả về false

Cú pháp :

    array_name.every(function(currentValue, index, arr){
        return condition
    })


VD : 

    const ages = [32, 33, 16, 40];

    const checkAge = ages.every(function checkAge(age) {
    return age > 20;
    })

    console.log(checkAge) // Returns false




 5 . some()
 
   + lặp qua tất cả các phần tử trong mảng và kiểm tra tất cả các phần tử đấy có thoả mãn một điều kiện nào đó hay không
    + chỉ cần 1 phần tử thoả mãn điều kiện thì trả về true

Cú pháp :

    array_name.some(function(currentValue, index, arr){
        return condition
    })

VD : 

    const ages = [32, 33, 16, 40];

    const checkAge = ages.every(function checkAge(age) {
    return age > 20;
    })

    console.log(checkAge) // Returns true


 6. fill()
    +  giúp thay đổi giá trị của các phần tử trong mảng 
    + Hàm này sẽ trả về một mảng mới, có tổng số phần tử bằng với mảng cũ, và giá trị của các phần tử chính bằng giá trị mà bạn truyền vào

Cú pháp :  array.fill(value, start, end)

Trong đó:
        value - giá trị tĩnh sẽ được thay thế cho các phần tử trong mảng
        start - vị trị bắt đầu thay thế trong mảng
        end - vị trí kết thúc thay thế

VD :

        var numbers = [
            1, 2, 3, 4
        ];

        console.log(numbers.fill(22)); 
        // Kết quả: [22, 22, 22, 22]


7 . indexOf() 

    + dùng để tìm kiếm một phần tử trong mảng dựa vào giá trị truyền vào tham số của hàm
    + Việc tìm kiếm sẽ bắt đầu từ vị trí xác định, nếu không truyền vào thì mặc định sẽ tìm từ đầu
    + Nếu có nhiều hơn một phần tử được tìm thấy, phần tử tìm thấy đầu tiên sẽ được trả về
    + Nếu không tìm thấy mặc định trả về -1

Cú pháp  : 	 array_name.indexOf(item, start)

Trong đó:

       + item là giá trị của phần tử cần tìm.
       + start là vị trí bắt đầu tìm kiếm.

VD : 

	
    var scores = [10, 20, 30, 10, 40, 20];

    console.log(scores.indexOf(10)) // 0
    console.log(scores.indexOf(30)) // 2
    console.log(scores.indexOf(50)) // -1
    console.log(scores.indexOf(20)) // 1


8 . findIndex() 

    + sẽ lặp qua lần lượt các phần tử của mảng và sử dụng các phần tử đó để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn
    + Khi đó, hàm findIndex sẽ trả về index của phần tử thỏa mãn đầu tiên  và bỏ qua không kiểm tra các phần tử còn lại

Cú pháp : 
        array_name.findIndex(function(currentValue, index, arr){
            return condition
        })

Trong đó:

        + currentValue - giá trị của phần tử hiện tại.
        + index - chỉ số của phần tử hiện tại.
        + arr - mảng mà phần tử hiện tại thuộc về

VD  :

const ages = [3, 10, 18, 20 , 18 ];

function checkAge(age) {
  return age > 18;
}

const check = ages.findIndex(checkAge)

console.log(check) // 2

 9 . forEach() 

   +dùng để lặp qua các phần tử trong mảng một các dễ dàng và xử lý các phần tử đó

Cú pháp :

 array.forEach(function(currentValue, index, arr){
     // do something
 }

Trong đó:

        + currentValue - giá trị của phần tử hiện tại.
        + index - chỉ số của phần tử hiện tại.
        + arr - mảng mà phần tử hiện tại thuộc về.

VD : 

let ranks = ['A', 'B', 'C'];
 
ranks.forEach(function (e) {
    console.log(e); // A B C
});

 10 . includes()
 
   + lặp qua và kiểm tra xem phần tử đấy có tồn tại hay không , trả về true hoặc false

  Cú pháp :    includes(searchElement, fromIndex)

Trong đó 
        + searchElement : là phần tử muốn kiểm tra
        + fromIndex :  là thứ tử bắt đầu kiểm tra

VD : 

    const arr = ['a', 'b', 'c'];

    arr.includes('c')    // true
    arr.includes('c', 100)  // false

11 . reduce() 
  
   duyệt qua các phần tử của mảng , sau đó trả về một giá trị cuối cùng

Cú pháp  : 

    array_name.reduce(function(previousValue, currentValue, currentIndex , array){

    }, initialValue)

Trong đó : 

        +previousValue : là giá trị kết quả từ cuộc gọi trước đó tới callbackFn. Trong lần gọi đầu tiên, previousValue là  initialValue nếu được chỉ định, nếu không thì là giá trị của array[0]

        +currentValue : là giá trị của phần tử hiện tại. Trong lần gọi đầu tiên, giá trị của currentValue là  array[0] nếu initialValue được chỉ định , nếu không thì là currentValue là array[1]

        +currentIndex là index của currentValue trong mảng. Trong cuộc gọi đầu tiên, nếu initialValue được chỉ định thì index = 0 , nếu initialVale không được xác định thì index = 1

        +array : là mảng được duyệt qua

        +initialValue(Không bắt buộc) : một giá trị previousValue được khởi tạo lần đầu tiên chính là giá trị của initialValue nếu nó được chỉ định . Nếu initialValue được chỉ định, điều đó cũng là nguyên nhân currentValue được khởi tạo thành giá trị đầu tiên trong mảng. Nếu  initialValue không được chỉ định, thì previousValue sẽ được khởi tạo thành giá trị đầu tiên của mảng

VD :

const numbers = [15, 16, 17, 18, 19]

numbers.reduce(funtion(previousValue, currentValue){
    return previousValue + currentValue
} ,10)

	                        previousValue       currentValue          index    Giá trị trả lại
Cuộc gọi đầu tiên	             10	                 15	                0	        25
Cuộc gọi thứ hai             	 25	                 16	                1	        41
Cuộc gọi thứ ba	                 41	                 17	                2	        58
Cuộc gọi thứ tư          	     58                  18	                3	        76
Cuộc gọi thứ năm     	         76                  19	                4         	95

12 . Sort()

   + làm hàm để sắp xếp 1 mảng theo thứ tự tăng dần hoặc giảm dần

Cú pháp : 

    + Functionless
    array_name.sort()

Note : Mặc định các phần tử sẽ được sắp xếp theo bảng chữ cái với thứ tự tăng dần, điều này khiến phương thức sort sẽ sắp xếp các chuỗi rất chính xác. Tuy nhiên, khi sắp xếp các số sẽ không được chính xác (ví dụ 20 và 100 thì 20 sẽ lớn hơn 100 vì 2 > 1).

    + Inline compare function
    sort(function(firstEl, secondEl) {
        return firstEl - secondEl
    })

Note : Hai tham số firstEl và secondEl đại diện cho hai phần tử kề nhau trong mảng, và ta sẽ sử dụng nó để quyết định cách sắp xếp.

Nếu hàm callback trả về số lớn hơn 0 thì secondEl sẽ đứng trước firstEl.
Nếu hàm callback trả về số bé hơn hoặc bằng 0 thì thứ tự được giữ nguyên, tức là firstEl sẽ đứng trước secondEl

VD : 

const numbers = [2,23,62,6,27]

numbers.sort(function (a,b){
    return a -b
})

compareFn(a, b)trả lại giá trị	 thứ tự sắp xếp
           > 0                                  sắp xếp a sau b
          < 0	                                sắp xếp a trước b
          === 0                          	giữ trật tự ban đầu của a và b


13 .reverse
