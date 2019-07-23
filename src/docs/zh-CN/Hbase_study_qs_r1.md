# Hbase  学习疑问

*  **HTable Api 的高级方法，用在哪些地方？**

:::danger

    void prewarmRegionCache(Map<HRegionInfo,HServerAddress> regionMap)
    
    static void setRegionCachePrefetch(table,enable)
    
    static boolean getRegionCachePrefetch(table)

:::

::: success

	 用于操作耗时的操作的方法，用户可以先获取一个region的信息来预热一个下region。
	 
:::


* Bytes vs  ByteBuffer 类

:::warnning

    Bytes 是静态方法。

:::

* 过滤器 参考列过滤器（DependentColumnFilter)

	参考过滤的使用方式？？？
	
	* DependentColumnFilter(byte[] family,byte[] qualifier)
	* DependentColumnFilter(byte[] family,byte[] qualifier,boolean dropDependentColumn)
	* DependentColumnFilter(byte[] family,byte[] qualifier,boolean 
dropDependentColumn,CompareOp valueCompareOp,ByteArrayComparable valueComparator)

如何理解这个过滤器：
？？？

* 分页过滤器 PageFilter

   在物理分区上分离的服务器中并行执行过滤操作时，在不同的region 服务器上并行的过滤器不能共享他们的现在的状态和边界，因此，每个过滤器都会在完成扫描前获取pageCount行的结果，这种情况使得分页过滤器可能失效，极有可能返回的比所需要的多，最后客户端在合并结果时可以选择返回的结构也可以使用api进行过滤。
   
   为什么 并行执行扫描 分页过滤器会失效 ？？？？？
   
解决之道：

   客户端代码会记录本地扫描的最后行，并在下一次获取数据时把记录的上次扫描的最后一行设为这次扫描的起始行，同时保留相同的过滤属性，然后依次迭代。
   分页时，对一次返回的数据设定了严格的要求，一次扫描的行数大于分页的大小，一旦发生，过滤器有一种机制通知region服务器停止扫描。
   
* Import data to hbase


:::danger

    java.lang.NoClassDefFoundError: org/apache/http/client/HttpClient
    
:::

:::success

	引入相应的jar包
	<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient -->
    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
        <artifactId>httpclient</artifactId>
        <version>4.5.6</version>
    </dependency>
    
:::


* 实现一个 web在线查询应用

```
  
    font tech: Nodejs + Vue
    
    服务： spring boot
    
    后端： hadoop + sqoop + hive + hbase
    
    //查询 、分页、 写入
  
```
```
    导入数据：

    

```
    

````

    ??????
    
````
   

* Hbase 返回某一列的值，是去重之后的结果，怎么做？

* Hbase 分区返回一个Pair<byte[][],byte[][]>  table.getStartEndKeys();

:::success

	第一个开始key：  endKey: getfirst()[0]
	第二个开始key是  是第一个结束key  endKey  getSecond()[0]
	
:::

* Hbase 如何修改列名


* Hbase 使用 avro ，thrif 开启网关服务。，为什么使用avro、thrif 框架。

如何使用？


