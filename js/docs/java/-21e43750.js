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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/lang_java_datatable_1-2_sample.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              "%E6%8B%BF%E6%9D%A5%E4%B8%BB%E4%B9%89%E5%88%B0%E9%80%A0%E8%BD%AE%E5%AD%90----java-datatable-%E5%AE%9E%E7%8E%B0"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E6%8B%BF%E6%9D%A5%E4%B8%BB%E4%B9%89%E5%88%B0%E9%80%A0%E8%BD%AE%E5%AD%90----java-datatable-%E5%AE%9E%E7%8E%B0",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 拿来主义到造轮子  -- java DataTable 实现")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v("技术转型，net dataTable 的开箱即用，到java 的自我封装")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("背景")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("前端VUE + 中台 +  后台数据库 +（hadoop 大数据处理）")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("技术变革web服务有IIS 小作坊到拥抱公司技术体系。")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "后台数据库使用的高性能的内存分布式数据库，中台进行数据的逻辑处理，前端接收 中台返回的json数据。"
            )
          ]),
          _vm._v(" "),
          _c("hr")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("愿景")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "使用java 8 新特性 lamda 表达式结合，实现net linq 丝滑的特性使用。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("技术实现")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "中台获取的数据使用通过平台获取一串json数据，当然有好多工具可以进行处理，习惯了net dataTable的方式，总感觉怪怪。 JSONOBJ 实体对象也可以处理。但会遇到很多问题。"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "1， 使用时类型NULL判断，强转，\n2, 多个条件判断取值，代码冗余。\n3, 获取值得比较null问题转换。"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("技术实现一体化解决方案")]),
      _vm._v(" "),
      _c("pre", [
        _c("code", [
          _vm._v(
            "1、json 字符串使用时，转换成json对象，这一步我在实现中使用正则表达判断字符串线性转成dataTable 对象。\n\n2、datatable 获取处理前 filterexpression  处理，对于简单的组合如 and 、 or\n  between and  in  not in 等组合可以根据，设定的表达树进行解析，这里避免了NULL的处理\n  \n3、结合lambda 表达式做后续的处理。\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("dataTable 优势")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "类型的是强类型的，在 实现datatable 时可以进行value 的检测，避免error类型。"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "植入的expression ，简化了lambda表达式求值问题，一定程度上避免null 比较问题。"
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("简化了代码。")])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("主要代码")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "首先简单构造一个datatable对象，\ndataTable 对象包含了dataRow ,dataColumn Deng."
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("DataTable.java")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n  *\n  * 创建一个dataTable\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@auth")]),
                _vm._v(" fandong\n  */")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-class" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataTable")
                ]),
                _vm._v(" ")
              ]),
              _vm._v("{\n \n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v("  String tableName;\n \n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v("  "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
              _vm._v("   rowIndex="),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(";\n \n     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//获取columns列的集合")
              ]),
              _vm._v("\n \n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
              _vm._v(" DataColumnCollection columns;\n \n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" List<DataRow>  rows;\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataTable")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".columns = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataColumnCollection();\n        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rows    = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" ArrayList<DataRow>();\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataTable")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String name)")
                ])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".tableName = name;\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".columns = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataColumnCollection();\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rows    = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" ArrayList<DataRow>();\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("addDataColumn")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(DataColumn dataColumn)")
                ]),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
                _vm._v(" Exception")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".columns.Add(dataColumn);\n     }\n \n     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n      * 添加行数\n      * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" row\n      */")
              ]),
              _vm._v("\n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("AddDataRow")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(DataRow row)")
                ])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rows.add(row);\n     }\n \n     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n      * 添加列数\n      * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
                _vm._v("\n      */")
              ]),
              _vm._v("\n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" List<DataColumn> "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getColumns")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".columns.getColumns();\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" List<DataRow>  "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("getRows")]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rows;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n      * 获取dataTable的行数\n      * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
                _vm._v("\n      */")
              ]),
              _vm._v("\n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" List<DataRow>  "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("select")]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n \n \n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rows;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" List<DataRow> "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("select")]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String filterExpression)")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
                _vm._v(" Exception")
              ]),
              _vm._v("{\n         ExpressionEngine ee = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" ExpressionEngine("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(");\n         StringTemplate stringTemplate = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(
                " StringTemplate();\n         ExpressionTree expressionTree= \t\t\t stringTemplate.getSampleSqlResolve(filterExpression);\n         "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(
                "  ee.getSampleExpressionResult(expressionTree);\n     }\n \n     "
              ),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" DataRow "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("newRow")]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataRow("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rowIndex++);\n     }\n \n     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n      * 增加一行\n      * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" dataRow\n      */")
              ]),
              _vm._v("\n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("addRow")]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(DataRow dataRow)")
                ])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".rows.add(dataRow);\n     }\n \n\n }\n\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("DataColumn.java")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v(" "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@auth")]),
                _vm._v(" fandong\n  */")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-class" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataColumn")
                ]),
                _vm._v(" ")
              ]),
              _vm._v("{\n \n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" String columnName;\n \n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" Type   dataType;\n \n     "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//设定字符长度")
              ]),
              _vm._v("\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v("    charLength;\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataColumn")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String name, Type dataType)")
                ])
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".columnName=name.toUpperCase();\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".dataType = dataType;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" String "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getColumnName")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
                _vm._v(" ")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" columnName;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("setColumnName")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String columnName)")
                ]),
                _vm._v(" ")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".columnName = columnName.toUpperCase();\n     }\n \n     "
              ),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" Type "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getDataType")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
                _vm._v(" ")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" dataType;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("setDataType")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(Type dataType)")
                ]),
                _vm._v(" ")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".dataType = dataType;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getCharLength")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
                _vm._v(" ")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" charLength;\n     }\n \n     "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("setCharLength")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("("),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
                  _vm._v(" charLength)")
                ]),
                _vm._v(" ")
              ]),
              _vm._v("{\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".charLength = charLength;\n     }\n }\n\n\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("DataColumnCollection.java")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-class" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataColumnCollection")
                ])
              ]),
              _vm._v("{\n\n "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n  * 获取集合中元素的个数\n  */")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" count;\n\n "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/***\n  * 当前列的pos\n  */")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" index;\n\n "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" List<DataColumn> innerlist;\n\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("DataColumnCollection")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".innerlist = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" ArrayList<DataColumn>();\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".index="),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(";\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".count="),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(";\n }\n\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("Add")]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(DataColumn column)")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
                _vm._v(" Exception")
              ]),
              _vm._v("{\n\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".innerlist.contains(column)){\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Exception("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"DataColumnCollection has exists !"')
              ]),
              _vm._v(");\n     }\n\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".innerlist.add("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".index++,column);\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".count++;\n\n }\n\n "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//获取列的个数")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("getSize")]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".count;\n }\n\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("protected")
                ]),
                _vm._v(" List<DataColumn> "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getColumns")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".innerlist;\n }\n\n "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n  * 判断dataTable 列中是否包含数据列\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" columnName\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
                _vm._v("\n  */")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("protected")
                ]),
                _vm._v("  "),
                _c("span", { staticClass: "hljs-keyword" }, [
                  _vm._v("boolean")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("contains")]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String columnName)")
                ])
              ]),
              _vm._v("{\n\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(" isExists="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(";\n     Iterator<DataColumn> iterator = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".innerlist.iterator();\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
              _vm._v(
                "(iterator.hasNext() && !isExists){\n         DataColumn dataColumn= iterator.next();\n         "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v(
                "(dataColumn.getColumnName().equals(columnName)){\n             isExists="
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
              _vm._v(";\n         }\n     }\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" isExists;\n }\n\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" DataColumn "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getDataColumn")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String columnName)")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
                _vm._v(" Exception")
              ]),
              _vm._v("{\n     DataColumn dataColumn ="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v(";\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(" isExists="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(";\n     Iterator<DataColumn> iterator = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".innerlist.iterator();\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
              _vm._v(
                "(iterator.hasNext() && !isExists){\n         dataColumn= iterator.next();\n         "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v(
                "(dataColumn.getColumnName().compareToIgnoreCase(columnName) =="
              ),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v("){\n             isExists="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
              _vm._v(";\n         }\n     }\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(dataColumn =="),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v("){\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Exception("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('" find Column not exists"')
              ]),
              _vm._v(");\n     }\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" dataColumn;\n }\n}\n\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("DataRow.java")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\n"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-class" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("DataRow")]),
                _vm._v(" ")
              ]),
              _vm._v("{\n\n"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" Map<String,Object> itemArray;\n\n"),
              _c("span", { staticClass: "hljs-keyword" }, [
                _vm._v("protected")
              ]),
              _vm._v("   DataTable dataTable;\n\n"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v("  "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
              _vm._v(" innerIndex="),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(";\n\n"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//创建唯一标识")
              ]),
              _vm._v("\n"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
              _vm._v(" timeStamp;\n\n"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("DataRow")]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(DataTable dataTable,"),
                  _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
                  _vm._v(" index)")
                ])
              ]),
              _vm._v("{\n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".dataTable = dataTable;\n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".itemArray = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(
                " HashMap<String, Object>();\n    innerIndex= index;\n    "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".itemArray.put("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"INNER_TIME_STAMP"')
              ]),
              _vm._v(",innerIndex);\n}\n\n\n "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**\n  * 设置数据列\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" columnName\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" val\n  */")
              ]),
              _vm._v("\n"),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("setDataColumn")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("("),
                  _c("span", { staticClass: "hljs-keyword" }, [
                    _vm._v("final")
                  ]),
                  _vm._v(" String columnName, Object val)")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
                _vm._v(" Exception")
              ]),
              _vm._v("{\n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("(!"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".dataTable.columns.contains(columnName.toUpperCase())){\n        "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Exception("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"DataTable Columns not exists column Name: "')
              ]),
              _vm._v("+ columnName);\n    }\n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".itemArray.containsKey(columnName.toUpperCase())){\n        "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Exception("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"dataRow Columns has exists column Name: "')
              ]),
              _vm._v("+ columnName);\n    }\n\n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".itemArray.put(columnName.toUpperCase(),val);\n}\n\n  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/***\n  * 获取数列的值\n  * "),
                _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
                _vm._v(" columnName\n  */")
              ]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" Object "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("getDataColumnVal")
                ]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String columnName)")
                ])
              ]),
              _vm._v("{\n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".itemArray.get(columnName);\n }\n\n\n\n\n\n "),
              _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" String "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("toString")]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
                _vm._v(" ")
              ]),
              _vm._v("{\n     StringBuilder stringBuilder = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(
                " StringBuilder();\n     Iterator<DataColumn> iterator = "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".dataTable\n                                     .columns\n                                     .getColumns()\n                                     .iterator();\n     "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
              _vm._v(
                "(iterator.hasNext()){\n         DataColumn dataColumn = iterator.next();\n         Object  val ="
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v(";\n         "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".itemArray.containsKey(dataColumn.getColumnName())){\n             val = "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(
                ".itemArray.get(dataColumn.getColumnName());\n         }\n         stringBuilder.append("
              ),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('", "')]),
              _vm._v("+dataColumn.getColumnName() +"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('" = "')]),
              _vm._v("+val);\n     }\n     stringBuilder.append("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('","')]),
              _vm._v("+"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
              _vm._v(".itemArray.get("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"INNER_TIME_STAMP"')
              ]),
              _vm._v("));\n     "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" stringBuilder.append("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"\\r\\n"')]),
              _vm._v(").toString().substring("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
              _vm._v(");\n }\n\n\n }\n\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("使用：")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("      "),
              _c("span", { staticClass: "hljs-function" }, [
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-title" }, [_vm._v("main")]),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(String[] args)")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
                _vm._v(" Exception ")
              ]),
              _vm._v("{\n     \n \t    DataTable dataTable = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataTable();\n \t    DataColumn dataColumn1 = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataColumn("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"column1"')]),
              _vm._v(",String.class);\n \t    DataColumn dataColumn2 = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataColumn("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"column2"')]),
              _vm._v(",Integer.class);\n \t    DataColumn dataColumn3 = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" DataColumn("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"column3"')]),
              _vm._v(
                ",String.class);\n \t    dataTable.addDataColumn(dataColumn1);\n \t    dataTable.addDataColumn(dataColumn2);\n \t    dataTable.addDataColumn(dataColumn3);\n \t    DataRow dataRow = "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v(";\n \t    SimpleDateFormat df = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" SimpleDateFormat("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"yyyy-MM-dd HH:mm:ss.SSS"')
              ]),
              _vm._v(");"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//设置日期格式")
              ]),
              _vm._v("\n \t    System.out.println(df.format("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Date()));"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// new Date()为获取当前系统时间")
              ]),
              _vm._v("\n \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" i="),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
              _vm._v(";i<"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("10000")]),
              _vm._v(
                ";i++){\n \t        dataRow = dataTable.newRow();\n \t        dataRow.setDataColumn("
              ),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"column1"')]),
              _vm._v(",i);\n \t        dataRow.setDataColumn("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"column2"')]),
              _vm._v(",i);\n \t        dataRow.setDataColumn("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"column3"')]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"hehe"')]),
              _vm._v(
                "+String.valueOf(i));\n \t        dataTable.addRow(dataRow);\n \t    }\n }\n    \n"
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "success custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("pre", [
              _c("code", [
                _vm._v(
                  "构建一个datatable 似乎很容易，但这不是我讲的重点，重点是构建\nfilterexpression\n"
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("ExpressionTree 的构建")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "如何解析 String sqlWhere =\"  column1 = 1 and column2 = '3' or ...\"等 拼接组合。"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "这个还涉及了一个 or and 优先级的问题，between  and  这个 和 and 的区分，额。。， in （）"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "说我按照字符串解析读取各个关系，最后组装起来，一个个的解析，你可能是这样做的"
            )
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _vm._v(
                "读取了字符串  column1 = 1 ，我去获取 =1 的值，后面有 column2 =2 我去获取的值，遇到了or"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "继续解析，or的目的是结果集求和合集。。。。太麻烦了，如果复杂都在业务代码分开取，整个人感觉都不好了。"
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("思路")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "建立一个表达树，对于简单的sql语句查询，只有一个根节点，根节点可以有1一个或者多个子节点，但是2级子节点的后代只能是独苗。"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src:
                  "https://fandong90.github.io/static/img/datatableexpression.png",
                alt: "tu"
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("ExpressionTree.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/***\n *\n * sql where 条件形成时，节点树根节点是虚拟节点，并且一个树中只有一个虚拟节点\n */"
            )
          ]),
          _vm._v("\n "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("ExpressionTree")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//标记节点")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
          _vm._v(" isLabelNode;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//是否为根节点")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
          _vm._v(" isRootNode;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//是否有子节点")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
          _vm._v(" isHasChildNode;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//当前节点的层级")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" currentNodeLevel;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//当前节点的类型")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" currentNodeType;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//当前sql字符串")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" SqlKeyOperate sqlText;\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" SqlKeyOperate "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getSqlText")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" sqlText;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setSqlText")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(SqlKeyOperate sqlText)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".sqlText = sqlText;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" index="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getCurrentNodeType")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" currentNodeType;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("setCurrentNodeType")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" currentNodeType)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".currentNodeType = currentNodeType;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n     *\n     * 只有虚拟节点才可以有多个子节点\n     */"
            )
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" List<ExpressionTree> childNodes;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 只有一个父节点\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  ExpressionTree  parentNode;\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("isLabelNode")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" isLabelNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setLabelNode")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(" labelNode)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        isLabelNode = labelNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("isRootNode")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" isRootNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setRootNode")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(" rootNode)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        isRootNode = rootNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/***\n     * 判断是否有子节点\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("isHasChildNode")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" isHasChildNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 标识是否有子节点\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" hasChildNode\n     */")
          ]),
          _vm._v("\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("setHasChildNode")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(" hasChildNode)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        isHasChildNode = hasChildNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" List<ExpressionTree> "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getChildNodes")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" childNodes;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     *\n     * 增加子节点\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" node\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("add")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(ExpressionTree node)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".childNodes == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".childNodes = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ArrayList<ExpressionTree>();\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".setHasChildNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(");\n        }\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// this.childNodes = childNodes;")
          ]),
          _vm._v("\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".childNodes.add("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".index++,node);\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 获取父节点\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" ExpressionTree "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getParentNode")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" parentNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 设置父节点\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" parentNode\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("setParentNode")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(ExpressionTree parentNode)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".parentNode = parentNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/***\n     * 当前层级\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getCurrentNodeLevel")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" currentNodeLevel;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("setCurrentNodeLevel")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" currentNodeLevel)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".currentNodeLevel = currentNodeLevel;\n    }\n}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("StringTemplate.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//字符串模板解析")
          ]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 示例所有的字符串都是经过处理的")
          ]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// 如：\" column2 > 9000 or column2 = 1 and column3 = 'hehe3' \""
            )
          ]),
          _vm._v("\n   \n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("StringTemplate")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n     * 在方法中不考虑括号改变优先级的情况，实际上参数字符串已做了处理，\n     * 此处不会有这种情况出现。\n     * 生成的表达树，有且只有一个根节点\n     * "
            ),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@auth")]),
            _vm._v(" fandong\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" sqlCondition\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" ExpressionTree "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getSampleSqlResolve")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(String sqlCondition)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" Exception")
          ]),
          _vm._v("{\n\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n         * 编译选取模板需要重新定义\n          */")
          ]),
          _vm._v(
            "\n\n        String[] textArray= sqlCondition.trim()\n                                .toUpperCase()\n                                .split("
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"\\\\s+"')]),
          _vm._v(");\n\n\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(textArray.length>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" && (textArray["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("]=="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"OR"')]),
          _vm._v(" || textArray["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("]=="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"AND"')]),
          _vm._v(" || textArray["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("]=="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"("')]),
          _vm._v(")){\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Exception("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"sql rexpression error :"')
          ]),
          _vm._v("+sqlCondition);\n        }\n\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" textCount=textArray.length;\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" nodeLevel="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n       ExpressionTree rootNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n       rootNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(");\n       rootNode.setRootNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(
            ");\n       rootNode.setCurrentNodeLevel(nodeLevel);\n       rootNode.setCurrentNodeType(NODE_CROSS_OR);\n       ExpressionTree childNode ="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n\n       "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//记录上一个节点")
          ]),
          _vm._v("\n       ExpressionTree beforeNode =rootNode;\n\n       "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//在 AND 或者 OR 节点前是否遇到了Between节点")
          ]),
          _vm._v("\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
          _vm._v(" beforeMeetBetween ="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
          _vm._v(" beforeMeetIN      ="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
          _vm._v(" beforeMeetNotIN   ="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";i<textCount;i++){\n\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" j=i+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";j<textCount;j++){\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(textArray[j].compareToIgnoreCase("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"BETWEEN"')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n                nodeLevel +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                childNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n                childNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(");\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(nodeLevel=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "){\n                    rootNode.add(childNode);\n                    childNode.setParentNode(rootNode);\n\n                }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    childNode.setParentNode(beforeNode);\n                    beforeNode.add(childNode);\n                }\n                beforeNode =childNode;\n                SqlKeyOperate sqlText= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SqlKeyOperate();\n                childNode.setCurrentNodeType(NODE_CROSS_BETWEEN);\n                sqlText = getSampleSqlOperate(textArray,j,NODE_CROSS_BETWEEN);\n                childNode.setSqlText(sqlText);\n                childNode.setCurrentNodeLevel(nodeLevel);\n\n                "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//移动pos")]),
          _vm._v("\n                i+= sqlText.getMatchArr().length+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                beforeMeetBetween="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(textArray[j].compareToIgnoreCase("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"NOT"')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n                nodeLevel +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                childNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n                childNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(");\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(nodeLevel=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "){\n                    rootNode.add(childNode);\n                    childNode.setParentNode(rootNode);\n\n                }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    childNode.setParentNode(beforeNode);\n                    beforeNode.add(childNode);\n                }\n                beforeNode =childNode;\n                childNode.setCurrentNodeType(NODE_CROSS_NOT_IN);\n                SqlKeyOperate sqlText= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SqlKeyOperate();\n                sqlText = getSampleSqlOperate(textArray,j+"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            ",NODE_CROSS_NOT_IN);\n                childNode.setSqlText(sqlText);\n                childNode.setCurrentNodeLevel(nodeLevel);\n                "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//移动pos")]),
          _vm._v("\n                i+= sqlText.getMatchArr().length+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(";\n                beforeMeetNotIN="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(textArray[j].compareToIgnoreCase("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"IN"')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n                nodeLevel +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                childNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n                childNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(");\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(nodeLevel=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "){\n                    rootNode.add(childNode);\n                    childNode.setParentNode(rootNode);\n\n                }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    childNode.setParentNode(beforeNode);\n                    beforeNode.add(childNode);\n                }\n                beforeNode =childNode;\n                childNode.setCurrentNodeType(NODE_CROSS_IN);\n                SqlKeyOperate sqlText= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SqlKeyOperate();\n                sqlText = getSampleSqlOperate(textArray,j,NODE_CROSS_IN);\n                childNode.setSqlText(sqlText);\n                childNode.setCurrentNodeLevel(nodeLevel);\n                "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//移动pos")]),
          _vm._v("\n                i =i+sqlText.getMatchArr().length+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(";\n                beforeMeetIN="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(textArray[j].compareToIgnoreCase("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"AND"')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(beforeMeetBetween || beforeMeetIN || beforeMeetNotIN){\n                    beforeMeetBetween="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                    beforeMeetIN="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                    beforeMeetNotIN="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                    i =j;\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                }\n                nodeLevel +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                childNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n                childNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(");\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(nodeLevel=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "){\n                    rootNode.add(childNode);\n                    childNode.setParentNode(rootNode);\n\n                }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    childNode.setParentNode(beforeNode);\n                    beforeNode.add(childNode);\n                }\n                beforeNode =childNode;\n                childNode.setCurrentNodeType(NODE_CROSS_AND);\n                String[] valArr= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" String[j-i];\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" k="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";k<valArr.length;k++){\n                    valArr[k] =textArray[i+k];\n                }\n                SqlKeyOperate sqlText= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SqlKeyOperate();\n                sqlText.setMatchArr(valArr);\n                sqlText.setColumnName(valArr["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "]);\n                sqlText.setSysmbol(NODE_CROSS_AND);\n                childNode.setSqlText(sqlText);\n                childNode.setCurrentNodeLevel(nodeLevel);\n                "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//移动pos")]),
          _vm._v(
            "\n                i = i+sqlText.getMatchArr().length;\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(textArray[j].compareToIgnoreCase("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"OR"')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(beforeMeetBetween || beforeMeetIN || beforeMeetNotIN){\n                    beforeMeetBetween="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                    beforeMeetIN="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                    beforeMeetNotIN="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(";\n                    nodeLevel = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                    i =j;\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                }\n\n                "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n                 * 在OR前面是一个表达式\n                 */"
            )
          ]),
          _vm._v("\n                nodeLevel +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                childNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n                childNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(");\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(nodeLevel=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "){\n                    rootNode.add(childNode);\n                    childNode.setParentNode(rootNode);\n\n                }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    childNode.setParentNode(beforeNode);\n                    beforeNode.add(childNode);\n                }\n                beforeNode =childNode;\n                childNode.setCurrentNodeType(NODE_CROSS_AND);\n                String[] valArr= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" String[j-i];\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" k="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";k<valArr.length;k++){\n                    valArr[k] =textArray[i+k];\n                }\n                SqlKeyOperate sqlText= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SqlKeyOperate();\n                sqlText.setMatchArr(valArr);\n                sqlText.setColumnName(valArr["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "]);\n                sqlText.setSysmbol(NODE_CROSS_AND);\n                childNode.setSqlText(sqlText);\n                childNode.setCurrentNodeLevel(nodeLevel);\n                nodeLevel = "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                i =j;\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            }\n\n            "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//表示循环到最后了")
          ]),
          _vm._v("\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(j==textCount-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("){\n                nodeLevel +="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                childNode = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ExpressionTree();\n                childNode.setLabelNode("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(");\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(nodeLevel=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "){\n                    rootNode.add(childNode);\n                    childNode.setParentNode(rootNode);\n\n                }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    childNode.setParentNode(beforeNode);\n                    beforeNode.add(childNode);\n                }\n                beforeNode =childNode;\n                childNode.setCurrentNodeType(NODE_CROSS_AND);\n                String[] valArr= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" String[j-i+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("];\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" k="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";k<valArr.length;k++){\n                    valArr[k] =textArray[i+k];\n                }\n                SqlKeyOperate sqlText= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SqlKeyOperate();\n                sqlText.setMatchArr(valArr);\n                sqlText.setSysmbol(NODE_CROSS_AND);\n                sqlText.setColumnName(valArr["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "]);\n                childNode.setSqlText(sqlText);\n                childNode.setCurrentNodeLevel(nodeLevel);\n                "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//移动pos")]),
          _vm._v(
            "\n                i+= sqlText.getMatchArr().length;\n            }\n        }\n\n       }\n       "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" rootNode;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 解析sql 操作的语句\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" arr  解析的数据\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" sqlKeyPos sqlkey位置\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" nodeCrossType\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
            _vm._v(" SqlKeyOperate "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getSampleSqlOperate")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(String[] arr,"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" sqlKeyPos,"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" nodeCrossType)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" Exception ")
          ]),
          _vm._v("{\n\n        SqlKeyOperate sqlKeyOperate = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SqlKeyOperate();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" rightBracketPos=-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n        String[]  valArr= "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v(" (nodeCrossType){\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(
            " NODE_CROSS_BETWEEN:\n                sqlKeyOperate.setColumnName(arr[sqlKeyPos-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "]);\n                sqlKeyOperate.setSysmbol(nodeCrossType);\n                valArr = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" String["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("];\n                valArr["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("]=arr[sqlKeyPos+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("];\n                valArr["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("]=arr[sqlKeyPos+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(
            "];\n                sqlKeyOperate.setMatchArr(valArr);\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(
            " NODE_CROSS_IN:\n                sqlKeyOperate.setColumnName(arr[sqlKeyPos-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "]);\n                sqlKeyOperate.setSysmbol(NODE_CROSS_IN);\n                rightBracketPos = getMatchBracketPos(arr,sqlKeyPos+"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(")-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                valArr = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" String[rightBracketPos-sqlKeyPos-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("];\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" j="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";j<valArr.length;j++){\n                   valArr[j]=arr[j+sqlKeyPos+"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "];\n                }\n                sqlKeyOperate.setMatchArr(valArr);\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(
            " NODE_CROSS_NOT_IN:\n                sqlKeyOperate.setColumnName(arr[sqlKeyPos-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "]);\n                sqlKeyOperate.setSysmbol(NODE_CROSS_NOT_IN);\n                rightBracketPos = getMatchBracketPos(arr,sqlKeyPos+"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(")-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n                valArr = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" String[rightBracketPos-sqlKeyPos-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("];\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" j="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";j<valArr.length;j++){\n                    valArr[j]=arr[j+sqlKeyPos+"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "];\n                }\n                sqlKeyOperate.setMatchArr(valArr);\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n        }\n\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" sqlKeyOperate;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/***\n     * 获取匹配括号的位置,\n     * 指定一个左括号的位置，返回对应的右括号\n     * 此方法假设所有的括号都是配对的。\n     * "
            ),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" arr\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" firstBracketPos\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getMatchBracketPos")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(String[] arr,"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" leftBracketPos)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" Exception")
          ]),
          _vm._v("{\n        Stack<String> bracketstack= "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Stack<String>();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";i<arr.length;i++){\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(arr[i].compareTo("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"("')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("){\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(i==leftBracketPos){\n                    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//标志匹配的左括号")
          ]),
          _vm._v("\n                    bracketstack.push("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"*"')]),
          _vm._v(");\n                }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            "{\n                    bracketstack.push(arr[i]);\n                }\n            }"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(arr[i].compareTo("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('")"')]),
          _vm._v(")=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(") {\n                "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//第一个是有括号")
          ]),
          _vm._v("\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (bracketstack.isEmpty()) {\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Exception("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"bracket not match ，first position right bracket"')
          ]),
          _vm._v(
            ");\n                }\n                String right = bracketstack.pop();\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" ("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"*"')]),
          _vm._v(".equals(right)) {\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" i;\n                }\n            }\n        }\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" -"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n    }\n\n\n}\n   \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("表达树的计算和解析")]),
      _vm._v(" "),
      _c("p", [_vm._v("ExpressionRelation.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("     "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n * 避免使用递归。\n * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@auth")]),
            _vm._v(" fandong\n */")
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("ExpressionRelation")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 获取表达式执行的顺序\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" order;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 获取过滤的数据\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  List<DataRow>  dataRows;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 保存单条线集合\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" List<ExpressionTree> nodes;\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 表示数据是交集 还是 并集的关系\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("  dataMergeType;\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" DataColumnCollection columns;\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" DataTable  dataTable;\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("ExpressionRelation")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(DataTable dt)")
            ])
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".columns =dt.columns;\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataTable =dt;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getOrder")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" order;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setOrder")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" order)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".order = order;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" List<DataRow> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getDataRows")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" dataRows;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setDataRows")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(List<DataRow> dataRows)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows = dataRows;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("setExpression")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(List<ExpressionTree> nodes)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".nodes= nodes;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getDataMergeType")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" dataMergeType;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("setDataMergeType")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" dataMergeType)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataMergeType = dataMergeType;\n    }\n\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n     * 获取执行的结果集\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" List<DataRow> "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getResult")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" Exception")
          ]),
          _vm._v("{\n\n        Iterator<ExpressionTree> iterator = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".nodes.iterator();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows = dataTable.getRows();\n\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n         * 用于处理IN 、NOT IN 的问题\n         */")
          ]),
          _vm._v("\n        List<DataRow>  beforeDataRow="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("  INCount="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v(
            "(iterator.hasNext()){\n\n            ExpressionTree node = iterator.next();\n            "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(
            " SqlKeyOperate sqlText=node.getSqlText();\n            DataColumn dataColumn = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".columns.getDataColumn(sqlText.getColumnName());\n            String primitiveType= dataColumn.getDataType().toString().toUpperCase();\n            IPrimitiveFactory primitiveFactory= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " PrimitiveFactory(primitiveType).getInstance();\n\n            "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(sqlText.getSysmbol() == NODE_CROSS_AND){\n\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v(" (sqlText.getMatchArr()["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("]){\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"="')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p-> primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))\n                                        .compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])=="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"<>"')]),
          _vm._v(":\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"!="')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p-> primitiveFactory.parse(\n                                        p.getDataColumnVal(sqlText.getColumnName()))\n                                        .compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])!="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('">="')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p-> primitiveFactory.parse(\n                                        p.getDataColumnVal(sqlText.getColumnName()))\n                                        .compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])>="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"<="')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p-> primitiveFactory.parse(\n                                        p.getDataColumnVal(sqlText.getColumnName()))\n                                        .compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])<="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('">"')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p-> primitiveFactory.parse(\n                                        p.getDataColumnVal(sqlText.getColumnName()))\n                                        .compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"<"')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p-> primitiveFactory.parse(\n                                        p.getDataColumnVal(sqlText.getColumnName()))\n                                        .compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])<"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"LIKE"')]),
          _vm._v(":\n                        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows= "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                                p->primitiveFactory.getLike(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("])=="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(
            "\n                        ).collect(Collectors.<DataRow>toList());\n                        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n                }\n            }\n\n\n             "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(sqlText.getSysmbol() == NODE_CROSS_BETWEEN){\n\n                 "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.stream().filter(\n                         p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName())).compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("])>="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                                 &&\n                                 primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName())).compareToIgnoreCase(sqlText.getMatchArr()["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("])<="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                   ).collect(Collectors.<DataRow>toList());\n                 }\n\n             "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(sqlText.getSysmbol() == NODE_CROSS_IN){\n                 INCount ++;\n                 "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(INCount =="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("){\n                     "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<sqlText.getMatchArr().length;i++){\n                         Object val = sqlText.getMatchArr()[i];\n                         "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataTable.getRows().stream().filter(\n                                 p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))\n                                         .compareToIgnoreCase(val)=="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                         ).collect(Collectors.<DataRow>toList());\n\n                         "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".getMergerResult("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows,beforeDataRow);\n                         beforeDataRow = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows;\n                     }\n                 }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n                     List<DataRow> srcDataRow = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows.parallelStream().collect(Collectors.toList());\n                     beforeDataRow ="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n                     "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<sqlText.getMatchArr().length;i++){\n                         Object val = sqlText.getMatchArr()[i];\n                         "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows=srcDataRow.stream().filter(\n                                 p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))\n                                         .compareToIgnoreCase(val)=="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                         ).collect(Collectors.<DataRow>toList());\n\n                         "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".getMergerResult("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows,beforeDataRow);\n                         beforeDataRow = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows;\n                     }\n                 }\n\n\n             }\n\n             "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(sqlText.getSysmbol() == NODE_CROSS_NOT_IN){\n                 List<DataRow> srcDataRows = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataTable.getRows().stream().collect(Collectors.toList());\n                 "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" notInExistsCount="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n                 "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<sqlText.getMatchArr().length;i++){\n                     Object val = sqlText.getMatchArr()[i];\n                     "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataTable.getRows().stream().filter(\n                             p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))\n                                     .compareToIgnoreCase(val)=="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n                     ).collect(Collectors.<DataRow>toList());\n\n                    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("(DataRow dr : "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows){\n                       srcDataRows.remove(dr);\n                    }\n                 }\n                 "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".dataRows = srcDataRows;\n             }\n\n        }\n        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".dataRows;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n     * 融合结果值\n     * 需要添加一个算法进行查找，使用二分法查找\n     * "
            ),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" rows1\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" rows2\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" List<DataRow> "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getMergerResult")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(List<DataRow> rows1,List<DataRow> rows2)")
            ]),
            _vm._v("\n    ")
          ]),
          _vm._v("{\n\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("long")]),
          _vm._v(" result1Count="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(",result2Count="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(rows1 == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(" && rows2 =="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ArrayList<DataRow>();\n        }\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(rows1 !="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(
            "){\n            result1Count = rows1.size();\n        }\n\n        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(rows2 !="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(
            "){\n            result2Count = rows2.size();\n        }\n\n        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(result1Count>result2Count){\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(rows2!="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" r1Count = rows1.size();\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" r2Count = rows2.size();\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("[] row1Arr = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("[r1Count];\n\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<r1Count;i++){\n                    row1Arr[i] = Integer.parseInt(rows1.get(i).getDataColumnVal("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"INNER_TIME_STAMP"')
          ]),
          _vm._v(
            ").toString());\n                }\n\n                Arrays.sort(row1Arr);\n\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<r2Count;i++){\n                    DataRow dataRow = rows2.get(i);\n                    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            "(binaryFind(row1Arr,Integer.parseInt(\n                            dataRow\n                            .getDataColumnVal("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"INNER_TIME_STAMP"')
          ]),
          _vm._v(")\n                            .toString())) ==-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            ")\n                    {\n                         rows1.add(dataRow);\n                    }\n                }\n\n\n            }\n\n            "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" rows1;\n\n        }"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(rows1!="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(" && rows2 !="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" r1Count = rows1.size();\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" r2Count = rows2.size();\n\n\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("[] row2Arr = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("[r2Count];\n\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<r2Count;i++){\n                    row2Arr[i] = Integer.parseInt(rows2.get(i).getDataColumnVal("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"INNER_TIME_STAMP"')
          ]),
          _vm._v(
            ").toString());\n                }\n\n                Arrays.sort(row2Arr);\n\n                "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" i="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ";i<r1Count;i++){\n                    DataRow dataRow = rows1.get(i);\n                    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(
            " result =binaryFind(row2Arr,Integer.parseInt(\n                            dataRow\n                                    .getDataColumnVal("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"INNER_TIME_STAMP"')
          ]),
          _vm._v(
            ")\n                                    .toString()));\n                    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("( result == -"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            ")\n                    {\n                        rows2.add(dataRow);\n                    }\n                }\n\n            }\n            "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(rows2 == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("){\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ArrayList<DataRow>();\n            }\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" rows2;\n        }\n    }\n\n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n     * 二分法查找，返回元素的位置\n     * 返回 -1 怎标识不在\n     * "
            ),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" a\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@param")]),
            _vm._v(" b\n     * "),
            _c("span", { staticClass: "hljs-doctag" }, [_vm._v("@return")]),
            _vm._v("\n     */")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("binaryFind")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" a[],"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" b)")
            ]),
            _vm._v("\n    ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" mid,min="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(",max;\n        max=a.length-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v("(min<=max)\n        {\n            mid=min+(max-min)/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(";\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(b<a[mid])\n            {\n                max=mid-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n            }\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("(b>a[mid])\n            {\n                min=mid+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n            }\n            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v("\n            {\n                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" mid+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n            }\n        }\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" -"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n    }\n\n\n}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v("一些其他的class 就不在展示了，如有需要下面邮箱联系我。\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("实现结果：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(" Iterator<DataRow> iterator = dataTable.select("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '" column1 not in ( 9 -1 11 34 ) and   column2 between 9 and 12 "'
            )
          ]),
          _vm._v(").iterator();\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v(
            "(iterator.hasNext()){\n        DataRow dataRow1= iterator.next();\n        System.out.println(dataRow1.toString());\n    }\n\n    System.out.println(df.format("
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Date()));"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// new Date()为获取当前系统时间")
          ]),
          _vm._v("\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "dataTable 中有10000 行数据，这个解析式 column1 不能包含9 -1 11 34 而且 column2 的值必须在9-12 之间。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src:
              "https://fandong90.github.io/static/img/datatableresultdemo.png",
            alt: "result"
          }
        })
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

/***/ "./src/pages/md/lang_java_datatable_1-2_sample.md":
/*!********************************************************!*\
  !*** ./src/pages/md/lang_java_datatable_1-2_sample.md ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_java_datatable_1_2_sample_md_vue_type_template_id_60a47942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942& */ "./src/pages/md/lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _lang_java_datatable_1_2_sample_md_vue_type_template_id_60a47942___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lang_java_datatable_1_2_sample_md_vue_type_template_id_60a47942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/lang_java_datatable_1-2_sample.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942&":
/*!***************************************************************************************!*\
  !*** ./src/pages/md/lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_java_datatable_1_2_sample_md_vue_type_template_id_60a47942___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/lang_java_datatable_1-2_sample.md?vue&type=template&id=60a47942&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_java_datatable_1_2_sample_md_vue_type_template_id_60a47942___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_lang_java_datatable_1_2_sample_md_vue_type_template_id_60a47942___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-21e43750.js.map