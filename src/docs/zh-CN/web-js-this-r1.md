#Js  this 指向及修改

::: tip

    this 在函数中使用，this的指向不是在创建时指定，而是在运行时指定的
    
:::

* usage 1

  	```
  	    //在浏览器器中，this指向的window对象
  		 <script type="text/javascript">
            var name="hello";
            function sayName(){
                var obj = document.getElementById("test");
                obj.innerText=this.name;
            }
        </script>
        
        //result
        
        // hello
        
        //在nodejs 中,this 指向
        
          var  name ='hello';
			function sayName (){ 
			    console.log(this.name);
			}
			
		  sayName(); //result  undefined
			
  	```
  	
  	![jsthisr1](http://fandong90.github.io/dist/static/img/nodethisr1.jpg)
  	
* usage 2
	
	```
	     // web 浏览器显示
	      <script type="text/javascript">
            var name="hello";
            // function sayName(){
            //     var obj = document.getElementById("test");
            //     obj.innerText=this.name;
            // }
            var obj ={
                name:'hehe',
                sayName:function(){
                    var obj = document.getElementById("test");
                    obj.innerText=this.name;
                    console.log(this.name);
                }
            };
            
            obj.sayName();
        </script>
        
        // result  hehe
        
                
        //node 
        
        var name="hello";
			var obj={
			    name:'hehe',
			    sayName:function(){
			        console.log(this.name);
			    }
			};
			
			obj.sayName();
			
			//result  hehe;
        
	```
	
	换一种一写法
	
	```
	        //浏览器表现
	        var name="hello";
            // function sayName(){
            //     var obj = document.getElementById("test");
            //     obj.innerText=this.name;
            // }
            var obj ={
                name:'hehe',
                sayName:function(){
                    var obj = document.getElementById("test");
                    obj.innerText=this.name;
                    console.log(this.name);
                }
            };
            
           var fn= obj.sayName;
           
           fn();
           
	        //result  hello
	        
	        //node
	        
	        //result  undefined
	        
	```
	
* usage 3
	
	```
	         //浏览器表现
	         var name="hello";
            // function sayName(){
            //     var obj = document.getElementById("test");
            //     obj.innerText=this.name;
            // }
            var obj ={
                name:'hehe',
                sayName:function(){
                    return function () {

                        var obj = document.getElementById("test");
                            obj.innerText=this.name;
                            console.log(this.name);
                      }
                }
            };
           
           var fn= obj.sayName;
           fn()();
           //result hello
	
	```
	
* usage 4 构造函数

  ```
		function Person(){
		    this.name="hello";
		}
		
		var p = new Person();
		console.log(p.name);
		
		//返回值改变了this的指向
		function PersonOne(){
		    this.name="hello";
		    return {};
		}
		
		var p = new PersonOne();
		console.log(p.name);
  
  ```
 
 * usage 5 DOM 对象调用
   
   ```
        <div id="test" onclick="hello()"></div>
        <script type="text/javascript">
            var name="hello";
            // function sayName(){
            //     var obj = document.getElementById("test");
            //     obj.innerText=this.name;
            // }
            var obj ={
                name:'hehe',
                sayName:function(){
                    return function () {

                        var obj = document.getElementById("test");
                            obj.innerText=this.name;
                            console.log(this.name);
                      }
                }
            };
           
           var fn= obj.sayName;
           fn()();

           function hello(){
               alert(this.innerText);
           }
           
           // result   undefined
           <div id="test" onclick="alert(this.innerText)"></div>
           //result   hello
            var obj = document.getElementById("test");
            obj.onclick=function(){
             alert(this.innerText);
            }
            //result hello
           
   ```
   
 * usage 6 改变this

 ```
 	let _this =this;
 	
 	function name(){
 		this.name='this';
 		let _this=this;
 		function name1(){
 			console.log(_this.name);
 		}
 	}
 	
 ```
 
 ```
    // call apply  bind
    
    obj.call(this,[arg])
    
    obj.apply(this,[arg..])
    
    obj.method.bind(this)
 
 ```


