- Một block mã Javascript thường được thực thi đồng bộ. Tuy nhiên có một số hàm Javascript (timers) cho phép chúng ta trì hoãn việc thực thi của các mã javascript

    + setTimeout()
    + clearTimeout()
    + setInterval()
    + clearInteval()


 - Hai hàm này cho phép bạn thực hiện một đoạn mã Javascript tại một thời điểm nào đó trong tương lai 


1 .Hàm  setTimeout()

- Hàm setTimeout() dùng để thiết lập một khoảng thời gian nào đó sẽ thực hiện một nhiệm vụ nào đó và nó chỉ thực hiện đúng một lần.

Cú pháp:  setTimeout(function, time)

Trong đó:

 + function: là nội dung cần thực hiện, đây là một hàm
 + time: là khoảng thời gian bao nhiêu (tính bằng mili giây) thì function đó sẽ thực hiện

Ví dụ: Sau 3 giây thì xuất hiện câu chào lên màn hình

    setTimeout(function(){
        alert("Chào mừng bạn đến với Hoc it cung DevC")
    }, 3000)

- Trong ví dụ này mình đã truyền tham số thứ nhất là một function và tham số thứ hai là số giây mà function sẽ được thực hiện. Ngoài ra bạn có thể viết lại như sau cho dễ nhìn:

    var do_alert = function(){
        alert("Chào mừng bạn đến với Hoc IT cung DevC")
    };
    setTimeout(do_alert, 3000)

2 . Hàm clearTimeout() 

- Giả sử bạn xây dựng chức năng sau 3 giây thì sẽ xuất hiện thông báo, tuy nhiên sau 2 giây chẳng hạn chương trình muốn hủy bỏ thì phải làm thế nào? Lúc này bạn phải sử dụng hàm clearTimeout().

- Tham số truyền vào hàm clearTimeout() là đối tượng setTimeout() nên lúc này ban phải đặt hàm setTimeout() vào một biến cụ thể.


    var action = setTimeout(function(){
        // something
    }, 3000)

    // hủy hành động
    clearTimeout(action)

Ví dụ: XEM DEMO 

    <script language="javascript">
        var do_alert = setTimeout(function(){
            alert("Chào mừng bạn đến với hoc it cung devc");
        }, 3000);

        function clearAlert()
        {
            clearTimeout(do_alert);
        }
    </script>

    <input type="button" onclick="clearAlert()" value="Clear" />

3  Hàm setInterval() 

- Hàm setInterval() có cú pháp và chức năng giống như hàm setTimeout(), tuy nhiên với hàm setInterval() thì số lần thực hiện lã mãi mãi

Ví dụ: Cứ sau 3 giây thì xuất hiện câu chào một lần

    setInterval(function(){
        alert("Chào mừng bạn đến với hoc it cung devc");
    }, 3000)

- Trong ví dụ này cứ sau ba giây thì sẽ xuất hiện câu chào và số lần thực hiện sẽ là vĩnh viễn

4 .  clearInterval() trong Javascript

- Tương tự như hàm clearTimeout(), hàm clearInterval() sẽ xóa đi nhiệm vụ mà ta đã thiết lập trong hàm setInterval(), và ta cũng phải đặt setInterval() trong một biến thì mới clear được.

Ví dụ: Sử dụng hàm setInterval() để xuất câu chào lên màn hình và số lần xuất hiện chỉ 1 lần duy nhất

    var interval_obj = setInterval(function(){
        alert("Chào mừng bạn đến với Hoc it cung devc")
        clearInterval(interval_obj)
    }, 3000)

- Trong ví dụ này nội dung thực hiện là xuất hiện câu chào và ngay lập tức xóa nhiệm vụ của interval luôn nên nó chỉ thực hiện 1 lần.
