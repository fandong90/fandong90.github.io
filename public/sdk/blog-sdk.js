window.resouce=function(){ return System; };
var hostname = window.location.host;
var schema   = window.location.protocol;
var blog = new Object();

blog.import=function(src){
    var baseUrl = schema+"//"+hostname+"/";
    return System.import(baseUrl+src);
}