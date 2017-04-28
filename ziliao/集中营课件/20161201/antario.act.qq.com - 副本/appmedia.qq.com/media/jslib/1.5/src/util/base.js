define(function(require, exports, module) {

	//中文防乱码编译
	var tips = {
		1 : "\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0"	//加入收藏失败，请使用Ctrl+D进行添加
	};	
	
	/**
	 * @name initTrack
	 * @description 加载PV/UV监测js
	 * 
	 */
	exports.initTrack = function() {
		var oBody = document.getElementsByTagName('body').item(0);
		var oScript= document.createElement("script");
		oScript.type = "text/javascript";
		oScript.src="/adsrich.qq.com/web/hd/page_duration.js";
		oScript.id="ad_statistic_kit";
		oScript.setAttribute("arguments","{'cpid':'" + Act.tamsid + "'}");
		oBody.appendChild(oScript);
	};
	
	/**
	 * @name clickMonitor
	 * @description 点击流监测
	 * @param {String} id 按钮ID
	 * @author bondli@tencent.com
	 * 
	 */
	exports.clickMonitor = function(id){
		u = '/t.l.qq.com/ping?t=m&cpid=' + Act.tamsid + '&url=http%3A//app_minisite_click_monitor/button'+ Act.tamsid + id +'&ref';
		var t = (new Date()).getTime();
		window['LOG' + t] = new Image();
		window['LOG' + t].src = u;
	};
	
	/**
	 * @name clickMonitor
	 * @description 点击流监测
	 * @param {String} id 按钮ID
	 * @author bondli@tencent.com
	 * 
	 */
	exports.sqmMonitor = function(attrID,value){
		u = '/sqm.act.qq.com/r?act_id=' + Act.tamsid + '&attr_id='+ attrID +'&value=' + value + '&uin=' + Act.ptlogin.getQQNum();
		var t = (new Date()).getTime();
		window['LOG' + t] = new Image();
		window['LOG' + t].src = u;
	};
	
	/**
	 * @name favorite
	 * @description 加入收藏夹
	 * @param {String} url 要收藏的url
	 * @param {String} title 要收藏的url的描述
	 * @author bondli@tencent.com
	 * 
	 */
	 exports.favorite = function(sUrl,sTitle){
		if (typeof sUrl == 'undefined' || sUrl == "") {
			sUrl = window.location.href;
		}
		if (typeof sTitle == 'undefined' || sTitle == "") {
			sTitle = window.title;
		}
		try{
			window.external.addFavorite(sUrl, sTitle);
		}
		catch (e){
			try{
				window.sidebar.addPanel(sTitle, sUrl, "");
			}
			catch (e){
				alert(tips[1]);
			}
		}
	};
	
});
