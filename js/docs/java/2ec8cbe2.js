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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/lang_java_基础_1-1_Tuple.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("p", [_vm._v("##java tuple")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("元组类型")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("可以存储不同类型的数据类型的数据结构,数据处理常用类型。")
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("在maven 库找到了一个开源的tuple实现：")])])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\t\t <dependency>\n           <groupId>com.andrebreves</groupId>\n           <artifactId>java-tuple</artifactId>\n           <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(".0</version>\n       </dependency>\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("tuple接口定义如下：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("interface")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("degree")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n\n   "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
            _vm._v(" Tuple0 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple0.of();\n   }\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T1> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple1<T1> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(T1 v1)")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple1.of(v1);\n   }\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T1, T2> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple2<T1, T2> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T1 v1, T2 v2)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple2.of(v1, v2);\n   }\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T1, T2, T3> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple3<T1, T2, T3> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T1 v1, T2 v2, T3 v3)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple3.of(v1, v2, v3);\n   }\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T1, T2, T3, T4> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple4<T1, T2, T3, T4> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T1 v1, T2 v2, T3 v3, T4 v4)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple4.of(v1, v2, v3, v4);\n   }\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T1, T2, T3, T4, T5> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple5<T1, T2, T3, T4, T5> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T1 v1, T2 v2, T3 v3, T4 v4, T5 v5)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple5.of(v1, v2, v3, v4, v5);\n   }\n   \n   ....\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("找一个tuple3 的实现看下具体实现：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Source code recreated from a .class file by IntelliJ IDEA"
            )
          ]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// (powered by Fernflower decompiler)")
          ]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//")]),
          _vm._v("\n   \n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.andrebreves.tuple;\n   \n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.Objects;\n   \n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple3")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T1")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T2")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T3")]),
            _vm._v("> "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Comparable")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple3")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T1")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T2")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T3")]),
            _vm._v(">> ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" T1 v1;\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" T2 v2;\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" T3 v3;\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple3")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T1 v1, T2 v2, T3 v3)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v1 = v1;\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v2 = v2;\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v3 = v3;\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T1, T2, T3> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple3<T1, T2, T3> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T1 v1, T2 v2, T3 v3)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple3(v1, v2, v3);\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" T1 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("v1")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v1;\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" T2 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("v2")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v2;\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" T3 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("v3")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v3;\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("degree")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(";\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hashCode")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Objects.hash("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Object[]{"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v1, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v2, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v3});\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("equals")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Object obj)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(" == obj) {\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n           } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (obj != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(" && "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".getClass() == obj.getClass()) {\n               Tuple3 other = (Tuple3)obj;\n               "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Objects.equals("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v1, other.v1) && Objects.equals("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v2, other.v2) && Objects.equals("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v3, other.v3);\n           } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n           }\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("compare")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T t1, T t2)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (t1 == t2) {\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n           } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (t1 == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" -"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n           } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" t2 == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(" ? "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            " : ((Comparable)t1).compareTo(t2);\n           }\n       }\n   \n       "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("compareTo")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Tuple3<T1, T2, T3> other)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" result = compare("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v1, other.v1);\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (result != "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(") {\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" result;\n           } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n               result = compare("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v2, other.v2);\n               "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (result != "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(") {\n                   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" result;\n               } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n                   result = compare("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".v3, other.v3);\n                   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" result != "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" ? result : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n               }\n           }\n       }\n   }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "我们可以看出元组其实是通过java的泛型方法实现的一种数据结构。可以同时使用java的 primite type\n和 自定义类。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("flink 的tuple 类型")])]),
      _vm._v(" "),
      _c("p", [_vm._v("flink 中的是通过抽象类实现如下：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//")]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Source code recreated from a .class file by IntelliJ IDEA"
            )
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// (powered by Fernflower decompiler)")
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//")]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" org.apache.flink.api.java.tuple;\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.io.Serializable;\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.flink.annotation.Public;\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.flink.types.NullFieldException;\n\n"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Public")]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Serializable")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
          _vm._v(" serialVersionUID = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1L")]),
          _vm._v(";\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" MAX_ARITY = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("25")]),
          _vm._v(";\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" Class<?>[] CLASSES = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " Class[]{Tuple0.class, Tuple1.class, Tuple2.class, Tuple3.class, Tuple4.class, Tuple5.class, Tuple6.class, Tuple7.class, Tuple8.class, Tuple9.class, Tuple10.class, Tuple11.class, Tuple12.class, Tuple13.class, Tuple14.class, Tuple15.class, Tuple16.class, Tuple17.class, Tuple18.class, Tuple19.class, Tuple20.class, Tuple21.class, Tuple22.class, Tuple23.class, Tuple24.class, Tuple25.class};\n\n    "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n    }\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("T "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getField")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" var1)")
            ])
          ]),
          _vm._v(";\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("T "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getFieldNotNull")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" pos)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        T field = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".getField(pos);\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (field != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" field;\n        } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" NullFieldException(pos);\n        }\n    }\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setField")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T var1, "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" var2)")
            ])
          ]),
          _vm._v(";\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getArity")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
          _vm._v(" <T extends Tuple> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("T "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("copy")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" Class<? extends Tuple> getTupleClass("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" arity) {\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (arity >= "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" && arity <= "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("25")]),
          _vm._v(") {\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" CLASSES[arity];\n        } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" IllegalArgumentException("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"The tuple arity must be in [0, 25]."')
          ]),
          _vm._v(");\n        }\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
            _vm._v(" Tuple "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("newInstance")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" arity)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v("(arity) {\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" Tuple0.INSTANCE;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple1();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple2();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple3();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple4();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple5();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple6();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple7();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple8();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple9();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple10();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple11();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple12();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple13();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple14();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple15();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple16();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple17();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple18();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("19")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple19();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple20();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple21();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple22();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("23")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple23();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("24")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple24();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("25")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple25();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" IllegalArgumentException("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"The tuple arity must be in [0, 25]."')
          ]),
          _vm._v(");\n        }\n    }\n}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "可以看出定义了25个数据类型的tuple类型，tuple 在数据处理，使用是很广泛的。\n并且实现序列化。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("看下tuple2的实现：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//")]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Source code recreated from a .class file by IntelliJ IDEA"
            )
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// (powered by Fernflower decompiler)")
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//")]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" org.apache.flink.api.java.tuple;\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.flink.annotation.Public;\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.flink.util.StringUtils;\n\n"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Public")]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple2")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T0")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T1")]),
            _vm._v("> "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
          _vm._v(" serialVersionUID = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1L")]),
          _vm._v(";\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" T0 f0;\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" T1 f1;\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple2")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tuple2")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T0 value0, T1 value1)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0 = value0;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1 = value1;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getArity")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(";\n    }\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("T "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getField")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" pos)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v("(pos) {\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " IndexOutOfBoundsException(String.valueOf(pos));\n        }\n    }\n\n    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setField")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T value, "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" pos)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v("(pos) {\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0 = value;\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1 = value;\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " IndexOutOfBoundsException(String.valueOf(pos));\n        }\n\n    }\n\n    "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setFields")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T0 value0, T1 value1)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0 = value0;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1 = value1;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" Tuple2<T1, T0> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("swap")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple2("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0);\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" String "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("toString")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"("')]),
          _vm._v(" + StringUtils.arrayAwareToString("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0) + "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('","')]),
          _vm._v(" + StringUtils.arrayAwareToString("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1) + "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('")"')]),
          _vm._v(";\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("equals")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(Object o)")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(" == o) {\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n        } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (!(o "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("instanceof")]),
          _vm._v(" Tuple2)) {\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n        } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n            Tuple2 tuple = (Tuple2)o;\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0 != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (!"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0.equals(tuple.f0)) {\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                }\n            } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (tuple.f0 != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n            }\n\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1 != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (!"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1.equals(tuple.f1)) {\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                }\n            } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (tuple.f1 != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n            }\n\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n        }\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hashCode")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" result = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0 != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(" ? "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0.hashCode() : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n        result = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("31")]),
          _vm._v(" * result + ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1 != "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(" ? "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1.hashCode() : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(");\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" result;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" Tuple2<T0, T1> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("copy")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple2("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1);\n    }\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" <T0, T1> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Tuple2<T0, T1> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T0 value0, T1 value1)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Tuple2(value0, value1);\n    }\n}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("flink 中的tuple 实现了根据索引获取类型的方式。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("T "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getField")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" pos)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v("(pos) {\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " IndexOutOfBoundsException(String.valueOf(pos));\n        }\n    }\n\n    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" <T> "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setField")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(T value, "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" pos)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v("(pos) {\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f0 = value;\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".f1 = value;\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(":\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " IndexOutOfBoundsException(String.valueOf(pos));\n        }\n\n    }\n\n"
          )
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

/***/ "./src/pages/md/lang_java_基础_1-1_Tuple.md":
/*!************************************************!*\
  !*** ./src/pages/md/lang_java_基础_1-1_Tuple.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_java_1_1_Tuple_md_vue_type_template_id_7186dbb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0& */ "./src/pages/md/lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _lang_java_1_1_Tuple_md_vue_type_template_id_7186dbb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lang_java_1_1_Tuple_md_vue_type_template_id_7186dbb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/lang_java_基础_1-1_Tuple.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0&":
/*!*******************************************************************************!*\
  !*** ./src/pages/md/lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_java_1_1_Tuple_md_vue_type_template_id_7186dbb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_java_基础_1-1_Tuple.md?vue&type=template&id=7186dbb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_java_1_1_Tuple_md_vue_type_template_id_7186dbb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_java_1_1_Tuple_md_vue_type_template_id_7186dbb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=2ec8cbe2.js.map