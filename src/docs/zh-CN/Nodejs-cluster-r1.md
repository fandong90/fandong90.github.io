# Nodejs  Cluster 集群

## 为什么出现 Cluster
* Nodejs 是运行在单线程中，cluster 的出现为了利用多核特性。

## 工作原理
* The worker processes are spawned using the child_process.fork() method, so that they can communicate with the parent via IPC and pass server handles back and forth.

* The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.


## 行动

```
		const cluster = require('cluster');
		const http = require('http');
		const  numCpus= require('os').cpus().length;
		const  app = require('./express-server');
		
		if(cluster.isMaster){
		    console.log(`主进程 ${process.pid} 正在运行`);
		
		    for(let i=0;i< numCpus;i++){
		       const worker =  cluster.fork();
		       worker.on('disconnect',()=>{
		            console.log(`工作进程 ${worker.process.pid} 失去了连接`);
		        });
		      worker.on("error",(error)=>{
		         console.log(...error);
		      });
		      
		    }
		    cluster.on('exit',(Worker,code,signal)=>{
		        console.log(`工作进程 ${worker.process.pid} 已退出`);
		    });
		}else{
		
		    const server =  http.createServer(app);
		    
		    server.on('error',(error)=>{
		        console.log(...error);
		    });
		
		    server.on("close",()=>{
		        console.log(`${process.pid} close`);
		    })
		
		    server.on('connection',()=>{
		       // console.log(`${process.pid} connection`);
		    });
		    server.listen(8000,(hostname,backlog)=>{
		        console.log(`工作进程 ${process.pid} 已启动`);
		    });
		   
	}
	//来自nodejs 官网
```
 这个代码我加入express 作为服务器监听。
 
 ![Nodejs服务启动](http://fandong90.github.io/dist/static/img/nodejsclusterserver.png)
 
 主线程负责监听端口，主线程负责发送消息给工作线程处理，本文测试了资源分配，是否均衡。
 
 测试：
 
   ```
   		//使用 curl ，开启两个shell，同时连续请求1000次。
   		/*curl.sh*/
   		[root@hadoop01 test]# cat curl.sh 
		#!/bin/bash
		
		for i in $(seq 1 1000)
		do
		   curl http://192.168.1.104:8000 >>a.txt
		   echo  "\n">>a.txt
		done
		[root@hadoop01 test]# 
		
		//把这个sh文件拷贝到另一台机器上，我这里是虚拟机。
		[root@hadoop01 test]# scp -r curl.sh  root@192.168.1.124:/opt/nodejs/test/
		
   ```
   
   * 启动./curl.sh 
   
   ```
        /*添加sh执行命令*/
   		 chmod u+x curl.sh 
   
   ```
   * 测试结果
   
   ![请求结果](http://fandong90.github.io/dist/static/img/nodeclusterfilea.png)
   
   我们启动了四个线程： 8813 8814 8815 8816
   
   ```
      /*统计端口执行的个数*/
      grep -o 8813 a.txt | wc -w 
      
   ```
   
   ![test](http://fandong90.github.io/dist/static/img/nodeclustertestcount.png)
   
   测试发现，基本上是均衡的。