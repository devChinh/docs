1 . Callback function và higher - order function là gì ? 

- Callback hay callback function là hàm được gọi lại bởi một hàm  khác , hàm đấy được truyền vào làm tham số cho hàm khác 

- Vd : 
  function myFn1(myFn2){
    return  myFn2() // myFn2 được gọi là callback funtion
    // code
  }

  function myFn2() {
    // code
  }
 myFn1(myFn2)

 - myFn1 sẽ được gọi là higher - order function : là có hàm hoạt động dựa trên 1 hàm khác  , tức là nó có thể nhận một hàm làm tham số đầu vào hoặc return ra 1 hàm khác


 2 . Nguyễn tắc khi thực hiện CallbackFuntion 
 - Tham số truyền vào phải là một function
 - Và điều này rất quan trọng khi kiểm tra đầu vào của một tham số truyền vào bằng <typeof> , nếu là funtion thì mới cho thực hiện tiếp 
 

2 . Callback thường xuất hiện ở đâu trong JS

- Lắng nghe event : các sự kiện click chuột , hover
- Xử lý bất đồng bộ 

. Vd về callback function

VD1 :
 function myFn1(callback) {
      return  callback(2,3)
 
 function myFn2(a,b) {
     return a + b
 
 let a = myFn1(myFn2
 console.log('============= a', a

 VD : 2
 function sayHello(name , callback) {
     var myName = name.toLowerCase() + "Hello"
     return callback(myName)
 
 const result = sayHello("Khoa" , function(arg){
     console.log('============= arg',arg)
     return arg
 }
 console.log('============= result',result

 VD : 3 
 function myDisplayer(some){
     console.log('============= some',some)
 
 function myCalculator(num1 , num2 , myCallback){
     let sum = num1 + num2;
     myCallback(sum)
 
 myCalculator(5,5,myDisplayer

 VD : 4

 function greet(name , callback){
     console.log('Hi'+ ' ' + name)
     callback()  // <=> callMe()
 
 function callMe(){
     console.log('I am callback function')
 
 greet('Cikey' , callMe
 
4 . Một số vấn đề gặp phải khi sử dụng callback function
- Vấn đề với con trỏ this : Khi một hàm được kích hoạt , bản thân nó sẽ có một giá trị tham chiếu tuy nhiên khi mà ta truyền hàm này vào hàm cha thì con trỏ this lại bị trỏ đến hàm higher - order function chứ kp hàm ban callback ban đầu 

- Callback hell : như ta đã biết hàm callback được thực thi bên trong một hàm khác , nếu ta tiếp tục có hàm callback bên trong một hàm callback khác thì sẽ ntn , thì sẽ có một vòng lặp vô hạn callback bên trong callback bên trong callback , ta sẽ rất hay gặp vấn đề này trong việc xử lý bất đồng bộ