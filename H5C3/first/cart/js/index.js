$(function () {
    /*初始化fullpage组件*/
    /*1.设置每一个屏幕的背景颜色*/
    /*2.设置屏幕内容的对齐方式  默认是垂直居中的  改成顶部对齐*/
    /*3.设置导航 设置指示器 点容器*/
    /*4.监听进入某一屏的时候 回调*/
    $('.container').fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
        /*离开某一个页面的时候触发*/
        onLeave:function (index,nextIndex,direction) {
            var currentSection = $('.section').eq(index-1);
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                currentSection.addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                currentSection.addClass('leaved');
            }else if(index == 5 && nextIndex == 6){
                /*当前是从第五页到第六页*/
                /*currentSection.removeClass('now').addClass('leaved');*/
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index == 6 && nextIndex == 7){
                /*当前是从第6页到第7页*/
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    /*$(item) == $(this);*/
                    /*img display:none*/
                    /*$(this).delay(i*0.5*1000).fadeIn();*/
                    /*img opacity*/
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },
        /*最好在组件初始完毕或者插件内容渲染完毕*/
        afterRender:function () {
            /*console.log(this);*/
            /*this没有api方法*/

            /*jquery插件初始的时候封装这个方法*/
            /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
            /*2.jquery本身没有的方法通过$.fn的方式追加方法  认为是插件方法*/
            /*3.例如：$.fn.src = function(){ return this.attr('src') } this 你选择谁this（jquery对象）执行谁 */
            /*点击更多切换下一页*/
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });

            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen04 .cart').on('transitionend',function () {
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });


            /*第八屏功能*/
            /*1.手要跟着鼠标移动*/
            $('.screen08').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand').css({
                    left:e.clientX -190,
                    top:e.clientY - 20
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        },
        /*页面切换的时间 默认是700*/
        scrollingSpeed:1000
    });
});