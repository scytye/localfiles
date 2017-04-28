/*模块内容搭建*/
var wea = document.getElementsByClassName("weather")[0];
function newsfn(data,cons){
    var arr = data.result.list;
    cons.innerHTML= "";
    newsCon(arr,cons);
}
function getbody(weaCon,cityHtml,wea){
    var infoBox = weaCon.getElementsByClassName("info-box")[0];
    var single = weaCon.getElementsByClassName("single");
    var tabs = weaCon.getElementsByClassName("tabs")[0];
    var weekline = weaCon.getElementsByClassName("week-line")[0];
    var weekWea = weaCon.getElementsByClassName("week-weather")[0]
    var odiv = weekWea.getElementsByTagName("div")[0];
    var str = odiv.offsetWidth;
    weekline.height = odiv.offsetHeight;
    weekline.width = weekWea.offsetWidth;
    var exponent = weaCon.getElementsByClassName("exponent")[0];
    var featureUl = weaCon.getElementsByClassName("featureUl")[0];
    var srcNow = "https://free-api.heweather.com/v5/weather?city="+cityHtml+"&key=47cc399e1df044ddbac5c767dff8bb67"
    var src = "http://wthrcdn.etouch.cn/WeatherApi?city="+cityHtml+"";
    var xhr = new XMLHttpRequest();
    xhr.open("get",srcNow)
    xhr.onload = function () {
        var obj = JSON.parse(this.responseText)
        var obj1 = obj.HeWeather5[0];
        var ali="";
        var arr = obj1.daily_forecast;
        console.log(obj1)
        console.log(obj1.now.cond.txt)
        wea.style.backgroundImage = 'url('+getBgImg(obj1.now.cond.txt,new Date().getHours())+')';
        infoBox.innerHTML = '<div class="info">'+
            '<div class ="info-weather">'+
                '<a href="javascript:;">'+
                '<em class="tem">'+obj1.now.tmp+'</em>'+
                '<em class="ico_temp"></em>'+
                '<em class="ico-wea">'+obj1.now.cond.txt+'</em>'+
                '</a>'+
            '</div>'+
            '<div class="info-about">'+
                '<ul>'+
                    '<li>'+
                    '<i class="ico_water"></i>'+
                    '<i style="margin: 0 0.3rem">'+obj1.now.hum+'%</i>'+' '+
                    '<i class="ico_wind" style="transform: rotate('+obj1.now.wind.deg+'deg)"></i>'+' '+
                    '<i style="margin: 0 0.3rem">'+obj1.now.wind.sc+'</i>'+
                    '</li>'+
                    '<li class="info-aqi">'+
                        '<a href="javascript:;">'+
                            '<span class="info-warn warn-'+getlevel(obj1.aqi.city.aqi)+'"></span>'+
                            '<strong>'+
                                '<i style=" font-weight: 400;margin-left: 0.3rem">'+obj1.aqi.city.aqi+'</i>'+' '+
                                '<i>'+obj1.aqi.city.qlty.substring(0,2)+'</i>'+
                            '</strong>'+
                        '</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+'</div>'+
            '<div class="weather-announcer">'+
                '<div class="tips" id="tips">'+obj1.suggestion.comf.txt+'</div>'+
            '</div>';
            var infoAqi = weaCon.getElementsByClassName("info-aqi")[0];
            if(obj1.alarms){
                var ali="";
                for(var i=0;i<obj1.alarms.length;i++){
                    ali +=  '<a href="javascript:;">'+
                        '<span style="background:url('+getImg(obj1.alarms[i].type,"78_78",0)+') no-repeat;" class="info-warn"></span>'+
                        ' '+
                        '<strong>'+
                        '<i style=" font-weight: 400;">'+obj1.alarms[i].type+'预警</i>'+
                        '</strong>'+
                        '</a>';
                }
                infoAqi.innerHTML +=  ali
            }
            var sister = weaCon.getElementsByClassName("weather-announcer")[0];
            var tips = weaCon.getElementsByClassName("tips")[0];
            if(tips.innerHTML.length>16){
                tips.style.backgroundImage = 'url(./image/icon/feed_to_bg_normal.9.png)';
                tips.style.backgroundSize = "100% 100%";
            }
            tips.style.top = sister.offsetHeight/2-tips.offsetHeight/2+'px';
            for(var i=0;i<2;i++){
                single[i].innerHTML ="<div>"+
                    "<em>"+formNowDay(arr[i].date)+"</em>"+
                    "<b>"+arr[i].tmp.min+" / "+arr[i].tmp.max+"°"+"</b>"+
                    "</div>"+
                    "<div>"+
                    "<strong>"+arr[i].cond.txt_d+"</strong>"+
                    "<img src='"+getImg(arr[i].cond.txt_d,"78_78",0)+"'>"+
                    "</div>"
            }
            tabs.innerHTML = '<strong style="display:block">日落' + arr[0].astro.ss + '</strong>'+
                '<em class="btn">'+
                '<span class="word">24小时预报</span>'+
                '<span class="ico_close"></span>'+
                '</em>';
            exponent.innerHTML = '<h3>生活指数</h3>'+
            '<ul>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/0.png"></span>'+
            '<em>'+obj1.suggestion.air.brf+'</em>'+
            '<em>空气指数</em>'+
            '</li>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/7.png"></span>'+
            '<em>'+makeUp(obj1.now.hum)+'</em>'+
            '<em>化妆</em>'+
            '</li>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/12.png"></span>'+
            '<em>'+obj1.suggestion.flu.brf+'</em>'+
            '<em>感冒</em>'+
            '</li>'+
            '<li>'+
            '<span> <img src="https://h5tq.moji.com/mtianqi/assets/images/script/17.png"></span>'+
            '<em>'+obj1.suggestion.cw.brf+'</em>'+
            '<em>洗车</em>'+
            '</li>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/20.png"></span>'+
            '<em>'+obj1.suggestion.drsg.brf+'</em>'+
            '<em>穿衣</em>'+
            '</li>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/21.png"></span>'+
            '<em>'+obj1.suggestion.uv.brf+'</em>'+
            '<em>紫外线</em>'+
            '</li>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/26.png"></span>'+
            '<em>'+obj1.suggestion.sport.brf+'</em>'+
            '<em>运动</em>'+
            '</li>'+
            '<li>'+
            '<span><img src="https://h5tq.moji.com/mtianqi/assets/images/script/28.png"></span>'+
            '<em>'+obj1.suggestion.trav.brf+'</em>'+
            '<em>钓鱼</em>'+
            '</li>'+
            '</ul>';
    }
    xhr.send()
    var xhr1 = new XMLHttpRequest();
    xhr1.open("get",src)
    xhr1.onload = function () {
        var weekDay = [];
        var trueWeek = [];
        var highTmp = [];
        var lowTmp = [];
        var day = [];
        var night = [];
        var typeDay= [];
        var typeNight=[];
        var fx = [];
        var fl = [];
        var xml = this.responseXML;
        console.log(xml)
        var forecast1 = xml.getElementsByTagName("forecast")[0];
        var weeks = forecast1.getElementsByTagName("weather");
        var yesterday = xml.getElementsByTagName("yesterday")[0];
        for(var i=0;i<weeks.length;i++){
            weekDay.push(weeks[i].getElementsByTagName("date")[0].innerHTML)
        }
        for(var i=0;i<weeks.length;i++){
            trueWeek.push(weekDay[i].split("日")[1])
        }
        trueWeek[0]="今天"
        for(var i=0;i<weeks.length;i++){
            highTmp.push(weeks[i].getElementsByTagName("high")[0].innerHTML.split(" ")[1].split("℃")[0])
            lowTmp.push(weeks[i].getElementsByTagName("low")[0].innerHTML.split(" ")[1].split("℃")[0])
        }
        for(var i=0;i<weeks.length;i++){
            day.push(weeks[i].getElementsByTagName("day")[0])
            night.push(weeks[i].getElementsByTagName("night")[0])
        }
        for(var i=0;i<day.length;i++){
            typeDay.push(day[i].getElementsByTagName("type")[0].innerHTML)
            fx.push(day[i].getElementsByTagName("fengxiang")[0].innerHTML)
            fl.push(day[i].getElementsByTagName("fengli")[0].innerHTML)
            typeNight.push(night[i].getElementsByTagName("type")[0].innerHTML)
        }
        var s="<li data-high='"+yesterday.getElementsByTagName("high_1")[0].innerHTML.split(" ")[1].split("℃")[0]+"' data-low='"+yesterday.getElementsByTagName("low_1")[0].innerHTML.split(" ")[1].split("℃")[0]+"'>" +
                "<em>" + "昨天" + "</em>" +
                "<dl class='weather-per'>" +
                "<dd><strong>" + yesterday.getElementsByTagName("type_1")[0].innerHTML + "</strong></dd>" +
                "<dt><img src='"+getImg(yesterday.getElementsByTagName("type_1")[0].innerHTML,"78_78",0)+"'/></dt>" +
                "</dl>" +
                "<div></div>" +
                "<dl class='weather-per'>" +
                "<dt><img src='"+getImg(yesterday.getElementsByTagName("type_1")[1].innerHTML,"78_78",1)+"'/></dt>" +
                "<dd><strong>" + yesterday.getElementsByTagName("type_1")[1].innerHTML+ "</strong></dd>" +
                "</dl>" +
                "<dl class='wind'>" +
                "<dd>" +  yesterday.getElementsByTagName("fx_1")[0].innerHTML.substring(0,4) + "</dd>" +
                "<dd>" +  yesterday.getElementsByTagName("fl_1")[0].innerHTML.split("级")[0] + "</dd>" +
                "</dl>" +
                "</li>"
            ;
        for(var i=0;i<weeks.length;i++){
            s += "<li data-high='"+highTmp[i]+"' data-low='"+lowTmp[i]+"'>" +
                "<em>" + trueWeek[i] + "</em>" +
                "<dl class='weather-per'>" +
                "<dd><strong>" + typeDay[i] + "</strong></dd>" +
                "<dt><img src='"+getImg(typeDay[i],"78_78",0)+"'/></dt>" +
                "</dl>" +
                "<div></div>" +
                "<dl class='weather-per'>" +
                "<dt><img src='"+getImg(typeNight[i],"78_78",1)+"'/></dt>" +
                "<dd><strong>" + typeNight[i]+ "</strong></dd>" +
                "</dl>" +
                "<dl class='wind'>" +
                "<dd>" + fx[i].substring(0,4) + "</dd>" +
                "<dd>" + fl[i].split("级")[0] + "</dd>" +
                "</dl>" +
                "</li>"
        }
        featureUl.innerHTML = s;
        highTmp.unshift(yesterday.getElementsByTagName("high_1")[0].innerHTML.split(" ")[1].split("℃")[0])
        lowTmp.unshift(yesterday.getElementsByTagName("low_1")[0].innerHTML.split(" ")[1].split("℃")[0])
        var range = getMaxOrMinNum(highTmp,"max")-getMaxOrMinNum(lowTmp) + 1;
        stan = getMaxOrMinNum(highTmp,"max");
        stan2 = (weekline.height-50)/range;
        var ctx = weekline.getContext("2d")
        ctx.clearRect(0,0,weekline.width,weekline.height)
        function chart(arr,n,color,str){
            var arr1=[];
            for(var i=0;i<arr.length;i++){
                arr1.push((stan-arr[i]+1)*stan2+20)
            }
            ctx.save();
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(str*0.5,arr1[0]);
            for(var i=1;i<arr1.length;i++){
                ctx.lineTo(i*str+str/2, arr1[i]);
            }
            ctx.stroke();
            ctx.restore();
            for(var i=0;i<arr1.length;i++){
                ctx.save();
                ctx.beginPath();
                ctx.arc(i*str+str/2,arr1[i],3,0, 2*Math.PI);
                ctx.fillStyle = '#fff';
                ctx.fill();
                ctx.restore();
            }
            for(var i=0;i<arr1.length;i++){
                ctx.save();
                ctx.beginPath();
                ctx.font = '16px Helvetica';
                ctx.fillStyle = '#fff';
                ctx.fillText(arr[i],i*str+str/2-8,arr1[i]-n);
                ctx.restore();
            }
        }
        chart(highTmp,10,"#eecb2a",str)
        chart(lowTmp,-20,"#86ccdb",str)
    }
    xhr1.send()
}