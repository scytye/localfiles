/*整体结构*/
sections = document.getElementsByTagName("section")[0];
weatherCon = document.getElementsByClassName("weather-con");
var wrap = document.getElementById("wrap");
    city = document.getElementsByClassName("city")[0];
    cityNote = document.getElementsByClassName("city-note")[0];
    searchPage = document.getElementsByClassName("search-page")[0];
    manger = document.getElementsByClassName("manger-page")[0];
    searchBtn = document.getElementsByClassName("search")[0];
    plus = document.getElementsByClassName("ico_plus")[0];
    cancels = document.getElementsByClassName("ico_cancel")[0];
    returns= document.getElementById("big-arrow");
    oul = manger.getElementsByTagName("ul")[0];
    cityLi = manger.getElementsByTagName("li");
    change = document.getElementsByClassName("ico_change")[0];
    addTips = document.getElementsByClassName("add_tips")[0];
    inputs = searchPage.getElementsByTagName("input")[0];
    dls = searchPage.getElementsByTagName("dl")[0];
    listCon = document.getElementsByClassName("city-list-con")[0];
    uls = listCon.getElementsByTagName("ul")[0];
    searhHead = searchPage.getElementsByClassName("page-hd")[0];
    emCity = dls.getElementsByTagName("em");
htmlCon = weatherCon[0].innerHTML;
dls.style.top = searhHead.offsetTop + searhHead.clientHeight + 'px';
listCon.style.top = searhHead.offsetTop + searhHead.clientHeight + dls.clientHeight+ 'px';
var del=[];
for(var i=0;i<cityLi.length;i++){
    del.push(cityLi[i].firstElementChild)
}
var delBtn = manger.getElementsByClassName("del_button");
     pen = returns.nextElementSibling.children[1];
