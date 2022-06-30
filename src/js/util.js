const Util = {
    eventUtil: {
        addHandler : function(element, type, handler){
            this.checked(element, type, handler);
            if(element.addEventListener){
                element.addEventListener(type, handler, false);
            }else if(element.attachEvent){
                element.attachEvent('on' + type, handler);
            }else{
                element['on' + type] = handler;
            }
        },
        removeHandler : function(element, type, handler){
            this.checked(element, type, handler);
            if(element.removeEventListener){
                element.removeEventListener(type, handler, false);
            }else if(element.detachEvent){
                element.detachEvent('on' + type, handler);
            }else{
                element['on' + type] = null;
            }
        },
        checked: function(element, type, handler){
            if(!(typeof(type) == 'string')) throw new Error("The parameter is required and the parameter type is String");
            if(!(handler instanceof Function)) throw new Error("The parameter is required and the parameter type is Function");
            return element = element ? element : document;
        }
    },

    // 获取url链接的参数
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]);
        return null;
    },

    // 判断设备类型
    checkUA: function () {
        var browser = {
            versions: function () {
                var u = navigator.userAgent,
                    app = navigator.appVersion;
                return { //移动终端浏览器版本信息  
                    trident: u.indexOf('Trident') > -1, //IE内核  
                    presto: u.indexOf('Presto') > -1, //opera内核  
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器  
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
                    iPad: u.indexOf('iPad') > -1, //是否iPad  
                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
        if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面  
            var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象 
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return "weixin"
            }
            if (ua.match(/WeiBo/i) == "weibo") {
                return "weibo"
            }
            if (ua.match(/QQ/i) == "qq") {
                return "qq"
            }
            if (browser.versions.ios) {
                return "ios"
            }
            if (browser.versions.android) {
                return "android"
            }
        } else {
            return "pc"
        }
    },

    // 获取设备系统版本
    getOS: function () {
        var ua = navigator.userAgent,
            isAndroid = ua.match(/(Android)\s+([\d_]+)/),
            iPad = ua.match(/(iPad).*OS\s([\d_]+)/),
            isIphone = !iPad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
            isMobile = isIphone || isAndroid;
        if (isAndroid) {
            return {
                name: 'Android',
                ver: isAndroid
            };
        } else if (iPad) {
            return {
                name: 'iPad',
                ver: iPad
            };
        } else if (isIphone) {
            return {
                name: 'iPhone',
                ver: isIphone
            };
        } else {
            return {
                name: 'PC',
                ver: ua
            };
        }
    },

    // 复制文本到剪贴板
    copyToClipboard: function (text) {
        var input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
};


export default Util;