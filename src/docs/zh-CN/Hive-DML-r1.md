# Hive 查询语言

* ORDER BY 与 DISTRIBUTE BY columnname SORT BY columnsname  效果一样

```
0: jdbc:hive2://localhost:10000> SELECT year,temperature
. . . . . . . . . . . . . . . .> FROM dm_dim_blog_weather_records
. . . . . . . . . . . . . . . .> DISTRIBUTE BY year
. . . . . . . . . . . . . . . .> SORT BY year ASC,temperature DESC;
WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.
+-------+--------------+
| year  | temperature  |
+-------+--------------+
| 1949  | 111          |
| 1949  | 78           |
| 1950  | 22           |
| 1950  | 0            |
| 1950  | -11          |
| 2019  | 50           |
+-------+--------------+
6 rows selected (15.37 seconds)
0: jdbc:hive2://localhost:10000> SELECT year, temperature
. . . . . . . . . . . . . . . .> FROM dm_dim_blog_weather_records
. . . . . . . . . . . . . . . .> ORDER BY year ASC,temperature DESC;
WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.
+-------+--------------+
| year  | temperature  |
+-------+--------------+
| 1949  | 111          |
| 1949  | 78           |
| 1950  | 22           |
| 1950  | 0            |
| 1950  | -11          |
| 2019  | 50           |
+-------+--------------+
6 rows selected (16.023 seconds)

```

* 创建的表

```
0: jdbc:hive2://localhost:10000> DESC dm_dim_sales;
+-----------+------------+----------+
| col_name  | data_type  | comment  |
+-----------+------------+----------+
| customer  | string     | 客户       |
| goods     | string     | 商品       |
+-----------+------------+----------+

```
发现goods 字段列名不合适及数据类型

```
	ALTER TABLE dm_dim_sales
	CHANGE
	goods goodid BIGINT;
	

```
:::danger

   Error: org.apache.hive.service.cli.HiveSQLException: Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions :
  
:::

:::success

   string 类型不可以转BIGINT
   
   BIGINT 可以转String类型。
   
:::


## JOIN 连接

* 内连接

```
     0: jdbc:hive2://localhost:10000> SELECT s.*,t.*
		. . . . . . . . . . . . . . . .> FROM dm_dim_sales s
		. . . . . . . . . . . . . . . .> JOIN dm_dim_things t ON s.goodid=t.goodid;
		WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.
		SLF4J: Class path contains multiple SLF4J bindings.
		SLF4J: Found binding in [jar:file:/opt/hive/apache-hive-2.3.5-bin/lib/log4j-slf4j-impl-2.6.2.jar!/org/slf4j/impl/StaticLoggerBinder.class]
		SLF4J: Found binding in [jar:file:/opt/hadoop/pseudo_hadoop/share/hadoop/common/lib/slf4j-log4j12-1.7.10.jar!/org/slf4j/impl/StaticLoggerBinder.class]
		SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
		SLF4J: Actual binding is of type [org.apache.logging.slf4j.Log4jLoggerFactory]
		2019-07-05 21:48:42	Starting to launch local task to process map join;	maximum memory = 477626368
		2019-07-05 21:48:43	Dump the side-table for tag: 1 with group count: 5 into file: file:/tmp/root/96306b16-daaa-4535-9e37-912b96e27e30/hive_2019-07-05_21-48-38_443_881491534239949443-3/-local-10004/HashTable-Stage-3/MapJoin-mapfile01--.hashtable
		2019-07-05 21:48:43	Uploaded 1 File to: file:/tmp/root/96306b16-daaa-4535-9e37-912b96e27e30/hive_2019-07-05_21-48-38_443_881491534239949443-3/-local-10004/HashTable-Stage-3/MapJoin-mapfile01--.hashtable (420 bytes)
		2019-07-05 21:48:43	End of local task; Time Taken: 1.51 sec.
		+-------------+-----------+-----------+-------------+
		| s.customer  | s.goodid  | t.goodid  | t.goodname  |
		+-------------+-----------+-----------+-------------+
		| Joe         | 2         | 2         | Tie         |
		| Hank        | 4         | 4         | Coat        |
		| Ali         | 0         | 0         | Apple       |
		| Eve         | 3         | 3         | Hat         |
		| Hank        | 2         | 2         | Tie         |
		+-------------+-----------+-----------+-------------+
		5 rows selected (17.8 seconds)
   
```

