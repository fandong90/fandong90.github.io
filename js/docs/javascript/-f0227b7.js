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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/lang_javascript_memory_1-1_management.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "h1",
        {
          attrs: {
            id:
              "javascript-%E7%9A%84%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E3%80%81%E6%B3%84%E6%BC%8F%E3%80%81%E8%B0%83%E8%AF%95"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#javascript-%E7%9A%84%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E3%80%81%E6%B3%84%E6%BC%8F%E3%80%81%E8%B0%83%E8%AF%95",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" javaScript 的内存管理、泄漏、调试")
        ]
      ),
      _vm._v(" "),
      _c("p", [_c("em", [_c("strong", [_vm._v("来自MDN")])])]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id: "%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 内存生命周期")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              " 1、分配你所需要的内存\n2、使用分配到的内存（读、写）\n3、不需要时将其释放\\归还\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id: "javascript%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#javascript%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" JavaScript的内存分配")
        ]
      ),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" n = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("123")]),
          _vm._v("; "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 给数值变量分配内存")
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" s = "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"azerty"')]),
          _vm._v("; "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 给字符串分配内存")
          ]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" o = {\n  "),
          _c("span", { staticClass: "hljs-attr" }, [_vm._v("a")]),
          _vm._v(": "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(",\n  "),
          _c("span", { staticClass: "hljs-attr" }, [_vm._v("b")]),
          _vm._v(": "),
          _c("span", { staticClass: "hljs-literal" }, [_vm._v("null")]),
          _vm._v("\n}; "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 给对象及其包含的值分配内存")
          ]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 给数组及其包含的值分配内存（就像对象一样）")
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" a = ["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-literal" }, [_vm._v("null")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"abra"')]),
          _vm._v("]; \n\n"),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("function")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("f")]),
            _vm._v("("),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("a")]),
            _vm._v(")")
          ]),
          _vm._v("{\n  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" a + "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(";\n} "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 给函数（可调用的对象）分配内存")
          ]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 函数表达式也能分配一个对象")
          ]),
          _vm._v("\nsomeElement.addEventListener("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'click'")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("function")]),
            _vm._v("("),
            _c("span", { staticClass: "hljs-params" }),
            _vm._v(")")
          ]),
          _vm._v("{\n  someElement.style.backgroundColor = "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'blue'")]),
          _vm._v(";\n}, "),
          _c("span", { staticClass: "hljs-literal" }, [_vm._v("false")]),
          _vm._v(");\n\n")
        ])
      ]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id:
              "%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E5%88%86%E9%85%8D%E5%86%85%E5%AD%98"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E5%88%86%E9%85%8D%E5%86%85%E5%AD%98",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 通过函数调用分配内存")
        ]
      ),
      _vm._v(" "),
      _c("p", [_vm._v("有些函数调用结果是分配对象内存：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" d = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-built_in" }, [_vm._v("Date")]),
          _vm._v("(); "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 分配一个 Date 对象")
          ]),
          _vm._v("\n\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" e = "),
          _c("span", { staticClass: "hljs-built_in" }, [_vm._v("document")]),
          _vm._v(".createElement("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'div'")]),
          _vm._v("); "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 分配一个 DOM 元素")
          ]),
          _vm._v("\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          '分配新变量或者新对象\n···\nvar s = "azerty";\nvar s2 = s.substr(0, 3); // s2 是一个新的字符串\n// 因为字符串是不变量，\n// JavaScript 可能决定不分配内存，\n// 只是存储了 [0-3] 的范围。'
        )
      ]),
      _vm._v(" "),
      _c("pre", [
        _c("code", [
          _vm._v(
            '\tvar a = ["ouais ouais", "nan nan"];\n\tvar a2 = ["generation", "nan nan"];\n\tvar a3 = a.concat(a2); \n\t// 新数组有四个元素，是 a 连接 a2 的结果\n'
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("···")]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v("* 定义对象的时刻，就分配了对象\n* 通过函数调用分配内存\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h2", { attrs: { id: "%E4%BD%BF%E7%94%A8%E5%80%BC" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E4%BD%BF%E7%94%A8%E5%80%BC",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 使用值")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "使用值的过程实际上是对分配内存进行读取与写入的操作。读取与写入可能是写入一个变量或者一个对象的属性值，甚至传递函数的参数。"
        )
      ]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id:
              "%E5%BD%93%E5%86%85%E5%AD%98%E4%B8%8D%E5%86%8D%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E6%97%B6%E9%87%8A%E6%94%BE"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%BD%93%E5%86%85%E5%AD%98%E4%B8%8D%E5%86%8D%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E6%97%B6%E9%87%8A%E6%94%BE",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 当内存不再需要使用时释放")
        ]
      ),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "大多数内存管理的问题都在这个阶段。在这里最艰难的任务是找到“所分配的内存确实已经不再需要了”。它往往要求开发人员来确定在程序中哪一块内存不再需要并且释放它。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "高级语言解释器嵌入了“垃圾回收器”，它的主要工作是跟踪内存的分配和使用，以便当分配的内存不再使用时，自动释放它。这只能是一个近似的过程，因为要知道是否仍然需要某块内存是无法判定的（无法通过某种算法解决）。"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [_c("code", [_vm._v(" 以上来自MDN。。。。\n")])])
      ]),
      _vm._v(" "),
      _c(
        "h1",
        {
          attrs: {
            id:
              "%E5%A6%82%E4%BD%95%E4%BA%A7%E7%94%9F%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%A6%82%E4%BD%95%E4%BA%A7%E7%94%9F%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 如何产生内存泄漏")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v("对象创建未及时清除，全局变量的创建（引用计数——垃圾回收）")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**未定义 var 声明，内部引用，导致无法清除*/")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("function")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("foo")]),
            _vm._v("("),
            _c("span", { staticClass: "hljs-params" }),
            _vm._v(")")
          ]),
          _vm._v("{\n\t    bar="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"this is bar"')]),
          _vm._v(";\n\t}\n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**this window 对象*/")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("function")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("foo")]),
            _vm._v("("),
            _c("span", { staticClass: "hljs-params" }),
            _vm._v(")")
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".bar="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"this is bar"')]),
          _vm._v(";\n\t}\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [_vm._v("使用 ’use strict' 进行javascript 解析")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("ul", [_c("li", [_vm._v("对象的循环引用 （引用计数——垃圾回收）")])])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("/**/")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" obj = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-built_in" }, [_vm._v("Object")]),
          _vm._v("();\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" obj2 = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-built_in" }, [_vm._v("Object")]),
          _vm._v("();\n   obj.p = obj2;\n   obj2.p= obj;\n   \n")
        ])
      ]),
      _vm._v(" "),
      _c(
        "h1",
        {
          attrs: {
            id: "%E6%A0%87%E8%AE%B0%E6%89%AB%E6%8F%8F%E7%AE%97%E6%B3%95"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#%E6%A0%87%E8%AE%B0%E6%89%AB%E6%8F%8F%E7%AE%97%E6%B3%95",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 标记扫描算法")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v(
              "垃圾回收器构建“roots”列表。Roots 通常是代码中保留引用的全局变量。在 \tJavaScript 中，“window” 对象可以作为 root 全局变量示例。"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "所有的 roots 被检查并标记为 active（即不是垃圾）。所有的 children 也被递\t归检查。从 root 能够到达的一切都不被认为是垃圾。"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "所有为被标记为 active 的内存可以被认为是垃圾了。收集器限制可以释放这些内存并\t将其返回到操作系统。"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "http://fandong90.github.io/static/img/markSweep.gif",
            alt: "标记扫描"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [_c("code", [_vm._v("循环引用不是问题。\n")])])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("setInterval 这个不会自动结束。")])]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "使用setInterval 调用的函数中创建了全局变量，每次执行都创建一次，闭包的使用。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "%E5%A6%82%E4%BD%95%E6%A3%80%E6%B5%8B" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E5%A6%82%E4%BD%95%E6%A3%80%E6%B5%8B",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 如何检测")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("使用chrome 开发工具\n"),
          _c("img", {
            attrs: {
              src: "http://fandong90.github.io/static/img/heapChrom.png",
              alt: "标记扫描"
            }
          })
        ])
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

/***/ "./src/pages/md/lang_javascript_memory_1-1_management.md":
/*!***************************************************************!*\
  !*** ./src/pages/md/lang_javascript_memory_1-1_management.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_javascript_memory_1_1_management_md_vue_type_template_id_57affdf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2& */ "./src/pages/md/lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _lang_javascript_memory_1_1_management_md_vue_type_template_id_57affdf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lang_javascript_memory_1_1_management_md_vue_type_template_id_57affdf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/lang_javascript_memory_1-1_management.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2&":
/*!**********************************************************************************************!*\
  !*** ./src/pages/md/lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_javascript_memory_1_1_management_md_vue_type_template_id_57affdf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_javascript_memory_1-1_management.md?vue&type=template&id=57affdf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_javascript_memory_1_1_management_md_vue_type_template_id_57affdf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_javascript_memory_1_1_management_md_vue_type_template_id_57affdf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-f0227b7.js.map