# Express 学习使用搭建 --

# 什么是Express ？

   *  Web 应用程序
   		
   		Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。
   		
  *  API
   	
   		使用您所选择的各种 HTTP 实用工具和中间件，快速方便地创建强大的 API。
   		
  *  性能
  	
  		Express 提供精简的基本 Web 应用程序功能，而不会隐藏您了解和青睐的 Node.js 功能
  	
  	
# 行动，先运行再说

 ```
	       //创建一个文件夹
	       
	       $ mkdir myapp
	       
	       $ cd myapp
	       
	       // 使用npm 初始化
	       
	       $ npm init
	       
	       $ npm install express --save
	       
 ```
 
 # 创建 server.js
 
 ```
    const express = require('express')
	 const app = express()
	
	 app.get('/', (req, res) => res.send('Hello World!'))
	
	 app.listen(3000, () => console.log('Example app listening on port 3000!'))
 
 ```
 
 # 启动 
 
 ```
     node  server.js
     
 ```
 
 
 -----来自[Express 官网](http://www.expressjs.com.cn/starter/hello-world.html)
 
 
 # 已经启动OK。
 
 ::: success
 
 	 恭喜你已经启动了一个express。接下让我们一步步构建一个完整的web。
 	 
 :::
 
 
 # 路由
 
* 什么是路由？
	
   url 请求的地址，express 根据设定的path，监听是post、get方法，路由到相应的地址中
   
   ```
     app.get('/', (req, res) => res.send('Hello World!'))
     
     //根路径，访问localhost:3000/ 
     
     express 监听到，会执行返回 hello world!
     
     
   ```
   
*    
   
   
 
   