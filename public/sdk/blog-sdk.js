window.resouce=function(){ return System; };
var host = window.location.host;
var schema   = window.location.protocol;
var blog = new Object();

blog.import=function(src){
    var baseUrl = schema+"//"+host+"/";
    return System.import(baseUrl+src);
}