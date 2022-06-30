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
};


export default Util;