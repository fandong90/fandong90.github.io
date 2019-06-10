# Docker CentOS 7 创建 -

# 什么是DOCKER

Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

# docker 架构图

![docker service](http://fandong90.github.io/dist/static/img/dockerarch.png)

# 行动

查看linux 内核 版本

```

   uname -r
   
   /*我的linux版本*/
   [root@hadoop01 ~]# uname -r
    3.10.0-862.14.4.el7.x86_64
   [root@hadoop01 ~]# 
   
   /*必须linux 内核 3.1 版本以上*/
   
```

配置yum 工具

```
  sudo yum install -y  yum-utils device-mapper-persistent-data  lvm2
  
```
	* yum-utils: yum 下载rpm依赖包工具
	* device-mapper-persistent-data lvm2  用与docker 存放数据
	
配置yum docker repo
	
```

  sudo yum-config-manager --add-repo  https://download.docker.com/linux/centos/docker-ce.repo

```

开始安装

```

   sudo yum install docker-ce docker-ce-cli containerd.io
	
```

验证安装

```
   /*启动docker*/
	sudo systemctl start docker
	
   /*查看服务是否启动成功*/
	
	systemctl -t service
	
```

![docker service](http://fandong90.github.io/dist/static/img/dockerservice.png)

使用hello-world 验证docker安装是否OK

```
  sudo docker run hello-world
  
```

![docker service](http://fandong90.github.io/dist/static/img/dockervaildHello.png)


 卸载：
 
 ```
 	 sudo yum remove docker-ce docker-ce-cli containerd.io
 	 
 	 sudo rm -rf /var/lib/docker
 	 
 ```

	
	