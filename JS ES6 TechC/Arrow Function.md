1. 
- Là hàm viết ngắn gọn hơn của một function bình thường , thay thế từ khoá function bằng dấu =>

 -Là một trong những tính năng mới rất hay của ES6. Việc sử dụng đúng cách arrow function giúp code trở nên ngắn gọn và dễ hiểu hơn

- Làm code ngắn gọn hơn , giúp tiết kiệm thời gian phát triển và đơn giản hoá phạm vi function ( function scope)

- Giúp tránh được việc phải gõ từ khoá funtion , return và dấu ngoặc nhọn

2 . Cú pháp căn bản :

+ Function bình thường 

function function_name(arg1,arg2){
    // code
}

+ Arrow Function

Var function_name = (arg1 , arg2 ) => {
    // code
}


3 . Cách trường hợp sử dụng

+ Trường hợp nội dung code là một câu đơn thì có thể bỏ dấu {}

VD : const checkNumber = (number) => console.log(number)

+ Trường hợp có một tham số thì có thể bỏ dấu ()

VD : const checkNumber = number => console.log(number)

+ Trường hợp k có tham số 

VD : var hello = () => {}

4 . Các ví dụ 

+ Cú pháp cơ bản với nhiều tham số

    // ES5
    var multiTestEs5 = function(a, b) {
    return a * b
    }

    // ES6
    const multiTestEs6 = (a, b) => { return a * b }

+ Cú pháp cơ bản với một tham số

    //ES5
    var phraseSplitterEs5 = function phraseSplitter(phrase) {
    return phrase.split(' ')
    }

    //ES6
    const phraseSplitterEs6 = phrase => phrase.split(" ")


+ Không có tham số

// ES5

    var docLogEs5 = function docLog() {
        console.log(document);
    }

    // ES6
    var docLogEs6 = () => { console.log(document); };
    docLogEs6()

+ Cú pháp Object literals

    //ES5
    var setNameIdsEs5 = function setNameIds(id, name) {
    return {
        id: id,
        name: name
    }
    }

    // ES6
    var setNameIdsEs6 = (id, name) => ({ id: id, name: name })

+ Promises and Callbacks

    // ES5
    aAsync().then(function() {
    returnbAsync();
    }).then(function() {
    returncAsync();
    }).done(function() {
    finish();
    })

    // ES6
    aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish)

5 . Những điều cần chú ý khi sử dụng arrow function

+ Khi sử dụng arrow function thì nó không ràng buộc this . Từ khoá this luôn là window mặc dù đang nằm trong một hàm xử lý event hay một method nào đó












