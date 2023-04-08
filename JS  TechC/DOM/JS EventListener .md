1, Hàm addEventListeners().

-Hàm addEventListener() có tác dụng thêm sự kiện cho đối tượng HTML, sử dụng với cú pháp

- element.addEventListener('eventName',functionName)

Trong đó:

        + element là các đối tượng HTML (được gọi bằng các phương thức getElement...).
        + eventName là tên các sự kiện (bỏ chữ 'on') như click,mouseover,...
        + functionName là tên hàm mà các bạn muốn gọi khi xảy ra sự kiện.

Hoặc

        element.addEventListener('eventName',function(){
            //code
        });


2, Hàm removeEventListener()

-Trái lại với hàm addEventListener() thì hàm removeEventListener() lại có tác dụng là xóa bỏ đi các sự kiện đang được áp lên sự kiện, sử dụng với cú pháp

- element.removeEventListener('eventName', functionName, option)

Trong đó:

        + element là các đối tượng HTML (được gọi bằng các phương thức getElement...).
        + eventName là tên các sự kiện (bỏ chữ 'on') như click,mouseover,...
        + functionName là tên hàm mà bạn muốn xóa bỏ hành động.
        + option là các giá trị true|false (có thể bỏ trống)


3 . Sự khác nhau giữa EventHandler và addEventListener

Tuy nó giống nhau nhưng có một sự khác biệt nhưng nó rất quan trọng. Đó là nếu  sử dụng Event Handler để kích hoạt sự kiện thì nếu bạn kích hoạt hai lần thì lần thứ hai sẽ đè lên lần thứ nhất

const button = document.querySelector(".btn")
button.onclick = () => {
  console.log("Hello anonystick!")
};
button.onclick = () => {
  console.log("How are you?")
};

// This wil log "How are you?" to the console

Trong ví dụ trên chúng ta kích hoạt hai lần, và kết quả là nó lấy thằng thứ 2.


- Nhưng với thằng eventListener dùng với ví dụ trên thì khi  chúng ta kích hoạt hai lần thì nó vẫn active cả hai 

const button = document.querySelector(".btn")

button.addEventListener("click", event => {
  console.log("Hello anonystick!")
})
button.addEventListener("click", event => {
  console.log("How are you?")
})

// "Hello anonystick!"
// "How are you?"
