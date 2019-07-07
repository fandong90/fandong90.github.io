#Python 爬虫遇到坑

* https

::: danger

	<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self signed certificate in certificate chain (_ssl.c:1051)>
	
:::

:::warnning

	网络解决办法：
	ssl._create_default_https_context = ssl._create_unverified_context
	
:::

:::warnning
    失败，同样报错
    
    1.需要在python3.7 安装的地方安装证书。
    
    Application / python3.7  
    安装证书
    
:::
   
   ![error](http://fandong90.github.io/dist/static/img/httpserror.png)
   
:::success
   
   成功！

:::

::: tips

	使用urllib.request 方法header 的user_agent会显示urllib 代理，不利于爬虫，需要在header修改代理信息
	
:::

:::warnning 使用selenium 点击网站

	我使用的是chrome driver ，下载相应的驱动
	url:http://chromedriver.storage.googleapis.com/index.html
   mac: 把解压后的chromeDriver 放到 /user/local/bin 下
	
:::

```
    #python 代码
	from selenium import webdriver
	
	browser = webdriver.Chrome()
	browser.get('https://www.zhipin.com')

```
# selenium 常用的方法

