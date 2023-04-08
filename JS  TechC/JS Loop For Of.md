 For ... of trong js cho phép bạn tạo một vòng lặp lặp qua một đối tượng có thể lặp lại

1 . Vòng lặp for of với 1 chuỗi

Cú pháp : 

        for (variable of iterable) {
        // code 
        }

VD :
        let str = 'abc';
        for (let c of str) {
            console.log(c);
        }
// a
// b
// c

2 . Vòng lặp for of với 1 mảng

- for/of cho phép chúng ta truy cập đến giá trị element trong array

VD : 
        let scores = [10, 20, 30];
        for (let score of scores) {
            score = score + 5;
            console.log(score);
        }
// 15
// 25
// 35



