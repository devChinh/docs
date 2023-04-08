1 Vòng lặp For In với Object

-  for in lặp qua các thuộc tính (key) của một Đối tượng

Cú pháp :

    for (key in object) {
    // code
    }

VD : 

const person = {
     fname:"John",
     lname:"Doe", 
     age:25
}

for (let x in person) {
  console.log(x)
}

// fname
// lname
// age


2 Vòng lặp For In với Array

- for/in cho phép chúng ta truy cập đến giá trị index trong array, ko phải giá trị của element trong array

Cú pháp :
        for (variable in array) {
        //code
        }

VD : 
    const numbers = [45, 4, 9, 16];

    for (let x in numbers) {
        console.log(x)
    }

// 1
// 2
// 3
// 4
