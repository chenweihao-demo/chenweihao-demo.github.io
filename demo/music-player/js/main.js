var list = document.querySelector("ul.list");
var audio = document.querySelector("audio");
var play = document.querySelector(".play");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var stage = document.querySelector(".stage");
var h3 = document.querySelector("h3");
var h5 = document.querySelector("h5");
var progress = document.querySelector(".progress input");

var volume = document.querySelector(".contral .volume span");
var volumeSize = document.querySelector(".contral input");

var lyricbox = document.querySelector('.lyric ul');
var current = 0;
var lrcTime = []; //歌词对应的时间数组
var currentLine = 0; //当前播放到哪一句了
var currentTime; //当前播放的时间

// 音乐可视化
var canvas = document.querySelector("canvas");
var canvasCtx = canvas.getContext("2d");

var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
var source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioCtx.destination);

// 初始化
// list歌曲列表展示
playlist.forEach(function (element, index) {
    // console.log(element.id);
    var node = document.createElement("li");
    var span = document.createElement("span");
    var icon = document.createElement("i");
    span.classList.add('iconfont');
    node.appendChild(span);
    icon.innerText = element.name;
    node.appendChild(icon);

    node.onclick = function () {
        current = index;
        changeSong(playlist[current], true);
    }
    list.appendChild(node);
});

// 根据歌曲id 返回歌曲 url
function countUrl(id) {
    // return "http://127.0.0.1:5500/H5/Musicplaying/music/"+id+".mp3";
    return "./music/" + id + ".mp3";
}

// 初始化第一首歌
changeSong(playlist[current], false);

// 控制暂停和播放
play.onclick = function () {
    // 判断播放状态
    if (audio.paused) {
        audio.play();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(function () {

            });
        }
    } else {
        audio.pause();
        if (audioCtx.state === 'running') {
            audioCtx.suspend().then(function () {});
        }
    }
    // 控制 AudioContext 运行

};
// 上一首
prev.onclick = function () {
    current--;
    if (current < 0) {
        current = playlist.length - 1;
    }
    changeSong(playlist[current], true);
}
// 下一首
next.onclick = function () {
    current++;
    if (current > playlist.length - 1) {
        // 重新从0播放
        current = 0;
    }
    changeSong(playlist[current], true);
}
// 开关声音
volume.onclick = function () {
    if (audio.muted == true) {
        this.innerHTML = '&#xe639;';
        audio.muted = false;

    } else {
        audio.muted = true;
        this.innerHTML = '&#xe510;';

    }

}
// 监听播放状态
audio.onplay = function () {
    // 更改stage 的播放状态 添加class
    stage.classList.add("playing");
    // 切换按钮
    play.innerHTML = "&#xe613;";
};
audio.onpause = function () {
    // 更改stage 的播放状态
    stage.classList.remove("playing");
    // 切换按钮
    play.innerHTML = "&#xe668;";

};

audio.ontimeupdate = function () {
    if (isNaN(this.duration)) {
        return;
    }
    // 更新进度条
    progress.value = (this.currentTime / this.duration) * 100;
    document.querySelector('#range-back').style.width = progress.value + '%';
    document.querySelector('#range-pointer').style.left = progress.value - 2 + '%';
    // console.log(document.querySelector('#range-back'))
    // 更新时间
    document.querySelectorAll(".time span")[0].innerText = countTime(this.currentTime);

    currentTime = audio.currentTime;
    for (var j = currentLine; j < lrcTime.length; j++) {
        if (currentTime < lrcTime[j + 1] && currentTime > lrcTime[j]) {
            lyricbox.querySelectorAll('li').forEach(function (element) {
                element.classList.add('dis');
            });
            lyricbox.querySelectorAll('li')[j].classList.remove('dis');
            break;
        }
    }


};

progress.oninput = function () {
    console.log(this.value);
    audio.currentTime = (this.value * audio.duration) / 100;
    // document.querySelector('#range-back').style.width = this.value+'%';

};
// 监听音量
volumeSize.oninput = function () {
    audio.volume = this.value;
    if (audio.volume == 0) {
        audio.muted = true;
        volume.innerHTML = '&#xe510;';
    } else {
        audio.muted = false;
        volume.innerHTML = '&#xe639;';
    }
    document.querySelector('#volume-back').style.width = this.value * 100 + '%';
    document.querySelector('#volume-pointer').style.left = this.value * 100 - 7 + '%';
}

function countTime(n) {
    var n = Math.floor(n);
    var m = Math.floor(n / 60);
    var s = n % 60;
    m = m > 9 ? m : "0" + m;
    s = s > 9 ? s : "0" + s;
    return m + ":" + s;
}

audio.ondurationchange = function () {
    document.querySelectorAll(".time span")[1].innerText = countTime(this.duration);
};

// 切换歌曲
function changeSong(obj, bool) {
    // 切换url
    lrcTime = [];
    audio.src = countUrl(obj.id);
    h3.innerText = obj.name;
    h5.innerText = obj.artists;
    var i = 0;
    lyricbox.innerHTML = '';
    for (const key in obj.lyric) {
        lrcTime[i++] = parseFloat(key.substr(1, 3)) * 60 + parseFloat(key.substring(4,
            10)); //00:00.000转化为00.000格式
        var li = document.createElement('li');
        var p = document.createElement('p');
        p.innerHTML = obj.lyric[key];
        li.appendChild(p);
        lyricbox.appendChild(li);
    }
    document.querySelector(".glue img").src = obj.picUrl;
    document.querySelector(".mask").style.backgroundImage = 'url("' + obj.picUrl + '")';
    document.querySelectorAll("ul.list li").forEach(function (element, index) {
        var lb = element.querySelector('span');
        var ib = element.querySelector('i');
        if (index == current) {
            element.classList.add("playing");
            lb.innerHTML = '&#xe639;';
        } else {
            element.classList.remove("playing");
            lb.innerHTML = '';
        }
    });
    // AudioContext 运行
    if (bool) {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(function () {});
        }
    } else {
        audio.pause();
    }

}
// 列表顺序播放
audio.onended = function () {
    current++;
    if (current > playlist.length - 1) {
        // 重新从0播放
        current = 0;
    }
    changeSong(playlist[current], true);
};

var dataArray = new Uint8Array(analyser.frequencyBinCount);
var count = 91;

function draw(WIDTH, HEIGHT) {

    // 颜色渐变
    var color = canvasCtx.createLinearGradient(WIDTH / 2, HEIGHT - 30, WIDTH / 2, HEIGHT - 100);;
    color.addColorStop(0, '#000');
    color.addColorStop(.5, '#069');
    color.addColorStop(1, '#f6f');

    analyser.getByteFrequencyData(dataArray);
    var step = Math.floor(dataArray.length / count);
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < count; i++) {
        var audioData = dataArray[step * i];
        canvasCtx.fillStyle = color;
        canvasCtx.fillRect(WIDTH / 2 + (i * 13), HEIGHT, 10, -audioData);
        canvasCtx.fillRect(WIDTH - (WIDTH / 2 + ((i - 1) * 13)), HEIGHT, 10, -audioData);
    }
}
setInterval(function () {
    canvas.width = document.querySelector('body').offsetWidth;
    var WIDTH = canvas.offsetWidth;
    var HEIGHT = canvas.offsetHeight;
    draw(WIDTH, HEIGHT)
}, 30);