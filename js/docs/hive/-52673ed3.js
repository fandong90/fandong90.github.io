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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("h1", { attrs: { id: "hive-%E6%9F%A5%E8%AF%A2%E8%AF%AD%E8%A8%80" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#hive-%E6%9F%A5%E8%AF%A2%E8%AF%AD%E8%A8%80",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Hive 查询语言")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "ORDER BY 与 DISTRIBUTE BY columnname SORT BY columnsname  效果一样"
          )
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> SELECT year,temperature")
          ]),
          _vm._v(
            "\n. . . . . . . . . . . . . . . .> FROM dm_dim_blog_weather_records\n. . . . . . . . . . . . . . . .> DISTRIBUTE BY year\n. . . . . . . . . . . . . . . .> SORT BY year ASC,temperature DESC;\nWARNING: Hive-on-MR is deprecated in Hive "
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
            _vm._v(
              " or using Hive 1.X releases.\n+-------+--------------+\n| year  | temperature  |\n+-------+--------------+\n| 1949  | 111          |\n| 1949  | 78           |\n| 1950  | 22           |\n| 1950  | 0            |\n| 1950  | -11          |\n| 2019  | 50           |\n+-------+--------------+\n6 rows "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("15.37")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n0: jdbc:hive2:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//localhost:10000> SELECT year, temperature")
            ]),
            _vm._v(
              "\n. . . . . . . . . . . . . . . .> FROM dm_dim_blog_weather_records\n. . . . . . . . . . . . . . . .> ORDER BY year ASC,temperature DESC"
            )
          ]),
          _vm._v(";\nWARNING: Hive-on-MR is deprecated in Hive "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(" and may not be available in the future versions. "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Consider using a different execution "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("engine")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(i.e. spark, tez)")
            ]),
            _vm._v(
              " or using Hive 1.X releases.\n+-------+--------------+\n| year  | temperature  |\n+-------+--------------+\n| 1949  | 111          |\n| 1949  | 78           |\n| 1950  | 22           |\n| 1950  | 0            |\n| 1950  | -11          |\n| 2019  | 50           |\n+-------+--------------+\n6 rows "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("16.023")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("创建的表")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> DESC dm_dim_sales;")
          ]),
          _vm._v(
            "\n+-----------+------------+----------+\n| col_name  | data_type  | comment  |\n+-----------+------------+----------+\n| customer  | string     | 客户       |\n| goods     | string     | 商品       |\n+-----------+------------+----------+\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("发现goods 字段列名不合适及数据类型")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\tALTER TABLE dm_dim_sales\n\tCHANGE\n\tgoods goodid BIGINT;\n\t\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Error: org.apache.hive.service.cli.HiveSQLException: Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions :"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [_vm._v("string 类型不可以转BIGINT")]),
        _vm._v(" "),
        _c("p", [_vm._v("BIGINT 可以转String类型。")])
      ]),
      _vm._v(" "),
      _c("h2", { attrs: { id: "join-%E8%BF%9E%E6%8E%A5" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#join-%E8%BF%9E%E6%8E%A5", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" JOIN 连接")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("内连接")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:10000> SELECT s.*,t.*")
          ]),
          _vm._v(
            "\n\t\t. . . . . . . . . . . . . . . .> FROM dm_dim_sales s\n\t\t. . . . . . . . . . . . . . . .> JOIN dm_dim_things t ON s.goodid=t.goodid;\n\t\tWARNING: Hive-on-MR is deprecated in Hive "
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
            _vm._v(
              " or using Hive 1.X releases.\n\t\tSLF4J: Class path contains multiple SLF4J bindings.\n\t\tSLF4J: Found binding in [jar:file:/opt/hive/apache-hive-2.3.5-bin/lib/log4j-slf4j-impl-2.6.2.jar!/org/slf4j/impl/StaticLoggerBinder.class]\n\t\tSLF4J: Found binding in [jar:file:/opt/hadoop/pseudo_hadoop/share/hadoop/common/lib/slf4j-log4j12-1.7.10.jar!/org/slf4j/impl/StaticLoggerBinder.class]\n\t\tSLF4J: See http:"
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//www.slf4j.org/codes.html#multiple_bindings for an explanation."
              )
            ]),
            _vm._v(
              "\n\t\tSLF4J: Actual binding is of type [org.apache.logging.slf4j.Log4jLoggerFactory]\n\t\t2019-07-05 21:48:42\tStarting to launch local task to process map join"
            )
          ]),
          _vm._v(";\tmaximum memory = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("477626368")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("07")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("48")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("43")]),
          _vm._v("\tDump the side-table "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" tag: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" with group count: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(" into file: file:/tmp/root/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("96306")]),
          _vm._v("b16-daaa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4535")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9e37")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("912")]),
          _vm._v("b96e27e30/hive_2019-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("07")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05_21")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("48")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [
            _vm._v("38_443_881491534239949443")
          ]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("/-local-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10004")]),
          _vm._v("/HashTable-Stage-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("/MapJoin-mapfile01--.hashtable\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("07")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("48")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("43")]),
          _vm._v("\tUploaded "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" File to: file:/tmp/root/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("96306")]),
          _vm._v("b16-daaa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4535")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9e37")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("912")]),
          _vm._v("b96e27e30/hive_2019-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("07")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05_21")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("48")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [
            _vm._v("38_443_881491534239949443")
          ]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("/-local-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10004")]),
          _vm._v("/HashTable-Stage-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("/MapJoin-mapfile01--.hashtable ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("420")]),
          _vm._v(" bytes)\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("07")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("48")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("43")]),
          _vm._v("\tEnd of local task; Time Taken: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.51")]),
          _vm._v(
            " sec.\n\t\t+-------------+-----------+-----------+-------------+\n\t\t| s.customer  | s.goodid  | t.goodid  | t.goodname  |\n\t\t+-------------+-----------+-----------+-------------+\n\t\t| Joe         | "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("         | Tie         |\n\t\t| Hank        | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("         | Coat        |\n\t\t| Ali         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("         | Apple       |\n\t\t| Eve         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("         | Hat         |\n\t\t| Hank        | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("         | "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "         | Tie         |\n\t\t+-------------+-----------+-----------+-------------+\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("17.8")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n   \n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("解析EXPLAIN")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\n\t    EXPLAIN\n\t. . . . . . . . . . . . . . . .> SELECT s.*,t.*\n\t. . . . . . . . . . . . . . . .> FROM dm_dim_sales s\n\t. . . . . . . . . . . . . . . .> JOIN dm_dim_things t\n\t. . . . . . . . . . . . . . . .> ON s.goodid=t.goodid;\n\t+----------------------------------------------------+\n\t|                      Explain                       |\n\t+----------------------------------------------------+\n\t| STAGE DEPENDENCIES:                                |\n\t|   Stage-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(" is a root stage                          |\n\t|   Stage-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(" depends on stages: Stage-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("               |\n\t|   Stage-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" depends on stages: Stage-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(
            "               |\n\t|                                                    |\n\t| STAGE PLANS:                                       |\n\t|   Stage: Stage-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(
            "                                   |\n\t|     Map Reduce Local Work                          |\n\t|       Alias -> Map Local Tables:                   |\n\t|         t                                          |\n\t|           Fetch Operator                           |\n\t|             limit: -"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "                              |\n\t|       Alias -> Map Local Operator Tree:            |\n\t|         t                                          |\n\t|           TableScan                                |\n\t|             alias: t                               |\n\t|             Statistics: Num rows: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(" Data size: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("480")]),
          _vm._v(
            " Basic stats: COMPLETE Column stats: NONE |\n\t|             Filter Operator                        |\n\t|               predicate: UDFToDouble(goodid) "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("is not "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("null")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(")")
            ]),
            _vm._v(
              " |\n\t|               Statistics: Num rows: 5 Data size: 480 Basic stats: COMPLETE Column stats: NONE |\n\t|               HashTable Sink Operator              |\n\t|                 keys:                              |\n\t|                   0 "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("UDFToDouble")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(goodid)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("double")]),
              _vm._v(")")
            ]),
            _vm._v(" |\n\t|                   1 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("UDFToDouble")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(goodid)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("double")]),
              _vm._v(")")
            ]),
            _vm._v(
              " |\n\t|                                                    |\n\t|   Stage: Stage-3                                   |\n\t|     Map Reduce                                     |\n\t|       Map Operator Tree:                           |\n\t|           TableScan                                |\n\t|             alias: s                               |\n\t|             Statistics: Num rows: 5 Data size: 862 Basic stats: COMPLETE Column stats: NONE |\n\t|             Filter Operator                        |\n\t|               predicate: "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("UDFToDouble")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(goodid)")]),
            _vm._v(" is not "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("null")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
              _vm._v(")")
            ]),
            _vm._v(
              " |\n\t|               Statistics: Num rows: 5 Data size: 862 Basic stats: COMPLETE Column stats: NONE |\n\t|               Map Join Operator                    |\n\t|                 condition map:                     |\n\t|                      Inner Join 0 to 1             |\n\t|                 keys:                              |\n\t|                   0 "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("UDFToDouble")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(goodid)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("double")]),
              _vm._v(")")
            ]),
            _vm._v(" |\n\t|                   1 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("UDFToDouble")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(goodid)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("double")]),
              _vm._v(")")
            ]),
            _vm._v(
              " |\n\t|                 outputColumnNames: _col0, _col1, _col5, _col6 |\n\t|                 Statistics: Num rows: 5 Data size: 948 Basic stats: COMPLETE Column stats: NONE |\n\t|                 Select Operator                    |\n\t|                   expressions: "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("_col0")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: string)")
            ]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("_col1")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: string)")
            ]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("_col5")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: bigint)")
            ]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("_col6")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(type: string)")
            ]),
            _vm._v(
              " |\n\t|                   outputColumnNames: _col0, _col1, _col2, _col3 |\n\t|                   Statistics: Num rows: 5 Data size: 948 Basic stats: COMPLETE Column stats: NONE |\n\t|                   File Output Operator             |\n\t|                     compressed: "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
            _vm._v(
              "              |\n\t|                     Statistics: Num rows: 5 Data size: 948 Basic stats: COMPLETE Column stats: NONE |\n\t|                     table:                         |\n\t|                         input format: org.apache.hadoop.mapred.SequenceFileInputFormat |\n\t|                         output format: org.apache.hadoop.hive.ql.io.HiveSequenceFileOutputFormat |\n\t|                         serde: org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe |\n\t|       Local Work:                                  |\n\t|         Map Reduce Local Work                      |\n\t|                                                    |\n\t|   Stage: Stage-0                                   |\n\t|     Fetch Operator                                 |\n\t|       limit: -1                                    |\n\t|       Processor Tree:                              |\n\t|         ListSink                                   |\n\t|                                                    |\n\t+----------------------------------------------------+\n\t62 rows "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.312")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("LEFT OUTER JOIN / RIGHT OUTER JOIN / FULL OUTER JOIN")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\n   ???\n\n")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("UDF /UDAF /UDTF")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    \n    UDF 操作作用于单个数据行，且产生一个数据行作为输出\n    \n    UDAF 接收多个输入数据行,并产生一个数据行，聚合函数。\n    \n    UDTF 作用于单个数据行，产生多个数据行（即一个表数据）输出。\n \n \n"
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

/***/ "./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md":
/*!*********************************************************!*\
  !*** ./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_hive_hive_1_1_hiveDML_md_vue_type_template_id_acc49952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952& */ "./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_hive_hive_1_1_hiveDML_md_vue_type_template_id_acc49952___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_hive_hive_1_1_hiveDML_md_vue_type_template_id_acc49952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952&":
/*!****************************************************************************************!*\
  !*** ./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_hive_1_1_hiveDML_md_vue_type_template_id_acc49952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hive_hive基础_1-1_hiveDML.md?vue&type=template&id=acc49952&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_hive_1_1_hiveDML_md_vue_type_template_id_acc49952___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_hive_1_1_hiveDML_md_vue_type_template_id_acc49952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-52673ed3.js.map