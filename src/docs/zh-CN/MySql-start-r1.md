# MySql linux/centos7 安装创建

---使用 yum 安装

```
ywget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server

```

---查看mysql 版本

```

 [root@hadoop01 mysql]# mysql --version
 mysql  Ver 14.14 Distrib 5.6.44, for Linux (x86_64) using  EditLine wrapper

```

```
   /*查看mysql服务是否启动*/
   [root@hadoop01 mysql]# ps -ef | grep mysqld
	mysql     8054     1  0 6月10 ?       00:00:00 /bin/sh /usr/bin/mysqld_safe --basedir=/usr
	mysql     8279  8054  0 6月10 ?       00:13:01 /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib64/mysql/plugin --log-error=/var/log/mysqld.log --pid-file=/var/run/mysqld/mysqld.pid --socket=/var/lib/mysql/mysql.sock
	root     19896 19195  0 11:13 pts/1    00:00:00 grep --color=auto mysqld
	[root@hadoop01 mysql]# 

```
   

```
    //创建用户, 默认root 密码为空
    [root@bogon ~]# mysql -u root -p 
     Enter password: 

    mysql> use mysql
	Reading table information for completion of table and column names
	You can turn off this feature to get a quicker startup with -A
	
	Database changed
	mysql> create user 'nodejs'
	    -> ;
	Query OK, 0 rows affected (0.00 sec)
	
	mysql> update user set password=MD5('nodejs') where user='nodejs';
	Query OK, 1 row affected (0.00 sec)
	Rows matched: 1  Changed: 1  Warnings: 0
    
    //授权
    mysql> grant  select,insert,update,delete,create,drop on *.* to nodejs;
	Query OK, 0 rows affected (0.00 sec)
	
	mysql> flush privileges;
	Query OK, 0 rows affected (0.00 sec)
	
```

* 使用新创建的用户登录
  
  `
    创建的用户为% ，不能再本机上登录，所以使用mysql brench 登录，
    
    提示无法登录。
    
    1》 首先检测防火墙，--关闭防火墙  systemctl stop firewalld
    
    连接成功。
    
  `
  
 
