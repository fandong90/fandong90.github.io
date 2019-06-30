# Hadoop FileSystem Shell

hadoop  命令全局变量设置

```
   vi /etc/profile
   export JAVA_HOME=/opt/java/jdk1.8.0_181
	#export HADOOP_HOME=/opt/hadoop/hadoop-2.7.1
	export HADOOP_HOME=/opt/hadoop/pseudo_hadoop
	export JRE_HOME=$JAVA_HOME/jre
	export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
	export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$HADOOP_HOME/sbin:$HADOOP_HOME/bin:$PATH
	export PATH=/opt/scala/scala-2.11.12/bin:$PATH
	#config nexus oss3.x  ,repositity
	export NEXUS_HOME=/opt/nexus/nexus-3.13.0-01
	#config node v10
	export NODE_HOME=/opt/node/node-v10.13.0-linux-x64/bin
	export PATH=$NODE_HOME:$PATH


```

::: success
 
 ```
     [root@hadoop01 bin]# source /etc/profile
    // 配置成功
	 [root@hadoop01 bin]# hadoop
	Usage: hadoop [--config confdir] [COMMAND | CLASSNAME]
	  CLASSNAME            run the class named CLASSNAME
	 or
	  where COMMAND is one of:
	  fs                   run a generic filesystem user client
	  version              print the version
	  jar [jar]            run a jar file
	                       note: please use "yarn jar" to launch
	                             YARN applications, not this command.
	  checknative [-a|-h]  check native hadoop and compression libraries availability
	  distcp [srcurl] [desturl] copy file or directories recursively
	  archive -archiveName NAME -p [parent path] [src]* [dest] create a hadoop archive
	  classpath            prints the class path needed to get the
	  credential           interact with credential providers
	                       Hadoop jar and the required libraries
	  daemonlog            get/set the log level for each daemon
	  trace                view and modify Hadoop tracing settings
	
	Most commands print help when invoked w/o parameters.
	[root@hadoop01 bin]# 
 ```
:::

#行动

 首先我们创建一个hadoop的文件夹用于存放我们的练习shell command
 
 ```
 [root@hadoop01 hadoopfileSystem]# hadoop fs -ls /user
 [root@hadoop01 hadoopfileSystem]# hadoop fs -mkdir /user/fileShellDemo 

 ```

 *  文件操作命令
 
 cmd: appendToFile
 
 
	Usage: hadoop fs -appendToFile [localsrc] ... [dst]
	
	Append single src, or multiple srcs from local file system to the destination file system. Also reads input from stdin and appends to destination file system.
	
	hadoop fs -appendToFile localfile /user/hadoop/hadoopfile
	hadoop fs -appendToFile localfile1 localfile2 /user/hadoop/hadoopfile
	hadoop fs -appendToFile localfile hdfs://nn.example.com/hadoop/hadoopfile
	hadoop fs -appendToFile - hdfs://nn.example.com/hadoop/hadoopfile Reads the input from stdin.
	Exit Code:
	
	Returns 0 on success and 1 on error.
	
	:::warnning
	
	    [root@hadoop01 hadoopfileSystem]# hadoop fs -appendToFile hello.txt /user/fileShellDemo
	17/06/29 20:08:33 WARN hdfs.DFSClient: DataStreamer Exception
	org.apache.hadoop.ipc.RemoteException(java.io.IOException): File /user/fileShellDemo could only be replicated to 0 nodes instead of minReplication (=1).  There are 0 datanode(s) running and no node(s) are excluded in this operation.

    :::

居然报错了，说的是nodeData 节点没有运行

查看日志：hadoop中datanode的log文件

	cd  logs
	
	cat hadoop-root-datanode-hadoop01.log
	
	```
		2017-06-29 20:27:02,806 WARN org.apache.hadoop.hdfs.server.common.Storage: java.io.IOException: Incompatible clusterIDs in /usr/hadoop_pseudo/tmp/datanode: namenode clusterID = CID-02320cff-7374-444d-9992-a405377cbdb0; datanode clusterID = CID-4310c6eb-ad78-4ca6-971a-ff20017f6b25
		2019-06-29 20:27:02,807 FATAL org.apache.hadoop.hdfs.server.datanode.DataNode: Initialization failed for Block pool [registering] (Datanode Uuid unassigned) service to hadoop01/192.168.1.125:9000. Exiting. 
	```
	
	发现是由于name 和 data 节点的 ClusterID 不同导致。只需要保持相同即可。 
	
	[root@hadoop01 current]# pwd
	/usr/hadoop_pseudo/tmp/namenode/current
	[root@hadoop01 current]# vi VERSION 
	
	即把 datanode 文件下的clusterID 拷贝到  namenode 即可。
	
	重新启动服务

