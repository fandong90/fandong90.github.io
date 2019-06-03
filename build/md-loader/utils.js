/**语言生成配置 */
module.exports= function getlangAdapter(name){
    if(name.indexOf('js')>-1 || name.indexOf('javascript')>-1){
        return 'javascript';
    }
    
    if(name.indexOf('java')>-1 || name.indexOf('javascript')<=-1){
        return 'java';
    }
};