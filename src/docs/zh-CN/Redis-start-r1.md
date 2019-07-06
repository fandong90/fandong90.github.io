# Redis 使用

启动redis 服务

```

    ./redis-server  ../redis.conf

```

启动客户端

```
   ./redis-cli
   
   
   //启动远端客户端
   
   ./redis-cli -h host -p port -a password
   
   
   
```

## Redis 五种数据类型


* String 

	命令：set /get  key value 
	     
	     设置字符串 key / value
	     
	```
	   127.0.0.1:6379> set str1 hello
		OK
		127.0.0.1:6379> get str1
		"hello"
		127.0.0.1:637
		
	```
	命令：getrange key start end 
	
	      获取指定位置的字符串值
	```
		127.0.0.1:6379> getrange str1 1 2
		"el"
		127.0.0.1:6379> getbit str1 2
		(integer) 1
		127.0.0.1:6379> getrange str1 1 20
		"ello"
		127.0.0.1:6379> getrange str1 10 20
		""
		127.0.0.1:6379> 
	   
	```
	
	命令： getset key value 
	
			设置字符串新值，并返回旧值，没有则返回nil
			
	```
	
	   127.0.0.1:6379> getset str1 helloo
		(nil)
		127.0.0.1:6379> getset str1 v
		"helloo"
		127.0.0.1:6379> get str1
		"v"
		127.0.0.1:6379> 
		

	```	
	
	命令： append key value
	
	    在存在的key的value是字符串，增加,如果key不存在则创建新的key值。
	      
	```
		127.0.0.1:6379> set str2 vv2
		OK
		127.0.0.1:6379> APPEND str2 43
		(integer) 5
		127.0.0.1:6379> get str2
		"vv243"
		127.0.0.1:6379> 
	
	```  
	
## Hash

     一个String类型的field和value的映射表，hash特别用户存储对象
     
     HMSET key value [field,value]...
     
       设置hash值,key区分大小写，多个字段的值
       
     HSET key field value 设置单个field 的值
       
       
     ```
     
       127.0.0.1:6379>HMSET hashStr name "hello ,redis" desc "hello" like 20 
		>OK
		127.0.0.1:6379> hget hashStr
		(error) ERR wrong number of arguments for 'hget' command
		127.0.0.1:6379> hgetall hashstr
		(empty list or set)
		127.0.0.1:6379> HGETALL hashStr
		1) "name"
		2) "hello ,redis"
		3) "desc"
		4) "hello"
		5) "like"
		6) "20"
		127.0.0.1:6379> 

        //获取单个key值
        
        127.0.0.1:6379> hget hashStr name
			"hello ,redis"
			127.0.0.1:6379> 

     ```   
     
     命令： HEXISTS KEY FIELD
     
     》获取存储在哈希表中的指定字段的值
     
    ```
    		127.0.0.1:6379> hdel hashStr desc
			(integer) 1
			127.0.0.1:6379> hexists hashStr name
			(integer) 1
			127.0.0.1:6379> hexists hashStr desc
			(integer) 0
			127.0.0.1:6379> 
    ``` 
    
     命令： HLEN key
     
     ```
          //获取hash key field的个数
          
          127.0.0.1:6379> hkeys key
			(empty list or set)
			127.0.0.1:6379> hlen hashStr
			(integer) 2
			127.0.0.1:6379> 
        
     ```
     
     命令： HVALS KEY
     
     ```
        //获取哈希表中所有的值
          127.0.0.1:6379> hvals hashStr
			1) "hello ,redis"
			2) "22"
			127.0.0.1:6379> 
     
     ```
     
     
 ## List 
 
 lpush key value
 
 在 key 列表中添加 数值,
 ::: tip
 
     最后一个写入的值的索引为0，先进 lpop 左边第一个元素弹出。
     
 :::
 
 ```
   127.0.0.1:6379> lpush listStr redis
	(integer) 1
	127.0.0.1:6379> lpush listStr mongodb
	(integer) 2
	127.0.0.1:6379> lpush listStr mysql
	(integer) 3
	127.0.0.1:6379> 
	
 ````
 BLPOP key timeout
 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
 ````
    //移除并返回第一个元素
     
	 127.0.0.1:6379> BLPOP listStr 1
	(nil)
	(1.00s)
	127.0.0.1:6379>
	
``` 
 BRPOP key timeout
 
 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
 
 timeout 时间单位为秒 
 
 ```
		 127.0.0.1:6379> BLPOP listStr 1
		1) "listStr"
		2) "345"
		127.0.0.1:6379> BRPOP listStr 1
		1) "listStr"
		2) "123"
		127.0.0.1:6379> 
```

  lindex key index 
  
  通过索引获取值
  
   127.0.0.1:6379> lindex listStr 0
	"234"
	127.0.0.1:6379> 
	
	lpushx key value 
		
	 key 列表中头插入数据
	 
	命令： lrange key start stop
	
	 获取一定范围的元素
	 
	 
	 lset key index value 
	 
	 通过index 设定列表的值，有值则覆盖。超出范围，则报错。
	 
	 rpoplpush source destination
	 
	 移除最后一个元素，并该元素添加另个一列表并返回，如果另一个list 表，不存在，则创建。
	 
	 
	 
	 
	
     
     
     
     
	      
	      
	
	

	