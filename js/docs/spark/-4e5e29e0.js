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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765& ***!
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
      _c("p", [_vm._v("###Yarn 上的spark 进行性能调优")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", [_vm._v("jar 包的管理及数据本地化性")]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "分布式在于移动计算，而非数据。\n1、移动数据会消耗 磁盘IO 、网络，"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("结论：")]),
      _vm._v(" "),
      _c("p", [_vm._v(":::")]),
      _vm._v(" "),
      _c("pre", [_c("code", [_vm._v("合理设置数据的副本。\n")])]),
      _vm._v(" "),
      _c("p", [_vm._v(":::")]),
      _vm._v(" "),
      _c("p", [_vm._v("性能最优到最差")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v(
              "PROCESS_LOCAL： 进程本地化，jar 和数据在同一个进程中（Executor），数据在Executor的BlockManager 中，性能最好。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "Node_Local: 节点本地化，jar 和数据在同一个节点上，即数据和 jar 不在同一个Executor中，在同一个WORKER中，但不在同一个JVM中，隐含进程中移动数据的开销。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "NO_PREF:数据没有区分位置，任何位置访问都一样，（每个节点上都副本）"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "RACK_LOCAL: 机架本地化，在不同的服务器上，但在相同的机架上，数据通过网络节点之间传输，同一个机架上网络传输速度要优于不同机架。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "ANY： 数据分布不在Executor 计算的节点上，或者不同机架上，性能最差。"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", [_vm._v("yarn 节点缓存清理：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    yarn.nodemanager.localizer.Cache.cleanip.interval-ms\n\n    值默认"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("600000")]),
          _vm._v("即 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("600")]),
          _vm._v("秒\n    \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          {
            attrs: {
              href:
                "https://hadoop.apache.org/docs/stable/hadoop-yarn/hadoop-yarn-common/yarn-default.xml"
            }
          },
          [_vm._v("yarn-default.xml")]
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Spark 配置项的优先级")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "SparkConf 优于 Spark-Submit（Spark-shell）优于 Spark-default.xml"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("---在client 模式下调节可以看出详细的log输出。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 spark-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(".1-bin-hadoop2.7]# bin/spark-submit --"),
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
            _c("span", { staticClass: "hljs-title" }, [_vm._v("secondSort")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("SecondSortDemo")
            ]),
            _vm._v(" --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("master")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("yarn")]),
            _vm._v(" --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deploy")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mode")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("client")]),
            _vm._v(" --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("driver")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" 1"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("g")]),
            _vm._v(" --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("executor")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" 512"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("m")]),
            _vm._v(" --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("executor")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("cores")]),
            _vm._v(" 1 --"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("queue")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("queueA")]),
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
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hdfs")]),
            _vm._v("://"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoop01")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("com")]),
            _vm._v(":9001/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("user")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoopExDemo")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("h01")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("secondSortedSpark")
            ]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("txt")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hdfs")]),
            _vm._v("://"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoop01")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("com")]),
            _vm._v(":9001/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("user")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoopExDemo")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("h01")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("outputScala12")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result: 截取需要的部分")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("08")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" INFO memory.MemoryStore: "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Block broadcast_2_piece0 stored as bytes in "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(estimated size "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("28.0")]),
              _vm._v(" KB, free "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("365.9")]),
              _vm._v(" MB)")
            ]),
            _vm._v(
              "\n\t18/09/22 08:38:06 INFO storage.BlockManagerInfo: Added broadcast_2_piece0 in memory on 182.168.1.125:44794 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(size: "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("28.0")]),
              _vm._v(" KB, free: "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("366.2")]),
              _vm._v(" MB)")
            ]),
            _vm._v(
              "\n\t18/09/22 08:38:06 INFO spark.SparkContext: Created broadcast 2 from broadcast at DAGScheduler.scala:1012\n\t18/09/22 08:38:06 INFO scheduler.DAGScheduler: Submitting 2 missing tasks from ResultStage 1 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(MapPartitionsRDD["),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
              _vm._v("] at saveAsTextFile at SecondSortDemo.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t18/09/22 08:38:06 INFO cluster.YarnScheduler: Adding task set 1.0 with 2 tasks\n\t18/09/22 08:38:06 INFO scheduler.TaskSetManager: Starting task 0.0 in stage 1.0 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(TID "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
              _vm._v(", hadoop01.fandong.com, partition "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(", NODE_LOCAL, "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("5285")]),
              _vm._v(" bytes)")
            ]),
            _vm._v(
              "\n\t18/09/22 08:38:06 INFO scheduler.TaskSetManager: Starting task 1.0 in stage 1.0 "
            ),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(TID "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
              _vm._v(", hadoop01.fandong.com, partition "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
              _vm._v(", NODE_LOCAL, "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("5285")]),
              _vm._v(" bytes)")
            ]),
            _vm._v("\n\t\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("发现运行数据类型为 NODE_LOCAL 节点")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("修改SparkConf 配置进行调试，最终目的是执行方式为PROCESS_LOCAL")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n    conf.set("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Spark.locality.wait"')
          ]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"3s"')]),
          _vm._v(");\n    conf.set("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Spark.locality.wait.node"')
          ]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"3s"')]),
          _vm._v(");\n    conf.set("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Spark.locality.wait.process"')
          ]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"3s"')]),
          _vm._v(");\n    conf.set("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Spark.locality.wait.rack"')
          ]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"3s"')]),
          _vm._v(");\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("目的是需要在process_local 执行，所以在SparkConf配置")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(" conf.set("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Spark.locality.wait.process"')
          ]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"3s"')]),
          _vm._v(");\n "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//当代当前占用的，执行完成，使用")
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("打包后再次执行：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32")]),
          _vm._v(" INFO cluster.YarnScheduler: Adding task set "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" with "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(" tasks\n"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32")]),
          _vm._v(" INFO scheduler.TaskSetManager: Starting task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(", hadoop01.fandong.com, partition "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", PROCESS_LOCAL, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5285")]),
          _vm._v(" bytes)\n"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32")]),
          _vm._v(" INFO scheduler.TaskSetManager: Starting task "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" in stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" (TID "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(", hadoop01.fandong.com, partition "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", PROCESS_LOCAL, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5285")]),
          _vm._v(" bytes)\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v(":::sucess")]),
      _vm._v(" "),
      _c("pre", [
        _c("code", [
          _vm._v(
            "这个需要反复调试，这个也要注意本地化基本提升了，数据执行时间是否相应的缩短了，如果变长了，也是不合理的调试。\nSpark 程序运行在yarn 上可以根据实际情况分配 num-Executors  8 \n executor-cores 5\n Driver-memory 2g\n 等调节。\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v(":::")]),
      _vm._v(" "),
      _c("p", [_vm._v("Yarn 队列资源不足的情况，")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "**\n正常来说，yarn 在yarn 可接受的范围内，yarn 会接受请求的资源，但不会分配内存执行。\n**"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("比如说我启动了一个占用yarn资源很大的applicaiton")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "在同时执行 2个Task，一个占用内存极少，另一个占用的内存很大，这样会导致yarn的可分配资源不足。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "占用资源大task ，就会被yarn接收等待，直到分配到他分配到可执行的资源，再次执行。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("如图：\n"),
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/tiaoyou1.png",
            alt: "t1"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "这样就是需要等到队列前面的任务执行完成，才可执行，或者手动kill 占用内存比较大的task。\n"
          ),
          _c("strong", [
            _vm._v("yarn application -kill application_1569111400105_0004")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n    ^C[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "01 bin]# yarn application -kill application_1569111400105_0004\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("43")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v(" INFO client.RMProxy: Connecting to ResourceManager at /"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(".0.0:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8032")]),
          _vm._v(
            "\n\t\tKilling application application_1569111400105_0004\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("43")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(
            " INFO impl.YarnClientImpl: Killed application application_1569111400105_0004\n\t\t[root"
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 bin]# ./yarn-session.sh \n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("915")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: jobmanager.rpc.address, localhost\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("917")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: jobmanager.rpc.port, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6123")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("917")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: jobmanager.heap.size, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("700")]),
          _vm._v("m\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("917")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: taskmanager.heap.size, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("700")]),
          _vm._v("m\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("918")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: taskmanager.numberOfTaskSlots, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("918")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: parallelism."
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("918")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: rest.port, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8082")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("934")]),
          _vm._v(
            " INFO  org.apache.flink.yarn.cli.FlinkYarnSessionCli                 - Found Yarn properties file under /tmp/.yarn-properties-root.\n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("22")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("47")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("45")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("792")]),
          _vm._v(
            " WARN  org.apache.hadoop.util.NativeCodeLoader                       - Unable to load "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("native")]),
          _vm._v("-hadoop library "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" your p\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/tiaoyou2.png",
            alt: "t2"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("可以看yarn 接收的任务，就可以继续执行了。")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "如果同时提交多个任务，任务会在各自的队列中按照FIFO的原则，一次执行。"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/tiaoyou3.png",
            alt: "t3"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/tiaoyou5.png",
            alt: "t4"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v(
            "另一种极端的情况是，提交的Task 占用的内存超过了yarn集群的可用内存，会提示超出了内存，"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("一般错误都会给出相应的提示。")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("tips：设置"),
        _c("strong", [_vm._v("Spark.YARN.Executor.memoryOverhead")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "     Spark.storage.memoryFraction 的值 *  执行内存,即为过载内存\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("参考了"),
        _c("a", { attrs: { href: "https://www.jianshu.com/p/391f8776e66f" } }, [
          _vm._v("memoryOverhead计算方式")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("yarn-cluster JVM栈 内存溢出")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   Spark.Driver.extraJavaOptions="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"-XX:PermSize=128M --XX:MaxPermSize=256M"')
          ]),
          _vm._v("\n\n")
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

/***/ "./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md":
/*!****************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_spark_3_1_1_md_vue_type_template_id_0bdfe765___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765& */ "./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_spark_3_1_1_md_vue_type_template_id_0bdfe765___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_spark_3_1_1_md_vue_type_template_id_0bdfe765___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_spark_高阶_3-1_性能调优1.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_1_1_md_vue_type_template_id_0bdfe765___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-1_性能调优1.md?vue&type=template&id=0bdfe765&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_1_1_md_vue_type_template_id_0bdfe765___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_1_1_md_vue_type_template_id_0bdfe765___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-4e5e29e0.js.map