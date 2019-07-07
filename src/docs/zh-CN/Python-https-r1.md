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
# 某招聘

```

	# -*- coding: UTF-8 -*- 
#  爬取boss 直聘数据
#  设定导入模块目录
import sys,os,time
baseDir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(baseDir)

from utils.fileFormat import writeListFile
from utils.stringutil import is_number
from selenium import webdriver
from selenium.webdriver import ActionChains
from bs4 import BeautifulSoup
import time

#获取公司的招聘信息
def detailJobList(driver,text):
    ##点击元素
    jobList= driver.find_elements_by_xpath("//div[@class='job-list']/ul/li")
    clickText = text
    currDate = time.strftime('%Y-%m-%d',time.localtime())
    arrayList =[]
    for li in jobList:
        bsLiObj = BeautifulSoup(li.get_attribute('innerHTML'),features="html.parser")
        detailItemPrimaryObj = bsLiObj.find('div',{"class":"info-primary"})
        detailItemCompanyObj = bsLiObj.find("div",{"class":"info-company"})
        detailItemHrObj      = bsLiObj.find("div",{"class":"info-publis"})
        #招聘的职位
        jobTitle = detailItemPrimaryObj.find("div",{"class":"job-title"}).get_text()
        salaryRange = detailItemPrimaryObj.find("span",{"class":"red"}).get_text()
        arr1           = str(detailItemPrimaryObj.p).split('<em class="vline"></em>')
        arr1Count      = len(arr1)
        companyAddress=''
        workyear=''
        education=''
        if(arr1Count>0):
            companyAddress = arr1[0].replace('<p>','')
        if(arr1Count>1):
            workyear       = arr1[1]
        if(arr1Count>2):
            education      = arr1[2].replace('</p>','')
        
        #获取职位描述

        #jobdesc        = detailItemPrimaryObj.find("div",{"class":"detail-bottom-text"}).get_text()
        # 公司性质
        companyName    = detailItemCompanyObj.find("h3",{"class":"name"}).get_text()
        arr2           = str(detailItemCompanyObj.div.p).split('<em class="vline"></em>')
        arr2Count      = len(arr2)
        propertyName=''
        propertyName2=''
        propertyName3=''
        if(arr2Count>0):
            propertyName   = arr2[0].replace('<p>','')
        if(arr2Count>1):
            propertyName2  = str(detailItemCompanyObj.div.p).split('<em class="vline"></em>')[1]
        if(arr2Count>2):
            propertyName3  = str(detailItemCompanyObj.div.p).split('<em class="vline"></em>')[2].replace('</p>','')
        #发布者
        pushName       = detailItemHrObj.h3.get_text()
       # pushJob        = detailItemHrObj.h3.find("em").get_text()
       
        obj ={"category_lv3":clickText,
              "job":jobTitle,"salary":salaryRange,
              "company":companyName,
              "companyAddress":companyAddress,
              "pro":propertyName,
              "pro_1":propertyName2,
              "pro_2":propertyName3,
              "year":workyear,
              "education": education,
              "push":pushName,
             # "pushjob":pushJob,
              "jobDesc":""
              }
        arrayList.append(obj)
    return arrayList

#获取三级的a标签
def getCategory(url):
    #获取相关数据
    driver = webdriver.Chrome()
    driver.get(url)
    jobMenuElement=driver.find_element_by_class_name("job-menu")
    bsObj = BeautifulSoup(jobMenuElement.get_attribute('innerHTML'),features="html.parser")
    #鼠标悬停事件
    pList = bsObj.findAll("p",{"class":"menu-article"})
    for p in pList:
        # 移动到指定元素上，获取鼠标触发事件
        try:
            #获取界面，防止数据session过期丢失
            driver.get(url)
            curElement=driver.find_element_by_xpath("//b[text()='"+p.get_text()+"']")
            ActionChains(driver).move_to_element(curElement).perform()
            # 找到相应的触发事件元素
            curElement= driver.find_element_by_xpath("//div[@class='menu-sub']/p[@class='menu-article'][text()='"+p.get_text()+"']/..")
            
            # curElement= driver.find_element_by_xpath("//p[@class='menu-article',text()='"+p.get_text()+"']/..")
            bsSubObj = BeautifulSoup(curElement.get_attribute("innerHTML"),features="html.parser")
            h4List = bsSubObj.findAll('h4')
            for h4 in h4List:
                #分二级目录
                #print(h4.get_text())
                try:
                    #获取界面，防止数据session过期丢失
                    driver.get(url)
                    curElement = driver.find_element_by_xpath("//div[@class='menu-sub']/p[@class='menu-article'][text()='"+p.get_text()+"']/../ul/li/h4[text()='"+h4.get_text()+"']/../div[@class='text']")
                    bsSub2Obj = BeautifulSoup(curElement.get_attribute("innerHTML"),features="html.parser")
                    aList = bsSub2Obj.findAll("a")
                    for a in aList:
                        ahref= a.get('href')
                        print(url+ahref)
                        driver.get(url+ahref)
                        #执行当前页
                        arr=detailJobList(driver,a.get_text())
                        writeListFile(arr,"boss-job-list"+a.get_text().replace('/','')+".txt","a+")
                        #获取页码
                        #pageList = driver.find_elements_by_xpath("//div[@class='page']/a")
                        isContinue=True
                        while(isContinue):
                            #获取当前页是否为最后一页
                            try:
                                nextpage = driver.find_element_by_xpath("//div[@class='page']/a[@class='next']")
                                if(nextpage is not None):
                                    nextUrl =nextpage.get_attribute('href')
                                    if(nextUrl=="javascript:;"):
                                        isContinue=False
                                    else:
                                        print(nextUrl)
                                        driver.get(nextUrl)
                                        arr=detailJobList(driver,a.get_text())
                                        writeListFile(arr,"boss-job-list"+a.get_text().replace('/','')+".txt","a+")
                                else:
                                    isContinue=False 
                            except Exception as e:
                                isContinue=False 
                except Exception as e:
                    pass  
        except Exception as e:
            print(e)
            pass

if __name__ == "__main__":
    #移动到a标签去点击执行
    url="https://www.zhipin.com"
    getCategory(url)

```
# 写文件
```
# -*- coding: UTF-8 -*- 

# 输出文件内容即格式

#处理sList数组元素到文件中，并以\t分割
def writeListFile(array,filePath,mode):
    with open(filePath,mode) as f:
        for dict in array:
            dictStr=''
            for key in dict:
                dictStr = dictStr+str(dict[key])+'\t'
            f.write(dictStr+'\r\n')

```
# 字符处理

```
# -*- coding: UTF-8 -*- 

# 判断是否为数字
def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
 
    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass
 
    return False
```