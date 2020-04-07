// 实例化轮播图
var banner = new SimpleSwiper('.banner', {
    autoplay: true
});

// logo-nav的导航添加吸顶导航效果
var navTop = $('.nav').get(0).offsetTop;
$(window).scroll(function () {
    // console.log($(this).scrollTop(), navTop)
    if ($(this).scrollTop() > navTop) {
        $('.nav').addClass('Suction-top')
    } else if ($(this).scrollTop() <= navTop) {
        $('.nav').removeClass('Suction-top')
    }
});

// 今日新品 添加选项卡功能
var List = $('.commodity-display li');
$('.newBtn').click(function () {
    $(this).addClass('choice');
    $('.hotBtn').removeClass('choice');
    List.each(function (index,element) {
        var flag =index+1<10?'0'+(index+1):index+1;
        $(element).find('.content-sp>.shangping>a>img').prop('src','images/goods'+flag+'.png')     
    });
})
$('.hotBtn').click(function () {
    $(this).addClass('choice');
    $('.newBtn').removeClass('choice');
    List.each(function (index,element) {
        var flag =index+1+10;
        $(element).find('.content-sp>.shangping>a>img').prop('src','images/goods'+flag+'.png')     
    });
})