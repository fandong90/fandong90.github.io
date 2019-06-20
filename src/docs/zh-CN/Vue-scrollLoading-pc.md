# Vue --scrollLoading 滚动加载数据

* 背景
	
	由于业务需要一个页面会出现多个部分，如模块（图表），当用户访问一个网页的时候，会进行初始化请求，如果一次性加载完全，用户体验很是不好，这样对后端的压力很大，毕竟现在后台表都是上亿级别的存储。

* 改善

	在用户可视区时，进行加载。即模块出现在屏幕上加载，相同查询条件只加载一次。
	
* 行动

   * 思路：判断模块（div)是否出现在可是区域内，操作包括三种情况：
   		* 1、向上滚动
   		* 2、向下滚动
   		* 3、左右滑动
   		
   	系统UX要求，当页面过长时只能有一个滚动条。所以offsetTop 计算的是window 的偏移高度。
   	
   	* 准备
   		
   		* 模块（div） 要想出现在进入可视区内必须满足：
   		
   			```
   			   /*模块简称DiV*/
   			  elTop  =  DIV的Top偏移高度 小于 窗体滚动高度 + 窗体文档的可视高度   		
			elBottom = DIV的偏移高度 + 窗体文档的可视高度  大于   窗体滚动高度  
   			  
   			  /*左右同理*/
   			  
   			   elTop  =  DIV的Left偏移长度 小于 窗体X轴长度  + 窗体文档的可视宽度 
  			  elBottom = DIV的偏移长度  + 窗体文档的可视宽度    大于   窗体X轴长度 
   			  
      		```
      		
   * Vue 组件化。
   		
   		Vue 是MVVM模型，使用数据驱动，虽然也可以使用模块加id 的方式，注册滚动事件，判断是否加载数据。
   		既然使用vue了，决定使用Vue 自定义指令处理，通过自定义指令获取需要滚动加载的模块。
   		
   		*  使用指令标记哪些需要滚动加载数据的模块。
   		*  匹配的模块通过指令修饰符判断请求哪些数据。
   		*  vue中v-if / v-show 在单页面中使用tab页签的处理问题，这是调试发现的问题。
   		
   		
   		* 创建一个指令： scrollLoading
   		
   		```
   		   import Vue from 'vue';

			/**创建一个数组 存储标记的模块 */
			const labelScrollLoadingEls=[];
			
			/*
			*  判读组件创建时，滚动事件监测是否创建，没有则创建
			*/
			var  listenerEventExist=false;
			
			/**
			 * 注册修饰符，何时去请求数据
			 */
			const registerObjs=[];
			
			Vue.directive('scrollLoading',{
			    bind:function(el, binding){
			        let elObj={
			            el: el,
			            modifiers: Object.keys(binding.modifiers).join('.')
			        };
			
			        let matchExistEl = labelScrollLoadingEls.filter(item=>{
			            if(item.modifiers === elObj.modifiers) return true;
			            else return  false;
			        });
			        /*这样写的原因是v-if 的时候，组件会重新创建，这样就必须更新el引用对象 */
			        if(matchExistEl.length>0){
			            matchExistEl[0]=elObj;
			        }else{
			            labelScrollLoadingEls.push(elObj);
			        }
			    }
			});			
			
   		```
   		* 创建注册函数 和 移除滚动事件函数
   		
   		```
   		
   		    function insertAndUpdate(option){
		    let defaultOpition={
		        val:'',
		        oldVal:'',
		        modifiers:'',
		        callback:null
		    };
		
		    let keys = Object.keys(option);
		
		    keys.forEach(key=>{
		        defaultOpition[key] = option[key] || defaultOpition[key];
		    });
		
		    //val 是否改变，改变则更新注册对象参数
		
		    let matchRegisterObj = registerObjs.filter(item=>{
		        if(item.modifiers === defaultOpition.modifiers) return true;
		        else return false;
		    });
		    
		    if(matchRegisterObj.length>0){
		        //注意要判读是否已执行，否则不替换val
		        if(matchRegisterObj.isExec){
		           matchRegisterObj[0].oldVal = matchRegisterObj[0].val;
		        }
		        matchRegisterObj[0].val = defaultOpition.val;
		    }else{
		        registerObjs.push(defaultOpition);
		    }
		}


   			/**
			 * 
			 * @param {注册滚动事件} options 
			 */
			export function registerScrollLoading(options){
			
			   if(!listenerEventExist){
			
			       window.addEventListener("scroll",scrolling);
			       listenerEventExist=true;
			   }
			   
			   if(options != undefined && options instanceof Array){
			       options.forEach(obj=>{
			           insertAndUpdate(obj);
			       })
			   }else{
			       insertAndUpdate(options);
			   }
			   
			   //v-show 延迟100ms 执行
			   setTimeout(scrolling, 100);
			}
			
			
			/**
			 * 在destroy 方法中调用
			 */
			export function unRegisterScrollLoading(){
			    window.removeEventListener("scroll",scrolling);
			    listenerEventExist=false;
			    registerObjs.splice(0,registerObjs.length);
			}
			   		    
   		```
   		
   		* 核心
   		
   		
	```
   		 function scrolling(){
	    //计算中窗体的/
	
	    let viewHeight = window.document.documentElement.clientHeight;
	    let viewWidth  = window.document.documentElement.clientWidth;
	    let scrollTop  = window.scrollY || window.pageYOffset;
	    let scrollLeft = window.scrollX || window.pageXOffset;
	
	    labelScrollLoadingEls.forEach(elObj=>{
	
	          let elTop = elObj.el.offsetTop -(viewHeight + scrollTop);
	          let elBottom = elObj.el.offsetHeight + viewHeight-scrollTop;
	          let elLeft =elObj.el.offsetLeft -(viewWidth + scrollLeft);
	          let elRight = elObj.el.offsetWidth -viewWidth + scrollLeft ;
	
	
	          if(elTop<0 && elBottom>0 && elLeft<0 && elRight>0){
	              
	              let matchRegisterObj = registerObjs.filter(item=>{
	                    if(item.modifiers === elObj.modifiers) return true;
	                    else return false;
	              });
	              
	              if(matchRegisterObj.length>0){
	                  //判读val 是否改变，改变则执行
	                  if(matchRegisterObj[0].oldVal != matchRegisterObj[0].val){
	
	                      //to-do
	                      //添加数据请求函数，获取结果。
	                      let result ='' ;//来子取数api
	                      //通过注册对象的传递的函数，进行值得回传
	                      //标记是否已执行
	                      matchRegisterObj.isExec=true; 
	                      requestData(matchRegisterObj[0].val).then((data)=>{
	                         matchRegisterObj.callback.call(this,result);
	                      })
	                     
	                  }
	              }
	          }
			
			    });
			
			}   	
       //请求示例
		function requestData(paras){
		    return new Promise((resolve,reject)=>{
		        try{
		            resolve('ok');
		        }catch(err){
		            reject(err);
		        }
		    })
		}
		
	```
	
