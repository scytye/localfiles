function getImg(d,str,num){
    var n=0;
    //str = "78-78" || "108-108";num:0/1
    switch (d){
        case "晴":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/qing_"+num+".png";
            break;
        case "多云":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/duoyun_"+num+".png";
            break;
        case "阴":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/yin_"+num+".png";
            break;
        case "阵雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/zhenyu_"+num+".png";
            break;
        case "雷阵雨":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/heizhenyu_"+num+".png";
            break;
        case "雷阵雨伴有冰雹":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/bingbao_"+num+".png";
            break;
        case "雨夹雪":
            n=  "http://php.weather.sina.com.cn/images/yb3/"+str+"/yujiaxue_"+num+".png" ;
            break;
        case "小雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/xiaoyu_"+num+".png";
            break;
        case "中雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/zhongyu_"+num+".png";
            break;
        case "大雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/dayu_"+num+".png";
            break;
        case "暴雨":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/baoyu_"+num+".png";
            break;
        case "大暴雨":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/baoyu_"+num+".png";
            break;
        case "特大暴雨":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/baoyu_"+num+".png";
            break;
        case "阵雪":
            n=  n="http://php.weather.sina.com.cn/images/yb3/"+str+"/zhenxue_"+num+".png";;
            break;
        case "小雪":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/xiaoxue_"+num+".png";;
            break;
        case "中雪":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/zhongxue_"+num+".png";
            break;
        case "大雪":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/daxue_"+num+".png";
            break;
        case "暴雪":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/baoxue_"+num+".png";
            break;
        case "冻雨":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/dongyu_"+num+".png";
            break;
        case "沙尘暴":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/shachenbao_"+num+".png";
            break;
        case "小到中雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/zhongyu_"+num+".png";
            break;
        case "中到大雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/dayu_"+num+".png";
            break;
        case "大到暴雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/baoyu_"+num+".png";
            break;
        case "暴雨转大暴雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/baoyu_"+num+".png";
            break;
        case "大暴雨转特大暴雨":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/baoyu_"+num+".png";
            break;
        case "小到中雪":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/zhongxue_"+num+".png";
            break;
        case "中到大雪":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/daxue_"+num+".png";
            break;
        case "大到暴雪":
            n= "http://php.weather.sina.com.cn/images/yb3/"+str+"/baoxue_"+num+".png";
            break;
        case "浮尘":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/fuchen_"+num+".png";
            break;
        case "扬沙":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/yangsha_"+num+".png";
            break;
        case "强沙尘暴":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/qiangchachenbao_"+num+".png";
            break;
        case "浓雾":
        case "强浓雾":
        case "特强浓雾":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/nongwu_"+num+".png";
            break;
        case "霾":
        case "中度霾":
        case "重度霾":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/mai_"+num+".png";
            break;
        case "大雾":
        case "雾":
            n="http://php.weather.sina.com.cn/images/yb3/"+str+"/wu_"+num+".png";
            break;
        default:
            n= "image/icon/wna.png"
            break;
    }

    return n;
    }
