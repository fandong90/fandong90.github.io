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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/web_vue_scrollLoading_2-2_pc.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("ul", [
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("li", [
        _c("p", [_vm._v("如何使用")]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("pre", { staticClass: "hljs" }, [
          _c("code", [
            _vm._v(
              "<template>\n    <div>\n        <div v-scroll-loading.a>" +
                _vm._s(_vm.data1) +
                "</div>\n        <div v-scroll-loading.b.c>" +
                _vm._s(_vm.data2) +
                "</div>\n    </div>\n</template>\n\n<script>\n"
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
            _vm._v(
              " {\n    registerScrollLoading,\n    unRegisterScrollLoading\n} from "
            ),
            _c("span", { staticClass: "hljs-string" }, [_vm._v("'./demo.js'")]),
            _vm._v(";\nexport "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
            _vm._v(" {\n    data(){\n        "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
            _vm._v(" {\n            data1:"),
            _c("span", { staticClass: "hljs-string" }, [_vm._v("''")]),
            _vm._v(",\n            data2:"),
            _c("span", { staticClass: "hljs-string" }, [_vm._v("''")]),
            _vm._v("\n        }  \n    },\n    mounted(){\n        "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
            _vm._v(
              ".queryData();\n    },\n    methods:{\n        queryData(){\n             let _this="
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
            _vm._v(
              ";\n             let registerObjs=[\n                 {\n                     val:"
            ),
            _c("span", { staticClass: "hljs-string" }, [_vm._v('"uuu"')]),
            _vm._v(",\n                     modifiers:"),
            _c("span", { staticClass: "hljs-string" }, [_vm._v("'a'")]),
            _vm._v(
              ",\n                     callback:function(d){\n                         _this.data1=d;\n                     }\n                 },\n                 {\n                     val:"
            ),
            _c("span", { staticClass: "hljs-string" }, [_vm._v('"uuu"')]),
            _vm._v(",\n                     modifiers:"),
            _c("span", { staticClass: "hljs-string" }, [_vm._v("'b.c'")]),
            _vm._v(
              ",\n                     callback:function(d){\n                         _this.data2=d;\n                     }\n                 }\n             ];\n\n             registerScrollLoading(registerObjs);\n        }\n    },\n   destroyed(){\n       unRegisterScrollLoading();\n   }\n}\n</script>\n\n<style>\n\n</style>\n\n"
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("-----本文完")])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h1",
      {
        attrs: {
          id:
            "vue---scrollloading-%E6%BB%9A%E5%8A%A8%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE"
        }
      },
      [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href:
                "#vue---scrollloading-%E6%BB%9A%E5%8A%A8%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Vue --scrollLoading 滚动加载数据")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [_vm._v("背景")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "由于业务需要一个页面会出现多个部分，如模块（图表），当用户访问一个网页的时候，会进行初始化请求，如果一次性加载完全，用户体验很是不好，这样对后端的压力很大，毕竟现在后台表都是上亿级别的存储。"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [_vm._v("改善")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "在用户可视区时，进行加载。即模块出现在屏幕上加载，相同查询条件只加载一次。"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [_vm._v("行动")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "思路：判断模块（div)是否出现在可是区域内，操作包括三种情况：\n"
          ),
          _c("ul", [
            _c("li", [_vm._v("1、向上滚动")]),
            _vm._v(" "),
            _c("li", [_vm._v("2、向下滚动")]),
            _vm._v(" "),
            _c("li", [_vm._v("3、左右滑动")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "系统UX要求，当页面过长时只能有一个滚动条。所以offsetTop 计算的是window 的偏移高度。"
        )
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("准备")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", [_vm._v("模块（div） 要想出现在进入可视区内必须满足：")]),
              _vm._v(" "),
              _c("pre", { staticClass: "hljs" }, [
                _c("code", [
                  _vm._v("   "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("/*模块简称DiV*/")
                  ]),
                  _vm._v(
                    "\n  elTop  =  DIV的Top偏移高度 小于 窗体滚动高度 + 窗体文档的可视高度   \t\t\nelBottom = DIV的偏移高度 + 窗体文档的可视高度  大于   窗体滚动高度  \n  \n  "
                  ),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("/*左右同理*/")
                  ]),
                  _vm._v(
                    "\n  \n   elTop  =  DIV的Left偏移长度 小于 窗体X轴长度  + 窗体文档的可视宽度 \n  elBottom = DIV的偏移长度  + 窗体文档的可视宽度    大于   窗体X轴长度 \n  \n"
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("Vue 组件化。")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Vue 是MVVM模型，使用数据驱动，虽然也可以使用模块加id 的方式，注册滚动事件，判断是否加载数据。\n既然使用vue了，决定使用Vue 自定义指令处理，通过自定义指令获取需要滚动加载的模块。"
            )
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _c("p", [_vm._v("使用指令标记哪些需要滚动加载数据的模块。")])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [_vm._v("匹配的模块通过指令修饰符判断请求哪些数据。")])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("p", [
                _vm._v(
                  "vue中v-if / v-show 在单页面中使用tab页签的处理问题，这是调试发现的问题。"
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [_c("p", [_vm._v("创建一个指令： scrollLoading")])])
          ]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("   "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" Vue from "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'vue'")]),
              _vm._v(";\n\n\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**创建一个数组 存储标记的模块 */")
              ]),
              _vm._v("\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" labelScrollLoadingEls=[];\n\t\n\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "/*\n\t*  判读组件创建时，滚动事件监测是否创建，没有则创建\n\t*/"
                )
              ]),
              _vm._v("\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v("  listenerEventExist="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(";\n\t\n\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n\t * 注册修饰符，何时去请求数据\n\t */")
              ]),
              _vm._v("\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" registerObjs=[];\n\t\n\tVue.directive("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'scrollLoading'")
              ]),
              _vm._v(
                ",{\n\t    bind:function(el, binding){\n\t        let elObj={\n\t            el: el,\n\t            modifiers: Object.keys(binding.modifiers).join("
              ),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'.'")]),
              _vm._v(
                ")\n\t        };\n\t\n\t        let matchExistEl = labelScrollLoadingEls.filter(item=>{\n\t            "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(item.modifiers === elObj.modifiers) "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
              _vm._v(";\n\t            "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v("  "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(";\n\t        });\n\t        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "/*这样写的原因是v-if 的时候，组件会重新创建，这样就必须更新el引用对象 */"
                )
              ]),
              _vm._v("\n\t        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(matchExistEl.length>"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("){\n\t            matchExistEl["),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("]=elObj;\n\t        }"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
              _vm._v(
                "{\n\t            labelScrollLoadingEls.push(elObj);\n\t        }\n\t    }\n\t});\t\t\t\n\t\n"
              )
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("创建注册函数 和 移除滚动事件函数")])]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\n    "),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("function "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("insertAndUpdate")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("(option)")])
              ]),
              _vm._v("{\n    let defaultOpition={\n        val:"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("''")]),
              _vm._v(",\n        oldVal:"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("''")]),
              _vm._v(",\n        modifiers:"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("''")]),
              _vm._v(",\n        callback:"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v(
                "\n    };\n\n    let keys = Object.keys(option);\n\n    keys.forEach(key=>{\n        defaultOpition[key] = option[key] || defaultOpition[key];\n    });\n\n    "
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//val 是否改变，改变则更新注册对象参数")
              ]),
              _vm._v(
                "\n\n    let matchRegisterObj = registerObjs.filter(item=>{\n        "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(item.modifiers === defaultOpition.modifiers) "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
              _vm._v(";\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(";\n    });\n    \n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(matchRegisterObj.length>"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("){\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//注意要判读是否已执行，否则不替换val")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v(
                "(matchRegisterObj.isExec){\n           matchRegisterObj["
              ),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("].oldVal = matchRegisterObj["),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("].val;\n        }\n        matchRegisterObj["),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("].val = defaultOpition.val;\n    }"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
              _vm._v(
                "{\n        registerObjs.push(defaultOpition);\n    }\n}\n\n\n\t"
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n\t * \n\t * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" {注册滚动事件} options \n\t */")
              ]),
              _vm._v("\n\t"),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("export function "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("registerScrollLoading")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(options)")
                ])
              ]),
              _vm._v("{\n\t\n\t   "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v(
                "(!listenerEventExist){\n\t\n\t       window.addEventListener("
              ),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"scroll"')]),
              _vm._v(",scrolling);\n\t       listenerEventExist="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
              _vm._v(";\n\t   }\n\t   \n\t   "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(options != undefined && options "),
              _c("span", { staticClass: "hljs-keyword" }, [
                _vm._v("instanceof")
              ]),
              _vm._v(
                " Array){\n\t       options.forEach(obj=>{\n\t           insertAndUpdate(obj);\n\t       })\n\t   }"
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
              _vm._v(
                "{\n\t       insertAndUpdate(options);\n\t   }\n\t   \n\t   "
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//v-show 延迟100ms 执行")
              ]),
              _vm._v("\n\t   setTimeout(scrolling, "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("100")]),
              _vm._v(");\n\t}\n\t\n\t\n\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n\t * 在destroy 方法中调用\n\t */")
              ]),
              _vm._v("\n\t"),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("export function "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("unRegisterScrollLoading")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n\t    window.removeEventListener("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"scroll"')]),
              _vm._v(",scrolling);\n\t    listenerEventExist="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(";\n\t    registerObjs.splice("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(",registerObjs.length);\n\t}\n\t   \t\t    \n")
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("核心")])])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("function "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scrolling")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//计算中窗体的/")
          ]),
          _vm._v(
            "\n\n    let viewHeight = window.document.documentElement.clientHeight;\n    let viewWidth  = window.document.documentElement.clientWidth;\n    let scrollTop  = window.scrollY || window.pageYOffset;\n    let scrollLeft = window.scrollX || window.pageXOffset;\n\n    labelScrollLoadingEls.forEach(elObj=>{\n\n          let elTop = elObj.el.offsetTop -(viewHeight + scrollTop);\n          let elBottom = elObj.el.offsetHeight + viewHeight-scrollTop;\n          let elLeft =elObj.el.offsetLeft -(viewWidth + scrollLeft);\n          let elRight = elObj.el.offsetWidth -viewWidth + scrollLeft ;\n\n\n          "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(elTop<"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" && elBottom>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" && elLeft<"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" && elRight>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "){\n              \n              let matchRegisterObj = registerObjs.filter(item=>{\n                    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(item.modifiers === elObj.modifiers) "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n              });\n              \n              "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(matchRegisterObj.length>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n                  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//判读val 是否改变，改变则执行")
          ]),
          _vm._v("\n                  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(matchRegisterObj["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("].oldVal != matchRegisterObj["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("].val){\n\n                      "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//to-do")]),
          _vm._v("\n                      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//添加数据请求函数，获取结果。")
          ]),
          _vm._v("\n                      let result ="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("''")]),
          _vm._v(" ;"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//来子取数api")
          ]),
          _vm._v("\n                      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//通过注册对象的传递的函数，进行值得回传")
          ]),
          _vm._v("\n                      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//标记是否已执行")
          ]),
          _vm._v("\n                      matchRegisterObj.isExec="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v("; \n                      requestData(matchRegisterObj["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "].val).then((data)=>{\n                         matchRegisterObj.callback.call("
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ",result);\n                      })\n                     \n                  }\n              }\n          }\n\t\t\n\t\t    });\n\t\t\n\t\t}   \t\n   "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//请求示例")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("function "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("requestData")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(paras)")])
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Promise((resolve,reject)=>{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("try")]),
          _vm._v("{\n\t            resolve("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'ok'")]),
          _vm._v(");\n\t        }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("catch")]),
          _vm._v(
            "(err){\n\t            reject(err);\n\t        }\n\t    })\n\t}\n\t\n"
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [_vm._v("引用刚才的文件")]),
      _vm._v(" "),
      _c("li", [
        _vm._v("div 添加v-scroll-loading 指令，并添加修饰符a 或者 b.c")
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("注册参数")]),
      _vm._v(" "),
      _c("li", [_vm._v("在mounted 中调用。")])
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

/***/ "./src/pages/md/web_vue_scrollLoading_2-2_pc.md":
/*!******************************************************!*\
  !*** ./src/pages/md/web_vue_scrollLoading_2-2_pc.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_vue_scrollLoading_2_2_pc_md_vue_type_template_id_28101a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a& */ "./src/pages/md/web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _web_vue_scrollLoading_2_2_pc_md_vue_type_template_id_28101a4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _web_vue_scrollLoading_2_2_pc_md_vue_type_template_id_28101a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/web_vue_scrollLoading_2-2_pc.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a&":
/*!*************************************************************************************!*\
  !*** ./src/pages/md/web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_vue_scrollLoading_2_2_pc_md_vue_type_template_id_28101a4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_vue_scrollLoading_2-2_pc.md?vue&type=template&id=28101a4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_vue_scrollLoading_2_2_pc_md_vue_type_template_id_28101a4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_vue_scrollLoading_2_2_pc_md_vue_type_template_id_28101a4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-192d2c07.js.map