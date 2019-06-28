# Redis 发布订阅

Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。
Redis 客户端可以订阅任意数量的频道。

![subscribe](https://fandong90.github.io/dist/static/img/redissubscriber1.png)

新消息通过publish 推送给频道，订阅的接收消息

![subscribe](https://fandong90.github.io/dist/static/img/redissubscriber2.png)


# 行动

* 注册频道
 
 ```
     SUBSCRIBE redisChat
 
 ```
 
 ````
     //订阅
     
       psubscribe redisChat
		Reading messages... (press Ctrl-C to quit)
		1) "psubscribe"
		2) "redisChat"
		3) (integer) 1
		1) "pmessage"
		2) "redisChat"
		3) "redisChat"
		4) "nihao ,redis"


 ````
 
 ````
      //退订
      
      127.0.0.1:6379> punsubscribe redisChat
		1) "punsubscribe"
		2) "redisChat"
		3) (integer) 0
 
 ````
 
 ···
      // 发布消息
      127.0.0.1:6379> publish redisChat "nihao ,redis 3333333"
(integer) 1
 ···