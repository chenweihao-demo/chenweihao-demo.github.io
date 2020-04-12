function SimpleSwiper(selecter, options) {
    var _this=this;
    this.options=options;
    this.$root = $(selecter);
    this.current = 0;
    this.w = this.$root.width();
    this.h = this.$root.height();
    this.$items = this.$root.find(".swiper-wrapper .swiper-slide");
    this.$wrap = this.$root.find(".swiper-wrapper");
    this.$pagination = this.$root.find(".swiper-pagination");

    this.$prevButton = this.$root.find(".swiper-button-prev");
    this.$nextButton = this.$root.find(".swiper-button-next");

    this.init();
    this.drawDot();
    this.bindDotsClick();
    this.bindButtonClick();
    // if(_this.options){
    //     _this.timer =_this.autoplayPic(_this.options.autoplay);
    // }
    _this.timer = (_this.options&&_this.options.autoplay)?_this.autoplayPic(_this.options.autoplay):null;
}

SimpleSwiper.prototype.init = function() {
    this.$wrap.css("width", this.$items.length * this.w + "px");
    this.$items.css("width", this.w + "px");
};
SimpleSwiper.prototype.drawDot = function() {
    var _this = this;
    this.$items.each(function(index, element) {
        // console.log(_this);
        if (_this.current === index) {
            _this.$pagination.append("<span class='active'></span>");
        } else {
            _this.$pagination.append("<span></span>");
        }
    });
    _this.$dots = this.$pagination.find("span");
};

SimpleSwiper.prototype.bindDotsClick = function() {
    var _this = this;
    this.$dots.click(function() {
        // console.log($(this).index());
        if(_this.options.autoplay){
            clearInterval(_this.timer)
        }
        var index = $(this).index();
        _this.move(index);
        if(_this.options.autoplay){
            _this.timer=_this.autoplayPic(_this.options.autoplay);
        } 
    });
};

// 高亮小点点
SimpleSwiper.prototype.activePoint = function(index) {
    this.$dots
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
};

// 显示第几个
SimpleSwiper.prototype.showPic = function(index) {
    if (this.current < index) {
        // 如果即将显示的 在后面
        // 准备后面的图片
        this.$root
            .find(".swiper-wrapper .swiper-slide")
            .eq(0)
            .after(this.$items.eq(index));

        // 移动到后面一张
        this.nextPic();
    } else {
        // 如果即将显示的 在前面
        this.$root
            .find(".swiper-wrapper .swiper-slide")
            .eq(0)
            .before(this.$items.eq(index));
        this.prevPic();
    }
};

SimpleSwiper.prototype.move = function(index) {
    // 准备即将要显示的图片
    this.showPic(index);
    // 高亮即将要显示的点点
    this.activePoint(index);
    // 改变当前索引
    this.current = index;
};

SimpleSwiper.prototype.nextPic = function() {
    var _this = this;
    // this是实例对象
    this.$wrap.animate({ left: -this.w + "px" }, 300, function() {
        // console.log(this); this是dom对象wrap 可以用父级函数的_this代表实例对象
        _this.$wrap.append(_this.$root.find(".swiper-wrapper .swiper-slide").eq(0)).css("left", "0px");
    });
};

SimpleSwiper.prototype.prevPic = function() {
    var _this = this;
    this.$wrap.css("left", -this.w + "px").animate({ left: "0px" }, 300);
};

SimpleSwiper.prototype.handleNext = function(e) {
    // console.log(e.data.obj);
    var _this;
    if (e && e.data.obj) {
        _this = e.data.obj;
    } else {
        _this = this;
    }

    // 事件函数 this函数运行时所挂在的对象 this是
    var nextIndex = _this.current + 1 > _this.$items.length - 1 ? 0 : _this.current + 1;
    _this.move(nextIndex);
};
SimpleSwiper.prototype.handlePrev = function(e) {
    var _this;
    if (e && e.data.obj) {
        _this = e.data.obj;
    } else {
        _this = this;
    }
    var prevIndex = _this.current - 1 < 0 ? _this.$items.length - 1 : _this.current - 1;
    _this.move(prevIndex);
};
// 绑定上下按钮事件
SimpleSwiper.prototype.bindButtonClick = function() {
    var _this = this;
    this.$nextButton.click(function(){
        if(_this.options){
            clearInterval(_this.timer)
        }
        _this.handleNext();
        if(_this.options){
            _this.timer=_this.autoplayPic(_this.options.autoplay);
        } 
    })
    this.$prevButton.click(function(){
        if(_this.options){
            clearInterval(_this.timer)
        }
        _this.handlePrev();
        if(_this.options){
            _this.timer=_this.autoplayPic(_this.options.autoplay);
        } 
    })
    // this.$nextButton.on("click", { obj: this }, this.handleNext);
    // this.$prevButton.on("click", { obj: this }, this.handlePrev);
};
// 自动播放
SimpleSwiper.prototype.autoplayPic = function (autoplayFn){
    var _this= this;
    if(autoplayFn){
        return setInterval(function(){
            _this.handleNext();
        },3000);
    } 
    
}