* 如何使用

   * 引用刚才的文件
   * div 添加v-scroll-loading 指令，并添加修饰符a 或者 b.c
   * 注册参数
   * 在mounted 中调用。

	```
	<template>
	    <div>
	        <div v-scroll-loading.a>{{data1}}</div>
	        <div v-scroll-loading.b.c>{{data2}}</div>
	    </div>
	</template>
	
	<script>
	import {
	    registerScrollLoading,
	    unRegisterScrollLoading
	} from './demo.js';
	export default {
	    data(){
	        return {
	            data1:'',
	            data2:''
	        }  
	    },
	    mounted(){
	        this.queryData();
	    },
	    methods:{
	        queryData(){
	             let _this=this;
	             let registerObjs=[
	                 {
	                     val:"uuu",
	                     modifiers:'a',
	                     callback:function(d){
	                         _this.data1=d;
	                     }
	                 },
	                 {
	                     val:"uuu",
	                     modifiers:'b.c',
	                     callback:function(d){
	                         _this.data2=d;
	                     }
	                 }
	             ];
	
	             registerScrollLoading(registerObjs);
	        }
	    },
	   destroyed(){
	       unRegisterScrollLoading();
	   }
	}
	</script>
	
	<style>
	
	</style>
	
	```

-----本文完
	
	
   		
   		