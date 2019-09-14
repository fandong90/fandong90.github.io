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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4& ***!
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
      _c(
        "h2",
        {
          attrs: {
            id:
              "spark-python%2Fjava%2Fscala-%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#spark-python%2Fjava%2Fscala-%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" Spark Python/Java/Scala 代码提交")
        ]
      ),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("简单示例，笔记做备忘录")])]),
      _vm._v(" "),
      _c("p", [_vm._v("python:")]),
      _vm._v(" "),
      _c("p", [_vm._v("本地开发环境搭建")]),
      _vm._v(" "),
      _c("p", [_vm._v("1、使用python时需要下载spark;")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n# "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" os\nfrom pyspark "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" SparkConf,SparkContext;\n# os.environ["),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"SPARK_HOME"')]),
          _vm._v("]="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"/Users/fandong/Desktop/spark-2.0.1-bin-hadoop2.7"')
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("2、项目中导入pyspark 依赖包：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    \n  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":依赖包在：/Users/fandong/Desktop/spark-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(".1-bin-hadoop2.7/python/lib/py4j-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.10")]),
          _vm._v(".3-src.zip\n\t\n\t\n  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(":/Users/fandong/Desktop/spark-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(".1-bin-hadoop2.7/python/lib/pyspark.zip\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("python code:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n# "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" os\nfrom pyspark "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" SparkConf,SparkContext;\n# os.environ["),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"SPARK_HOME"')]),
          _vm._v("]="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"/Users/fandong/Desktop/spark-2.0.1-bin-hadoop2.7"')
          ]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" __name__=="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"__main__"')]),
          _vm._v(":\n    conf=SparkConf().setAppName("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"square"')]),
          _vm._v(").setMaster("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"local"')]),
          _vm._v(
            ")\n    sc=SparkContext(conf=conf)\n    numsRDD=sc.parallelize(["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v("])\n    squared=numsRDD.map(lambda x: x*x).collect()\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" num in squared:\n        print("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"%d"')]),
          _vm._v("%(num))\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [
          _vm._v(
            "这里注释掉，是因为在intellij ide 中已经配置了环境变量，如果没有配置，需要指定。"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("本地测试：计算乘方")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\t\t\n\tTo adjust logging level use sc.setLogLevel(newLevel).\n\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("57")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("08")]),
          _vm._v(" WARN NativeCodeLoader: Unable to load "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("native")]),
          _vm._v("-hadoop library "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " your platform... using builtin-java classes where applicable\n\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("25")]),
          _vm._v("\n\t\n\tProcess finished with exit code "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("submit 到spark\n"),
        _c("strong", [
          _vm._v(
            "提交到集群时，只需要把py文件提交即可，如果集群没有的包需要提交到集群"
          )
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\t./spark-submit    /home/fandong/task_script_dir/onedata_spark/c1/wcCount.py \n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("03")]),
          _vm._v(" INFO executor.Executor: Finished task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("). "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1301")]),
          _vm._v(" bytes result sent to driver\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("03")]),
          _vm._v(" INFO executor.Executor: Finished task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("). "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1388")]),
          _vm._v(" bytes result sent to driver\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("03")]),
          _vm._v(" INFO executor.Executor: Finished task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("). "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1320")]),
          _vm._v(" bytes result sent to driver\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("03")]),
          _vm._v(" INFO executor.Executor: Finished task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("). "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1301")]),
          _vm._v(" bytes result sent to driver\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("03")]),
          _vm._v(" INFO scheduler.TaskSetManager: Finished task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(") in "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("534")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("ms on "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("localhost")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
              _vm._v("/"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t18/09/14 10:00:03 INFO scheduler.TaskSetManager: Finished task 2.0 in stage 0.0 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(TID "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
              _vm._v(")")
            ]),
            _vm._v(" in 533 ms on "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("localhost")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
              _vm._v("/"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t18/09/14 10:00:03 INFO scheduler.TaskSetManager: Finished task 3.0 in stage 0.0 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(TID "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
              _vm._v(")")
            ]),
            _vm._v(" in 527 ms on "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("localhost")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
              _vm._v("/"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t18/09/14 10:00:03 INFO scheduler.TaskSetManager: Finished task 0.0 in stage 0.0 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(TID "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(")")
            ]),
            _vm._v(" in 713 ms on "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("localhost")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
              _vm._v("/"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t18/09/14 10:00:03 INFO scheduler.TaskSchedulerImpl: Removed TaskSet 0.0, whose tasks have all completed, from pool \n\t18/09/14 10:00:03 INFO scheduler.DAGScheduler: ResultStage 0 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v(
                "(collect at /home/fandong/task_script_dir/onedata_spark/c1/wcCount.py:"
              ),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
              _vm._v(")")
            ]),
            _vm._v(
              " finished in 0.764 s\n\t18/09/14 10:00:03 INFO scheduler.DAGScheduler: Job 0 finished: collect at /home/fandong/task_script_dir/onedata_spark/c1/wcCount.py:8, took 1.705299 s\n\t1\n\t4\n\t9\n\t16\n\t25\n\n\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("提交到yarn 集群")]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [
          _vm._v('注意提交前需要修改下代码：去掉.setMaster("local")')
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    # "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" os\n\tfrom pyspark "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" SparkConf,SparkContext;\n\t# os.environ["),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"SPARK_HOME"')]),
          _vm._v("]="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"/Users/fandong/Desktop/spark-2.0.1-bin-hadoop2.7"')
          ]),
          _vm._v("\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" __name__=="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"__main__"')]),
          _vm._v(":\n\t    conf=SparkConf().setAppName("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"square"')]),
          _vm._v(
            ")\n\t    sc=SparkContext(conf=conf)\n\t    numsRDD=sc.parallelize(["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(
            "])\n\t    squared=numsRDD.map(lambda x: x*x).collect()\n\t    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" num in squared:\n\t        print("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"%d"')]),
          _vm._v("%(num))\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [
          _vm._v(
            "由于是这个会使yarn 进行本地模式，去清除提交的spark 任务资源，导致执行时找不到资源报错"
          )
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n\t\t "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("29")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("56")]),
          _vm._v(" INFO yarn.Client: "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Application report "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: ACCEPTED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:29:57 INFO yarn.Client: Application report "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: ACCEPTED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:29:58 INFO yarn.Client: Application report "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: ACCEPTED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:29:59 INFO yarn.Client: Application report "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: ACCEPTED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:30:00 INFO yarn.Client: Application report "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: ACCEPTED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:30:01 INFO yarn.Client: Application report "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: ACCEPTED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:30:02 INFO yarn.Client: Application report "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0002")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(state: FAILED)")
            ]),
            _vm._v(
              "\n\t\t18/09/14 09:30:02 INFO yarn.Client: \n\t\t\t client token: N/A\n\t\t\t diagnostics: Application application_1568424489950_0002 failed 2 times due to AM Container "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(
              " appattempt_1568424489950_0002_000002 exited with  exitCode: 1\n\t\tFailing "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
            _vm._v(
              " attempt.Diagnostics: [2018-09-14 09:30:01.415]Exception from container-launch.\n\t\tContainer id: container_1568424489950_0002_02_000001\n\t\tExit code: 1\n\t\t\n\t\t[2018-09-14 09:30:01.481]Container exited with a non-zero exit code 1. Error file: prelaunch.err.\n\t\tLast 4096 bytes of prelaunch.err :\n\t\tLast 4096 bytes of stderr :\n\t\tSLF4J: Class path contains multiple SLF4J bindings.\n\t\tSLF4J: Found binding in [jar:file:/data/bigData/hadoop-2.9.2/tmp/nm-local-dir/filecache/81/slf4j-log4j12-1.7.16.jar!/org/slf4j/impl/StaticLoggerBinder.class]\n\t\tSLF4J: Found binding in [jar:file:/data/bigData/hadoop-2.9.2/share/hadoop/common/lib/slf4j-log4j12-1.7.25.jar!/org/slf4j/impl/StaticLoggerBinder.class]\n\t\tSLF4J: See http:"
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//www.slf4j.org/codes.html#multiple_bindings for an explanation."
              )
            ]),
            _vm._v(
              "\n\t\tSLF4J: Actual binding is of type [org.slf4j.impl.Log4jLoggerFactory]\n\t\t18/09/14 09:29:59 INFO util.SignalUtils: Registered signal handler "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(
              " TERM\n\t\t18/09/14 09:29:59 INFO util.SignalUtils: Registered signal handler "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(
              " HUP\n\t\t18/09/14 09:29:59 INFO util.SignalUtils: Registered signal handler "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(
              ' INT\n\t\t18/09/14 09:30:00 INFO yarn.ApplicationMaster: Preparing Local resources\n\t\tException in thread "main" java.io.FileNotFoundException: File does not exist: hdfs:'
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//hadoop01.fandong.com:9001/user/root/.sparkStaging/application_1568424489950_0002/__spark_conf__.zip"
              )
            ]),
            _vm._v(
              "\n\t\t\tat org.apache.hadoop.hdfs.DistributedFileSystem$22."
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("doCall")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(DistributedFileSystem.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1309")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t\t\tat org.apache.hadoop.hdfs.DistributedFileSystem$22."
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("doCall")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(DistributedFileSystem.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1301")]),
              _vm._v(")")
            ]),
            _vm._v("\n\t\t\tat org.apache.hadoop.fs.FileSystemLinkResolver."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("resolve")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(FileSystemLinkResolver.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("81")]),
              _vm._v(")")
            ]),
            _vm._v("\n\t\t\tat org.apache.hadoop.hdfs.DistributedFileSystem."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getFileStatus")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(DistributedFileSystem.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1317")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t\t\tat org.apache.spark.deploy.yarn.ApplicationMaster$$anonfun$6."
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("apply")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(ApplicationMaster.scala:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("158")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t\t\tat org.apache.spark.deploy.yarn.ApplicationMaster$$anonfun$6."
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("apply")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(ApplicationMaster.scala:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("155")]),
              _vm._v(")")
            ]),
            _vm._v("\n\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("提交到集群")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    bin/spark-submit     --master yarn \\\n    --deploy-mode cluster \\\n    --driver-memory "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("g \\\n    --executor-memory "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("g \\\n    --executor-cores "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            " \\\n       /home/fandong/task_script_dir/onedata_spark/c1/wcCount.py \n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/pySparkYarn.png",
            alt: "pythn"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("java 程序 ，字符统计")])]),
      _vm._v(" "),
      _c("p", [_vm._v("使用maven 构建")]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    <?xml version="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"1.0"')]),
          _vm._v(" encoding="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"UTF-8"')]),
          _vm._v("?>\n<project xmlns="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"http://maven.apache.org/POM/4.0.0"')
          ]),
          _vm._v("\n         xmlns:xsi="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"http://www.w3.org/2001/XMLSchema-instance"')
          ]),
          _vm._v("\n         xsi:schemaLocation="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"'
            )
          ]),
          _vm._v(">\n    <modelVersion>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.0")]),
          _vm._v(
            ".0</modelVersion>\n\n    <groupId>com.fandog.it.sparkDemo</groupId>\n    <artifactId>sparkQuitStart</artifactId>\n    <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT</version>\n    <properties>\n        <project.build.sourceEncoding>UTF-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            "</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("</project.reporting.outputEncoding>\n        <java.version>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(
            "</java.version>\n\n    </properties>\n\n    <dependencies>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/org.apache.spark/spark-core -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.spark</groupId>\n            <artifactId>spark-core_2.11</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(
            ".1</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <!-- 编译插件 -->\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.6")]),
          _vm._v(
            ".0</version>\n                <configuration>\n                    <source>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v("</source>\n                    <target>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v("</target>\n                    <encoding>UTF-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            "</encoding>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.6")]),
          _vm._v(
            "</version>\n                <configuration>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                        <manifest>\n                            <!-- 可以设置jar包的入口类(可选) -->\n                            <mainClass>com.fandong.it.sparkDemo.WcCount</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(
            "</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("code:")]),
      _vm._v(" "),
      _c("p", [_vm._v("**java 代码提交和一样的问题 **")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("     "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.sparkDemo;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.spark.SparkConf;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.spark.api.java.JavaRDD;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.spark.api.java.JavaSparkContext;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.ArrayList;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.List;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WcCount")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t    "),
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
            _vm._v(" ")
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              '/**\n\t         * 本地调试需要添加\n\t         *  SparkConf sparkConf = new SparkConf().setAppName("WcCount").setMaster("local");\n\t         *  yarn集群上运行去掉setMaster，spark自己的集群不用\n\t         *  SparkConf sparkConf = new SparkConf().setAppName("WcCount")\n\t         */'
            )
          ]),
          _vm._v("\n\t\n\t        SparkConf sparkConf = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkConf().setAppName("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"WcCount"')]),
          _vm._v(").setMaster("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"local"')]),
          _vm._v(");\n\t        JavaSparkContext sc = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " JavaSparkContext(sparkConf);\n\t        List<String> list = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ArrayList<String>();\n\t        list.add("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"hh"')]),
          _vm._v(");\n\t        list.add("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"jjj"')]),
          _vm._v(
            ");\n\t        JavaRDD<String> rdd = sc.parallelize(list);\n\t\n\t        Long count = rdd.count();\n\t\n\t        System.out.println("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"word count ="')
          ]),
          _vm._v(" + count);\n\t    }\n\t}\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("提交命令：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   bin/spark-submit --"),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("com")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("it")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sparkDemo")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WcCount")]),
            _vm._v(" \\\n           /"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("home")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("task_script_dir")
            ]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("onedata_spark")
            ]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jars")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("sparkQuitStart")
            ]),
            _vm._v("-1.0-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SNAPSHOT")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jar")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("with")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("dependencies")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jar")]),
            _vm._v(" \n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("提交到yarn集群：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n     bin/spark-submit --"),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("com")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("it")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sparkDemo")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WcCount")]),
            _vm._v(" \\\n           --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("master")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("yarn")]),
            _vm._v(" \\\n\t    --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deploy")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mode")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("cluster")]),
            _vm._v(" \\\n    --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("driver")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" 4"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("g")]),
            _vm._v(" \\\n    --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("executor")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" 2"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("g")]),
            _vm._v(" \\\n    --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("executor")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("cores")]),
            _vm._v(" 1 \\\n           /"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("home")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("task_script_dir")
            ]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("onedata_spark")
            ]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jars")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("sparkQuitStart")
            ]),
            _vm._v("-1.0-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SNAPSHOT")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jar")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("with")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("dependencies")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jar")]),
            _vm._v(" \n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("scala 提交：")]),
      _vm._v(" "),
      _c("p", [_vm._v("code:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.sparkDemo\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.apache.spark.{SparkConf, SparkContext}\n\t\n\tobject WcCountScala {\n\t  "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("main")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(args: Array[String])")
            ]),
            _vm._v(": Unit ")
          ]),
          _vm._v("= {\n\t     val conf ="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkConf().setAppName("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"WcCount"')]),
          _vm._v(").setMaster("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"local"')]),
          _vm._v(")\n\t     val sc = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkContext(conf)\n\t     val rdd =sc.parallelize(List("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"1"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"3"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"4"')]),
          _vm._v(
            "))\n\t     val count = rdd.count()\n\t     println(count)\n\t  }\n\t}\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("本地执行报错：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("  Exception in thread "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"main"')]),
          _vm._v(
            " java.lang.NoSuchMethodError: scala.Predef$.refArrayOps([Ljava/lang/Object;)Lscala/collection/mutable/ArrayOps;\n\tat org.apache.spark.util.Utils$.getCallSite(Utils.scala:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1410")]),
          _vm._v(
            ")\n\tat org.apache.spark.SparkContext.<init>(SparkContext.scala:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("77")]),
          _vm._v(
            ")\n\tat com.fandong.it.sparkDemo.WcCountScala$.main(WcCountScala.scala:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            ")\n\tat com.fandong.it.sparkDemo.WcCountScala.main(WcCountScala.scala)\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("查阅资料发现是scala的版本不兼容导致")])]),
      _vm._v(" "),
      _c("p", [_vm._v("从官网上下载spark 对应的scala 版本")]),
      _vm._v(" "),
      _c("p", [_vm._v("**同样不是需要把setMaster 去掉 **")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("      bin/spark-submit --"),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("com")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("it")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sparkDemo")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WcCountScala")]),
            _vm._v(" /"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("home")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("task_script_dir")
            ]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("onedata_spark")
            ]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scalaJars")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("sparkQuitStart")
            ]),
            _vm._v("-1.0-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SNAPSHOT")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jar")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("with")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("dependencies")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jar")]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" INFO scheduler.TaskSetManager: Starting task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", localhost, partition "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", PROCESS_LOCAL, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5416")]),
          _vm._v(" bytes)\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" INFO executor.Executor: Running task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(")\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" INFO executor.Executor: Fetching spark:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//182.168.1.125:40620/jars/sparkQuitStart-1.0-SNAPSHOT-jar-with-dependencies.jar with timestamp 1568429178021"
            )
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO client.TransportClientFactory: Successfully created connection to /"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("182.168")]),
          _vm._v(".1.125:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("40620")]),
          _vm._v(" after "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33")]),
          _vm._v(" ms ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" ms spent in bootstraps)\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" INFO util.Utils: Fetching spark:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//182.168.1.125:40620/jars/sparkQuitStart-1.0-SNAPSHOT-jar-with-dependencies.jar to /tmp/spark-2968e53d-aaf7-4277-b3c8-d2daec4ce388/userFiles-b9e7b704-2cec-4c97-9dc1-549f1f0a95b6/fetchFileTemp5407833681200183235.tmp"
            )
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" INFO executor.Executor: Adding file:/tmp/spark-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2968e53")]),
          _vm._v("d-aaf7-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4277")]),
          _vm._v("-b3c8-d2daec4ce388/userFiles-b9e7b704-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("cec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("c97-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9")]),
          _vm._v("dc1-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("549f")]),
          _vm._v("1f0a95b6/sparkQuitStart-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT-jar-with-dependencies.jar to "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("loader")]),
            _vm._v("\n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("executor")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Executor")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Finished")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("task")]),
            _vm._v(" 0.0 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("in")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("stage")]),
            _vm._v(" 0.0 ("),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TID")]),
            _vm._v(" 0). 954 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("bytes")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("result")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sent")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("to")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("driver")]),
            _vm._v("\n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scheduler")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("TaskSetManager")
            ]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Finished")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("task")]),
            _vm._v(" 0.0 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("in")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("stage")]),
            _vm._v(" 0.0 ("),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TID")]),
            _vm._v(" 0) "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("in")]),
            _vm._v(" 327 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ms")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("on")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("localhost")]),
            _vm._v(" (1/1)\n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scheduler")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("TaskSchedulerImpl")
            ]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Removed")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TaskSet")]),
            _vm._v(" 0.0, "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("whose")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("tasks")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("have")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("all")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("completed")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("from")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("pool")]),
            _vm._v(" \n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scheduler")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("DAGScheduler")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ResultStage")]),
            _vm._v(" 0 ("),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("count")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("at")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WcCountScala")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scala")]),
            _vm._v(":10) "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("finished")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("in")]),
            _vm._v(" 0.358 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("s")]),
            _vm._v("\n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scheduler")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("DAGScheduler")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(" 0 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("finished")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("count")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("at")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WcCountScala")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("scala")]),
            _vm._v(":10, "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("took")]),
            _vm._v(" 0.697385 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("s")]),
            _vm._v("\n\t4\n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("spark")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SparkContext")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Invoking")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("stop")]),
            _vm._v("() "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("from")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("shutdown")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hook")]),
            _vm._v("\n\t18/09/14 10:46:18 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("server")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("ServerConnector")
            ]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Stopped")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("ServerConnector")
            ]),
            _vm._v("@38"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("b5c333")])
          ]),
          _vm._v("{HTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v("}{"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("182.168")]),
          _vm._v(".1.125:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4040")]),
          _vm._v("}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("ebea12c{/stages/stage/kill,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1536602f")]),
          _vm._v("{/api,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("25")]),
          _vm._v("ddbbbb{/,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("43")]),
          _vm._v("b4fe18{/"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6e16")]),
          _vm._v("b8b5{/executors/threadDump/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("423e4")]),
          _vm._v("cbb{/executors/threadDump,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("d1f7216{/executors/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("592e843")]),
          _vm._v("a{/executors,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("305f")]),
          _vm._v("031{/environment/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7e242")]),
          _vm._v("b4d{/environment,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68759011")]),
          _vm._v("{/storage/rdd/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler"
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@d")]),
          _vm._v("5ae57e{/storage/rdd,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("318988")]),
          _vm._v("b0{/storage/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("410")]),
          _vm._v("ae9a3{/storage,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("a39fe6a{/stages/pool/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7e985")]),
          _vm._v("ce9{/stages/pool,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("46")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(
            " INFO handler.ContextHandler: Stopped o.s.j.s.ServletContextHandler@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("42")]),
          _vm._v("b64ab8{/stages/stage/json,"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(",UNAVAILABLE}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("本文完。。。")])
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

/***/ "./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md":
/*!*********************************************************!*\
  !*** ./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_spark_1_1_spark_md_vue_type_template_id_f31394f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4& */ "./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_spark_1_1_spark_md_vue_type_template_id_f31394f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_spark_1_1_spark_md_vue_type_template_id_f31394f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4&":
/*!****************************************************************************************!*\
  !*** ./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_1_1_spark_md_vue_type_template_id_f31394f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_基础_1-1_提交代码到spark.md?vue&type=template&id=f31394f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_1_1_spark_md_vue_type_template_id_f31394f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_1_1_spark_md_vue_type_template_id_f31394f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=33339e85.js.map