# Docker 创建 Service 运行

# About Services

*
  In a distributed application, different pieces of the app are called “services”. For example, if you imagine a video sharing site, it probably includes a service for storing application data in a database, a service for video transcoding in the background after a user uploads something, a service for the front-end, and so on.

Services are really just “containers in production.” A service only runs one image, but it codifies the way that image runs—what ports it should use, how many replicas of the container should run so the service has the capacity it needs, and so on. Scaling a service changes the number of container instances running that piece of software, assigning more computing resources to the service in the process.

Luckily it’s very easy to define, run, and scale services with the Docker platform -- just write a docker-compose.yml file.

--[来自docker 教程]
 
 docker 的服务可以根据配置文件，设定副本的个数，分配计算资源。
 
* write docker-compose.yml 

    这里使用vscode 安装docker 插件，会快速生成docker模板。
	
	![vsr1](http://fandong90.github.io/dist/static/img/dockerservicework1.png)
	
	![vsr2](http://fandong90.github.io/dist/static/img/dockerservicework2.png)
	
	```
		/*docker-compose.yml*/
		version: "3"
		services:
		  web:
		    # replace username/repo:tag with your name and image details
		    image: fandong90/get-started:part2
		    deploy:
		      replicas: 5
		      resources:
		        limits:
		          cpus: "0.1"
		          memory: 50M
		      restart_policy:
		        condition: on-failure
		    ports:
		      - "4000:80"
		    networks:
		      - webnet
		networks:
		  webnet:
		
	```
	
	 * Pull ***docker创建三（fandong90/get-started:part2）*** from the registry.
	 * Run 5 instances of that image as a service called web, limiting each one to use, at most, 10% of a single core of CPU time (this could also be e.g. “1.5” to mean 1 and half core for each), and 50MB of RAM.
	 * Immediately restart containers if one fails.
	 * Map port 4000 on the host to web’s port 80.
    * Instruct web’s containers to share port 80 via a load-balanced network called webnet. (Internally, the containers themselves publish to web’s port 80 at an ephemeral port.)
    * define the webnet network with the default settings (which is a load-balanced overlay network).
# 启动
  
  ```
     /*swarm node 初始化*/
     docker swarm init 
     
  ```
  * 给服务设定别名 getstartedlab
  
  ```
  		/* run */
  		docker stack deploy -c docker-compose.yml getstartedlab
  		
  ```
     ![vsr3](http://fandong90.github.io/dist/static/img/dockerservicework3.png)
     
 ```
     /* 查看服务 */
     
     docker service ls
     
 ```
 ![vsr4](http://fandong90.github.io/dist/static/img/dockerservicework4.png)
     
     
 ```
 	 /* 使用服务别名查看服务*/
 	 
 	 docker service ps getstartedlab_web
 	 
 ```
   ![vsr5](http://fandong90.github.io/dist/static/img/dockerservicework5.png)
   
 ```
    /* 请求 */
    
    [root@bogon myapp]# curl -4 http://localhost:4000
		<h3>Hello World!</h3><b>Hostname:</b> 25219d88ae6c<br/><b>Visits:</b> <i>cannot connect to Redis, counter disabled</i>
	 [root@bogon myapp]# 
	 
	 
 ```
 
 *  更新 docker-compose.yml

 ```
 		docker stack deploy -c docker-compose.yml getstartedlab
 
 ```
 * shutdown service
 
 ```
      /*删除服务*/
 		docker stack rm getstartedlab
 		
 		/*退出swarm*/
 		docker swarm leave --force
 		
 		[root@bogon myapp]# docker stack rm getstartedlab
		Removing service getstartedlab_web
		Removing network getstartedlab_webnet
		[root@bogon myapp]# docker swarm leave --force
		Node left the swarm.
		
		[root@bogon myapp]# docker service ls
		Error response from daemon: This node is not a swarm manager. Use "docker swarm init" or 		"docker swarm join" to connect this node to swarm and try again.
		[root@bogon myapp]# 
 ```
 
 ---本文完
 
    

     