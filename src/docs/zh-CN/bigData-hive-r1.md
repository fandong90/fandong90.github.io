# Hive  创建


* 安装hive

 ::: tip
 
 	$ tar -xzvf hive-x.y.z.tar.gz
 	
 :::

* 设置环境变量

 ::: tip
 	 $ cd hive-x.y.z
    $ export HIVE_HOME={{pwd}}
    $ export PATH=$HIVE_HOME/bin:$PATH
 :::
 
 *运行hive
 
 ::: tip
    //设置hadoop的安装路径
    export HADOOP_HOME=<hadoop-install-dir>
    
    //进入conf
    
    cp hive-env.sh.template   hive-env.sh
    
    vi hive-env.sh
    
    设置($HADOOP_HOME 已在profile 配置)
    HADOOP_HOME=$HADOOP_HOME
    
    // 进入 bin/hive-config.sh
    vi hive-config.sh
    同样设置这个
 :::
 
 *使用hive-cli 登录
 
 ::: tip
 
 	bin/hive
 	
 :::
 
 *使用 beeline登录
 
 ::: warnning
 	hadoop增加了安全授权，所以使用这个登录前需要修改hadoop的core-site.xml
 	
 	增加两条信息
 	
 	///root 表示我当前的登录账号
 	/// hadoop.proxyuser.XXX.hosts
 	<property>
 		<name>hadoop.proxyuser.root.hosts</name>
 		<value>*</value>
 	</property>
 	
 	
 	<property>
 		<name>hadoop.proxyuser.root.groups</name>
 		<value>*</value>
 	</property>
 	
 :::
 
 ::: tip
 
 	 初始化连接，看都是使用mysql，目前为了学习使用hive，先使用自带的derby数据库
 
    $ $HIVE_HOME/bin/schematool -dbType <db type> -initSchema
    
    //<db type> 改为 derby
    
    2 启动hiveserver2
    
    bin/hiveserver2 &
    
    3 连接beeline
    
    bin/beeline -u jdbc:hive2://localhost:10000
    
    
 :::
 
 result:
 
 ![beeline](http://fandong90.github.io/dist/static/img/bigdatahivestart.jpg)
 
 
