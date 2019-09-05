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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_flink_基础_1-3_提交job.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846& ***!
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
      _c("h2", { attrs: { id: "flink-%E6%8F%90%E4%BA%A4job" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#flink-%E6%8F%90%E4%BA%A4job",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" flink  提交job")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("在flink 上提交job")])]),
      _vm._v(" "),
      _c("p", [_vm._v("使用examples 上jar单词 计数")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    nc -l "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9002")]),
          _vm._v("\n   \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("输入单词计数")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 bin]# nc -l "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9002")]),
          _vm._v(
            "\n\t\thhhsdf\n\t\tsadfa\n\t\tsdfa\n\t\tsdf\n\t\tasdf\n\t\tsd\n\t\tfasdf\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("这个是建的flink web ui界面")]),
      _vm._v(" "),
      _c("p", [_vm._v("http://hadoop01.fandong.com:8082/#/overview")]),
      _vm._v(" "),
      _c("p", [_vm._v("启动监听端口")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            " \t./bin/flink run examples/streaming/SocketWindowWordCount.jar --port "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9002")]),
          _vm._v("\n \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("可以看到flink web ui 有结果输出。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\thhhsdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tfasdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tsd : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tasdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tsdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tsdfa : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tsadfa : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("自己动手打包单词计数jar包执行")]),
      _vm._v(" "),
      _c("p", [_vm._v("把计数的例子拷贝到程序中，运行结果如下：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\tsnappy-java/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(".2.6/snappy-java-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(".2.6.jar com.fandong.it.demo.SocketWordCount --port "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9002")]),
          _vm._v("\n\tSLF4J: Failed to load "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(' "'),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("org")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("slf4j")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("impl")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("StaticLoggerBinder")
            ]),
            _vm._v('".\n\t'),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SLF4J")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Defaulting")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("to")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("no")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("operation")]),
            _vm._v(" ("),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("NOP")]),
            _vm._v(") "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("logger")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("implementation")
            ]),
            _vm._v("\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SLF4J")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("See")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("http")]),
            _vm._v("://"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("www")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("slf4j")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("org")]),
            _vm._v("/"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("codes")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("html")]),
            _vm._v("#"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("StaticLoggerBinder")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("further")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("details")]),
            _vm._v(".\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sadfas")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("asdf")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("jjjj")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sdfsdf")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("asdfasdf")]),
            _vm._v(" : 1\n\t : 2\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("asdfsf")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("asdfsdf")]),
            _vm._v(" : 2\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sd")]),
            _vm._v(" : 1\n\t : 2\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("asdfasdf")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("s")]),
            _vm._v(" : 1\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("as")]),
            _vm._v(" : 1\n\t\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("本地调试OK，现在打成jar放到flink 上执行")]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml 注意点")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t[INFO] --- maven-jar-plugin:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.4")]),
          _vm._v(":jar ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(
            "-jar) @ flinkQuickStart ---\n\t[INFO] Building jar: /Users/fandong/Desktop/bigData2/flinkQuickStart/target/flinkQuickStart-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT.jar\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] BUILD SUCCESS\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] Total time: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.114")]),
          _vm._v(" s\n\t[INFO] Finished at: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05")]),
          _vm._v("T23:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("45")]),
          _vm._v("+"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("08")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v("\n\t[INFO] Final Memory: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("26")]),
          _vm._v("M/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("206")]),
          _vm._v(
            "M\n\t[INFO] ------------------------------------------------------------------------\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "发现打成的jar包文件很大，可是并没有写那多代码，原因是我把依赖的flink相应的jar打进去了。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("所以我们打包的时候，不需要把flink组件打包进去。")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("依赖的jar "),
        _c("em", [_c("strong", [_vm._v("<scope>provided</scope>")])]),
        _vm._v(" 加上这个。")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t<?xml version="),
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
            ".0</modelVersion>\n\n    <groupId>com.fandong.it.flink</groupId>\n    <artifactId>flinkQuickStart</artifactId>\n    <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT</version>\n    <dependencies>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/org.apache.flink/flink-java -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.flink</groupId>\n            <artifactId>flink-java</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v(
            ".4</version>\n            <scope>provided</scope>\n        </dependency>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/org.apache.flink/flink-streaming-java -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.flink</groupId>\n            <artifactId>flink-streaming-java_2.11</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v(
            ".4</version>\n            <scope>provided</scope>\n            <!--<scope>provided</scope>-->\n        </dependency>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/com.andrebreves/java-tuple -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>com.andrebreves</groupId>\n            <artifactId>java-tuple</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(
            ".0</version>\n            <scope>provided</scope>\n        </dependency>\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/org.apache.bahir/flink-connector-redis -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.bahir</groupId>\n            <artifactId>flink-connector-redis_2.11</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "</version>\n            <scope>provided</scope>\n        </dependency>\n\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//mvnrepository.com/artifact/org.apache.flink/flink-connector-kafka-0.11 -->"
            )
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.flink</groupId>\n            <artifactId>flink-connector-kafka-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.11_2")]),
          _vm._v(".11</artifactId>\n            <version>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v(
            ".4</version>\n            <scope>provided</scope>\n        </dependency>\n\n\n        <!-- https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//mvnrepository.com/artifact/org.apache.kafka/kafka -->")
          ]),
          _vm._v(
            "\n        <dependency>\n            <groupId>org.apache.kafka</groupId>\n            <artifactId>kafka-clients</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.11")]),
          _vm._v(
            ".0.3</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n        <!-- 编译插件 -->\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.6")]),
          _vm._v(
            ".0</version>\n            <configuration>\n                <source>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v("</source>\n                <target>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v("</target>\n                <encoding>UTF-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            "</encoding>\n            </configuration>\n        </plugin>\n\n        <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-assembly-plugin</artifactId>\n        <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.6")]),
          _vm._v(
            "</version>\n        <configuration>\n            <descriptorRefs>\n                <descriptorRef>jar-with-dependencies</descriptorRef>\n            </descriptorRefs>\n            <archive>\n                <manifest>\n                    <!-- 可以设置jar包的入口类(可选) -->\n                    <mainClass>com.fandong.it.demo.SocketWordCount</mainClass>\n                </manifest>\n            </archive>\n        </configuration>\n        <executions>\n            <execution>\n                <id>make-assembly</id>\n                <phase>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(
            "</phase>\n                <goals>\n                    <goal>single</goal>\n                </goals>\n            </execution>\n        </executions>\n     </plugin>\n        </plugins>\n    </build>\n</project>\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   可以看出打出了两个jar 包\n   \n   flinkQuickStart-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT.jar   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33")]),
          _vm._v(" KB\n   \n   flinkQuickStart-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT-jar-with-dependencies.jar  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50.4")]),
          _vm._v(" MB\n     \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("在集群上执行")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\tbin/flink run /opt/flinkJar/flinkQuickStart-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT-jar-with-dependencies.jar --port "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9004")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("结果：")]),
      _vm._v(" "),
      _c("p", [_vm._v("在 taskJobManager 中查看")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\tasdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("\n\tsdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\tsdfa : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tasdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\tsdfa : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tsdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tasdf : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t范冬你好 : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t范冬你好 : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t范冬你好 : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t范冬你好 : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t范冬你好 : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("注意是执行的 jar-with-dependecies.jar 包，是指定了入口的。")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("也可以在web ui 上提交job")]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("在yarn 上执行job")])]),
      _vm._v(" "),
      _c("p", [_vm._v("启动yarn-session.sh  在 flink/bin 目录下")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t./yarn-session.sh  -n  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(" -jm "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1024")]),
          _vm._v(" -tm "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1024")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("启动中发现报错：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tFailing "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(" attempt.Diagnostics: ["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("05.564")]),
          _vm._v("]Container [pid="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14819")]),
          _vm._v(
            ",containerID=container_1566614989388_0001_01_000001]\n\t is running beyond virtual memory limits. \n\t Current usage: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("64.1")]),
          _vm._v(" MB of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" GB physical memory used; "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.2")]),
          _vm._v(" GB of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v(
            " GB virtual memory used. Killing container.\nDump of the process-tree "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" container_1566614989388_0001_01_000001 :\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("//这里注意下，由于在本地使用，搭建的是伪分布式环境。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "   启动时设定的内存不够用，是由于我设置的flink的分配内存大于当前的yarn集群分配的，所以需要关闭yarn的内存检查启动，\n\n修改etc/hadoop/yarn-site.xml\n<property>  \n    <name>yarn.nodemanager.vmem-check-enabled</name>  \n    <value>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            "</value>  \n</property>  \n\n现在使用的是/data/bigData/下的hadoop配置文件。\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("再次提交发现仍然报错，启动成功后，立即失败")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t   AM Container "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " appattempt_1566614989388_0011_000001 exited with exitCode: -"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("103")]),
          _vm._v("\n\t\tFailing "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(" attempt.Diagnostics: ["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("56")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33.075")]),
          _vm._v("]Container [pid="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("29690")]),
          _vm._v(
            ",containerID=container_1566614989388_0011_01_000001] is running beyond virtual memory limits. Current usage: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("237.8")]),
          _vm._v(" MB of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" GB physical memory used; "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.2")]),
          _vm._v(" GB of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v(
            " GB virtual memory used. Killing container.\n\t\tDump of the process-tree "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" container_1566614989388_0011_01_000001 :\n\t\t|- "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("PID PPID PGRPID SESSID CMD_NAME "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("USER_MODE_TIME")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(MILLIS)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SYSTEM_TIME")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(MILLIS)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("VMEM_USAGE")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(BYTES)")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("RSSMEM_USAGE")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(PAGES)")]),
            _vm._v(" FULL_CMD_LINE\n\t\t|- 29690 29688 29690 29690 "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bash)")]),
            _vm._v(
              " 1 0 115900416 308 /bin/bash -c /opt/java/jdk1.8.0_181/bin/java -Xmx424m -Dlog.file"
            )
          ]),
          _vm._v("=/data/bigData/hadoop-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2/logs/userlogs/application_1566614989388_0011/container_1566614989388_0011_01_000001/jobmanager.log -Dlogback.configurationFile=file:logback.xml -Dlog4j.configuration=file:log4j.properties org.apache.flink.yarn.entrypoint.YarnSessionClusterEntrypoint "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("> /data/bigData/hadoop-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2/logs/userlogs/application_1566614989388_0011/container_1566614989388_0011_01_000001/jobmanager.out "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("> /data/bigData/hadoop-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2/logs/userlogs/application_1566614989388_0011/container_1566614989388_0011_01_000001/jobmanager.err\n\t\t|- "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("29704")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("29690")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("29690")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("29690")]),
          _vm._v(" (java) "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("744")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("24")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2292891648")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("60561")]),
          _vm._v(
            " /opt/java/jdk1.8.0_181/bin/java -Xmx424m -Dlog.file=/data/bigData/hadoop-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2/logs/userlogs/application_1566614989388_0011/container_1566614989388_0011_01_000001/jobmanager.log -Dlogback.configurationFile=file:logback.xml -Dlog4j.configuration=file:log4j.properties org.apache.flink.yarn.entrypoint.YarnSessionClusterEntrypoint\n\t\t["
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("56")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33.088")]),
          _vm._v("]Container killed on request. Exit code is "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("143")]),
          _vm._v("\n\t\t["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("56")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33.100")]),
          _vm._v("]Container exited with a non-zero exit code "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("143")]),
          _vm._v(
            ".\n\t\tFor more detailed output, check the application tracking page: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop01.fandong.com:8088/cluster/app/application_1566614989388_0011 Then click on links to logs of each attempt."
            )
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("781")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: jobmanager.rpc.address, localhost\n\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("793")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: jobmanager.rpc.port, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6123")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("793")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: jobmanager.heap.size, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1024")]),
          _vm._v("m\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("793")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: taskmanager.heap.size, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1024")]),
          _vm._v("m\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("794")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: taskmanager.numberOfTaskSlots, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("794")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: parallelism."
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("50")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("795")]),
          _vm._v(
            " INFO  org.apache.flink.configuration.GlobalConfiguration            - Loading configuration property: rest.port, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8082")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("51")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("491")]),
          _vm._v(
            " WARN  org.apache.hadoop.util.NativeCodeLoader                       - Unable to load "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("native")]),
          _vm._v("-hadoop library "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " your platform... using builtin-java classes where applicable\n\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("51")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("545")]),
          _vm._v(
            " INFO  org.apache.flink.runtime.security.modules.HadoopModule        - "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Hadoop user set to "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("root")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(
              "\n\t2018-09-06 01:04:51,622 INFO  org.apache.hadoop.yarn.client.RMProxy                         - Connecting to ResourceManager at /0.0.0.0:8032\n\t2018-09-06 01:04:51,978 WARN  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - Neither the HADOOP_CONF_DIR nor the YARN_CONF_DIR environment variable is set. The Flink YARN Client needs one of these to be set to properly load the Hadoop configuration "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(
              " accessing YARN.\n\t2018-09-06 01:04:52,002 INFO  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - Cluster specification: ClusterSpecification"
            )
          ]),
          _vm._v("{masterMemoryMB="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1024")]),
          _vm._v(", taskManagerMemoryMB="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1024")]),
          _vm._v(", numberTaskManagers="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", slotsPerTaskManager="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("}\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("04")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("52")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("355")]),
          _vm._v(
            " WARN  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("The configuration "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("directory")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'/opt/flink/flink-1.6.4/conf'")
              ]),
              _vm._v(")")
            ]),
            _vm._v(
              " contains both LOG4J and Logback configuration files. Please delete or rename one of them.\n\t2018-09-06 01:04:56,283 INFO  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - Submitting application master application_1567702945827_0002\n\t2018-09-06 01:04:56,303 INFO  org.apache.hadoop.yarn.client.api.impl.YarnClientImpl         - Submitted application application_1567702945827_0002\n\t2018-09-06 01:04:56,303 INFO  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - Waiting "
            ),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(
              " the cluster to be allocated\n\t2018-09-06 01:04:56,305 INFO  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - Deploying cluster, current state ACCEPTED\n\t2018-09-06 01:05:01,882 INFO  org.apache.flink.yarn.AbstractYarnClusterDescriptor           - YARN application has been deployed successfully.\n\t2018-09-06 01:05:02,388 INFO  org.apache.flink.runtime.rest.RestClient                      - Rest client endpoint started.\n\tFlink JobManager is now running on hadoop01.fandong.com:45501 with leader id 00000000-0000-0000-0000-000000000000.\n\tJobManager Web Interface: http:"
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//hadoop01.fandong.com:45501")
            ]),
            _vm._v("\n\tThe Flink Yarn cluster has failed.\n\t\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("后续解决，很晚了。。。。")])
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

/***/ "./src/pages/md/bigData_flink_基础_1-3_提交job.md":
/*!****************************************************!*\
  !*** ./src/pages/md/bigData_flink_基础_1-3_提交job.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_flink_1_3_job_md_vue_type_template_id_b4adb846___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846& */ "./src/pages/md/bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_flink_1_3_job_md_vue_type_template_id_b4adb846___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_flink_1_3_job_md_vue_type_template_id_b4adb846___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_flink_基础_1-3_提交job.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_flink_1_3_job_md_vue_type_template_id_b4adb846___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_flink_基础_1-3_提交job.md?vue&type=template&id=b4adb846&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_flink_1_3_job_md_vue_type_template_id_b4adb846___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_flink_1_3_job_md_vue_type_template_id_b4adb846___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-33c2b55d.js.map