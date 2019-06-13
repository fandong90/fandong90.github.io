# Docker 创建三  推送远程仓库共享

# 创建好的本地镜像推送远程服务器

```
   /*命令*/
   docker tag image username/repo:tag
   
   ----创建OK
   
```
* 推送到远程

```   
   docker tag friendlyhello fandong90/get-started:part2

```

```
   ----推送到
   
   docker push fandong90/get-started:part2
   
```

* 删除本地镜像

```
	docker image rm fandong90/get-started:part2

```

* 运行镜像

```
   docker rum -d -p 4000:80 fandong90/get-started:part2
   
```
* 结果

![dockerreporesult](http://fandong90.github.io/dist/static/img/dockerreporesult.png)