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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/lang_javascript_基础_1-2_this指针.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("p", [_vm._v("#Js  this 指向及修改")]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "this 在函数中使用，this的指向不是在创建时指定，而是在运行时指定的\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("usage 1")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//在浏览器器中，this指向的window对象")
              ]),
              _vm._v("\n\t <script type="),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"text/javascript"')
              ]),
              _vm._v(">\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n        "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("sayName")]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n            "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj = "),
              _c("span", { staticClass: "hljs-built_in" }, [
                _vm._v("document")
              ]),
              _vm._v(".getElementById("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"test"')]),
              _vm._v(");\n            obj.innerText="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name;\n        }\n    <"),
              _c("span", { staticClass: "hljs-regexp" }, [
                _vm._v("/script>\n    \n    /")
              ]),
              _c("span", { staticClass: "hljs-regexp" }, [
                _vm._v("/result\n    \n    /")
              ]),
              _c("span", { staticClass: "hljs-regexp" }, [
                _vm._v("/ hello\n    \n    /")
              ]),
              _c("span", { staticClass: "hljs-regexp" }, [
                _vm._v(
                  "/在nodejs 中,this 指向\n    \n      var  name ='hello';\n\t\tfunction sayName (){ \n\t\t    console.log(this.name);\n\t\t}\n\t\t\n\t  sayName(); /"
                )
              ]),
              _c("span", { staticClass: "hljs-regexp" }, [
                _vm._v("/result  undefined\n\t\t\n")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src: "http://fandong90.github.io/static/img/nodethisr1.jpg",
                alt: "jsthisr1"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("usage 2")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// web 浏览器显示")
              ]),
              _vm._v("\n      <script type="),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"text/javascript"')
              ]),
              _vm._v(">\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// function sayName(){")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v('//     var obj = document.getElementById("test");')
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//     obj.innerText=this.name;")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("// }")]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj ={\n            "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("name")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'hehe'")]),
              _vm._v(",\n            "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("sayName")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n                "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj = "),
              _c("span", { staticClass: "hljs-built_in" }, [
                _vm._v("document")
              ]),
              _vm._v(".getElementById("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"test"')]),
              _vm._v(");\n                obj.innerText="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name;\n                "),
              _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
              _vm._v(".log("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".name);\n            }\n        };\n        \n        obj.sayName();\n    "
              ),
              _c("span", { staticClass: "xml" }, [
                _c("span", { staticClass: "hljs-tag" }, [
                  _vm._v("</"),
                  _c("span", { staticClass: "hljs-name" }, [_vm._v("script")]),
                  _vm._v(">")
                ])
              ]),
              _vm._v("\n    \n    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// result  hehe")
              ]),
              _vm._v("\n    \n            \n    "),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("//node ")]),
              _vm._v("\n    \n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n\t\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj={\n\t\t    "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("name")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'hehe'")]),
              _vm._v(",\n\t\t    "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("sayName")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n\t\t        "),
              _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
              _vm._v(".log("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".name);\n\t\t    }\n\t\t};\n\t\t\n\t\tobj.sayName();\n\t\t\n\t\t"
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//result  hehe;")
              ]),
              _vm._v("\n    \n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("换一种一写法")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//浏览器表现")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// function sayName(){")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v('//     var obj = document.getElementById("test");')
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//     obj.innerText=this.name;")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("// }")]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj ={\n            "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("name")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'hehe'")]),
              _vm._v(",\n            "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("sayName")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n                "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj = "),
              _c("span", { staticClass: "hljs-built_in" }, [
                _vm._v("document")
              ]),
              _vm._v(".getElementById("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"test"')]),
              _vm._v(");\n                obj.innerText="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name;\n                "),
              _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
              _vm._v(".log("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name);\n            }\n        };\n        \n       "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(
                " fn= obj.sayName;\n       \n       fn();\n       \n        "
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//result  hello")
              ]),
              _vm._v("\n        \n        "),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("//node")]),
              _vm._v("\n        \n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//result  undefined")
              ]),
              _vm._v("\n        \n")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("usage 3")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("         "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//浏览器表现")
              ]),
              _vm._v("\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// function sayName(){")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v('//     var obj = document.getElementById("test");')
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//     obj.innerText=this.name;")
              ]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("// }")]),
              _vm._v("\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj ={\n            "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("name")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'hehe'")]),
              _vm._v(",\n            "),
              _c("span", { staticClass: "hljs-attr" }, [_vm._v("sayName")]),
              _vm._v(":"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n                "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v(" ("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(") ")
              ]),
              _vm._v("{\n\n                    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" obj = "),
              _c("span", { staticClass: "hljs-built_in" }, [
                _vm._v("document")
              ]),
              _vm._v(".getElementById("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"test"')]),
              _vm._v(");\n                        obj.innerText="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name;\n                        "),
              _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
              _vm._v(".log("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".name);\n                  }\n            }\n        };\n       \n       "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" fn= obj.sayName;\n       fn()();\n       "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//result hello")
              ]),
              _vm._v("\n\n")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("usage 4 构造函数")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("  \t"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("Person")]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n  \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n  \t}\n  \t\n  \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" p = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Person();\n  \t"),
              _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
              _vm._v(".log(p.name);\n  \t\n  \t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//返回值改变了this的指向")
              ]),
              _vm._v("\n  \t"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("function")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("PersonOne")
                ]),
                _vm._v("("),
                _c("span", { staticClass: "hljs-params" }),
                _vm._v(")")
              ]),
              _vm._v("{\n  \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".name="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello"')]),
              _vm._v(";\n  \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" {};\n  \t}\n  \t\n  \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
              _vm._v(" p = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" PersonOne();\n  \t"),
              _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
              _vm._v(".log(p.name);\n\n")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("usage 5 DOM 对象调用")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("     <div id="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"test"')]),
              _vm._v(" onclick="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hello()"')]),
              _vm._v(">"),
              _c("span", { staticClass: "xml" }, [
                _c("span", { staticClass: "hljs-tag" }, [
                  _vm._v("</"),
                  _c("span", { staticClass: "hljs-name" }, [_vm._v("div")]),
                  _vm._v(">")
                ])
              ]),
              _vm._v("\n     "),
              _c("span", { staticClass: "xml" }, [
                _c("span", { staticClass: "hljs-tag" }, [
                  _vm._v("<"),
                  _c("span", { staticClass: "hljs-name" }, [_vm._v("script")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "hljs-attr" }, [_vm._v("type")]),
                  _vm._v("="),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v('"text/javascript"')
                  ]),
                  _vm._v(">")
                ]),
                _c("span", { staticClass: "javascript" }, [
                  _vm._v("\n         "),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
                  _vm._v(" name="),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v('"hello"')
                  ]),
                  _vm._v(";\n         "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("// function sayName(){")
                  ]),
                  _vm._v("\n         "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v('//     var obj = document.getElementById("test");')
                  ]),
                  _vm._v("\n         "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("//     obj.innerText=this.name;")
                  ]),
                  _vm._v("\n         "),
                  _c("span", { staticClass: "hljs-comment" }, [_vm._v("// }")]),
                  _vm._v("\n         "),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
                  _vm._v(" obj ={\n             "),
                  _c("span", { staticClass: "hljs-attr" }, [_vm._v("name")]),
                  _vm._v(":"),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v("'hehe'")
                  ]),
                  _vm._v(",\n             "),
                  _c("span", { staticClass: "hljs-attr" }, [_vm._v("sayName")]),
                  _vm._v(":"),
                  _c("span", { staticClass: "hljs-function" }, [
                    _c("span", { staticClass: "hljs-keyword" }, [
                      _vm._v("function")
                    ]),
                    _vm._v("("),
                    _c("span", { staticClass: "hljs-params" }),
                    _vm._v(")")
                  ]),
                  _vm._v("{\n                 "),
                  _c("span", { staticClass: "hljs-keyword" }, [
                    _vm._v("return")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "hljs-function" }, [
                    _c("span", { staticClass: "hljs-keyword" }, [
                      _vm._v("function")
                    ]),
                    _vm._v(" ("),
                    _c("span", { staticClass: "hljs-params" }),
                    _vm._v(") ")
                  ]),
                  _vm._v("{\n\n                     "),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
                  _vm._v(" obj = "),
                  _c("span", { staticClass: "hljs-built_in" }, [
                    _vm._v("document")
                  ]),
                  _vm._v(".getElementById("),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v('"test"')
                  ]),
                  _vm._v(");\n                         obj.innerText="),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
                  _vm._v(".name;\n                         "),
                  _c("span", { staticClass: "hljs-built_in" }, [
                    _vm._v("console")
                  ]),
                  _vm._v(".log("),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
                  _vm._v(
                    ".name);\n                   }\n             }\n         };\n        \n        "
                  ),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
                  _vm._v(" fn= obj.sayName;\n        fn()();\n\n        "),
                  _c("span", { staticClass: "hljs-function" }, [
                    _c("span", { staticClass: "hljs-keyword" }, [
                      _vm._v("function")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "hljs-title" }, [
                      _vm._v("hello")
                    ]),
                    _vm._v("("),
                    _c("span", { staticClass: "hljs-params" }),
                    _vm._v(")")
                  ]),
                  _vm._v("{\n            alert("),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
                  _vm._v(".innerText);\n        }\n        \n        "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("// result   undefined")
                  ]),
                  _vm._v("\n        <div id="),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v('"test"')
                  ]),
                  _vm._v(" onclick="),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v('"alert(this.innerText)"')
                  ]),
                  _vm._v(">"),
                  _c("span", { staticClass: "xml" }, [
                    _c("span", { staticClass: "hljs-tag" }, [
                      _vm._v("</"),
                      _c("span", { staticClass: "hljs-name" }, [_vm._v("div")]),
                      _vm._v(">")
                    ])
                  ]),
                  _vm._v("\n        "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("//result   hello")
                  ]),
                  _vm._v("\n         "),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
                  _vm._v(" obj = "),
                  _c("span", { staticClass: "hljs-built_in" }, [
                    _vm._v("document")
                  ]),
                  _vm._v(".getElementById("),
                  _c("span", { staticClass: "hljs-string" }, [
                    _vm._v('"test"')
                  ]),
                  _vm._v(");\n         obj.onclick="),
                  _c("span", { staticClass: "hljs-function" }, [
                    _c("span", { staticClass: "hljs-keyword" }, [
                      _vm._v("function")
                    ]),
                    _vm._v("("),
                    _c("span", { staticClass: "hljs-params" }),
                    _vm._v(")")
                  ]),
                  _vm._v("{\n          alert("),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
                  _vm._v(".innerText);\n         }\n         "),
                  _c("span", { staticClass: "hljs-comment" }, [
                    _vm._v("//result hello")
                  ]),
                  _vm._v("\n        \n")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("usage 6 改变this")])])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("let")]),
          _vm._v(" _this ="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(";\n\t\n\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("function")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("name")]),
            _vm._v("("),
            _c("span", { staticClass: "hljs-params" }),
            _vm._v(")")
          ]),
          _vm._v("{\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".name="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'this'")]),
          _vm._v(";\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("let")]),
          _vm._v(" _this="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(";\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("function")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("name1")]),
            _vm._v("("),
            _c("span", { staticClass: "hljs-params" }),
            _vm._v(")")
          ]),
          _vm._v("{\n\t\t\t"),
          _c("span", { staticClass: "hljs-built_in" }, [_vm._v("console")]),
          _vm._v(".log(_this.name);\n\t\t}\n\t}\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// call apply  bind")
          ]),
          _vm._v("\n   \n   obj.call("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(",[arg])\n   \n   obj.apply("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(",[arg..])\n   \n   obj.method.bind("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(")\n\n")
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

/***/ "./src/pages/md/lang_javascript_基础_1-2_this指针.md":
/*!*******************************************************!*\
  !*** ./src/pages/md/lang_javascript_基础_1-2_this指针.md ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_javascript_1_2_this_md_vue_type_template_id_3ce2c05e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e& */ "./src/pages/md/lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _lang_javascript_1_2_this_md_vue_type_template_id_3ce2c05e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lang_javascript_1_2_this_md_vue_type_template_id_3ce2c05e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/lang_javascript_基础_1-2_this指针.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e&":
/*!**************************************************************************************!*\
  !*** ./src/pages/md/lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_javascript_1_2_this_md_vue_type_template_id_3ce2c05e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_javascript_基础_1-2_this指针.md?vue&type=template&id=3ce2c05e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_javascript_1_2_this_md_vue_type_template_id_3ce2c05e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_javascript_1_2_this_md_vue_type_template_id_3ce2c05e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-1fc1fb7b.js.map