解析EXPLAIN

```

	    EXPLAIN
	. . . . . . . . . . . . . . . .> SELECT s.*,t.*
	. . . . . . . . . . . . . . . .> FROM dm_dim_sales s
	. . . . . . . . . . . . . . . .> JOIN dm_dim_things t
	. . . . . . . . . . . . . . . .> ON s.goodid=t.goodid;
	+----------------------------------------------------+
	|                      Explain                       |
	+----------------------------------------------------+
	| STAGE DEPENDENCIES:                                |
	|   Stage-4 is a root stage                          |
	|   Stage-3 depends on stages: Stage-4               |
	|   Stage-0 depends on stages: Stage-3               |
	|                                                    |
	| STAGE PLANS:                                       |
	|   Stage: Stage-4                                   |
	|     Map Reduce Local Work                          |
	|       Alias -> Map Local Tables:                   |
	|         t                                          |
	|           Fetch Operator                           |
	|             limit: -1                              |
	|       Alias -> Map Local Operator Tree:            |
	|         t                                          |
	|           TableScan                                |
	|             alias: t                               |
	|             Statistics: Num rows: 5 Data size: 480 Basic stats: COMPLETE Column stats: NONE |
	|             Filter Operator                        |
	|               predicate: UDFToDouble(goodid) is not null (type: boolean) |
	|               Statistics: Num rows: 5 Data size: 480 Basic stats: COMPLETE Column stats: NONE |
	|               HashTable Sink Operator              |
	|                 keys:                              |
	|                   0 UDFToDouble(goodid) (type: double) |
	|                   1 UDFToDouble(goodid) (type: double) |
	|                                                    |
	|   Stage: Stage-3                                   |
	|     Map Reduce                                     |
	|       Map Operator Tree:                           |
	|           TableScan                                |
	|             alias: s                               |
	|             Statistics: Num rows: 5 Data size: 862 Basic stats: COMPLETE Column stats: NONE |
	|             Filter Operator                        |
	|               predicate: UDFToDouble(goodid) is not null (type: boolean) |
	|               Statistics: Num rows: 5 Data size: 862 Basic stats: COMPLETE Column stats: NONE |
	|               Map Join Operator                    |
	|                 condition map:                     |
	|                      Inner Join 0 to 1             |
	|                 keys:                              |
	|                   0 UDFToDouble(goodid) (type: double) |
	|                   1 UDFToDouble(goodid) (type: double) |
	|                 outputColumnNames: _col0, _col1, _col5, _col6 |
	|                 Statistics: Num rows: 5 Data size: 948 Basic stats: COMPLETE Column stats: NONE |
	|                 Select Operator                    |
	|                   expressions: _col0 (type: string), _col1 (type: string), _col5 (type: bigint), _col6 (type: string) |
	|                   outputColumnNames: _col0, _col1, _col2, _col3 |
	|                   Statistics: Num rows: 5 Data size: 948 Basic stats: COMPLETE Column stats: NONE |
	|                   File Output Operator             |
	|                     compressed: false              |
	|                     Statistics: Num rows: 5 Data size: 948 Basic stats: COMPLETE Column stats: NONE |
	|                     table:                         |
	|                         input format: org.apache.hadoop.mapred.SequenceFileInputFormat |
	|                         output format: org.apache.hadoop.hive.ql.io.HiveSequenceFileOutputFormat |
	|                         serde: org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe |
	|       Local Work:                                  |
	|         Map Reduce Local Work                      |
	|                                                    |
	|   Stage: Stage-0                                   |
	|     Fetch Operator                                 |
	|       limit: -1                                    |
	|       Processor Tree:                              |
	|         ListSink                                   |
	|                                                    |
	+----------------------------------------------------+
	62 rows selected (0.312 seconds)


```

 LEFT OUTER JOIN / RIGHT OUTER JOIN / FULL OUTER JOIN
 
```

   ???

```

UDF /UDAF /UDTF

```
    
    UDF 操作作用于单个数据行，且产生一个数据行作为输出
    
    UDAF 接收多个输入数据行,并产生一个数据行，聚合函数。
    
    UDTF 作用于单个数据行，产生多个数据行（即一个表数据）输出。
 
 
```



