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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/example_algorithms_算法_2-2_TopN模式.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        { attrs: { id: "top-n-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#top-n-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" Top N 设计模式")
        ]
      ),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("Top N 值")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("    按照某个值约定排序，取 Top N个 的值。\n\n")])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "小数据量的Top N 算法，如果内存允许拿到内存在全排序，取N 个即可。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("简单的sql （高级查找）")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\n   SELECT KEY,VALUE FROM  DATA \n   ORDER BY KEY DESC\n   LIMIT BY N\n   \n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "在小数据的情况下是可行，而且数据sql 要求数据结构化，也可以存到半结构化的NO sql 数据库查询。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "单台服务搞定的问题，不在讨论，讨论非常大的数据量下，找出Top N 的数据，如何做呢？"
        )
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("利用hadoop 处理。")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   id, name, value\n\t假设随机生成了"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1000")]),
          _vm._v(
            "万数据 id是有序的，方便我们验证数据的正确性.\n\tvalue 是随机值,\n\n   输入数据示例：\n\n   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", nn, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(", ff, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(", fg, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v("\n\n\n   输出结果：\n\n\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(",nn,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(",fg,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(",ff,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30")]),
          _vm._v("\n   \n   \n\t<?xml version="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"1.0"')]),
          _vm._v(" encoding="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"UTF-8"')]),
          _vm._v("?>\n\t<project xmlns="),
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
              '"http://maven.apache.org/POM/4.0.0 http://\tmaven.apache.org/xsd/maven-4.0.0.xsd"'
            )
          ]),
          _vm._v(">\n    <modelVersion>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.0")]),
          _vm._v(
            ".0</modelVersion>\n\n    <groupId>com.fandong.hadoop</groupId>\n    <artifactId>hadoopEx</artifactId>\n    <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT</version>\n    <dependencies>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/org.apache.hadoop/hadoop-client -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-client</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2</version>\n            <scope>provided</scope>\n        </dependency>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/mysql/mysql-connector-java -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.0")]),
          _vm._v(
            ".17</version>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>"
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
            "</version>\n                <configuration>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                        <manifest>\n                            <!-- 可以设置jar包的入口类(可选) -->\n                            <!--<mainClass>WordCount</mainClass>-->\n                        </manifest>\n                    </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(
            "</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("TopNDriver.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.hadoopAlgorithms.topNPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.conf.Configuration;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.fs.Path;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.NullWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.Text;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Job;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.util.Tool;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.util.ToolRunner;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TopNDriver")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Tool")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(String[] strings)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" Exception ")
          ]),
          _vm._v("{\n\t        Configuration conf = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".getConf();\n\t        conf.set("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"topCount"')]),
          _vm._v(",strings["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "]);\n\t        Job job = Job.getInstance(conf);\n\t        job.setJobName("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Top N Pattern"')
          ]),
          _vm._v(
            ");\n\t        job.setOutputKeyClass(NullWritable.class);\n\t        job.setOutputValueClass(Text.class);\n\t        job.setMapperClass(TopMapper.class);\n\t        job.setReducerClass(TopReducer.class);\n\t        job.setJarByClass(TopNDriver.class);\n\t        FileInputFormat.addInputPath(job,"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Path(strings["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("]));\n\t        FileOutputFormat.setOutputPath(job, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Path(strings["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("]));\n\t\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" job.waitForCompletion("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(") == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(" ? "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setConf")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Configuration configuration)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" Configuration "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getConf")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t        Configuration conf = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Configuration();\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" conf;\n\t    }\n\t\n\t    "),
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
          _vm._v("{\n\t       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" status = ToolRunner.run("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" TopNDriver(), args);\n\t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"status"')]),
          _vm._v("+ status);\n\t    }\n\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("TopNMapper.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.hadoopAlgorithms.topNPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.DoubleWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.LongWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.NullWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.Text;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Mapper;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.io.IOException;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.SortedMap;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.TreeMap;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TopMapper")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Mapper")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("LongWritable")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("NullWritable")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v("> ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" SortedMap<DoubleWritable, Text>  topN = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" TreeMap<>();\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" topCount="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(";\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setup")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Context context)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topCount =context.getConfiguration().getInt("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"topCount"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topCount);\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(LongWritable key, Text value, Context context)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v("{\n\t        String[] arr = value.toString().split("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('","')]),
          _vm._v(");\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("double")]),
          _vm._v(" weight =Double.parseDouble(arr["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("]);\n\t        String catName = arr["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("];\n\t        String id   = arr["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("];\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.put("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" DoubleWritable(weight),"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Text(catName+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"$$$"')]),
          _vm._v("+id+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"$$$"')]),
          _vm._v("+weight));\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.size()> "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topCount){\n\t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.remove("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.firstKey());\n\t        }\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("cleanup")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Context context)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            "(Text val : topN.values()){\n\t            context.write(NullWritable.get(),val);\n\t        }\n\t    }\n\t}\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("TopNReducer.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.hadoopAlgorithms.topNPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.NullWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.Text;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Reducer;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.io.IOException;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.Iterator;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TopReducer")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Reducer")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("NullWritable")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("NullWritable")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v("> ")
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v(
                "(NullWritable key, Iterable<Text> values, Context context)"
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v(
            "{\n\t        Iterator<Text> iterator = values.iterator();\n\t        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v(
            " (iterator.hasNext()){\n\t            Text v = iterator.next();\n\t\n\t            context.write(NullWritable.get(),v);\n\t        }\n\t    }\n\t}\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 hadoopJar]# yarn jar hadoopEx-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT-jar-with-dependencies.jar com.fandong.it.hadoopAlgorithms.topNPattern.TopNDriver "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v(" hdfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop01.fandong.com:9001/user/hadoopExDemo/h01/topN.txt hdfs://hadoop01.fandong.com:9001/user/hadoopExDemo/h01/outputTop"
            )
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("23")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("45")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("03")]),
          _vm._v(" INFO client.RMProxy: Connecting to ResourceManager at /"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(".0.0:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8032")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("23")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("45")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(
            " WARN mapreduce.JobResourceUploader: Hadoop command-line option parsing not performed. Implement the Tool "
          ),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("interface")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("and")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("execute")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("your")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("application")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("with")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ToolRunner")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("to")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("remedy")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("this")]),
            _vm._v(".\n\t18/09/18 23:45:05 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("input")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("FileInputFormat")
            ]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Total")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("input")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("files")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("to")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("process")]),
            _vm._v(" : 1\n\t18/09/18 23:45:05 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("JobSubmitter")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("number")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("splits")]),
            _vm._v(":2\n\t18/09/18 23:45:05 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("Configuration")
            ]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deprecation")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("yarn")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("resourcemanager")
            ]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("system")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("metrics")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("publisher")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("enabled")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("is")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deprecated")]),
            _vm._v(". "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Instead")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("use")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("yarn")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("system")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("metrics")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("publisher")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("enabled")]),
            _vm._v("\n\t18/09/18 23:45:05 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("JobSubmitter")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Submitting")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("tokens")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("job_1568424489950_0032")
            ]),
            _vm._v("\n\t18/09/18 23:45:06 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("impl")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("YarnClientImpl")
            ]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Submitted")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("application")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0032")
            ]),
            _vm._v("\n\t18/09/18 23:45:06 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("The")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("url")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("to")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("track")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("the")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("http")]),
            _vm._v("://"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoop01")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("com")]),
            _vm._v(":8088/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("proxy")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("application_1568424489950_0032")
            ]),
            _vm._v("/\n\t18/09/18 23:45:06 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Running")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("job_1568424489950_0032")
            ]),
            _vm._v("\n\t18/09/18 23:45:16 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("job_1568424489950_0032")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("running")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("in")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("uber")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mode")]),
            _vm._v(" : "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("false")]),
            _vm._v("\n\t18/09/18 23:45:16 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 0% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 0%\n\t18/09/18 23:45:32 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 50% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 0%\n\t18/09/18 23:45:35 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 81% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 0%\n\t18/09/18 23:45:36 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 100% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 0%\n\t18/09/18 23:45:48 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 100% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 100%\n\t18/09/18 23:45:49 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("job_1568424489950_0032")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("completed")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("successfully")]),
            _vm._v("\n\t18/09/18 23:45:50 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Counters")]),
            _vm._v(": 49\n\t\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("File")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("System")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Counters")]),
            _vm._v("\n\t\t\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("FILE")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Number")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("of")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("bytes")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("read")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1326")]),
          _vm._v("\n\t\t\tFILE: Number of bytes written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("599030")]),
          _vm._v("\n\t\t\tFILE: Number of read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tFILE: Number of large read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tFILE: Number of write operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tHDFS: Number of bytes read="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("256672000")]),
          _vm._v("\n\t\t\tHDFS: Number of bytes written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1240")]),
          _vm._v("\n\t\t\tHDFS: Number of read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9")]),
          _vm._v("\n\t\t\tHDFS: Number of large read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tHDFS: Number of write operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t\tJob Counters \n\t\t\tLaunched map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t\t\tLaunched reduce tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t\tData-local map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all maps in occupied "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("slots")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30518")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all reduces in occupied "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("slots")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10705")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all map "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("tasks")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30518")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all reduce "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("tasks")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10705")]),
          _vm._v("\n\t\t\tTotal vcore-milliseconds taken by all map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30518")]),
          _vm._v("\n\t\t\tTotal vcore-milliseconds taken by all reduce tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10705")]),
          _vm._v("\n\t\t\tTotal megabyte-milliseconds taken by all map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("31250432")]),
          _vm._v(
            "\n\t\t\tTotal megabyte-milliseconds taken by all reduce tasks="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10961820")]),
          _vm._v("\n\t\tMap-Reduce Framework\n\t\t\tMap input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9999999")]),
          _vm._v("\n\t\t\tMap output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("40")]),
          _vm._v("\n\t\t\tMap output bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1240")]),
          _vm._v("\n\t\t\tMap output materialized bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1332")]),
          _vm._v("\n\t\t\tInput split bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("256")]),
          _vm._v("\n\t\t\tCombine input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tCombine output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tReduce input groups="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t\tReduce shuffle bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1332")]),
          _vm._v("\n\t\t\tReduce input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("40")]),
          _vm._v("\n\t\t\tReduce output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("40")]),
          _vm._v("\n\t\t\tSpilled Records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("80")]),
          _vm._v("\n\t\t\tShuffled Maps ="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t\t\tFailed Shuffles="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tMerged Map outputs="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("GC time "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("elapsed")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("775")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("CPU time "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("spent")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16850")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Physical "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")]),
            _vm._v(" snapshot")
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("752467968")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Virtual "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")]),
            _vm._v(" snapshot")
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6375104512")]),
          _vm._v("\n\t\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total committed heap "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("usage")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512753664")]),
          _vm._v("\n\t\tShuffle Errors\n\t\t\tBAD_ID="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tCONNECTION="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tIO_ERROR="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tWRONG_LENGTH="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tWRONG_MAP="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\t\tWRONG_REDUCE="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tFile Input Format Counters \n\t\t\tBytes Read="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("256671744")]),
          _vm._v("\n\t\tFile Output Format Counters \n\t\t\tBytes Written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1240")]),
          _vm._v("\n\tstatus0\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("在集群上运行成功。")]),
      _vm._v(" "),
      _c("p", [_vm._v("result：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\tcat999999$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8544315")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999999.0")]),
          _vm._v("\n\tcat999998$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9710048")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999998.0")]),
          _vm._v("\n\tcat999997$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9615565")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999997.0")]),
          _vm._v("\n\tcat999996$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9669679")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999996.0")]),
          _vm._v("\n\tcat999995$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9747559")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999995.0")]),
          _vm._v("\n\tcat999994$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8756323")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999994.0")]),
          _vm._v("\n\tcat999993$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7426816")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999993.0")]),
          _vm._v("\n\tcat999992$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8770181")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999992.0")]),
          _vm._v("\n\tcat999991$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8580771")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999991.0")]),
          _vm._v("\n\tcat999990$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9752059")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999990.0")]),
          _vm._v("\n\tcat999989$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9778523")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999989.0")]),
          _vm._v("\n\tcat999988$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9408715")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999988.0")]),
          _vm._v("\n\tcat999987$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9235372")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999987.0")]),
          _vm._v("\n\tcat999986$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9703869")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999986.0")]),
          _vm._v("\n\tcat999985$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9888679")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999985.0")]),
          _vm._v("\n\tcat999984$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8278513")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999984.0")]),
          _vm._v("\n\tcat999983$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8355971")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999983.0")]),
          _vm._v("\n\tcat999982$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7719498")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999982.0")]),
          _vm._v("\n\tcat999981$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9924363")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999981.0")]),
          _vm._v("\n\tcat999980$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9160118")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999980.0")]),
          _vm._v("\n\tcat999999$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5063346")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999999.0")]),
          _vm._v("\n\tcat999998$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5015828")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999998.0")]),
          _vm._v("\n\tcat999997$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4368532")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999997.0")]),
          _vm._v("\n\tcat999996$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3945715")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999996.0")]),
          _vm._v("\n\tcat999995$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5115041")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999995.0")]),
          _vm._v("\n\tcat999994$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3880679")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999994.0")]),
          _vm._v("\n\tcat999993$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4954026")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999993.0")]),
          _vm._v("\n\tcat999992$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5087376")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999992.0")]),
          _vm._v("\n\tcat999991$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3020747")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999991.0")]),
          _vm._v("\n\tcat999990$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5003483")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999990.0")]),
          _vm._v("\n\tcat999989$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3834296")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999989.0")]),
          _vm._v("\n\tcat999988$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5087623")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999988.0")]),
          _vm._v("\n\tcat999987$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4143256")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999987.0")]),
          _vm._v("\n\tcat999986$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4503164")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999986.0")]),
          _vm._v("\n\tcat999984$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4220217")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999984.0")]),
          _vm._v("\n\tcat999983$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4220087")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999983.0")]),
          _vm._v("\n\tcat999982$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3114093")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999982.0")]),
          _vm._v("\n\tcat999981$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4830897")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999981.0")]),
          _vm._v("\n\tcat999980$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2078143")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999980.0")]),
          _vm._v("\n\tcat999979$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3870480")]),
          _vm._v("$$$"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999979.0")]),
          _vm._v("\n\n   \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("发现结果是不对，发现在reduce阶段需要在做一次筛选。")]),
      _vm._v(" "),
      _c("p", [_vm._v("TopNReducer.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.hadoopAlgorithms.topNPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.NullWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.Text;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Reducer;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.io.IOException;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.Iterator;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.SortedMap;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.TreeMap;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("TopReducer")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Reducer")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("NullWritable")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("NullWritable")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v("> ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" topCount ="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(";\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" SortedMap<Double,Text> topN = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" TreeMap<>();\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setup")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Context context)")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topCount = context.getConfiguration().getInt("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"topCount"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topCount);\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v(
                "(NullWritable key, Iterable<Text> values, Context context)"
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v(
            "{\n\t        Iterator<Text> iterator = values.iterator();\n\t        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v(
            " (iterator.hasNext()){\n\t            Text v = iterator.next();\n\t            String[] split = v.toString().split("
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('","')]),
          _vm._v(");\n\t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.put(Integer.parseInt(split["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("]),"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Text(v.toString()));\t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.size()>"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topCount){\n\t                "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".topN.remove("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".topN.firstKey());\n\t            }\n\t        }\n\t\n\t        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v("(Text v: "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            ".topN.values()){\n\t            context.write(NullWritable.get(),v);\n\t        }\n\t    }\n\t}\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("再次在集群上执行；")]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2078143")]),
          _vm._v(",cat999980,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999980")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4830897")]),
          _vm._v(",cat999981,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999981")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3114093")]),
          _vm._v(",cat999982,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999982")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4220087")]),
          _vm._v(",cat999983,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999983")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4220217")]),
          _vm._v(",cat999984,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999984")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9888679")]),
          _vm._v(",cat999985,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999985")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4503164")]),
          _vm._v(",cat999986,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999986")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4143256")]),
          _vm._v(",cat999987,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999987")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5087623")]),
          _vm._v(",cat999988,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999988")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3834296")]),
          _vm._v(",cat999989,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999989")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5003483")]),
          _vm._v(",cat999990,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999990")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3020747")]),
          _vm._v(",cat999991,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999991")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5087376")]),
          _vm._v(",cat999992,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999992")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4954026")]),
          _vm._v(",cat999993,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999993")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3880679")]),
          _vm._v(",cat999994,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999994")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5115041")]),
          _vm._v(",cat999995,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999995")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3945715")]),
          _vm._v(",cat999996,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999996")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4368532")]),
          _vm._v(",cat999997,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999997")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5015828")]),
          _vm._v(",cat999998,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999998")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5063346")]),
          _vm._v(",cat999999,"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("999999")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("yarn 执行")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   yarn jar hadoopEx-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT-jar-with-dependencies.jar \n   com.fandong.it.hadoopAlgorithms.topNPattern.TopNDriver "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v(" \n   hdfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop01.fandong.com:9001/user/hadoopExDemo/h01/topN.txt "
            )
          ]),
          _vm._v("\n   hdfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop01.fandong.com:9001/user/hadoopExDemo/h01/outputTop1 queue queueA"
            )
          ]),
          _vm._v("\n   \n\n")
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

/***/ "./src/pages/md/example_algorithms_算法_2-2_TopN模式.md":
/*!**********************************************************!*\
  !*** ./src/pages/md/example_algorithms_算法_2-2_TopN模式.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_algorithms_2_2_TopN_md_vue_type_template_id_7099532f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f& */ "./src/pages/md/example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _example_algorithms_2_2_TopN_md_vue_type_template_id_7099532f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _example_algorithms_2_2_TopN_md_vue_type_template_id_7099532f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/example_algorithms_算法_2-2_TopN模式.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f&":
/*!*****************************************************************************************!*\
  !*** ./src/pages/md/example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_algorithms_2_2_TopN_md_vue_type_template_id_7099532f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/example_algorithms_算法_2-2_TopN模式.md?vue&type=template&id=7099532f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_algorithms_2_2_TopN_md_vue_type_template_id_7099532f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_algorithms_2_2_TopN_md_vue_type_template_id_7099532f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-55f72073.js.map