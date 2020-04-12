// 
var swiper1 = new Swiper('.swiper-container1', {
    direction: 'vertical',
    // followFinger: false,
    speed: 800,
    mousewheel: true,
    pagination: {
        el: '.mypag',
        clickable: true,
    }
});
// swiper1禁止鼠标滑轮控制
swiper1.mousewheel.disable();
var mySwiper = document.querySelector('.swiper-container1').swiper
// mySwiper.slideNext(); slidePrev
// 滚动轮绑定事件
document.onmousewheel = scrollFn;
document.addEventListener('DOMMouseScroll', scrollFn)
// 自定义滚轮事件
function scrollFn(event) {
    if (event.wheelDelta) {
        if (event.wheelDelta > 0) {
            mySwiper.slidePrev()
        } else {
            mySwiper.slideNext();
        }
    } else if (event.detail) {
        if (event.detail < 0) {
            mySwiper.slideNext();
        } else {
            mySwiper.slidePrev()
        }
    }

}
// 技能
$('.skills-content svg path').each(function (index, element) {
    $(element).hover(function () {
        // over
        var ary = [
            ['JavaScript', '65%'],
            ['CSS', '65%'],
            ['HTML', '65%'],
            ['jQuery', '65%'],
            ['bootstrap', '65%']
        ]
        $(this).attr('style', '-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 50; opacity: 0.75;position: relative;z-index:2;');

        $('.skills-content svg text').attr({
            y: '295',
            opacity: '0'
        }).find('tspan').eq(0).text(ary[$(this).index() - 4][0]).next().text(ary[$(this).index() - 4][1]).parent().attr('opacity', '1');

    }, function () {
        // out
        $(this).attr('style', '-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 26; opacity: 1;');

        $('.skills-content svg text').attr('y', '307').find('tspan').eq(0).text('Skills').next().text('');
    });
});

// 项目轮播
var swiper2 = new Swiper('.swiper-container2', {
    effect: 'cube',
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type : 'progressbar',
        type: 'fraction',
      },
    
});

// 项目轮播按钮
$('.project-btn').each(function(index, element){
    $(element).mousemove(function(e){
        $(this).find('span').eq(0).attr('style','top:'+(e.offsetY-50)+'px;left:'+(e.offsetX-50)+'px')
    })
    if(index == 0){
        $(element).click(function(){
            swiper2.slidePrev();
        })
    }
    if(index == 1){
        $(element).click(function(){
            swiper2.slideNext();
        })
    }
})