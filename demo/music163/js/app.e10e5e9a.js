(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"094b":function(t,e,s){},"13d7":function(t,e,s){},"1c7f":function(t,e,s){},2395:function(t,e,s){},"23d0":function(t,e,s){"use strict";var n=s("1c7f"),a=s.n(n);a.a},"2f4f":function(t,e,s){"use strict";var n=s("8420"),a=s.n(n);a.a},4045:function(t,e,s){t.exports=s.p+"img/loading.732da547.svg"},"53a0":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=(s("d3b7"),s("bc3a")),i=s.n(a),r={baseURL:"https://music.kele8.cn"},o=i.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["a"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"},on:{touchstart:t.touchstart,touchend:t.touchend}},[s("keep-alive",[s("router-view",{attrs:{courrntSong:t.courrnt},on:{transferId:function(e){t.courrnt=e}}})],1),s("PlayBar",{attrs:{courrnt:t.courrnt,showFullscreenOut:t.showFullscreen},on:{transferId:function(e){t.courrnt=e},"click-fullscren":function(e){t.showFullscreen=e},nextSong:function(e){t.courrnt=e},prevSong:function(e){t.courrnt=e},listSong:function(e){t.courrnt=e},randomSong:function(e){t.courrnt=e}}})],1)},c=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playbar",on:{click:function(e){return t.$emit("click-fullscren",t.showFullscreen)}}},[s("transition",{attrs:{name:"playbar-bottom","enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showFullscreen,expression:"!showFullscreen"}],staticClass:"playbarbottom",on:{click:t.showFullscreenFn}},[s("div",{staticClass:"thumb"},[t.courrnt?s("img",{class:{active:t.playing},attrs:{src:t.courrntSong.picUrl,alt:""}}):t._e()]),s("div",{staticClass:"info"},[t.courrnt?s("h5",[t._v(t._s(t.courrntSong.name))]):t._e(),t.courrnt?s("span",[t._v(t._s(t.joinArtists(t.courrntSong.artist)))]):t._e()]),s("div",{staticClass:"progress",on:{click:function(e){return e.stopPropagation(),t.playingFn()}}},[s("canvas",{attrs:{id:"canvas",width:"100",height:"100"}}),t.playing?s("i",{staticClass:"fa fa-pause"}):s("i",{staticClass:"fa fa-play"})]),s("div",{staticClass:"playlist",on:{click:function(e){e.stopPropagation(),t.showPlayList=!t.showPlayList}}},[s("i",{staticClass:"fa fa-list"})])])]),s("div",[s("transition",{attrs:{name:"item","enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[t.showPlayList?s("div",{staticClass:"defaultPlayList"},t._l(t.defaultPlayList,(function(e,n){return s("SongList",{key:n,attrs:{type:t.type,songs:e,currentSong:t.courrntSong},on:{transferId:function(e){t.$emit("transferId",e),t.playListFlag=n}}},[s("span",[t._v(t._s(n+1))])])})),1):t._e()]),s("transition",{attrs:{name:"custom-classes-transition2","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.showPlayList?s("div",{staticClass:"slmask",on:{click:function(e){e.stopPropagation(),t.showPlayList=!1}}}):t._e()])],1),s("transition",{attrs:{name:"custom-classes-transition3","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFullscreen,expression:"showFullscreen"}],staticClass:"fullscreenplay"},[s("div",{staticClass:"mask",style:{backgroundImage:"url("+t.courrntSong.picUrl+")"}}),s("header",[s("div",{staticClass:"back-btn"},[s("i",{staticClass:"fa fa-arrow-left",on:{click:function(e){t.showFullscreen=!1}}})]),s("div",{staticClass:"info"},[t.courrnt?s("h5",[t._v(t._s(t.courrntSong.name))]):t._e(),t.courrnt?s("span",[t._v(t._s(t.joinArtists(t.courrntSong.artist)))]):t._e()])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showCircle,expression:"!showCircle"}],staticClass:"circle",class:{active:t.playing},on:{click:function(e){t.showCircle=!0}}},[s("div",{staticClass:"needle"}),s("div",{staticClass:"glue"},[s("div",[t.courrntSong.picUrl?s("img",{attrs:{src:t.courrntSong.picUrl,alt:""}}):t._e()])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showCircle,expression:"showCircle"}],staticClass:"lyric-box",on:{click:function(e){t.showCircle=!1}}},[s("div",{staticClass:"volume"},[s("span",[s("i",{staticClass:"fa fa-volume-up"})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.volumeNum,expression:"volumeNum"}],attrs:{type:"range",max:"100"},domProps:{value:t.volumeNum},on:{__r:function(e){t.volumeNum=e.target.value}}}),s("div",[s("RangeBar",{attrs:{rangmax:100,newtime:t.volumeNum}})],1)]),s("div",{staticClass:"scroll-box"},[s("ul",{staticClass:"scroll",style:{transform:"translateY("+28*-t.currentLyricIndex+"px)"}},t._l(t.parsedLyric,(function(e,n){return s("li",{key:n,class:{active:n===t.currentLyricIndex}},[t._v(t._s(e.text))])})),0)])]),s("footer",[s("div",{staticClass:"progress-bar"},[s("span",{staticClass:"state-time"},[t._v(t._s(t.countTime(t.newtime/1e3)))]),s("span",{staticClass:"range"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newtime,expression:"newtime"}],attrs:{type:"range",max:t.courrntSong.duration},domProps:{value:t.newtime},on:{input:function(e){return t.newTimeFn(e)},__r:function(e){t.newtime=e.target.value}}}),s("div",[s("RangeBar",{attrs:{rangmax:t.courrnt?t.courrntSong.duration:0,newtime:t.courrnt?t.newtime:0}})],1)]),s("span",{staticClass:"all-time"},[t._v(t._s(t.alltime))])]),s("div",{staticClass:"control-bar"},[s("div",{staticClass:"loop-model",on:{click:function(e){t.playModeState=t.playModeState+1==3?0:t.playModeState+1}}},["list"==t.playModes[t.playModeState]?s("span",{staticClass:"list-loop"}):"single"==t.playModes[t.playModeState]?s("span",{staticClass:"one-loop"}):"random"==t.playModes[t.playModeState]?s("span",{staticClass:"random-loop"}):t._e()]),s("div",{staticClass:"prev",on:{click:function(e){return t.prevSong()}}},[s("span",[s("i",{staticClass:"fa fa-step-backward"})])]),s("div",{staticClass:"play-pause",on:{click:function(e){return e.stopPropagation(),t.playingFn()}}},[t.playing?s("span",{staticClass:"pause"}):s("span",{staticClass:"play"})]),s("div",{staticClass:"next",on:{click:function(e){return t.nextSong()}}},[s("span",[s("i",{staticClass:"fa fa-step-forward"})])]),s("div",{staticClass:"playlist",on:{click:function(e){e.stopPropagation(),t.showPlayList=!t.showPlayList}}},[s("span",[s("i",{staticClass:"fa fa-list"})])])])])])]),s("audio",{attrs:{src:t.songId}})],1)},d=[],h=(s("c975"),s("a15b"),s("baa5"),s("d81d"),s("45fc"),s("b0c0"),s("a9e3"),s("ac1f"),s("466d"),s("841c"),s("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-list",class:{redlist:t.redlist},on:{click:function(e){return t.$emit("transferId",t.song)}}},[t._t("default"),n("div",[n("div",{staticClass:"content"},[n("h3",{staticClass:"song-name"},[t._v(" "+t._s(t.song.name)+" "),t.song.alia?n("span",[t._v("("+t._s(t.song.alia)+")")]):t._e()]),n("p",{staticClass:"song-singer"},[n("span"),t._v(" "+t._s(t.joinArtists(t.song.artist))+"-"+t._s(t.song.albumname)+" ")])]),n("div",{staticClass:"play-box"},[t.currentSong&&t.songs.id===t.currentSong.id?n("img",{staticClass:"play",staticStyle:{background:"none"},attrs:{src:s("803f"),alt:""}}):n("span",{staticClass:"play"})])])],2)}),p=[],g={name:"SongList",props:{songs:{type:Object,default:function(){return{id:1442545710,type:4,name:"怕光的人",copywriter:null,picUrl:"http://p1.music.126.net/ATwEbG_A9cRWtHFQyR4M4g==/109951164928592761.jpg",canDislike:!0,trackNumberUpdateTime:null,song:{name:"怕光的人",id:1442545710,position:0,alias:["网剧《致我们甜甜的小美满》男主主题曲"],status:0,fee:8,copyrightId:1416757,disc:"01",no:4,artists:[{name:"周锐",id:13058505,picId:0,img1v1Id:0,briefDesc:"",picUrl:"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",img1v1Url:"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",albumSize:0,alias:[],trans:"",musicSize:0,topicPerson:0}],album:{name:"怕光的人",id:88366870,type:"EP/Single",size:1,picId:0x186a00080358b80,blurPicUrl:"http://p1.music.126.net/ATwEbG_A9cRWtHFQyR4M4g==/109951164928592761.jpg",companyId:0,pic:0x186a00080358b80,picUrl:"http://p1.music.126.net/ATwEbG_A9cRWtHFQyR4M4g==/109951164928592761.jpg",publishTime:15875712e5,description:"",tags:"",company:"Gstar音乐工作室",briefDesc:"",artist:{name:"",id:0,picId:0,img1v1Id:0,briefDesc:"",picUrl:"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",img1v1Url:"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",albumSize:0,alias:[],trans:"",musicSize:0,topicPerson:0},songs:[],alias:["网剧《致我们甜甜的小美满》男主主题曲"],status:0,copyrightId:1416757,commentThreadId:"R_AL_3_88366870",artists:[{name:"周锐",id:13058505,picId:0,img1v1Id:0,briefDesc:"",picUrl:"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",img1v1Url:"http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",albumSize:0,alias:[],trans:"",musicSize:0,topicPerson:0}],subType:"录音室版",transName:null,mark:0,picId_str:"109951164928592761"},starred:!1,popularity:100,score:100,starredNum:0,duration:284890,playedNum:0,dayPlays:0,hearTime:0,ringtone:"",crbt:null,audition:null,copyFrom:"",commentThreadId:"R_SO_4_1442545710",rtUrl:null,ftype:0,rtUrls:[],copyright:0,transName:null,sign:null,mark:0,noCopyrightRcmd:null,hMusic:{name:null,id:4874086129,size:11397791,extension:"mp3",sr:44100,dfsId:0,bitrate:32e4,playTime:284890,volumeDelta:-26604},mMusic:{name:null,id:4874086130,size:6838692,extension:"mp3",sr:44100,dfsId:0,bitrate:192e3,playTime:284890,volumeDelta:-24004},lMusic:{name:null,id:4874086131,size:4559142,extension:"mp3",sr:44100,dfsId:0,bitrate:128e3,playTime:284890,volumeDelta:-22303},bMusic:{name:null,id:4874086131,size:4559142,extension:"mp3",sr:44100,dfsId:0,bitrate:128e3,playTime:284890,volumeDelta:-22303},mvid:0,rtype:0,rurl:null,mp3Url:null,exclusive:!1,privilege:{id:1442545710,fee:8,payed:0,st:0,pl:128e3,dl:0,sp:7,cp:1,subp:1,cs:!1,maxbr:999e3,fl:128e3,toast:!1,flag:0,preSell:!1}},alg:"hot_server"}}},type:{type:String,default:function(){return"new"}},redlist:{type:Boolean,default:function(){return!1}},currentSong:Object},data:function(){return{song:{type:Object,default:function(){return{id:"",name:"",picUrl:"",alia:"",artist:[],albumname:"",duration:""}}}}},methods:{setSong:function(t){if("self"!==this.type)return this.song.name=t.name,this.song.id=t.id,"new"===this.type?(this.song.alia=t.song.alias[0],this.song.artist=t.song.artists,this.song.albumname=t.song.album.name,this.song.duration=t.song.duration,void(this.song.picUrl=t.song.album.picUrl)):"hot"===this.type?(this.song.alia=t.alia[0],this.song.artist=t.ar,this.song.albumname=t.al.name,this.song.duration=t.dt,void(this.song.picUrl=t.al.picUrl)):"search"===this.type?(this.song.alia=t.alias[0],this.song.artist=t.artists,this.song.albumname=t.album.name,this.song.duration=t.duration,void this.getpicUrl(t.id)):void 0;this.song=t},joinArtists:function(t){return t.map((function(t){return t.name})).join(" / ")},getpicUrl:function(t){var e=this;window.axios.get("/song/detail",{params:{ids:t}}).then((function(t){e.song.picUrl=t.data.songs[0].al.picUrl})).catch((function(t){console.log(t)}))}},created:function(){this.setSong(this.songs)}},f=g,m=(s("23d0"),s("2877")),y=Object(m["a"])(f,h,p,!1,null,"455e4978",null),v=y.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rangbar"},[s("div",{staticClass:"range-box"},[s("span",{staticClass:"back",style:{width:t.newtime/t.rangmax*100+"%"}}),s("span",{staticClass:"pointer",style:{left:t.newtime/t.rangmax*100+"%"}})])])},S=[],b={props:["rangmax","newtime"],computed:{}},_=b,C=(s("d557"),Object(m["a"])(_,w,S,!1,null,"78870d1f",null)),L=C.exports,k={components:{SongList:v,RangeBar:L},props:{courrnt:{type:Object,default:function(){return{id:"",name:"",picUrl:"",alia:"",artist:[],albumname:"",duration:""}}},showFullscreenOut:Boolean},data:function(){return{courrntSong:{id:"",name:"",picUrl:"",alia:"",artist:[],albumname:"",duration:""},playing:!1,showFullscreen:!1,showCircle:!1,currentLyric:null,currentLyricIndex:0,defaultPlayList:[],type:"self",showPlayList:!1,newtime:0,alltime:0,inputfale:!0,playModeState:0,playModes:["list","single","random"],playListFlag:0,volumeNum:100}},computed:{songId:function(){return this.courrnt?" https://music.163.com/song/media/outer/url?id=".concat(this.courrnt.id,".mp3 "):""},parsedLyric:function(){if(null!==this.currentLyric){var t=[];this.currentLyric.split("\n").map((function(e){var s=/\d{2}:\d{2}\.\d+/gi;if(-1!=e.search(s)){for(var n=e.match(s),a=0;a<n.length;a++){var i=n[a].substr(0,2),r=n[a].substr(3,2),o=n[a].substr(5);t.push({time:60*Number(i)+Number(r)+Number(o),text:e.substr(e.lastIndexOf("]")+1)||"——————"})}return{}}return{}}));for(var e=0;e<t.length-1;e++)for(var s=0;s<t.length-1;s++)if(t[s].time>t[s+1].time){var n=t[s];t[s]=t[s+1],t[s+1]=n}return t}return null}},methods:{joinArtists:function(t){return t.map((function(t){return t.name})).join(" / ")},countTime:function(t){var e=Math.floor(t),s=Math.floor(e/60),n=e%60;return s=s>9?s:"0"+s,n=n>9?n:"0"+n,s+":"+n},drawProgress:function(){var t=this.$el.querySelector("#canvas"),e=this.$el.querySelector("audio"),s=t.getContext("2d");s.clearRect(0,0,100,100),s.beginPath(),s.arc(50,50,45,0,2*Math.PI),s.closePath(),s.strokeStyle="gray",s.lineWidth="4",s.stroke();var n=this;e.ontimeupdate=function(){n.inputfale&&(n.newtime=1e3*this.currentTime);var t=n.courrnt.duration;if(e.paused||(n.playing=!0),s.clearRect(0,0,100,100),s.beginPath(),s.arc(50,50,45,0,2*Math.PI),s.closePath(),s.strokeStyle="gray",s.lineWidth="4",s.stroke(),s.beginPath(),s.arc(50,50,45,-.5*Math.PI,-.5*Math.PI+2*Math.PI*(1e3*this.currentTime/t)),s.strokeStyle="#d43c33",s.lineWidth="4",s.stroke(),this.ended&&(s.clearRect(0,0,100,100),s.beginPath(),s.arc(50,50,45,0,2*Math.PI),s.closePath(),s.strokeStyle="gray",s.lineWidth="4",s.stroke(),n.playing=!1),n.parsedLyric){for(var a,i=0;i<n.parsedLyric.length;i++)if(a=i,this.currentTime+.15<n.parsedLyric[i].time){a=i-1;break}void 0===a&&(a=n.parsedLyric.length-1),n.currentLyricIndex=a}},e.onended=function(){"list"==n.playModes[n.playModeState]&&(n.playListFlag=n.playListFlag+1==n.defaultPlayList.length?0:n.playListFlag+1,n.$emit("listSong",n.defaultPlayList[n.playListFlag])),"single"==n.playModes[n.playModeState]&&this.play(),"random"==n.playModes[n.playModeState]&&(n.playListFlag=Math.round(Math.random()*(n.defaultPlayList.length-1-0)+0),n.$emit("randomSong",n.defaultPlayList[n.playListFlag]))}},newTimeFn:function(t){var e=this.$el.querySelector("audio");e.currentTime=t.target.value/1e3},playingFn:function(){if(null!==this.courrnt){this.playing=!this.playing;var t=this.$el.querySelector("audio");this.playing?t.play():t.pause()}},showFullscreenFn:function(){null!==this.courrnt&&(this.showFullscreen=!this.showFullscreen,this.showFullscreen&&(this.getLyric(),this.showPlayList=!1))},getLyric:function(){var t=this;this.currentLyric=null;var e=window.localStorage.getItem("lyric"+this.courrntSong.id);e?this.currentLyric=e:window.axios.get("lyric",{params:{id:this.courrntSong.id}}).then((function(e){void 0!==e.data.lrc&&void 0!==e.data.lrc.lyric?(t.currentLyric=e.data.lrc.lyric,window.localStorage.setItem("lyric"+t.courrntSong.id,e.data.lrc.lyric)):t.currentLyric="[00:00.00]无歌词\n"}))},nextSong:function(){this.playListFlag=this.playListFlag+1==this.defaultPlayList.length?0:this.playListFlag+1,this.$emit("nextSong",this.defaultPlayList[this.playListFlag])},prevSong:function(){this.playListFlag=this.playListFlag-1==-1?this.defaultPlayList.length-1:this.playListFlag-1,this.$emit("prevSong",this.defaultPlayList[this.playListFlag])}},created:function(){this.courrnt&&(this.courrntSong=this.courrnt,this.alltime=this.countTime(this.courrntSong.duration/1e3))},mounted:function(){var t=this;if(this.drawProgress(),this.courrntSong.id){var e=this.defaultPlayList.some((function(e){return e.id==t.courrntSong.id}));e||this.defaultPlayList.push(this.courrntSong)}},watch:{courrnt:function(t){if(t){this.courrntSong=t,this.alltime=this.countTime(t.duration/1e3),this.playing=!0;var e=this.defaultPlayList.some((function(e){return e.id==t.id}));if(e){var s=this.defaultPlayList.indexOf(t);this.playListFlag=s}else this.defaultPlayList.push(t),this.playListFlag=this.defaultPlayList.length-1}else this.playing=!1;this.getLyric()},volumeNum:function(t){var e=this.$el.querySelector("audio");e.volume=t/100},showFullscreenOut:function(t){this.showFullscreen=t},playing:function(t){var e=this.$el.querySelector("audio");e.oncanplay=function(){this.play()}}}},x=k,I=(s("eb96"),Object(m["a"])(x,u,d,!1,null,"22e10f8e",null)),O=I.exports,P={components:{PlayBar:O},data:function(){return{courrnt:null,touchstartX:0,touchstartY:0,showFullscreen:!1}},methods:{touchstart:function(t){this.touchstartX=t.changedTouches[0].clientX,this.touchstartY=t.changedTouches[0].clientY},touchend:function(t){this.showFullscreen&&t.changedTouches[0].clientX-this.touchstartX>50&&t.changedTouches[0].clientY-this.touchstartY>10&&(this.touchstartX=0,this.touchstartY=0,this.showFullscreen=!1),this.showFullscreen||(t.changedTouches[0].clientX-this.touchstartX>50&&t.changedTouches[0].clientY-this.touchstartY>10&&(this.touchstartX=0,this.touchstartY=0,this.routerBeck()),t.changedTouches[0].clientX-this.touchstartX<-50&&t.changedTouches[0].clientY-this.touchstartY>10&&this.routerForward())},routerBeck:function(){this.$router.back()},routerForward:function(){this.$router.forward()}}},F=P,D=(s("7c55"),Object(m["a"])(F,l,c,!1,null,null,null)),M=D.exports,T=s("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("transition",{attrs:{name:"loading","enter-active-class":"animated fadeOut","leave-active-class":"animated fadeOut"}},[t.showLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:s("4045"),alt:""}})]):t._e()]),n("HomeList"),n("div",{staticClass:"personalized-box"},[n("CardTitle",[t._v("推荐歌单")]),n("ul",{staticClass:"songlist"},t._l(t.personalizeds,(function(e,s){return n("SongCardList",{key:s,attrs:{songlist:e,currentSong:t.courrntSong}})})),1)],1),n("div",{staticClass:"newsong"},[n("CardTitle",[t._v("最新音乐")]),n("ul",t._l(t.newsongs,(function(e,s){return n("SongList",{key:s,attrs:{type:t.type,songs:e,currentSong:t.courrntSong},on:{transferId:function(e){return t.$emit("transferId",e)}}})})),1)],1)],1)},N=[],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-title"},[s("h3",[t._t("default")],2)])},$=[],R={},W=R,E=(s("2f4f"),Object(m["a"])(W,U,$,!1,null,"140ded90",null)),z=E.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-list",on:{click:function(e){return t.routerToPlayListPage(t.songlist.id)}}},[s("img",{attrs:{src:t.songlist.picUrl,alt:""}}),s("div",{staticClass:"playcount"},[s("i",{staticClass:"fa fa-headphones"}),t._v(" "+t._s(t.playCount)+" ")]),s("p",[t._v(t._s(t.songlist.name))])])},J=[],H=(s("b680"),{name:"Song",props:{songlist:{type:Object,default:function(){return{id:4969079749,type:0,name:"欧美 | 欢快小调拯救你的不开心",copywriter:"编辑推荐：音乐是治愈人心的良药",picUrl:"https://p1.music.126.net/nflx5ZxSSPivvGnyS5WRGw==/109951164906376339.jpg",canDislike:!1,trackNumberUpdateTime:1586934907095,playCount:815852,trackCount:100,highQuality:!1,alg:"featured"}},playCount:String},currentSong:Object},methods:{routerToPlayListPage:function(t){this.$router.push({path:"playlist",query:{id:t}})}},computed:{playCount:function(){var t=this.songlist.playCount;return t>1e8?t/1e8>0?(t/1e8).toFixed(1)+"亿":t+"":t>1e4&&t/1e4>0?(t/1e4).toFixed(1)+"万":t+""}}}),q=H,Y=(s("ecf6"),Object(m["a"])(q,A,J,!1,null,"5241f20c",null)),X=Y.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{attrs:{id:"nav"}},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),s("li",[s("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),s("li",[s("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])},B=[],G={},V=G,Z=(s("7e70"),Object(m["a"])(V,Q,B,!1,null,"61fae57f",null)),K=Z.exports,tt={name:"Home",props:{courrntSong:Object},data:function(){return{personalizeds:[],newsongs:[],type:"new",showLoading:!0}},components:{CardTitle:z,SongCardList:X,SongList:v,HomeList:K},methods:{getPersonalizedFn:function(){var t=this;this.axios.get("/personalized",{params:{limit:6}}).then((function(e){t.personalizeds=e.data.result,window.localStorage.setItem("personalizeds",JSON.stringify({expies:Date.now()+6e5,result:e.data.result}))})).catch((function(t){console.log(t)}))},getNewsongFn:function(){var t=this;this.axios.get("/personalized/newsong").then((function(e){t.newsongs=e.data.result,window.localStorage.setItem("newsongs",JSON.stringify({expies:Date.now()+6e5,result:e.data.result}))})).catch((function(t){console.log(t)}))}},created:function(){var t=JSON.parse(window.localStorage.getItem("personalizeds"));t&&t.expies>Date.now()?this.personalizeds=t.result:this.getPersonalizedFn();var e=JSON.parse(window.localStorage.getItem("newsongs"));e&&e.expies>Date.now()?this.newsongs=e.result:this.getNewsongFn()},beforeRouteEnter:function(t,e,s){s((function(t){t.showLoading=!1}))},beforeRouteLeave:function(t,e,s){this.showLoading=!0,s()}},et=tt,st=(s("d615"),Object(m["a"])(et,j,N,!1,null,"52c97fba",null)),nt=st.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot"},[s("HomeList"),s("div",{staticClass:"hot-header"},[s("div",{staticClass:"hot-content"},[s("div",{staticClass:"logo"}),s("p",[t._v("更新日期："+t._s(t.updatetime))])])]),s("div",{staticClass:"song-list"},[s("keep-alive",[s("ul",t._l(t.Top20s,(function(e,n){return s("SongList",{key:t.falg=n+1<10?"0"+(n+1):n+1+"",attrs:{type:t.type,songs:e,redlist:t.red,currentSong:t.courrntSong},on:{transferId:function(e){return t.$emit("transferId",e)}}},[s("span",[t._v(t._s(t.falg))])])})),1)])],1)],1)},it=[],rt=(s("fb6a"),{props:{courrntSong:Object},name:"Hot",data:function(){return{hotsong:[],Top20s:[],flag:"",updatetime:"",type:"hot",red:!0}},components:{SongList:v,HomeList:K},methods:{getHotsongFn:function(){var t=this;this.axios.get("/top/list?idx=1").then((function(e){t.hotsong=e.data.playlist,t.Top20s=t.hotsong.tracks.slice(0,20),t.setUpdatTime(t.hotsong.trackNumberUpdateTime),window.localStorage.setItem("hotsong",JSON.stringify({expies:Date.now()+6e5,result:e.data.playlist}))})).catch((function(t){console.log(t)}))},setUpdatTime:function(t){var e=new Date(t),s=e.getMonth()+1+"月"+e.getDate()+"日";this.updatetime=s}},created:function(){var t=JSON.parse(window.localStorage.getItem("hotsong"));t&&t.expies>Date.now()?(this.hotsong=t.result,this.Top20s=this.hotsong.tracks.slice(0,20),this.setUpdatTime(this.hotsong.trackNumberUpdateTime)):this.getHotsongFn()}}),ot=rt,lt=(s("95a3"),Object(m["a"])(ot,at,it,!1,null,"28ac3f90",null)),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("HomeList"),s("div",{staticClass:"search-bar"},[s("SearchInput",{attrs:{getkeyword:t.keyword,Mode:t.Mode},on:{"translate-keyword":function(e){return t.searchSugFn(e)},focusFn:function(e){t.Mode=e.mode},closeFn:function(e){t.Mode="keyword",t.showkey=!1}}})],1),t.showkey?s("div",{staticClass:"search-result"},["suggest"==t.Mode?s("div",{staticClass:"suggest-word"},[s("h3",[t._v("搜索“"+t._s(t.inputkeyword)+"”")]),s("ul",t._l(t.srchsuggestkeywords,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.searchDetFn(e.keyword)}}},[s("i",{staticClass:"srch"}),s("span",[t._v(t._s(e.keyword))])])})),0)]):t._e(),"keyword"==t.Mode?s("div",{staticClass:"keyword-search"},[s("div",{staticClass:"songlist"},[s("ul",t._l(t.srchSongs,(function(e,n){return s("SongList",{key:n,attrs:{type:t.type,songs:e,currentSong:t.courrntSong},on:{transferId:function(e){return t.$emit("transferId",e)}}})})),1)])]):t._e()]):t._e(),t.showkey?t._e():s("div",{staticClass:"search-hot"},[s("h3",{staticClass:"title"},[t._v("热门搜索")]),s("ul",t._l(t.searchhot,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.searchDetFn(e.first)}}},[t._v(t._s(e.first))])})),0)]),t.showkey?t._e():s("div",{staticClass:"search-history"},[s("ul",t._l(t.historyWords,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.searchDetFn(e)}}},[s("i"),s("div",[s("span",{staticClass:"content"},[t._v(t._s(e))]),s("span",{staticClass:"close"},[s("i",{on:{click:function(s){return s.stopPropagation(),t.delHistoryWords(e)}}})])])])})),0)])],1)},dt=[],ht=(s("a434"),s("2909")),pt=s("5530"),gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SearchInput"},[s("div",{staticClass:"inputcover"},[s("i",{staticClass:"srch"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"search",placeholder:"搜索歌曲、歌手、专辑",autocomplete:"off"},domProps:{value:t.keyword},on:{focus:function(e){return t.$emit("focusFn",t.isNull)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),s("i",{staticClass:"srch-close",on:{click:function(e){return t.closeFn()}}})])])},ft=[],mt={name:"SearchInput",props:["getkeyword","Mode"],data:function(){return{keyword:"",isNull:{mode:"suggest"}}},methods:{closeFn:function(){this.keyword="",this.$emit("closeFn",!0)}},watch:{keyword:function(t){this.$emit("translate-keyword",t)},Mode:function(t){"keyword"==t&&(this.keyword=this.getkeyword)}}},yt=mt,vt=(s("a9ed"),Object(m["a"])(yt,gt,ft,!1,null,"611257b3",null)),wt=vt.exports,St={components:{HomeList:K,SearchInput:wt,SongList:v},props:{courrntSong:Object},data:function(){return{searchhot:null,inputkeyword:"",srchsuggestkeywords:[],showkey:!1,Mode:"suggest",srchSongs:null,keyword:"",type:"search",historyWords:[]}},methods:{searchhotFn:function(){var t=this,e=JSON.parse(window.localStorage.getItem("shot"));e&&e.expies>Date.now()?this.searchhot=e.result:window.axios.get("/search/hot").then((function(e){t.searchhot=e.data.result.hots,window.localStorage.setItem("shot",JSON.stringify({expies:Date.now()+6e5,result:e.data.result.hots}))}))},searchSugFn:function(t){var e=this;"keyword"!=this.Mode&&(this.inputkeyword=t,window.axios.get("/search/suggest",{params:{keywords:t,type:"mobile"}}).then((function(t){e.srchsuggestkeywords=t.data.result.allMatch})).catch((function(t){console.log(t)})))},searchDetFn:function(t){var e=this;this.Mode="keyword",this.keyword=t,this.showkey=!0;var s=Object(pt["a"])({},this.srchSongs);this.srchSongs=null,this.setHistoryWords(t),t?(this.inputkeyword=t,window.axios.get("/search",{params:{keywords:t}}).then((function(t){e.srchSongs=t.data.result.songs})).catch((function(t){console.log(t)}))):this.srchSongs=Object(pt["a"])({},s)},setHistoryWords:function(t){var e=JSON.parse(window.localStorage.getItem("historyWords"));if(e){var s=e.some((function(e){return e==t}));s||e.push(t),this.historyWords=Object(ht["a"])(e),window.localStorage.setItem("historyWords",JSON.stringify(e))}else this.historyWords=[],window.localStorage.setItem("historyWords",JSON.stringify([t])),this.historyWords.push(t)},delHistoryWords:function(t){var e=JSON.parse(window.localStorage.getItem("historyWords"));e.splice(e.indexOf(t),1),this.historyWords=Object(ht["a"])(e),window.localStorage.setItem("historyWords",JSON.stringify(e))}},created:function(){this.searchhotFn(),this.historyWords=JSON.parse(window.localStorage.getItem("historyWords"))},watch:{inputkeyword:function(t){t&&"suggest"==this.Mode&&""!=this.inputkeyword?this.showkey=!0:""==this.inputkeyword&&(this.showkey=!1)}}},bt=St,_t=(s("5bbd"),Object(m["a"])(bt,ut,dt,!1,null,"14844daf",null)),Ct=_t.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({staticClass:"playlist"},"div",t.courrntSong=t.$attrs,!1),[n("transition",{attrs:{name:"loading","enter-active-class":"animated fadeOut","leave-active-class":"animated fadeOut"}},[t.showLoading2?n("div",{staticClass:"loading"},[n("img",{attrs:{src:s("4045"),alt:""}})]):t._e()]),t.songListDetail?[n("div",{staticClass:"header"},[n("div",{staticClass:"back-btn"},[n("i",{staticClass:"fa fa-arrow-left",on:{click:function(e){return t.$router.back()}}})]),n("div",{staticClass:"mask",style:{backgroundImage:"url("+t.songListDetail.coverImgUrl+")"}}),n("div",{staticClass:"fl"},[n("img",{attrs:{src:t.songListDetail.coverImgUrl,alt:""}}),n("span",{staticClass:"playcount"},[n("i",{staticClass:"fa fa-headphones"}),t._v(" "+t._s(t.playCount(t.songListDetail.playCount))+" ")]),n("span",{staticClass:"icon"},[t._v("歌单")])]),n("div",{staticClass:"fr"},[n("h3",[t._v(t._s(t.songListDetail.name))]),n("img",{attrs:{src:t.songListDetail.creator.avatarUrl,alt:""}}),n("span",[t._v(t._s(t.songListDetail.creator.nickname))])])]),n("div",{staticClass:"info"},[n("div",{staticClass:"tags"},[n("span",[t._v("标签：")]),t._l(t.songListDetail.tags,(function(e,s){return n("i",{key:s},[t._v(t._s(e))])}))],2),n("div",{staticClass:"desc",class:{show:t.showMoreDesc}},[n("span",[t._v("简介：")]),n("span",[t._v(t._s(t.songListDetail.description))])]),n("div",{staticClass:"more"},[n("span",{on:{click:function(e){t.showMoreDesc=!t.showMoreDesc}}},[t.showMoreDesc?n("i",{staticClass:"fa fa-angle-up"}):n("i",{staticClass:"fa fa-angle-down"})])])]),n("div",{staticClass:"song-list"},[n("h3",[t._v("歌曲列表")]),t.songListDetail?n("ul",t._l(t.songListDetail.tracks,(function(e,s){return n("SongList",{key:s,attrs:{type:t.type,songs:e,currentSong:t.courrntSong.courrntSong},on:{transferId:function(e){return t.$emit("transferId",e)}}},[n("span",[t._v(t._s(s+1))])])})),1):t._e()])]:t._e()],2)},kt=[],xt={components:{SongList:v},data:function(){return{songListId:this.$route.query.id,songAllId:[],songListDetail:null,songAll:null,showMoreDesc:!1,type:"hot",currentTabComponent:v,showLoading2:!1,courrntSong:null}},methods:{getSongListDetail:function(t,e){var s=e;s.axios.get("/playlist/detail",{params:{id:t}}).then((function(e){s.songListDetail=e.data.playlist,window.localStorage.setItem("sl-"+t,JSON.stringify({expies:Date.now()+6e5,result:e.data.playlist}))})).catch((function(t){console.log(t)}))},getStorageFn:function(t,e){var s=e,n=JSON.parse(window.localStorage.getItem("sl-"+t));n&&n.expies>Date.now()?s.songListDetail=n.result:s.getSongListDetail(t,s)},playCount:function(t){return t>1e8?t/1e8>0?(t/1e8).toFixed(1)+"亿":t+"":t>1e4&&t/1e4>0?(t/1e4).toFixed(1)+"万":t+""}},beforeRouteEnter:function(t,e,s){var n=Number(t.query.id),a=JSON.parse(window.localStorage.getItem("sl-"+n));if(a&&a.expies>Date.now()){var i=a.result;s((function(e){e.showLoading2=!1,e.songListId=n,e.songListDetail=i,e.courrntSong=t.query.courrntSong}))}else window.axios.get("/playlist/detail",{params:{id:n}}).then((function(e){var a=e.data.playlist;window.localStorage.setItem("sl-"+n,JSON.stringify({expies:Date.now()+6e5,result:e.data.playlist})),s((function(e){e.showLoading2=!1,e.songListId=Number(t.query.id),e.songListDetail=a,e.courrntSong=t.query.courrntSong}))})).catch((function(t){console.log(t)}))},beforeRouteLeave:function(t,e,s){this.songListDetail=null,s()},created:function(){}},It=xt,Ot=(s("9a18"),Object(m["a"])(It,Lt,kt,!1,null,"7e254827",null)),Pt=Ot.exports;n["a"].use(T["a"]);var Ft=[{path:"/",name:"Home",component:nt},{path:"/hot",name:"Hot",component:ct},{path:"/search",name:"Search",component:Ct},{path:"/playlist",name:"Playlist",component:Pt,meta:{requiresAuth:!0}}],Dt=new T["a"]({routes:Ft}),Mt=Dt;n["a"].config.productionTip=!1,new n["a"]({router:Mt,render:function(t){return t(M)}}).$mount("#app")},"5bbd":function(t,e,s){"use strict";var n=s("53a0"),a=s.n(n);a.a},6182:function(t,e,s){},"6aca":function(t,e,s){},"7c55":function(t,e,s){"use strict";var n=s("2395"),a=s.n(n);a.a},"7e70":function(t,e,s){"use strict";var n=s("6aca"),a=s.n(n);a.a},"803f":function(t,e,s){t.exports=s.p+"img/playing.ab1993a5.svg"},8420:function(t,e,s){},"95a3":function(t,e,s){"use strict";var n=s("95f9"),a=s.n(n);a.a},"95f9":function(t,e,s){},"9a18":function(t,e,s){"use strict";var n=s("cd99"),a=s.n(n);a.a},a9ed:function(t,e,s){"use strict";var n=s("cbf0"),a=s.n(n);a.a},cbf0:function(t,e,s){},cd99:function(t,e,s){},d040:function(t,e,s){},d557:function(t,e,s){"use strict";var n=s("6182"),a=s.n(n);a.a},d615:function(t,e,s){"use strict";var n=s("13d7"),a=s.n(n);a.a},eb96:function(t,e,s){"use strict";var n=s("094b"),a=s.n(n);a.a},ecf6:function(t,e,s){"use strict";var n=s("d040"),a=s.n(n);a.a}});
//# sourceMappingURL=app.e10e5e9a.js.map