manger.style.width = window.innerWidth +'px';
manger.style.height = window.innerHeight+ 'px';
manger.style.left = sections.offsetLeft-window.innerWidth +'px';
searchPage.style.left = manger.offsetLeft +'px';
searchPage.style.height = window.innerHeight + 'px';
searchPage.style.width = window.innerWidth +'px';
searchPage.style.top = manger.clientHeight + 'px';
searchBtn.addEventListener("touchend", function (e){
    console.log(e.target);
    manger.style.left = 0;
    searchPage.style.left = 0;
    manger.style.display="block";
    cityLi = manger.getElementsByTagName("li");
})
plus.addEventListener("touchstart", function () {
    clearInterval(addTips.timer)
    addTips.style.top = window.innerHeight +'px';
    cityLi = manger.getElementsByTagName("li");
    searchPage.style.display="block";
    dls.style.top = searhHead.offsetTop + searhHead.clientHeight + 'px';
    if(cityLi.length>=5){
        addTips.innerHTML = "最多只能添加5个城市";
        sport()
    }else{
        searchPage.style.top = 0;
    }
})
var cityHtml = cityLi[0].children[1].innerHTML;
var note = "";
if(cityHtml.indexOf("市")){
    cityHtml = cityHtml.split("市")[0];
}
for(var i=0;i<cityLi.length;i++){
    note += '<em></em>';
}
cityNote.innerHTML = note;
var ems = cityNote.getElementsByTagName("em");
ems[0].className = "white";
cityLi[0].style.backgroundColor = "#d3d8de";
creatHeight(weatherCon);
getbody(weatherCon[0],cityHtml,wea);
addTips.style.top = window.innerHeight +'px';
addTips.style.left = window.innerWidth/2-addTips.clientWidth/2 +'px';
cancels.addEventListener("touchstart",function(){
    clearInterval(addTips.timer)
    cityLi  = manger.getElementsByTagName("li");
    if(cityLi.length<1){
        sport()
    }else{
        searchPage.style.top = window.innerHeight + 'px';
    }
})
returns.addEventListener("touchstart", function(){
    manger.style.left = -window.innerWidth +'px';
    searchPage.style.left = -window.innerWidth + "px";
})
pen.addEventListener("touchstart", function () {
    for(var i=0;i<del.length;i++){
        del[i].style.display = "inline-block";
    }
    returns.style.display = "none";
    this.nextElementSibling.style.display = "none";
    this.style.display = "none";
})
dele(del,delBtn);
change.addEventListener("touchstart", function () {
    del=[];
    for(var i=0;i<cityLi.length;i++){
        del.push(cityLi[i].firstElementChild);
    }
    for(var i=0;i<del.length;i++){
        del[i].style.display = 'none';
        delBtn[i].style.display = "none";
    }
    returns.style.display="block";
    pen.style.display = "inline-block";
    this.previousElementSibling.style.display = "inline-block"
})
for(var i=0;i<cityLi.length;i++){
    cityLi[i].index = i;
    cityLi[i].addEventListener("touchstart", function (){
        for(var k=0;k<del.length;k++){
            console.log(getComputedStyle(del[k]).display)
            if(getComputedStyle(del[k]).display == "inline-block"){
                return;
            }
        }
        for(var j=0;j<cityLi.length;j++){
            cityLi[j].style.backgroundColor="#fff";
            ems[j].className="";
        }
        ems[this.index].className = "white";
        manger.style.left = -window.innerWidth+'px';
        this.style.backgroundColor = "#d3d8de";
        css(sections,"translateX",-this.index*window.innerWidth);
        city.innerHTML = cityLi[this.index].children[1].innerHTML;
        getbody(weatherCon[this.index],city.innerHTML,wea);
    })
}
var changeEm = inputs.nextElementSibling
inputs.addEventListener("focus", function () {
    searhHead.style.top = -searhHead.clientHeight/2+'px';
    dls.style.display = "none";
    listCon.style.top = searhHead.offsetTop + searhHead.clientHeight +'px';
    uls.innerHTML= "<li class='no_value' style='height: 7rem'><div style='width: 100%;position: absolute;top: 6.4rem; '>请输入城市名</div></li> ";
    changeEm.innerHTML = "取消";
    changeEm.style.textIndent = 1 +'rem';
})
//inputs.addEventListener("blur", function () {
//    this.value = "";
//    searhHead.style.top = -searhHead.clientHeight/2+'px';
//    searhHead.style.top = 0;
//    dls.style.display = "block";
//    listCon.style.top =dls.offsetTop+dls.offsetHeight +'px';
//    uls.innerHTML= "";
//    changeEm.innerHTML = '<span><i class="ico_search"></i></span>';
//    changeEm.style.textIndent = 0;
//})
changeEm.addEventListener("touchend", function () {
    inputs.value= "";
    if(changeEm.innerHTML == "取消"){
        searhHead.style.top = 0;
        dls.style.display = "block";
        listCon.style.top = dls.offsetTop+dls.offsetHeight +'px';
        uls.innerHTML= "";
        this.innerHTML = '<span><i class="ico_search"></i></span>';
        this.style.textIndent = 0;
    }else{
        inputs.focus();
        searhHead.style.top = -searhHead.clientHeight/2+'px';
        dls.style.display = "none";
        listCon.style.top = searhHead.offsetTop + searhHead.clientHeight +'px';
        uls.innerHTML= "<li class='no_value' style='height: 7rem'><div style='width: 100%;position: absolute;top: 6.4rem; '>请输入城市名</div></li> ";
        changeEm.innerHTML = "取消"
        this.style.textIndent = 1 +'rem';
    }
})
inputs.addEventListener("input",function () {
    css(uls,"translateY",0)
    var value = inputs.value;
    var city1 = "";
    dls.style.display = "none";
    if(value != ""){
        for(var i=0;i<address.length;i++){
            if(address[i].cityZh.indexOf(value) != -1 || address[i].cityEn.indexOf(value) != -1){
                city1 += "<li style='border-bottom: 1px solid #dfdfdf'>"+address[i].cityZh+"</li>"
            }
        }
        if(city1 == ""){
            city1 = "<li class='no_result' style='height: 7rem'><div style='width: 100%;position: absolute;top: 6.4rem; '>很遗憾，没有这个城市的信息!</div></li> ";
        }
    }else{
        city1 = "<li class='no_value' style='height: 7rem'><div style='width: 100%;position: absolute;top:6.4rem;'>请输入城市名</div></li> ";
    }
    uls.innerHTML = city1;
})
uls.addEventListener("touchstart", function (e) {
    e.preventDefault();
})
for(var i=0;i<emCity.length;i++){
    emCity[i].addEventListener("touchend", function () {
            searchPage.style.top = window.innerHeight +'px';
            manger.style.left = -window.innerWidth +'px';
            searchPage.style.left = -window.innerWidth + 'px';
            uls.innerHTML = "";
            var listHtml = this.innerHTML;
            for(var j=0;j<cityLi.length;j++){
                if(listHtml == cityLi[j].children[1].innerHTML){
                    return;
                }
            }
            var divs = document.createElement("div");
            divs.className = "weather-con";
            divs.innerHTML  = htmlCon;
            sections.appendChild(divs);
            weatherCon = sections.getElementsByClassName("weather-con");
            cityNote.innerHTML +=  "<em></em>";
            sections.style.width = weatherCon.length*window.innerWidth +'px';
            ems = cityNote.getElementsByTagName("em");
            for(var m=0;m<ems.length;m++){
                ems[m].className = "";
            }
            ems[ems.length-1].className = "white";
            city.innerHTML = listHtml;
            oul.innerHTML += '<li>'+
                '<span class="ico_del"></span>'+
                '<em style="display: inline-block">'+listHtml+'</em>'+
                '<span class="del_button">删除</span>'+
                '</li>'
            for(var k=0;k<weatherCon.length;k++){
                weatherCon[k].style.left = k*window.innerWidth +'px';
            }
            cityLi = oul.getElementsByTagName("li");
            del = [];
            for(var n=0;n<cityLi.length;n++){
                del.push(cityLi[n].firstElementChild)
            }
            delBtn = manger.getElementsByClassName("del_button")
            dele(del,delBtn)
            creatHeight(weatherCon);
            getbody(weatherCon[weatherCon.length-1],this.innerHTML,wea)
            css(sections,"translateX",-weatherCon[weatherCon.length-1].offsetLeft);
    })
}

