// echarts 表图 专业技能
var myChart = echarts.init(document.getElementById('main'), 'westeros');

option = {
    title: {
        text: '技能分布图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'Bootstrap', 'Vue', 'git', 'other']
    },
   
    series: [{
        type: 'pie',
        radius: [30, 110],
        center: ['50%', '50%'],
        roseType: 'area',
        data: [{
                value: 75,
                name: 'HTML5'
            },
            {
                value: 70,
                name: 'CSS3'
            },
            {
                value: 78,
                name: 'JavaScript'
            },
            {
                value: 70,
                name: 'JQuery'
            },
            {
                value: 70,
                name: 'Bootstrap'
            },
            {
                value: 75,
                name: 'Vue'
            },
            {
                value: 65,
                name: 'git'
            },
            {
                value: 70,
                name: 'other'
            }
        ]
    }]
};
myChart.setOption(option);
// 主页轮播图
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
$('.project-btn').each(function (index, element) {
    $(element).mousemove(function (e) {
        $(this).find('span').eq(0).attr('style', 'top:' + (e.offsetY - 50) + 'px;left:' + (e.offsetX - 50) + 'px')
    })
    if (index == 0) {
        $(element).click(function () {
            swiper2.slidePrev();
        })
    }
    if (index == 1) {
        $(element).click(function () {
            swiper2.slideNext();
        })
    }
})