```

	[root@hadoop01 sbin]# jps
	29957 NameNode
	30565 NodeManager
	30262 SecondaryNameNode
	30457 ResourceManager
	30650 Jps
	30059 DataNode
	5038 UnixLauncher
	[root@hadoop01 sbin]# 

```

::: danger
	 多次格式化namenode节点导致的，所以格式节点只有在第一次启动hadoop的时候。
:::

```
	[root@hadoop01 hadoopfileSystem]# hadoop fs -ls /user/fileShellDemo
	-rw-r--r--   1 root supergroup          5 2017-06-29 21:00 /user/fileShellDemo
	[root@hadoop01 hadoopfileSystem]# 
	
```

* copyFromLocal

	Usage: hadoop fs -copyFromLocal [localsrc] URI
	
	Similar to the fs -put command, except that the source is restricted to a local file reference.
	
	Options:
	
	-p : Preserves access and modification times, ownership and the permissions. (assuming the permissions can be propagated across filesystems)
	-f : Overwrites the destination if it already exists.
	-l : Allow DataNode to lazily persist the file to disk, Forces a replication factor of 1. This flag will result in reduced durability. Use with care.
	-d : Skip creation of temporary file with the suffix ._COPYING_.
	
	
```
	 [root@hadoop01 hadoopfileSystem]# hadoop fs -copyFromLocal hello2.txt  /user/fileShellDemo
	[root@hadoop01 hadoopfileSystem]# hadoop fs -ls /user/fileShellDemo
		Found 1 items
		-rw-r--r--   1 root supergroup          7 2017-06-29 21:13 /user/fileShellDemo/hello2.txt
	[root@hadoop01 hadoopfileSystem]# 

```
*  copyToLocal

	Usage: hadoop fs -copyToLocal [-ignorecrc] [-crc] URI [localdst]
	
	Similar to get command, except that the destination is restricted to a local file reference.