function getBgImg(d,time){
    var n=0;
    var str="night"
    if(time>6 && time <18){
        str="day"
    }
    switch (d){
        case "晴":
            n='image/bg/bg_sunny_'+str+'.jpg';
            break;
        case "多云":
            n='image/bg/bg_cloudy_'+str+'.jpg';
            break;
        case "阴":
            n='image/bg/bg_overcast.jpg';
            break;
        case "阵雨":
        case "雷阵雨":
        case"雷阵雨伴有冰雹":
            n='image/bg/bg_thunder_storm.jpg';
            break;
        case"小雨":
        case"中雨":
        case"暴雨":
        case"大雨":
        case"大暴雨":
        case"特大暴雨":
        case "小到中雨":
        case "中到大雨":
        case "大到暴雨":
        case "暴雨转大暴雨":
        case "大暴雨转特大暴雨":
            n='image/bg/bg_rain_'+str+'.jpg';
            break;
        case "雨夹雪":
        case "阵雪":
        case "小雪":
        case "中雪":
        case "大雪":
        case "暴雪":
        case "冻雨":
        case "小到中雪":
        case "中到大雪":
        case "大到暴雪":
            n='image/bg/bg_snow_'+str+'.jpg';
            break;
        case "浮尘":
        case "扬沙":
        case "强沙尘暴":
        case "沙尘暴":
            n='image/bg/bg_sand_storm.jpg';
            break;
        case "雾":
        case "浓雾":
        case "强浓雾":
        case "大雾":
        case "特强浓雾":
            n='image/bg/bg_fog_'+str+'.jpg';
            break;
        case "霾":
        case "中度霾":
        case "重度霾":
            n='image/bg/bg_fog_and_haze.jpg';
            break;
        default:
            n= "image/bg/bg_na.png"
            break;
    }
    return n;
}
function formDay(d){
    var timeNow = new Date()
    var week = ["周日","周一","周二","周三","周四","周五","周六"];
    var arr = d.split("-");
    timeNow.setFullYear(arr[0])
    timeNow.setMonth(arr[1]-1)
    timeNow.setDate(arr[2])
    var s = timeNow.getDay();
    return week[s];
}
function formNowDay(d){
    var str = "";
    var n = new Date().getDay();
    var week = ["周日","周一","周二","周三","周四","周五","周六"];
    if(formDay(d) == week[n]){
        str = "今天";
    }
    if(formDay(d) == week[n+1]){
        str = "明天"
    }
    return str;
}
function getlevel(aqi){
    var n=1;
    if(aqi>50&&aqi<101) {
        n = 2;
    }else if(aqi>100 && aqi<151){
        n = 3
    }else if(aqi>150 && aqi<201){
        n = 4
    }else if(aqi>200 && aqi<251){
        n =5
    }else if(aqi>250 && aqi< 301){
        n=6
    }else if(aqi>300){
        n=7;
    }else{
        n=1;
    }
    return n;
}
function getDataMxOrMn(arr,type){
    var arr1=[]
    for(var i=0;i<arr.length;i++){
        if(type == "max"){
            arr1.push(arr[i].tmp.max)
        }else{
            arr1.push(arr[i].tmp.min)
        }
    }
    return arr1;
}
function getAlarms(d){
    var level = "";
    if(d == "蓝色"){
        level = 2;
    }else if(d == "黄色"){
        level = 3;
    }else if(d == "橙色"){
        level = 4;
    }else if(d == "红色"){
        level = 5;
    }
    return level;
}
function getMaxOrMinNum(arr,type){
    var n = parseFloat(arr[0])
    var m= parseFloat(arr[0])
    for( var i = 0; i<arr.length;i++ ){
        if(arr[i]>n){
            n=parseFloat(arr[i])
        }
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i]<m){
            m=parseFloat(arr[i])
        }
    }
    if(type == "max"){
        return n
    }else{
        return m;
    }
}
function newsCon(arr,news){
    news.innerHTML = ''
    for(var i=0;i<arr.length;i++){
        var newsul  = document.createElement("ul");
        var newsli = document.createElement("li");
        var oa1 = document.createElement("a");
        var oa2 = document.createElement("a");
        oa1.innerHTML = arr[i].title;
        oa2.innerHTML = arr[i].src;
        oa1.href = arr[i].url;
        oa2.href = arr[i].url;
        oa1.target = "_blank";
        oa2.target = "_blank"
        newsli.appendChild(oa1);
        newsli.appendChild(oa2)
        newsli.className = "oneImg-ul"
        newsul.className = "clearfix";
        newsul.appendChild(newsli)
        if(arr[i].pic.length){
            var li1 = document.createElement("li");
            var oa3 = document.createElement("a");
            oa3.href = arr[i].url;
            var imgs = document.createElement("img")
            imgs.src = arr[i].pic;
            oa3.appendChild(imgs)
            oa3.target = "_blank"
            li1.appendChild(oa3)
            li1.className = "oneImg-li";
            newsul.appendChild(li1)
        }else{
            newsli.className = "noImg-ul"
        }
        news.appendChild(newsul)
    }
}
var sections = document.getElementsByTagName("section")[0];
var weatherCon = document.getElementsByClassName("weather-con");
function fn1(data){
    var news = weatherCon[0].getElementsByClassName("news-con")[0];
    var resultarr = data.result.list;
    newsCon(resultarr,news)
}
function fn2(data){
    var news = weatherCon[1].getElementsByClassName("news-con")[0];
    var resultarr = data.result.list;
    newsCon(resultarr,news)
}
function fn3(data){
    var news = weatherCon[2].getElementsByClassName("news-con")[0];
    var resultarr = data.result.list;
    newsCon(resultarr,news)
}
function fn4(data){
    var news = weatherCon[3].getElementsByClassName("news-con")[0];
    var resultarr = data.result.list;
    newsCon(resultarr,news)
}
function fn5(data){
    var news = weatherCon[4].getElementsByClassName("news-con")[0];
    var resultarr = data.result.list;
    newsCon(resultarr,news)
}
function makeUp(w){
    var html=''
    if(w>60){
        html="控油"
    }else{
        html="保湿"
    }
    return html;
}
