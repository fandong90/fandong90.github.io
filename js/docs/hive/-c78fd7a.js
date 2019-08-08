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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_hive_hive基础_1-2_DDL.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("h1", { attrs: { id: "hive" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#hive", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" hive")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("从本地加载数据")]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "\t\t jdbc:hive2://localhost:10000> load data local inpath '/home/fandong/dataDemo/hadoop/input/ncdc/micro-tab/sample.txt'\n\t\t. . . . . . . . . . . . . . . .> overwrite into table blog.dm_dim_blog_weather_records;\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("从hdfs中加载数据 ?")]),
      _vm._v(" "),
      _c("p", [_vm._v("？？？")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("HIVE 的内置函数")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("查询内置函数 show functions;")]),
            _vm._v(" "),
            _c("li", [_vm._v("查看函数描述 describe function [func name];")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("      "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> describe function length;")
          ]),
          _vm._v(
            "\n\t\t+----------------------------------------------------+\n\t\t|                      tab_name                      |\n\t\t+----------------------------------------------------+\n\t\t| length(str | binary) - Returns the length of str or number of bytes in binary data |\n\t\t+----------------------------------------------------+\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("row "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.083")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\t\t\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("HIVE 托管表和外部表")]),
          _vm._v(" "),
          _c("pre", [
            _c("code", [
              _vm._v(
                "  * 托管表 create table <table name> () ;\n  * drop table <table name>;\n  * 外部表 create external table <table name>();\n  * drop table external\n  ** 区别 **\n  外部表，hive只是负责处理数据，并不存储数据，丢弃外部表时，hive不会碰数据。只是删除源数据。\n"
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("HIVE 分区（partition) 和 桶 (bucket)")]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("创建一个分区表")])])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> CREATE TABLE BLOG.LOGS(")
          ]),
          _vm._v(
            "\n. . . . . . . . . . . . . . . .> \n. . . . . . . . . . . . . . . .>      ts         BIGINT COMMENT "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'记录ts'")]),
          _vm._v(
            "\n. . . . . . . . . . . . . . . .>     ,line        STRING COMMENT "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'记录行数'")]),
          _vm._v(
            "\n. . . . . . . . . . . . . . . .> )\n. . . . . . . . . . . . . . . .> COMMENT "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'记录日志表'")]),
          _vm._v("\n. . . . . . . . . . . . . . . .> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("PARTITIONED "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("BY")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(dt STRING, country STRING)")
            ]),
            _vm._v("\n. . . . . . . . . . . . . . . .> ")
          ]),
          _vm._v(";\n"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("No rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.3")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\n\t\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", [_c("code", [_vm._v("插入数据\n")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\t     . . . . . . . . . . . . . . . .> into table blog.logs\n\t\t. . . . . . . . . . . . . . . .> partition (dt="
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'2001-01-01'")]),
          _vm._v(",country="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'GB'")]),
          _vm._v(");\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("No rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.804")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t \t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> select * from logs;")
          ]),
          _vm._v(
            "\n\t\t+----------+-------------+-------------+---------------+\n\t\t| logs.ts  |  logs.line  |   logs.dt   | logs.country  |\n\t\t+----------+-------------+-------------+---------------+\n\t\t| "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("        | Log line "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("  | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(
            "  | GB            |\n\t\t+----------+-------------+-------------+---------------+\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("row "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.282")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\t\t\n\t\t\n\t\t0: jdbc:hive2:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//localhost:10000> select * from blog.logs;")
            ]),
            _vm._v(
              "\n\t\t+----------+-------------+-------------+---------------+\n\t\t| logs.ts  |  logs.line  |   logs.dt   | logs.country  |\n\t\t+----------+-------------+-------------+---------------+\n\t\t| 1        | Log line 1  | 2001-01-01  | GB            |\n\t\t| 1        | Log line 1  | 2001-01-02  | US            |\n\t\t+----------+-------------+-------------+---------------+\n\t\t\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", [
        _c("code", [_vm._v(" hadoop hdfs 文件系统\n  通过文件通过分区\n")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "01 dm_dim_blog_logs]# hadoop fs -find /user  -name dt*\n\t\t/user/hive/warehouse/blog.db/logs/dt="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("\n\t\t/user/hive/warehouse/blog.db/logs/dt="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v("\n\t \n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("查看表分区")]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("show partitions [table name];")])])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("        jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> show partitions logs;")
          ]),
          _vm._v(
            "\n\t\t\t+---------------------------+\n\t\t\t|         partition         |\n\t\t\t+---------------------------+\n\t\t\t| dt="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("/country=GB  |\n\t\t\t| dt="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v("/country=US  |\n\t\t\t+---------------------------+\n     \n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("桶\n创建了4个桶分区")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t  \n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> ---author fandong")
          ]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> ")
          ]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//localhost:10000> ---output  blog.dm_dim_blog_bucketed_user"
            )
          ]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> ")
          ]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//localhost:10000> CREATE TABLE BLOG.dm_dim_blog_bucketed_user("
            )
          ]),
          _vm._v(
            "\n\t\t. . . . . . . . . . . . . . . .> \n\t\t. . . . . . . . . . . . . . . .>     id     INT           COMMENT "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'记录id'")]),
          _vm._v(
            "\n\t\t. . . . . . . . . . . . . . . .>        ,name    STRING        COMMENT "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'记录name'")]),
          _vm._v(
            "\n\t\t. . . . . . . . . . . . . . . .> )\n\t\t. . . . . . . . . . . . . . . .> COMMENT "
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'练习使用桶表'")
          ]),
          _vm._v("\n\t\t. . . . . . . . . . . . . . . .> "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("CLUSTERED "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("BY")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(id)")]),
            _vm._v(" SORTED "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("BY")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(id ASC)")]),
            _vm._v(" INTO 4 BUCKETS")
          ]),
          _vm._v(";\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("No rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.228")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\t\n???\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("分区添加数据;")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> insert into table logs")
          ]),
          _vm._v("\n. . . . . . . . . . . . . . . .> partition(dt="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'2001-01-02'")]),
          _vm._v(",country="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'GR'")]),
          _vm._v(")\n. . . . . . . . . . . . . . . .> select "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'line 2'")]),
          _vm._v(" from logs;\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\t\t+----------+-------------+-------------+---------------+\n\t| logs.ts  |  logs.line  |   logs.dt   | logs.country  |\n\t+----------+-------------+-------------+---------------+\n\t| "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("        | Log line "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("  | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("  | GB            |\n\t| "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("        | line "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("      | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v("  | GR            |\n\t| "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("        | line "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("      | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v("  | GR            |\n\t| "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("        | Log line "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("  | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2001")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(
            "  | US            |\n\t+----------+-------------+-------------+---------------+\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "insert into table  [table name](ts,line)values(1,'33');\n\n无法给分区加数据。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> CREATE TABLE logs_1")
          ]),
          _vm._v(
            "\n. . . . . . . . . . . . . . . .> AS\n. . . . . . . . . . . . . . . .> SELECT ts,line\n. . . . . . . . . . . . . . . .> FROM logs;\nWARNING: Hive-on-MR is deprecated in Hive "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(" and may not be available in the future versions. "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Consider using a different execution "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("engine")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(i.e. spark, tez)")
            ]),
            _vm._v(" or using Hive 1.X releases.\nNo rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("11.068")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n0: jdbc:hive2:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//localhost:10000> select * from logs_1;")
            ]),
            _vm._v(
              "\n+------------+--------------+\n| logs_1.ts  | logs_1.line  |\n+------------+--------------+\n| 1          | Log line 1   |\n| 1          | line 2       |\n| 1          | line 2       |\n| 1          | Log line 1   |\n+------------+--------------+\n4 rows "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.213")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "%E8%A1%A8%E4%BF%AE%E6%94%B9" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E8%A1%A8%E4%BF%AE%E6%94%B9",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 表修改")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("修改表名字")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\nalter table logs_1 rename to logs_2;\n\n")])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("增加了列")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("ALTER TABLE logs_2 ADD "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("COLUMNS")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(col3 STRING COMMENT "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'last add comment'")
              ]),
              _vm._v(")")
            ])
          ]),
          _vm._v(";\n"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("No rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.1")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n0: jdbc:hive2:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//localhost:10000> desc logs_2;")
            ]),
            _vm._v(
              "\n+-----------+------------+-------------------+\n| col_name  | data_type  |      comment      |\n+-----------+------------+-------------------+\n| ts        | bigint     |                   |\n| line      | string     |                   |\n| col3      | string     | last add comment  |\n+-----------+------------+-------------------+\n\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("修改列名")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> ALTER TABLE logs_2 ")
          ]),
          _vm._v(
            "\n\t. . . . . . . . . . . . . . . .> CHANGE\n\t. . . . . . . . . . . . . . . .> line  col2 STRING\n\t. . . . . . . . . . . . . . . .> AFTER col3;\n\t"
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("No rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.143")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v("\t更换列后，发现col3列的数据是原来line『col2」的数据\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("修改表注释")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\tALTER TABLE 表名 "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("SET "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("TBLPROPERTIES")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'comment'")]),
              _vm._v(" = "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'表注释内容'")
              ]),
              _vm._v(")")
            ])
          ]),
          _vm._v(";\n\t\n")
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

/***/ "./src/pages/md/bigData_hive_hive基础_1-2_DDL.md":
/*!*****************************************************!*\
  !*** ./src/pages/md/bigData_hive_hive基础_1-2_DDL.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_hive_hive_1_2_DDL_md_vue_type_template_id_3654fbbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd& */ "./src/pages/md/bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_hive_hive_1_2_DDL_md_vue_type_template_id_3654fbbd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_hive_hive_1_2_DDL_md_vue_type_template_id_3654fbbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_hive_hive基础_1-2_DDL.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd&":
/*!************************************************************************************!*\
  !*** ./src/pages/md/bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_hive_1_2_DDL_md_vue_type_template_id_3654fbbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hive_hive基础_1-2_DDL.md?vue&type=template&id=3654fbbd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_hive_1_2_DDL_md_vue_type_template_id_3654fbbd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_hive_1_2_DDL_md_vue_type_template_id_3654fbbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-c78fd7a.js.map