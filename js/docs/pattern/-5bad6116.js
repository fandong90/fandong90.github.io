System.register([], function(__WEBPACK_DYNAMIC_EXPORT__) {

	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/design_pattern_模式_1-1_单例模式.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("h3", { attrs: { id: "%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 单例模式")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("单例模式的特点")])]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "\t1、单例类只有一个实例对象；\n\t2、该单例对象必须由单例类自行创建；\n\t3、单例类对外提供一个访问该单例的全局访问点；\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("为什么需要单例")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "只创建一个实例，\nWindows 的回收站、操作系统中的文件系统、多线程中的线程池、显卡的驱动程序对象、打印机的后台处理服务、应用程序的日志对象、数据库的连接池、网站的计数器、Web 应用的配置对象、应用程序中的对话框、系统中的缓存等常常被设计成单例。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("java 代码- 懒汉模式")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n\t\t * 创建一个单例模式\n\t\t * 多线程安全，同步导致效率低，占用资源多\n\t\t */"
            )
          ]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Singleton")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\t\n\t\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("volatile")]),
          _vm._v(" Singleton  inner;\n\t\t\n\t\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Singleton")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{}\n\t\t\n\t\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [
              _vm._v("synchronized")
            ]),
            _vm._v(" Singleton "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getInstance")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(inner == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n\t\t            inner = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Singleton();\n\t\t        }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v("{\n\t\t            System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"singleton has created!"')
          ]),
          _vm._v(");\n\t\t        }\n\t\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" inner;\n\t\t    }\n\t\t\n\t\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("错误写法")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n\t * 创建一个单例模式\n\t */")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Singleton")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("volatile")]),
          _vm._v(" Singleton  inner;\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" count="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n\t\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Singleton")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{}\n\t\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
            _vm._v("  Singleton "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getInstance")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(inner == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n\t            inner = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Singleton();\n\t            count +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n\t            System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"当前线程的ID  "')
          ]),
          _vm._v("+Thread.currentThread().getId()+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('" count："')]),
          _vm._v("+count);\n\t        }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v("{\n\t            System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"已经创建了 id "')
          ]),
          _vm._v("+Thread.currentThread().getId());\n\t        }\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" inner;\n\t    }\n\t\n\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "在单线程中是OK的，但是多线程中就有可能出现同时访问的情况，所以懒汉模式创建单个实例，必须使用\nvolatile / synchronized 关键字\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("测试代码")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "测试代码，loop了600个线程，每个线程等待1秒钟，发现被同时访问了"
          )
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";i<"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("100")]),
          _vm._v(";i++){\n       Thread t1= "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Thread("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Runnable() {\n            "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v(
            "{\n                Singleton.getInstance();\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("try")]),
          _vm._v("{\n                    Thread.sleep("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1000")]),
          _vm._v(");\n                }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("catch")]),
          _vm._v(
            " (InterruptedException e){\n                    System.out.println(e.getMessage());\n                }\n            }\n        });\n\n        Thread t2= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Thread("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Runnable() {\n            "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v(
            "{\n                Singleton.getInstance();\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("try")]),
          _vm._v("{\n                    Thread.sleep("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1000")]),
          _vm._v(");\n                }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("catch")]),
          _vm._v(
            " (InterruptedException e){\n                    System.out.println(e.getMessage());\n                }\n            }\n        });\n\n        Thread t3= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Thread("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Runnable() {\n            "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v(
            "{\n                Singleton.getInstance();\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("try")]),
          _vm._v("{\n                    Thread.sleep("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1000")]),
          _vm._v(");\n                }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("catch")]),
          _vm._v(
            " (InterruptedException e){\n                    System.out.println(e.getMessage());\n                }\n            }\n        });\n\n        t1.start();\n        t2.start();\n        t3.start();\n    }\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("测试数据")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t当前线程的ID  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(" count："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v("\n\t当前线程的ID  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(" count："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("19")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v("\n\t已经创建了 id "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v("\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("代码二 饿汉模式")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n\t * 饿汉模式，类已加载就实例化。\n\t */")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("HungrySingleton")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" count="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v("  HungrySingleton  instance = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" HungrySingleton();\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("HungrySingleton")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        count +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n\t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"ID:"')]),
          _vm._v("+Thread.currentThread().getId() +"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"count :"')]),
          _vm._v("+count);\n\t    }\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
            _vm._v("  HungrySingleton "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getInstance")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(
            "{\n\t        System.out.println(Thread.currentThread().getId()+"
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"线程"')]),
          _vm._v(");\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" instance;\n\t    }\n\t}\t\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("测试代码")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tID:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("count :"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("19")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v("线程\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v("线程\n\t...\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Summary")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\n    单例模式，后续。。。\n\n")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/pages/md/design_pattern_模式_1-1_单例模式.md":
/*!****************************************************!*\
  !*** ./src/pages/md/design_pattern_模式_1-1_单例模式.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_pattern_1_1_md_vue_type_template_id_475f68aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa& */ "./src/pages/md/design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _design_pattern_1_1_md_vue_type_template_id_475f68aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _design_pattern_1_1_md_vue_type_template_id_475f68aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/design_pattern_模式_1-1_单例模式.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_1_md_vue_type_template_id_475f68aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_模式_1-1_单例模式.md?vue&type=template&id=475f68aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_1_md_vue_type_template_id_475f68aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_1_md_vue_type_template_id_475f68aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-5bad6116.js.map