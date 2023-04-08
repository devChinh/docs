1. BEM là gì :

-  BEM là viết tắt của Block-Element-Modifier, là một tiêu chuẩn quy ước đặt tên cho các tên lớp CSS. BEM giúp cho việc code Frontend dễ đọc và dễ hiểu hơn, dễ làm việc và dễ mở rộng cũng như bảo trì khi làm việc với CSS

- Việc đặt tên theo chuẩn giúp các lập trình viên frontend hiểu được đoạn code đó có ý nghĩa gì, nó thực hiện nhiệm vụ gì. Từ đó những lập trình viên khác khi đọc vào code của bạn họ cũng hiểu được bạn đang làm gì, từ đó dễ dàng phân tích, thay đổi và quản lý hơn sau này

2 . Tại sao nên sử dụng BEM?

+ Trong những dự án nhỏ có thể BEM chưa cần sử dụng nhưng trong các dự án lớn và làm việc với nhóm thì BEM rất quan trọng.

+ BEM giúp cho cả team làm việc với nhau dễ dàng: Khi làm Teamwork với nhau, mỗi người sẽ có một cách đặt tên class riêng và sẽ bị conflict với nhau. Sử dụng BEM sẽ loại bỏ vấn đề này, vì có cấu trúc rõ ràng và dễ tuân thủ khi sử dụng.

+ Modules: Các class của mỗi block sẽ không bị ảnh hưởng bởi các yếu tố khác, nên bạn sẽ không lo CSS của class này sẽ gây ảnh hưởng lên class khác.

+ Tái sử dụng lại: Bạn có thể soạn các block độc lập với nhau và sử dụng lại chúng một cách thuận tiện, giảm số lượng code CSS.

+ Cấu trúc: BEM cung cấp cho CSS của bạn một cấu trúc vững chắc, đơn giản và dễ hiểu.

3 . Những thành phần cơ bản của BEM

    Quy ước đặt tên : 

    + .block {}   /* Block */
    + .block__element {}  /* Element */
    + .block--modifier {}  /* Modifier */

VD : 

    <div class="product product--small">
        <div class="product__image">
            <img src="..." alt="">
        </div>
        <div class="product__title product__title--style-1">Iphone 11 Pro</div>
        <div class="product__description">Siêu đắt</div>
    </div>

- Block: Là một thành phần của trang web. Block ở đây thường là các thành phần header, body, content, footer

VD : 

    <div class="header">

    </div>
     <div class="sidebar">

    </div>
     <div class="content">

    </div>


- Element : Là một phần của block và không có ý nghĩa độc lập, hay có thể coi element là phần tử con của block, element được gắn về mặt ngữ nghĩa với block của nó

VD : 

    <div class="header">
    <div class="header__logo">
    </div>
    <div class="header__navlinks">
    </div>
    </div>

     <div class="sidebar">
    <div class="sidebar__heading">
    </div>
    <div class="sidebar__description">
    </div>
    </div>

* Trường hợp có nhiều block lồng nhau thì viết như sau : 

VD :

    <div class="header">
        <div class="header__search">
        <div class="header__search-input">
                <div class="header__search-input-children">
                
                </div>
        </div>
        </div>
    </div>

* Hoặc có thể biết nó thành một block mới luôn

VD : 

        <div class="header">
            <div class="header-search">
            <div class="header-search__input">
                    <div class="header-search__input-children">
                    
                    </div>
            </div>
            </div>
        </div>


- Modifier (Biến thể) :  Được dùng để thao tác thay đổi cách hiển thị trên block hoặc phần tử 

VD1 : 

    <div class="header header--background">

    </div>

VD2 : 

     <div class="header">
          <div class="header__item header__item--color">

         </div>
         <div class="header__item">

         </div>
         <div class="header__item">

          </div>
     </div>

VD : 3 

    <div class="header">
            <div class="header__item header__item--color-red">

            </div>
            <div class="header__item header__item--color-green">

            </div>
            <div class="header__item">

            </div>
        </div>

