# javaScript 的内存管理、泄漏、调试

***来自MDN***

## 内存生命周期

::: warnning
	 1、分配你所需要的内存
    2、使用分配到的内存（读、写）
    3、不需要时将其释放\归还
:::

## JavaScript的内存分配
```
var n = 123; // 给数值变量分配内存
var s = "azerty"; // 给字符串分配内存

var o = {
  a: 1,
  b: null
}; // 给对象及其包含的值分配内存

// 给数组及其包含的值分配内存（就像对象一样）
var a = [1, null, "abra"]; 

function f(a){
  return a + 2;
} // 给函数（可调用的对象）分配内存

// 函数表达式也能分配一个对象
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);

```
## 通过函数调用分配内存

有些函数调用结果是分配对象内存：

```
	   var d = new Date(); // 分配一个 Date 对象

      var e = document.createElement('div'); // 分配一个 DOM 元素
```
分配新变量或者新对象
···
		var s = "azerty";
		var s2 = s.substr(0, 3); // s2 是一个新的字符串
		// 因为字符串是不变量，
		// JavaScript 可能决定不分配内存，
		// 只是存储了 [0-3] 的范围。
		
		var a = ["ouais ouais", "nan nan"];
		var a2 = ["generation", "nan nan"];
		var a3 = a.concat(a2); 
		// 新数组有四个元素，是 a 连接 a2 的结果
···

::: success
	* 定义对象的时刻，就分配了对象
	* 通过函数调用分配内存
:::

## 使用值

使用值的过程实际上是对分配内存进行读取与写入的操作。读取与写入可能是写入一个变量或者一个对象的属性值，甚至传递函数的参数。

## 当内存不再需要使用时释放

大多数内存管理的问题都在这个阶段。在这里最艰难的任务是找到“所分配的内存确实已经不再需要了”。它往往要求开发人员来确定在程序中哪一块内存不再需要并且释放它。

高级语言解释器嵌入了“垃圾回收器”，它的主要工作是跟踪内存的分配和使用，以便当分配的内存不再使用时，自动释放它。这只能是一个近似的过程，因为要知道是否仍然需要某块内存是无法判定的（无法通过某种算法解决）。

::: danger
	 以上来自MDN。。。。
:::

# 如何产生内存泄漏
 
::: danger
 * 对象创建未及时清除，全局变量的创建（引用计数——垃圾回收）
:::

```
   /**未定义 var 声明，内部引用，导致无法清除*/
	function foo(){
	    bar="this is bar";
	}
	
	/**this window 对象*/
	function foo(){
	    this.bar="this is bar";
	}
	
```
::: success
   使用 ’use strict' 进行javascript 解析
:::
::: danger
 * 对象的循环引用 （引用计数——垃圾回收）
:::

```
   /**/
   var obj = new Object();
   var obj2 = new Object();
   obj.p = obj2;
   obj2.p= obj;
   
```
# 标记扫描算法

::: success

*	垃圾回收器构建“roots”列表。Roots 通常是代码中保留引用的全局变量。在 	JavaScript 中，“window” 对象可以作为 root 全局变量示例。
*	所有的 roots 被检查并标记为 active（即不是垃圾）。所有的 children 也被递	归检查。从 root 能够到达的一切都不被认为是垃圾。
*	所有为被标记为 active 的内存可以被认为是垃圾了。收集器限制可以释放这些内存并	将其返回到操作系统。

:::

![标记扫描](http://fandong90.github.io/dist/static/img/markSweep.gif)

::: tip
	循环引用不是问题。
:::

* setInterval 这个不会自动结束。
::: danger
	使用setInterval 调用的函数中创建了全局变量，每次执行都创建一次，闭包的使用。
:::

# 如何检测

* 使用chrome 开发工具
![标记扫描](http://fandong90.github.io/dist/static/img/heapChrom.png)
