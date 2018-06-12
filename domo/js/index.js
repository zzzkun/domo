$(function () {
    // $(window).on('resize', changeImage)
    // $(window).trigger('resize');
    //
    //
    // function changeImage() {
    //     // $(windowWidth) = $(window).width();
    //     var windowWidth=$(window).width();
    //     console.log(windowWidth);
    //
    //     var showsmallInage=windowWidth<=640;
    //     var $items=$('#wjs-banner .item');
    //     console.log($items);
    //     $items.each(function (index,value) {
    //         var $item=$(value);
    //
    //         var $imageurl=showsmallInage?$item.data('sm-img'):$item.data('lg-img');
    //         // var src='url("'+imageurl+'")';
    //         // $item.css({
    //         //     backgroundImage:src
    //         // })
    //
    //         var src='url("'+imageurl+'")';
    //         $item.css({
    //             backgroundImage:src
    //         })
    //     })
    //
    //
    // }
    // changeImage();
    $(window).on('resize', changeImage)
    //手动触发一个事件resize
    $(window).trigger('resize');


    /**
     * 根据屏幕的宽度来改变图片
     */
    function changeImage() {

        //1.获取屏幕的宽度
        var windowWidth = $(window).width();
        // alert('ss');

        //2.判断屏幕是否是小屏
        // console.log(windowWidth);
        var isShowSmallImage = windowWidth <= 640;

        //3.拿到item
        var $items = $('.item');
        console.log($items);
        //4.遍历item
        $items.each(function (index, value) {
            //5.每一个item
            var $item = $(value);
            console.log($item);

            //6.拿到标签中的图片路劲
            var imageUrl = isShowSmallImage ? $item.data('sm-img') : $item.data('lg-img');
            var src = 'url("' + imageUrl + '")';

            $item.css({
                backgroundImage: src
            })

            if(isShowSmallImage){
                // var img='<img src="'+mageUrl+'" />'
                var img='<img src="'+imageUrl+'"/>'
                $item.empty();
                $item.append(img);

            }else {
                $item.empty();
            }


        })
    }
    /*3.初始化提示*/
    $('[data-toggle="tooltip"]').tooltip()
})