* count

	Usage: hadoop fs -count [-q] [-h] [-v] [-x] [-t [[storage type]]] [-u] [paths]
	
	Count the number of directories, files and bytes under the paths that match the specified file pattern. Get the quota and the usage. The output columns with -count are: DIR_COUNT, FILE_COUNT, CONTENT_SIZE, PATHNAME
	
	The -u and -q options control what columns the output contains. -q means show quotas, -u limits the output to show quotas and usage only.
	
	The output columns with -count -q are: QUOTA, REMAINING_QUOTA, SPACE_QUOTA, REMAINING_SPACE_QUOTA, DIR_COUNT, FILE_COUNT, CONTENT_SIZE, PATHNAME
	
	The output columns with -count -u are: QUOTA, REMAINING_QUOTA, SPACE_QUOTA, REMAINING_SPACE_QUOTA, PATHNAME
	
	The -t option shows the quota and usage for each storage type. The -t option is ignored if -u or -q option is not given. The list of possible parameters that can be used in -t option(case insensitive except the parameter "“): ”“, ”all“, ”ram_disk“, ”ssd“, ”disk“ or ”archive".
	
	The -h option shows sizes in human readable format.
	
	The -v option displays a header line.
	
	The -x option excludes snapshots from the result calculation. Without the -x option (default), the result is always calculated from all INodes, including all snapshots under the given path. The -x option is ignored if -u or -q option is given.
	
	Example:
	
	hadoop fs -count hdfs://nn1.example.com/file1 hdfs://nn2.example.com/file2
	hadoop fs -count -q hdfs://nn1.example.com/file1
	hadoop fs -count -q -h hdfs://nn1.example.com/file1
	hadoop fs -count -q -h -v hdfs://nn1.example.com/file1
	hadoop fs -count -u hdfs://nn1.example.com/file1
	hadoop fs -count -u -h hdfs://nn1.example.com/file1
	hadoop fs -count -u -h -v hdfs://nn1.example.com/file1
	Exit Code:
	
	Returns 0 on success and -1 on error.

```
[root@hadoop01 hadoopfileSystem]# hadoop fs -count -h /user/fileShellDemo/hello2.txt
           0            1                  7 /user/fileShellDemo/hello2.txt
```

* truncate
	
	Usage: hadoop fs -truncate [-w] [length] [paths]
	
	Truncate all files that match the specified file pattern to the specified length.
	
	Options:
	
	The -w flag requests that the command waits for block recovery to complete, if necessary. Without -w flag the file may remain unclosed for some time while the recovery is in progress. During this time file cannot be reopened for append.
	Example:
	
	hadoop fs -truncate 55 /user/hadoop/file1 /user/hadoop/file2
	hadoop fs -truncate -w 127 hdfs://nn1.example.com/user/hadoop/file1

```

   [root@hadoop01 hadoopfileSystem]# cat hello2.txt 
	hello2
	[root@hadoop01 hadoopfileSystem]# hadoop fs -truncate 2 /user/fileShellDemo/hello2.txt
	Truncating /user/fileShellDemo/hello2.txt to length: 2. Wait for block recovery to complete before further updating this file.
	[root@hadoop01 hadoopfileSystem]# hadoop fs -cat 2 /user/fileShellDemo/hello2.txt
	cat: `2': No such file or directory
	he[root@hadoop01 hadoopfileSystem]# hadoop fs -cat /user/fileShellDemo/hello2.txt
	he[root@hadoop01 hadoopfileSystem]# 

```

* find

	Usage: hadoop fs -find  [path] ... [expression] ...
	
	Finds all files that match the specified expression and applies selected actions to them. If no path is specified then defaults to the current working directory. If no expression is specified then defaults to -print.
	
	The following primary expressions are recognised:
	
	-name pattern
	-iname pattern
	
	Evaluates as true if the basename of the file matches the pattern using standard file system globbing. If -iname is used then the match is case insensitive.
	
	-print
	-print0
	
	Always evaluates to true. Causes the current pathname to be written to standard output. If the -print0 expression is used then an ASCII NULL character is appended.
	
	The following operators are recognised:
	
	expression -a expression
	expression -and expression
	expression expression
	
	Logical AND operator for joining two expressions. Returns true if both child expressions return true. Implied by the juxtaposition of two expressions and so does not need to be explicitly specified. The second expression will not be applied if the first fails.
	
	Example:
	
	hadoop fs -find / -name test -print
	
	Exit Code:
	
	Returns 0 on success and -1 on error.

```
   //指定路径查找
   [root@hadoop01 hadoopfileSystem]# hadoop fs -find /user
	/user
	/user/fileShellDemo
	/user/fileShellDemo/hello2.txt
	
	//使用名字查找
	
	[root@hadoop01 hadoopfileSystem]# hadoop fs -find /user -name hello2.txt
	/user/fileShellDemo/hello2.txt
	[root@hadoop01 hadoopfileSystem]# 

    //不区分大小写查找
    
    [root@hadoop01 hadoopfileSystem]# hadoop fs -find /user  -iname HELLO2.txt
	/user/fileShellDemo/hello2.txt
	[root@hadoop01 hadoopfileSystem]# 
	
```

* test

	Usage: hadoop fs -test -[defsz] URI
	
	Options:
	
	-d: f the path is a directory, return 0.
	-e: if the path exists, return 0.
	-f: if the path is a file, return 0.
	-s: if the path is not empty, return 0.
	-r: if the path exists and read permission is granted, return 0.
	-w: if the path exists and write permission is granted, return 0.
	-z: if the file is zero length, return 0.
	Example:

hadoop fs -test -e filename

* tail

	Usage: hadoop fs -tail [-f] URI
	
	Displays last kilobyte of the file to stdout.
	
	Options:
	
	The -f option will output appended data as the file grows, as in Unix.
	Example:
	
	hadoop fs -tail pathname
	Exit Code: Returns 0 on success and -1 on error.
	


```
[root@hadoop01 hadoopfileSystem]# hadoop fs -tail /user/fileShellDemo/hello2.txt
he
```






