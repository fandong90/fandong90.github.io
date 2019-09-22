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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6& ***!
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
      _c(
        "h3",
        { attrs: { id: "spark-%E7%AE%97%E5%AD%90%E8%B0%83%E4%BC%98" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#spark-%E7%AE%97%E5%AD%90%E8%B0%83%E4%BC%98",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" Spark 算子调优")
        ]
      ),
      _vm._v(" "),
      _c("h2", { attrs: { id: "map-%E4%B8%8E-mappartitions" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#map-%E4%B8%8E-mappartitions",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" map 与 mapPartitions")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("map 把所有的元素都映射成一个RDD，")]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "mapPartitions 是把映射函数的参数由RDD的每个元素变成了RDD中每个分区的迭代器。"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "如果频繁的创建对象，mapPartitions 是有优势的，创建对象与分区有关。例如需要从RDMS获取数据，连接池不需要多次创建。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("map source.code")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("     "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Return a new RDD by applying a function to all elements of this RDD.\n   */"
            )
          ]),
          _vm._v(
            "\n  def map[U: ClassTag](f: T => U): RDD[U] = withScope {\n    val cleanF = sc.clean(f)\n    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" MapPartitionsRDD[U, T]("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(", (context, pid, iter) => iter.map(cleanF))\n  }\n\n  "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//ctrl + b")]),
          _vm._v("\n\t  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n\t * An RDD that applies the provided function to every partition of the parent RDD.\n\t */"
            )
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("[spark] "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("MapPartitionsRDD")
            ]),
            _vm._v("["),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("U")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ClassTag")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ClassTag")]),
            _vm._v("](\n\t    "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("var")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("prev")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("RDD")]),
            _vm._v("["),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T")]),
            _vm._v("],\n\t    "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("f")]),
            _vm._v(": ("),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TaskContext")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Int")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Iterator")]),
            _vm._v("["),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("T")]),
            _vm._v("]) ")
          ]),
          _vm._v("=> Iterator[U],  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// (TaskContext, partition index, iterator)")
          ]),
          _vm._v("\n\t    preservesPartitioning: Boolean = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            ")\n\t  extends RDD[U](prev) {\n\t\n\t  override val partitioner = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (preservesPartitioning) firstParent[T].partitioner "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(
            " None\n\t\n\t  override def getPartitions: Array[Partition] = firstParent[T]."
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("partitions\n\t\n\t  override def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("compute")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(split: Partition, context: TaskContext)")
            ]),
            _vm._v(": Iterator[U] ")
          ]),
          _vm._v(
            "=\n\t    f(context, split.index, firstParent[T].iterator(split, context))\n\t\n\t  "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("override def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("clearDependencies")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("super")]),
          _vm._v(".clearDependencies()\n\t    prev = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v("\n\t  }\n\t}\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("mapPartitions")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Return a new RDD by applying a function to each partition of this RDD.\n   *\n   * `preservesPartitioning` indicates whether the input function preserves the partitioner, which\n   * should be `false` unless this is a pair RDD and the input function doesn't modify the keys.\n   */"
            )
          ]),
          _vm._v(
            "\n  def mapPartitions[U: ClassTag](\n      f: Iterator[T] => Iterator[U],\n      preservesPartitioning: Boolean = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            "): RDD[U] = withScope {\n    val cleanedF = sc.clean(f)\n    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" MapPartitionsRDD(\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ",\n      (context: TaskContext, index: Int, iter: Iterator[T]) => cleanedF(iter),\n      preservesPartitioning)\n  }\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("看到注释应该明白了他们之间的不同：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("map:  Return a "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RDD by applying a function to all elements of "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(" RDD.\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("mapPartitions:  Return a "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RDD by applying a function to each partition of "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(" RDD.\n \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("举个粟子：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//定义个map 接收的函数")
          ]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("myFunctionPerElement")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(e: Int)")]),
            _vm._v(": Int ")
          ]),
          _vm._v("={\n    println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"e="')]),
          _vm._v("+e)\n    e*"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n  }\n  \n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//定义mapPartitions 接收的函数")
          ]),
          _vm._v("\n   \n     "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("myFunctionPerPartitions")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(iter: Iterator[Int])")
            ]),
            _vm._v(": Iterator[Int] ")
          ]),
          _vm._v("={\n    println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" run in partitions"')
          ]),
          _vm._v(")\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" res = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" ( e<- iter) yield e*"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n    res\n  }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("可以看出他们的区别一个接收的每个元素，一个接收的是一个迭代器")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("完整的示例：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.sparkDemo.optimizing\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.apache.spark.{SparkConf, SparkContext}\n\t\n\tobject Demo1Scala {\n\t  "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("main")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(args: Array[String])")
            ]),
            _vm._v(": Unit ")
          ]),
          _vm._v("= {\n\t     val conf = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkConf()\n\t     conf.setMaster("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"local"')]),
          _vm._v(")\n\t     conf.setAppName("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"map"')]),
          _vm._v(")\n\t     val sc = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkContext(conf)\n\t     val rdd = sc.parallelize("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" to "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(
            ")\n\t     rdd.map(x=>myFunctionPerElement(x)).collect()\n\t     rdd.mapPartitions(x=>myFunctionPerPartitions(x),"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(").collect()\n\t  }\n\t\n\t  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("myFunctionPerElement")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(e: Int)")]),
            _vm._v(": Int ")
          ]),
          _vm._v("={\n\t    println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"e="')]),
          _vm._v("+e)\n\t    e*"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  }\n\t\n\t  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("myFunctionPerPartitions")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(iter: Iterator[Int])")
            ]),
            _vm._v(": Iterator[Int] ")
          ]),
          _vm._v("={\n\t    println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" run in partitions"')
          ]),
          _vm._v(")\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" res = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" ( e<- iter) yield e*"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t    res\n\t  }\n\t\n\t\n\t}\n\n   \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(" \t <?xml version="),
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
            ".1</version>\n            <!--<scope>provided</scope>-->\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <!-- scala编译插件 -->\n            <!--<plugin>-->\n                <!--<groupId>net.alchim31.maven</groupId>-->\n                <!--<artifactId>scala-maven-plugin</artifactId>-->\n                <!--<version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(
            ".6</version>-->\n                <!--<configuration>-->\n                    <!--<scalaCompatVersion>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.12")]),
          _vm._v(
            "</scalaCompatVersion>-->\n                    <!--<scalaVersion>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.12")]),
          _vm._v(
            ".6</scalaVersion>-->\n                    <!--<encoding>UTF-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            "</encoding>-->\n                <!--</configuration>-->\n                <!--<executions>-->\n                    <!--<execution>-->\n                        <!--<id>compile-scala</id>-->\n                        <!--<phase>compile</phase>-->\n                        <!--<goals>-->\n                            <!--<goal>add-source</goal>-->\n                            <!--<goal>compile</goal>-->\n                        <!--</goals>-->\n                    <!--</execution>-->\n                    <!--<execution>-->\n                        <!--<id>test-compile-scala</id>-->\n                        <!--<phase>test-compile</phase>-->\n                        <!--<goals>-->\n                            <!--<goal>add-source</goal>-->\n                            <!--<goal>testCompile</goal>-->\n                        <!--</goals>-->\n                    <!--</execution>-->\n                <!--</executions>-->\n            <!--</plugin>-->\n\n            <!-- 编译插件 -->\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>"
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
            "</version>\n                <configuration>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                        <!--<manifest>-->\n                            <!--&lt;!&ndash; 可以设置jar包的入口类(可选) &ndash;&gt;-->\n                            <!--<mainClass>com.fandong.it.sparkDemo.WcCountScala</mainClass>-->\n                        <!--</manifest>-->\n                    </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(
            "</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n \t\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n[Stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ":>                                                          ("
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" + "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(") / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("]\n   e="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9")]),
          _vm._v("\n\te="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(
            "\n\t run in partitions\n\t run in partitions\n\t run in partitions\n\t\n\tProcess finished with exit code "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("结果可以看出。")]),
      _vm._v(" "),
      _c("p", [_vm._v("mapPartitionsWithIndex\n多出一个分区索引")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n\t   * Return a new RDD by applying a function to each partition of this RDD, while tracking the index\n\t   * of the original partition.\n\t   *\n\t   * `preservesPartitioning` indicates whether the input function preserves the partitioner, which\n\t   * should be `false` unless this is a pair RDD and the input function doesn't modify the keys.\n\t   */"
            )
          ]),
          _vm._v(
            "\n\t  def mapPartitionsWithIndex[U: ClassTag](\n\t      f: (Int, Iterator[T]) => Iterator[U],\n\t      preservesPartitioning: Boolean = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            "): RDD[U] = withScope {\n\t    val cleanedF = sc.clean(f)\n\t    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" MapPartitionsRDD(\n\t      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ",\n\t      (context: TaskContext, index: Int, iter: Iterator[T]) => cleanedF(index, iter),\n\t      preservesPartitioning)\n\t  }\n\t\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("定义一个")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    \n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("myFunctionIndexPartitions")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(index: Int,iter: Iterator[Int])")
            ]),
            _vm._v(": Iterator[Int]")
          ]),
          _vm._v("={\n     println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"index: "')]),
          _vm._v("+index +"),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" run in partitions"')
          ]),
          _vm._v(")\n     iter\n  }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    index: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" run in partitions\n\tindex: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" run in partitions\n\tindex: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(" run in partitions\n\n")
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

/***/ "./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md":
/*!*******************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_spark_3_2_map_md_vue_type_template_id_194b86f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6& */ "./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_spark_3_2_map_md_vue_type_template_id_194b86f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_spark_3_2_map_md_vue_type_template_id_194b86f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6&":
/*!**************************************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_2_map_md_vue_type_template_id_194b86f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-2_ map算子调优.md?vue&type=template&id=194b86f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_2_map_md_vue_type_template_id_194b86f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_2_map_md_vue_type_template_id_194b86f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-4800cf70.js.map