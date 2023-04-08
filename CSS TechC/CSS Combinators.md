I . CSS Combinators (bộ kết hợp CSS) là gì

CSS combinators mình hiểu đơn giản là mối liên hệ giữa các selector. Cũng như con người chúng ta cũng có liên hệ với nhau như cha con, ông cháu, anh chị em.. Selector cũng vậy nó đều có mối liên hệ với các selector khác

Có bốn tổ hợp khác nhau trong CSS:

        + bộ chọn con cháu (dấu cách)
        + bộ chọn con (>)
        + bộ chọn anh chị em kế cận (+)
        + bộ chọn anh chị em chung (~)

VD : 
 <body>
        <h6>Thẻ h6 cấp 0</h6>
        <div class="test">
            <h6>Thẻ h6 cấp 1 thứ nhất.</h6>
            <h6>Thẻ h6 cấp 1 thứ hai.</h6>
            <span>
                <h6>Thẻ h6 cấp 2 thứ nhất.</h6>
            </span>
            <h6>Thẻ h6 cấp 1 thứ ba.</h6>
            <div> 
                <div>
                    <h6>Thẻ h6 cấp 3</h6>
                </div>
            </div>
        </div>
        <h6>Thẻ h6 cấp 0</h6>
        <h6>Thẻ h6 cấp 0</h6>
    </body>

    
1 . Bộ chọn con cháu
Bộ chọn con chọn tất cả các phần tử là con cháu của một phần tử được chỉ định.

VD : 
div.test h6 {
    color: red;
}

2 .Bộ chọn con (>)
Bộ chọn con chọn tất cả các phần tử là con của một phần tử được chỉ định.

VD : 
div.test > h6 {
     color: red;
}

3 .Bộ chọn Anh chị em kế cận (+)

Bộ chọn anh chị em liền kề được sử dụng để chọn một phần tử nằm ngay sau một phần tử cụ thể khác.
Các phần tử anh chị em phải có cùng một phần tử mẹ và "liền kề" có nghĩa là "ngay sau đó"

div.test + h6 {
     color: red;
}

4. Bộ chọn Anh chị em chung (~)

VD : 
div.test ~ h6 {
     color: red;
}

Bộ chọn anh chị em chung chọn tất cả các phần tử là anh chị em tiếp theo của một phần tử được chỉ định


5. Tổng quát

element element         	div p
element>element	          div > p	
element+element    	      div + p	
element1~element2	     p ~ ul	