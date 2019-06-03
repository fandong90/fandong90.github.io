#ES6 class 类

## 类是什么

类实际上是个“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，类语法有两个组成部分：类表达式和类声明。

## 如何定义一个类
~~~
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
~~~

这个写法和高级语言很像。

##  类的表达形式

~~~
 /*定义一个匿名类*/
 let Color = class{
 	constructor(type){
 		this.type = type;
 	}
 }
 
 /*定义一个明明的类*/
 
 let GreenColor = class Color{
 	 constructor(type){
 	 	this.type = type;
 	 }
 }
 
~~~
:::success
	类的声明 和变量不同，不可以提升。

	类的声明和执行必须在严格模式下‘use strict'

	类的构造函数唯一，使用super调用父类构造函数
:::

## 类体和方法定义

* 严格模式：
			类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter和setter都在严格模式下执行。
			
* 构造函数：
			constructor方法是一个特殊的方法，这种方法用于创建和初始化一个由class创建的对象。一个类只能拥有一个名为 “constructor”的特殊方法。如果类包含多个constructor的方法，则将抛出 一个SyntaxError 。
* 静态方法：
		    static 关键字用来定义一个类的一个静态方法。调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。


***参考javascript MDN *** [javascript MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)