# hive 

从本地加载数据
 
:::tip
	
			 jdbc:hive2://localhost:10000> load data local inpath '/home/fandong/dataDemo/hadoop/input/ncdc/micro-tab/sample.txt'
			. . . . . . . . . . . . . . . .> overwrite into table blog.dm_dim_blog_weather_records;
			
:::

从hdfs中加载数据 ?

？？？



* HIVE 的内置函数

	* 查询内置函数 show functions;
	* 查看函数描述 describe function [func name];
	
```
      0: jdbc:hive2://localhost:10000> describe function length;
		+----------------------------------------------------+
		|                      tab_name                      |
		+----------------------------------------------------+
		| length(str | binary) - Returns the length of str or number of bytes in binary data |
		+----------------------------------------------------+
		1 row selected (0.083 seconds)
		
```
* HIVE 托管表和外部表

		* 托管表 create table <table name> () ;
		* drop table <table name>;
		* 外部表 create external table <table name>();
		* drop table external
		** 区别 **
		外部表，hive只是负责处理数据，并不存储数据，丢弃外部表时，hive不会碰数据。只是删除源数据。
			
	
*  HIVE 分区（partition) 和 桶 (bucket)

	*  创建一个分区表

```
	    0: jdbc:hive2://localhost:10000> CREATE TABLE BLOG.LOGS(
. . . . . . . . . . . . . . . .> 
. . . . . . . . . . . . . . . .>      ts         BIGINT COMMENT '记录ts'
. . . . . . . . . . . . . . . .>     ,line        STRING COMMENT '记录行数'
. . . . . . . . . . . . . . . .> )
. . . . . . . . . . . . . . . .> COMMENT '记录日志表'
. . . . . . . . . . . . . . . .> PARTITIONED BY (dt STRING, country STRING)
. . . . . . . . . . . . . . . .> ;
No rows affected (0.3 seconds)

	
```
	插入数据
	 
```
	     . . . . . . . . . . . . . . . .> into table blog.logs
		. . . . . . . . . . . . . . . .> partition (dt='2001-01-01',country='GB');
		No rows affected (0.804 seconds)
```
	 
```
	 	0: jdbc:hive2://localhost:10000> select * from logs;
		+----------+-------------+-------------+---------------+
		| logs.ts  |  logs.line  |   logs.dt   | logs.country  |
		+----------+-------------+-------------+---------------+
		| 1        | Log line 1  | 2001-01-01  | GB            |
		+----------+-------------+-------------+---------------+
		1 row selected (0.282 seconds)
		
		
		0: jdbc:hive2://localhost:10000> select * from blog.logs;
		+----------+-------------+-------------+---------------+
		| logs.ts  |  logs.line  |   logs.dt   | logs.country  |
		+----------+-------------+-------------+---------------+
		| 1        | Log line 1  | 2001-01-01  | GB            |
		| 1        | Log line 1  | 2001-01-02  | US            |
		+----------+-------------+-------------+---------------+
		
```
	 
	 hadoop hdfs 文件系统
	  通过文件通过分区
	 
```
	   [root@hadoop01 dm_dim_blog_logs]# hadoop fs -find /user  -name dt*
		/user/hive/warehouse/blog.db/logs/dt=2001-01-01
		/user/hive/warehouse/blog.db/logs/dt=2001-01-02
	 
```
	 
*  查看表分区

   	*  show partitions [table name];
    
```
        jdbc:hive2://localhost:10000> show partitions logs;
			+---------------------------+
			|         partition         |
			+---------------------------+
			| dt=2001-01-01/country=GB  |
			| dt=2001-01-02/country=US  |
			+---------------------------+
     
```
    
* 桶
     创建了4个桶分区

```
	  
	   0: jdbc:hive2://localhost:10000> ---author fandong
		0: jdbc:hive2://localhost:10000> 
		0: jdbc:hive2://localhost:10000> ---output  blog.dm_dim_blog_bucketed_user
		0: jdbc:hive2://localhost:10000> 
		0: jdbc:hive2://localhost:10000> CREATE TABLE BLOG.dm_dim_blog_bucketed_user(
		. . . . . . . . . . . . . . . .> 
		. . . . . . . . . . . . . . . .>     id     INT           COMMENT '记录id'
		. . . . . . . . . . . . . . . .>        ,name    STRING        COMMENT '记录name'
		. . . . . . . . . . . . . . . .> )
		. . . . . . . . . . . . . . . .> COMMENT '练习使用桶表'
		. . . . . . . . . . . . . . . .> CLUSTERED BY (id) SORTED BY (id ASC) INTO 4 BUCKETS;
		No rows affected (0.228 seconds)
	
```

	
  
   



