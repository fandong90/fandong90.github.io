# Docker 创建二

# 目标
*	Set up your Docker environment (on this page)
*  Build an image and run it as one container
*  Scale your app to run multiple containers
*  istribute your app across a cluster
*  Stack services by adding a backend database
*  Deploy your app to production

# docker路线图

docker -> containers -> services -> swarms -> stacks -> Deploy your app

#行动

* docker container ，为什么需要container
   * Flexible: Even the most complex applications can be containerized.
   * Lightweight: Containers leverage and share the host kernel.
   * Interchangeable: You can deploy updates and upgrades on-the-fly.
   * Portable: You can build locally, deploy to the cloud, and run anywhere.
   * Scalable: You can increase and automatically distribute container replicas.
   * Stackable: You can stack services vertically and on-the-fly.
 
* Containers Vs Virtual machines
   
   * contianer是直接运行在linux（OS），和其他的container共享主机内核。运行在分离的进程，占用资源少，轻量级。
   * virtual machine ：自己提供一个虚拟的运行环境，占用资源多

   ![container vs virtual machine](http://fandong90.github.io/dist/static/img/contianervsvirtual.png)
   
* Docker 基础命令

```
	[root@bogon ~]# docker --version
    Docker version 18.09.6, build 481bc77156
	
	[root@bogon ~]# docker info
	Containers: 2
	 Running: 0
	 Paused: 0
	 Stopped: 2
	Images: 8
	Server Version: 18.09.6
	Storage Driver: overlay2
	 ....
	 
	/*docker image 列表*/ 
	[root@bogon ~]# docker image ls
	REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
	friendlyhello       latest              e65e08c442c9        45 minutes ago      131MB
	python              2.7-slim            ca96bab3e2aa        15 hours ago        120MB
	hello-world         latest              fce289e99eb9        5 months ago        1.84kB
	
	/*docker 容器列表*/
	[root@bogon ~]# docker container ls -a
	CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                         PORTS               NAMES
	607ac71e7db4        hello-world         "/hello"            12 seconds ago      Exited (0) 10 seconds ago                          goofy_nightingale
	5c35de0a2d3c        friendlyhello       "python app.py"     About an hour ago   Exited (0) 40 minutes ago                          boring_keldysh
	1613211e009e        hello-world         "/hello"            About an hour ago   Exited (0) About an hour ago                       reverent_babbage
```

-----[docker 教程](https://docs.docker.com/get-started/)

