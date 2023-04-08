1 . Callback 

- có thể nói là cách đầu tiên và dễ nhất giúp bạn xử lý bất đồng bộ.

- Như các bạn đã biết là khi code một chức năng bất đồng bộ thì nó sẽ bỏ qua đoạn code đấy  và chạy code ở phần code tiếp theo vì thế ta cần phải sử dụng callback để gọi lại đoạn code vừa bị bỏ qua đấy

- Khi định nghĩa một function thực hiện một nhiệm vụ tốn thời gian, bạn cần truyền thêm tham số vào hàm - đóng vai trò là hàm callback

- Khi hành động bắt đầu, rồi khi nó kết thúc, hàm callback sẽ được gọi ngay sau đó.

- Ví dụ dưới đây sẽ thực hiện một GET request. Thông thường, việc này sẽ tốn thời gian (ít hay nhiều tuỳ thuộc vào tốc độ mạng)

    function doAsync(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => onSuccess(xhr.responseText)
    xhr.onerror = () => onError(xhr.statusText)
    xhr.send()
    }

    doAsync(
    "https://something.com",
    (value) => {
        // handle when success
    },
    (error) => {
       // handle when error
    }
    )

- Ở đây, hàm doAsync là một hàm bất đồng bộ với 2 hàm callback là: onSuccess và onError. Khi request trên thành công thì hàm onSuccess sẽ được gọi, ngược lại hàm onError sẽ được gọi

- Tuy nhiên, thử tưởng tượng bạn phải thực hiện 2 request liên tiếp, với request thứ 2 chỉ thực hiện khi request thứ nhất thực hiện xong:

// Usage:
doAsync(
  "https://something.com",
  (value) => {
    // handle when success (1)
    doAsync(
      "https://other.com",
      (value) => {
        //  handle when success (2)
      },
      (error) => {
        //  handle when error (2)
      }
    );
  },
  (error) => {
    // handle when error (1)
  }
)

+ Và cứ tiếp tục như thế , giả sử phải thực hiện 4 hoặc 5 resquest chẳng hạn mà resquest này được thực thi chỉ khi resquest trước đó thành công thì sẽ bị một lỗi là callback hell (quá nhiều callback lồng nhau)