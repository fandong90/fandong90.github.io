# Express  中间件

*  什么是中间件

	一个js 函数：参数（req: requestObj, res :  responseObj, [next:function])
	
	   用于解析request对象、responseObj，可以在请求周期中，对请求的对象进行处理加工。
	  
	官网给出：
		
		*  做一些代码处理，如何记录logger，session等
		*  请求Request 或 Response 对象进行加工
		*  req-res 的整个生命周期
		*  在栈中执行下一个中间件
		
	![Middlewareflow](https://fandong90.github.io/dist/static/img/expressMiddlewareflow.png)
	
* 行动

  如何定义一个中间件？
  
  1、 写在 server.js 中
  
  ```
       /*必须添加路由之前*/
       
  		var myLogger = function (req, res, next){
  			
  			console.log(req.ip);
  			
  			next();
  		}
  		
  		app.use(myLogger);
  		
  ```
  
  2、 单独一个文件
  
  ```
       module.exports = function (options){
       	return function(req, res, next){
       		console.log(req.ip);
       		console.log(`${options.id}`)
       		next();
       	}
       }
  
  ```
  
   在server.js 引用
   
   ```
   
      var logger = require('./logger.js');
      
      app.use(logger({ id : '1'}));
      
      
      
   ```
   
   启动：
   
   ```
   
   		npm run start
   		
   ```
   
   ![result](https://fandong90.github.io/dist/static/img/middlewareresult.png)
   
   发现返回打印了四次结果。为什么呢？
   
   ::: success
   	   
   	   http 首先进行三次握手建立连接，然后根据根据路径解析html，等后续
   	   
   :::
  