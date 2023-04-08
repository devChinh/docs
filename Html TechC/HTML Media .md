1 . Video HTML
 + Để hiển thị video trong HTML, hãy sử dụng phần tử <video>

 VD :
   <video width="320" height="240" controls>
    <source src="./2022-10-13 16-42-59.mp4" type="video/mp4">
    Your browser does not support the video element
  </video>

Thuộc tính <controls> này thêm các điều khiển video, như phát, tạm dừng và âm lượng.

Nên luôn bao gồm các thuộc tính width và height  Nếu chiều cao và chiều rộng không được đặt, trang có thể nhấp nháy trong khi tải video

Phần <source>tử cho phép bạn chỉ định các tệp video thay thế mà trình duyệt có thể chọn. Trình duyệt sẽ sử dụng định dạng được nhận dạng đầu tiên

Văn bản giữa các thẻ <video>và </video>sẽ chỉ được hiển thị trong các trình duyệt không hỗ trợ phần tử <video>

Note : + Sử dụng thuộc tính <autoplay> để chạy video sau khi trang web được mở
+ Thêm <muted> sau <autoplay> để video  bắt đầu tự động phát (nhưng bị tắt tiếng)

2. Âm thanh HTML

VD : 
<audio controls>
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

Thuộc tính <controls> này thêm các điều khiển âm thanh, như phát, tạm dừng và âm lượng.

Phần <source>tử cho phép bạn chỉ định các tệp âm thanh thay thế mà trình duyệt có thể chọn. Trình duyệt sẽ sử dụng định dạng được nhận dạng đầu tiên

Văn bản giữa các thẻ <audio>và </audio>sẽ chỉ được hiển thị trong các trình duyệt không hỗ trợ <audio>phần tử

Note : + Sử dụng thuộc tính <autoplay> để chạy  <audio> sau khi trang web được mở
+ Thêm <muted> sau <autoplay> để video  bắt đầu tự động phát (nhưng bị tắt tiếng)

3 . HTML youtube

VD : 
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>

Thêm mute=1sau autoplay=1để cho phép video của bạn bắt đầu phát tự động (nhưng bị tắt tiếng)

VD : 
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>

- Thêm loop=1để video của bạn lặp lại mãi mãi
        +Giá trị 0 (mặc định): Video sẽ chỉ phát một lần
        +Giá trị 1: Video sẽ lặp lại (mãi mãi)

Thêm controls=0 để không hiển thị các điều khiển trong trình phát video.

    +Giá trị 0: Các điều khiển trình phát không hiển thị
    +Giá trị 1 (mặc định): Màn hình điều khiển trình phát