/*整体框架结束*/
/*搜索滑动*/
css(uls,"translateZ",0.01);
var ulstart=0;
     ulEle=0;
     ulH = 0;
     uldate1=0;
     uldate1=0
uls.addEventListener("touchstart", function (e) {
    ulH = uls.clientHeight;
    ulstart = e.changedTouches[0].pageY;
    ulEle = css(uls,"translateY");
    uldate1 = new Date().getTime();
})
uls.addEventListener("touchmove", function (e) {
    var ulnow = e.changedTouches[0].pageY;
    var uldisY = ulnow - ulstart;
    if(uldisY>0){
        uldisY=0
    }else if(uldisY>ulH){
        uldisY = ulH;
    }
    css(uls,"translateY",uldisY);
    ulEle = uldisY;
})
uls.addEventListener("touchend", function (e) {
    uldate2 = new Date().getTime();
    if(uldate2-uldate1<300 && e.target.innerHTML){
        searchPage.style.top = window.innerHeight +'px';
        manger.style.left = -window.innerWidth +'px';
        searchPage.style.left = -window.innerWidth + 'px';
        inputs.value = "";
        searhHead.style.top = 0;
        dls.style.display = "block";
        listCon.style.top = searhHead.offsetTop +  searhHead.clientHeight + dls.clientHeight +'px';
        var listHtml = e.target.innerHTML;
        uls.innerHTML = "";
        for(var j=0;j<cityLi.length;j++){
            if(listHtml == cityLi[j].children[1].innerHTML){
                return;
            }
        }
        var divs = document.createElement("div");
        divs.className = "weather-con";
        divs.index = weatherCon.length+1;
        divs.innerHTML  = htmlCon;
        sections.appendChild(divs);
        weatherCon = sections.getElementsByClassName("weather-con");
        cityNote.innerHTML +=  "<em></em>";
        sections.style.width = weatherCon.length*window.innerWidth +'px';
        ems = cityNote.getElementsByTagName("em");
        for(var m=0;m<ems.length;m++){
            ems[m].className = "";
        }
        ems[ems.length-1].className = "white";
        city.innerHTML = listHtml;
        oul.innerHTML += '<li>'+
            '<span class="ico_del"></span>'+
            '<em style="display: inline-block">'+listHtml+'</em>'+
            '<span class="del_button">删除</span>'+
            '</li>'
        for(var k=0;k<weatherCon.length;k++){
            weatherCon[k].style.left = k*window.innerWidth +'px';
        }
        cityLi = oul.getElementsByTagName("li");
        del = [];
        for(var n=0;n<cityLi.length;n++){
            del.push(cityLi[n].firstElementChild)
        }
        delBtn = manger.getElementsByClassName("del_button")
        dele(del,delBtn)
        creatHeight(weatherCon);
        console.log(e.target.innerHTML)
        getbody(weatherCon[weatherCon.length-1],e.target.innerHTML,wea)
        css(sections,"translateX",-weatherCon[weatherCon.length-1].offsetLeft);
    }
})
/*滑动事件结构*/
var startX=0;//手指摁下时的坐标
var startY=0;
var positionX=0;//元素摁下时的坐标
var positionY=0;
var lastX=0;//最后一次与上次的路程差
var lastY=0;
var lastDate = 0;//上一次的时间
var disDate = 0;//时间差值
var prevposX=0;//上一次移动的距离
var prevposY=0;
var str = "";
var boxH = document.getElementsByClassName("info-box")[0].clientHeight;
var head1 = document.getElementsByClassName("header")[0];
css(sections,"translateZ","0.01");
var scrollBar = document.createElement("div");
scrollBar.className = "scrollBar";
wrap.appendChild(scrollBar);
scrollBar.style.height = (wrap.clientHeight*wrap.clientHeight)/sections.clientHeight+'px';
var cons;
var newsDate1=0;
var newsDate2=0;
sections.addEventListener("touchstart", function (e) {
    cons = sections.getElementsByClassName("news-con");
    weatherCon = sections.getElementsByClassName("weather-con");
    sections.style.width = weatherCon.length*window.innerWidth +'px'
    boxH = document.getElementsByClassName("info-box")[0].clientHeight;
    clearInterval(sections.timer)
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;
    positionX = css(sections,"translateX");
    positionY = css(sections,"translateY");
    lastDate = new Date().getTime();
    prevposX = positionX;
    prevposY = positionY;
    disDate = 0;
    lastX=0;
    lastY =0; //差值重置为0；
})
sections.addEventListener("touchmove", function (e) {
    var nowTime = new Date().getTime();
    var nowX = e.changedTouches[0].pageX;
    var nowY = e.changedTouches[0].pageY;
    var disX = nowX-startX;
    var disY = nowY-startY;
    if(Math.abs(disX)>Math.abs(disY)){
        if(Math.abs(disX)>=5){
            str = "左右滑动"
            var translateX = Math.round(disX+positionX);
            if(translateX>=0) {
                translateX=0
            }else if(translateX<=-sections.clientWidth+window.innerWidth){
                translateX=-sections.clientWidth+window.innerWidth
            }
            css(sections,"translateY",prevposY);
            css(sections,"translateX",translateX);
            lastX = translateX - prevposX
            prevposX = translateX
        }
    }else{
        str = "上下滑动";
        scrollBar.style.opacity = 1;
        var translateY = Math.round(disY+positionY);
        if(translateY>=0){
            translateY=0
        }else if(translateY<=-sections.clientHeight+ wrap.clientHeight){
            translateY=-sections.clientHeight+ wrap.clientHeight
        }
        var scale4=-(translateY/(boxH*2)).toFixed(1);
        if(scale4>0.5){scale4=0.5}
        head1.style.background='rgba(0,0,0,'+scale4+')';
        css(sections,"translateX",prevposX);
        css(sections,"translateY",translateY)
        lastY = translateY - prevposY;
        prevposY = translateY;
        css(scrollBar,"translateY",-translateY*wrap.clientHeight/sections.clientHeight);
    }
    disDate = nowTime - lastDate;
    lastDate = nowTime;
})
sections.addEventListener("touchend",function() {
    var type = "easeOut";
    if(str == "左右滑动"){
        var v1=Math.round(lastX/disDate);
            sX = css(sections,"translateX")
            page = Math.abs(Math.round(sX/window.innerWidth));
        if(disDate<=0){v1=0};
        var targetS1 = Math.round(v1*20+ sX)
        var scale = Math.abs(targetS1%window.innerWidth/window.innerWidth)
        var scale2 =Math.abs(targetS1/window.innerWidth)
        if(scale>0.6){
            if(css(sections,"translateX")<0){
                targetS1 = -Math.ceil(scale2)*window.innerWidth
            }else{
                targetS1 =-Math.floor( scale2)*window.innerWidth
            }
        }else{
            targetS1 =-Math.floor( scale2)*window.innerWidth
        }
        var changeName = cityLi[(-targetS1/window.innerWidth)].children[1].innerHTML;
        city.innerHTML = changeName;
        tween({
            el:sections,
            target:{translateX:targetS1},
            time:Math.ceil(Math.abs((targetS1-css(sections,"translateX")*1.8))),
            type:type,
            callBack: function (){
                for(var i=0;i<ems.length;i++){
                    ems[i].className = "";
                    cityLi[i].style.backgroundColor="#fff"
                }
                ems[(-targetS1/window.innerWidth)].className = "white";
                cityLi[-targetS1/window.innerWidth].style.backgroundColor="#e8eaee";
                getbody(weatherCon[(-targetS1/window.innerWidth)],changeName,wea);
                var scripts = document.createElement("script");
                scripts.src="http://api.jisuapi.com/news/get?channel=头条&start="+(page*5)+"&num=5&appkey=cbd4236b93cc48df&callback=fn"+(1+page)+"";
                sections.appendChild(scripts);
            }})
    }else if(str == "上下滑动"){
        var v2 =Math.round(lastY/disDate);
            newconLeft = css(sections,"translateX");
            sY = css(sections,"translateY");
        if(disDate<=0){v2=0}
        var targetS2 = Math.round(v2*20+sY);
        if(targetS2>-boxH && targetS2 <= -boxH*0.6){
            targetS2 =-boxH;
        }
        weaPage = Math.abs(Math.round(newconLeft/window.innerWidth));
        hoursTop = weatherCon[weaPage].getElementsByClassName("hours-temp")[0].offsetTop;
        exponentsH = weatherCon[weaPage].getElementsByClassName("exponent")[0].offsetHeight;
        console.log(sY>-hoursTop,sY<-hoursTop+exponentsH,lastY<0)
        var oscript = document.createElement("script");
        oscript.src="http://api.jisuapi.com/news/get?channel=头条&start="+(weaPage*5)+"&num=5&appkey=cbd4236b93cc48df&callback=fn"+(1+weaPage)+"";
        if(sY<-hoursTop+100 && lastY<0 && sY>-hoursTop){
            sections.appendChild(oscript);
        }
        tween({
            el:sections,
            target:{translateY:targetS2},
            time:Math.ceil(Math.abs((targetS2-css(sections,"translateY")*2.0))),
            type:type,
            callBack: function () {
                scrollBar.style.opacity = 0;
            }
        })
    }
})
if(cons){
    for(var i=0;i<cons.length;i++){
        cons[i].addEventListener("touchstart", function () {
            newsDate1 = new Date().getTime();
        })
        cons[i].addEventListener("touchend", function (e) {
            newsDate2 = new Date().getTime();
            if(newsDate2-newsDate1<300 && e.target.getAttribute("href")){
                window.location.href = e.target.getAttribute("href")
            }
        })
    }
}
function creatHeight(weatherCon){
    var arr=[];
    var obj={};
    for(var i= 0;i<weatherCon.length;i++){
        obj["h"+i]=0;
        weatherCon[i].index =i;
        weatherCon[i].style.left = i*wrap.clientWidth + 'px';
        sections.style.width = weatherCon.length*wrap.clientWidth +'px';
        weatherCon[i].style.width = wrap.clientWidth + 'px';
        arr.push(weatherCon[i].getElementsByClassName("sence"))
        for(var j=0;j<arr[i].length;j++){
            arr[i][0].style.height = wrap.clientHeight-arr[i][1].clientHeight +'px';
            if(arr[i][j-1]){
                if(j-1>0){
                    arr[i][j].style.top = arr[i][j-1].clientHeight+10+arr[i][j-1].offsetTop +'px';
                }else if((j-1)==0){
                    arr[i][j].style.top = arr[i][j-1].clientHeight+arr[i][j-1].offsetTop +'px';
                }else{
                    arr[i][j].style.top = 0 +'px';
                }
            }
            obj["h"+i] += arr[i][j].clientHeight;
        }
        weatherCon[i].style.height = obj["h"+i]+40+'px';
    }
    sections.style.height = weatherCon[0].clientHeight+'px';
}
function dele(del,delBtn){
    for(var i=0;i<del.length;i++){
        del[i].addEventListener("touchstart",function(e){
            for(var j=0;j<delBtn.length;j++){
                delBtn[j].style.display = "none";
                del[j].className = "ico_del"
            }
            this.className = "ico_rotate_del";
            this.nextElementSibling.nextElementSibling.style.display = "inline-block"
            e.stopPropagation()
        })
    }
    for(var i=0;i<delBtn.length;i++){
        delBtn[i].index = i;
        delBtn[i].addEventListener("touchstart", function (e) {
            this.parentNode.parentNode.removeChild(this.parentNode);
            cityLi = oul.getElementsByTagName("li");
            if(cityLi.length>=1){
                sections.removeChild(weatherCon[this.index])
                cityNote.removeChild(ems[this.index])
                del.splice(this.index,1);
                weatherCon = sections.getElementsByClassName("weather-con");
                cityLi = manger.getElementsByTagName("li");
                ems = cityNote.getElementsByTagName("em");
                for(var i=0;i<cityLi.length;i++){
                    weatherCon[i].style.left = i*window.innerWidth +'px';
                    sections.style.width = cityLi.length*window.innerWidth + 'px';
                }
                var classEle=[]
                for(var i=0;i<ems.length;i++){
                    classEle.push(ems.className)
                }
                var i = judgeNull(classEle);
                if(judgeNull(classEle)){
                    city.innerHTML = cityLi[i].children[1].innerHTML;
                    getbody(weatherCon[i],cityLi[i].children[1].innerHTML,wea);
                    if(i-1>=0){
                        css(sections,"translateX",-weatherCon[i-1].offsetLeft)
                    }else{
                        css(sections,"translateX",0)
                    }
                }else {
                    city.innerHTML = cityLi[0].children[1].innerHTML;
                    getbody(weatherCon[0],cityLi[0].children[1].innerHTML,wea);
                    css(sections,"translateX",0)
                }
            }else{
                searchPage.style.top = 0;
                sections.innerHTML="";
                cityNote.innerHTML ="";
                city.innerHTML = ""
            }
            e.stopPropagation();
        })
    }
}
function judgeNull(arr){
    var s = ""
    for(var i=0;i<arr.length;i++){
        if(arr[i]){
            s = i;
            break
        }
    }
    return s;
}
function  sport(){
    tween({
        el:addTips,
        target:{top:window.innerHeight*0.8},
        time: 300,
        type: "linear",
        callBack: function () {
            tween({
                el:addTips,
                target:{top:window.innerHeight*0.8},
                time: 1000,
                type: "linear",
                callBack: function () {
                    tween({
                        el: addTips,
                        target: {top: window.innerHeight},
                        time: 300,
                        type: "linear"
                    })
                }
            })
        }
    })
}
function  addScript(sections,lastY,weatherCon){

}