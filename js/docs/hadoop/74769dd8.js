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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
            id: "%E5%90%91yarn%E6%8F%90%E4%BA%A4mapreduce%E4%BB%BB%E5%8A%A1"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%90%91yarn%E6%8F%90%E4%BA%A4mapreduce%E4%BB%BB%E5%8A%A1",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 向yarn提交mapReduce任务")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [
            _vm._v(
              "只是展示基本的任务提交操作，为后续的写mapreduce 程序打下基础，为了方便，我copy 了官网的\nwordCount 程序。"
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("本机使用的hadoop2.9.2 版本")]),
          _vm._v(" "),
          _c("p", [_vm._v("pom.xml 文件如下：")])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("     <?xml version="),
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
            ".2</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>"
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
            "</version>\n                <configuration>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                        <manifest>\n                            <!-- 可以设置jar包的入口类(可选) -->\n                            <mainClass>WordCount</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(
            "</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n  \n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("tips:")]),
      _vm._v(" "),
      _c("pre", [
        _c("code", [
          _vm._v(
            "hadoop集群有的文件，就不要打包到hadoop了，所以在使用加上<scope>provided</scope>\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\t<dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-client</artifactId>\n        <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2</version>\n        <scope>provided</scope>\n    </dependency>\n\t\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("code 代码如下：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.io.IOException;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.StringTokenizer;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.conf.Configuration;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.fs.Path;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.IntWritable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.io.Text;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Job;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Mapper;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.Reducer;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\t\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("WordCount")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("TokenizerMapper")
            ]),
            _vm._v("\n\t            "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Mapper")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Object")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IntWritable")]),
            _vm._v(">")
          ]),
          _vm._v("{\n\t\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" IntWritable one = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" IntWritable("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(");\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" Text word = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Text();\n\t\n\t        "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Object key, Text value, Context context\n\t        )")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v("{\n\t            StringTokenizer itr = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" StringTokenizer(value.toString());\n\t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v(
            " (itr.hasMoreTokens()) {\n\t                word.set(itr.nextToken());\n\t                context.write(word, one);\n\t            }\n\t        }\n\t    }\n\t\n\t    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("IntSumReducer")
            ]),
            _vm._v("\n\t            "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Reducer")]),
            _vm._v("<"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(","),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IntWritable")]),
            _vm._v(","),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Text")]),
            _vm._v(","),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IntWritable")]),
            _vm._v("> ")
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" IntWritable result = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" IntWritable();\n\t\n\t        "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v(
                "(Text key, Iterable<IntWritable> values,\n\t                           Context context\n\t        )"
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("throws")]),
            _vm._v(" IOException, InterruptedException ")
          ]),
          _vm._v("{\n\t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" sum = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n\t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " (IntWritable val : values) {\n\t                sum += val.get();\n\t            }\n\t            result.set(sum);\n\t            context.write(key, result);\n\t        }\n\t    }\n\t\n\t    "
          ),
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
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              '//System.setProperty("HADOOP_HOME","/Users/fandong/Desktop");'
            )
          ]),
          _vm._v("\n\t\n\t        Configuration conf = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Configuration();\n\t        conf.set("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"fs.default.name"')
          ]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"hdfs://hadoop01.fandong.com:9001"')
          ]),
          _vm._v(");\n\t        Job job = Job.getInstance(conf, "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"word count"')]),
          _vm._v(
            ");\n\t        job.setJarByClass(WordCount.class);\n\t        job.setMapperClass(TokenizerMapper.class);\n\t        job.setCombinerClass(IntSumReducer.class);\n\t        job.setReducerClass(IntSumReducer.class);\n\t        job.setOutputKeyClass(Text.class);\n\t        job.setOutputValueClass(IntWritable.class);\n\t        FileInputFormat.addInputPath(job, "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Path(args["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("]));\n\t        FileOutputFormat.setOutputPath(job, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Path(args["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("]));\n\t        System.exit(job.waitForCompletion("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(") ? "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(");\n\t    }\n\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("注意入参是程序执行的传入的。")]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/hadoopJob1.png",
            alt: "args"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("首先在本地执行，看job是否OK。")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("注意在本地验证的时候要把pom.xml 文件中的"),
        _vm._v(
          " 注释掉。\n这个表示编译、测试阶段使用，使用的jar在运行的平台已经存在了，就没有必要再把打包到jar中。"
        )
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\n/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/bin/java "
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '"-javaagent:/Applications/IntelliJ IDEA CE.app/Contents/lib/idea_rt.jar=62353:/Applications/IntelliJ IDEA CE.app/Contents/bin"'
            )
          ]),
          _vm._v(" -Dfile.encoding=UTF-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            " -classpath /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/charsets.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/deploy.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/cldrdata.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/dnsns.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/jaccess.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/jfxrt.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/localedata.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/nashorn.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/sunec.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/sunjce_provider.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/sunpkcs11.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/ext/zipfs.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/javaws.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jce.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jfr.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jfxswt.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/jsse.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/management-agent.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/plugin.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/resources.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/jre/lib/rt.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/ant-javafx.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/dt.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/javafx-mx.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/jconsole.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/packager.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/sa-jdi.jar:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home/lib/tools.jar:/Users/fandong/Desktop/SpringBootWp/hadoopEx/target/classes:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-client/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-client-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-common-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/com/google/guava/guava/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11.0")]),
          _vm._v(".2/guava-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11.0")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/commons-cli/commons-cli/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.2")]),
          _vm._v("/commons-cli-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.2")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/apache/commons/commons-math3/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(".1/commons-math3-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(".1.jar:/Users/fandong/.m2/repository/xmlenc/xmlenc/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.52")]),
          _vm._v("/xmlenc-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.52")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/apache/httpcomponents/httpclient/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.5")]),
          _vm._v(".2/httpclient-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.5")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/httpcomponents/httpcore/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.4")]),
          _vm._v(".4/httpcore-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.4")]),
          _vm._v(
            ".4.jar:/Users/fandong/.m2/repository/commons-codec/commons-codec/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.4")]),
          _vm._v("/commons-codec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.4")]),
          _vm._v(".jar:/Users/fandong/.m2/repository/commons-io/commons-io/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.4")]),
          _vm._v("/commons-io-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.4")]),
          _vm._v(".jar:/Users/fandong/.m2/repository/commons-net/commons-net/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v("/commons-net-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/commons-collections/commons-collections/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.2")]),
          _vm._v(".2/commons-collections-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.2")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/mortbay/jetty/jetty-sslengine/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.1")]),
          _vm._v(".26/jetty-sslengine-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.1")]),
          _vm._v(
            ".26.jar:/Users/fandong/.m2/repository/javax/servlet/jsp/jsp-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v("/jsp-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/commons-logging/commons-logging/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(".3/commons-logging-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(".3.jar:/Users/fandong/.m2/repository/log4j/log4j/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.2")]),
          _vm._v(".17/log4j-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.2")]),
          _vm._v(
            ".17.jar:/Users/fandong/.m2/repository/commons-lang/commons-lang/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.6")]),
          _vm._v("/commons-lang-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.6")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/commons-configuration/commons-configuration/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v("/commons-configuration-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/commons-digester/commons-digester/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v("/commons-digester-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/commons-beanutils/commons-beanutils/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(".0/commons-beanutils-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(
            ".0.jar:/Users/fandong/.m2/repository/commons-beanutils/commons-beanutils-core/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(".0/commons-beanutils-core-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(
            ".0.jar:/Users/fandong/.m2/repository/org/apache/commons/commons-lang3/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.4")]),
          _vm._v("/commons-lang3-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.4")]),
          _vm._v(".jar:/Users/fandong/.m2/repository/org/slf4j/slf4j-api/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(".25/slf4j-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(
            ".25.jar:/Users/fandong/.m2/repository/org/slf4j/slf4j-log4j12/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(".25/slf4j-log4j12-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(
            ".25.jar:/Users/fandong/.m2/repository/org/codehaus/jackson/jackson-core-asl/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(".13/jackson-core-asl-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(
            ".13.jar:/Users/fandong/.m2/repository/org/codehaus/jackson/jackson-mapper-asl/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(".13/jackson-mapper-asl-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(".13.jar:/Users/fandong/.m2/repository/org/apache/avro/avro/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(".7/avro-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.7")]),
          _vm._v(
            ".7.jar:/Users/fandong/.m2/repository/com/thoughtworks/paranamer/paranamer/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.3")]),
          _vm._v("/paranamer-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.3")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/xerial/snappy/snappy-java/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(".5/snappy-java-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            ".5.jar:/Users/fandong/.m2/repository/com/google/protobuf/protobuf-java/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.5")]),
          _vm._v(".0/protobuf-java-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.5")]),
          _vm._v(
            ".0.jar:/Users/fandong/.m2/repository/com/google/code/gson/gson/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.2")]),
          _vm._v(".4/gson-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.2")]),
          _vm._v(
            ".4.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-auth/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-auth-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/com/nimbusds/nimbus-jose-jwt/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.41")]),
          _vm._v(".1/nimbus-jose-jwt-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.41")]),
          _vm._v(
            ".1.jar:/Users/fandong/.m2/repository/com/github/stephenc/jcip/jcip-annotations/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("/jcip-annotations-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(".jar:/Users/fandong/.m2/repository/net/minidev/json-smart/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.3")]),
          _vm._v("/json-smart-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.3")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/net/minidev/accessors-smart/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.2")]),
          _vm._v("/accessors-smart-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.2")]),
          _vm._v(".jar:/Users/fandong/.m2/repository/org/ow2/asm/asm/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5.0")]),
          _vm._v(".4/asm-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5.0")]),
          _vm._v(
            ".4.jar:/Users/fandong/.m2/repository/org/apache/directory/server/apacheds-kerberos-codec/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(".0-M15/apacheds-kerberos-codec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(
            ".0-M15.jar:/Users/fandong/.m2/repository/org/apache/directory/server/apacheds-i18n/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(".0-M15/apacheds-i18n-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.0")]),
          _vm._v(
            ".0-M15.jar:/Users/fandong/.m2/repository/org/apache/directory/api/api-asn1-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(".0-M20/api-asn1-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            ".0-M20.jar:/Users/fandong/.m2/repository/org/apache/directory/api/api-util/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(".0-M20/api-util-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            ".0-M20.jar:/Users/fandong/.m2/repository/org/apache/curator/curator-framework/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".1/curator-framework-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".1.jar:/Users/fandong/.m2/repository/org/apache/curator/curator-client/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".1/curator-client-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".1.jar:/Users/fandong/.m2/repository/org/apache/curator/curator-recipes/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".1/curator-recipes-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".1.jar:/Users/fandong/.m2/repository/com/google/code/findbugs/jsr305/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.0")]),
          _vm._v(".0/jsr305-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.0")]),
          _vm._v(
            ".0.jar:/Users/fandong/.m2/repository/org/apache/htrace/htrace-core4/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.1")]),
          _vm._v(".0-incubating/htrace-core4-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.1")]),
          _vm._v(
            ".0-incubating.jar:/Users/fandong/.m2/repository/org/apache/zookeeper/zookeeper/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.4")]),
          _vm._v(".6/zookeeper-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.4")]),
          _vm._v(".6.jar:/Users/fandong/.m2/repository/io/netty/netty/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.7")]),
          _vm._v(".0.Final/netty-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.7")]),
          _vm._v(
            ".0.Final.jar:/Users/fandong/.m2/repository/org/apache/commons/commons-compress/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.4")]),
          _vm._v(".1/commons-compress-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.4")]),
          _vm._v(".1.jar:/Users/fandong/.m2/repository/org/tukaani/xz/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("/xz-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/codehaus/woodstox/stax2-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(".4/stax2-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(
            ".4.jar:/Users/fandong/.m2/repository/com/fasterxml/woodstox/woodstox-core/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5.0")]),
          _vm._v(".3/woodstox-core-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5.0")]),
          _vm._v(
            ".3.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-hdfs-client/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-hdfs-client-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/com/squareup/okhttp/okhttp/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".5/okhttp-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".5.jar:/Users/fandong/.m2/repository/com/squareup/okio/okio/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v(".0/okio-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.6")]),
          _vm._v(
            ".0.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-mapreduce-client-app/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-mapreduce-client-app-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-mapreduce-client-common/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-mapreduce-client-common-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-mapreduce-client-shuffle/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-mapreduce-client-shuffle-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-yarn-server-common/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-yarn-server-common-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-yarn-registry/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-yarn-registry-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/geronimo/specs/geronimo-jcache_1.0_spec/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-alpha-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("/geronimo-jcache_1.0_spec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-alpha-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(".jar:/Users/fandong/.m2/repository/org/ehcache/ehcache/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.3")]),
          _vm._v(".1/ehcache-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.3")]),
          _vm._v(
            ".1.jar:/Users/fandong/.m2/repository/com/zaxxer/HikariCP-java7/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.4")]),
          _vm._v(".12/HikariCP-java7-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.4")]),
          _vm._v(
            ".12.jar:/Users/fandong/.m2/repository/com/microsoft/sqlserver/mssql-jdbc/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.2")]),
          _vm._v(".1.jre7/mssql-jdbc-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.2")]),
          _vm._v(
            ".1.jre7.jar:/Users/fandong/.m2/repository/org/fusesource/leveldbjni/leveldbjni-all/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v("/leveldbjni-all-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-yarn-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-yarn-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/javax/xml/bind/jaxb-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.2")]),
          _vm._v(".2/jaxb-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.2")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/javax/xml/stream/stax-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("/stax-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/javax/activation/activation/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v("/activation-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-mapreduce-client-core/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-mapreduce-client-core-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-yarn-client/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-yarn-client-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-yarn-common/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-yarn-common-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/javax/servlet/servlet-api/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.5")]),
          _vm._v("/servlet-api-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.5")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/mortbay/jetty/jetty-util/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.1")]),
          _vm._v(".26/jetty-util-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.1")]),
          _vm._v(
            ".26.jar:/Users/fandong/.m2/repository/com/sun/jersey/jersey-core/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v("/jersey-core-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/com/sun/jersey/jersey-client/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v("/jersey-client-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(
            ".jar:/Users/fandong/.m2/repository/org/codehaus/jackson/jackson-jaxrs/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(".13/jackson-jaxrs-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(
            ".13.jar:/Users/fandong/.m2/repository/org/codehaus/jackson/jackson-xc/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(".13/jackson-xc-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.9")]),
          _vm._v(
            ".13.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-mapreduce-client-jobclient/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-mapreduce-client-jobclient-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar:/Users/fandong/.m2/repository/org/apache/hadoop/hadoop-annotations/"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(".2/hadoop-annotations-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.9")]),
          _vm._v(
            ".2.jar WordCount /user/hadoopExDemo/h01/boss-category.txt /user/hadoopExDemo/h01/output4\n INFO - fs."
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(
            ".name is deprecated. Instead, use fs.defaultFS\nDEBUG - field org.apache.hadoop.metrics2.lib.MutableRate org.apache.hadoop.security.UserGroupInformation$UgiMetrics.loginSuccess with annotation "
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@org")]),
          _vm._v(
            ".apache.hadoop.metrics2.annotation.Metric(sampleName=Ops, about=, always="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(", type=DEFAULT, value=["),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Rate of successful kerberos logins and "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("latency")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(milliseconds)")
            ]),
            _vm._v("], valueName")
          ]),
          _vm._v(
            "=Time)\nDEBUG - field org.apache.hadoop.metrics2.lib.MutableRate org.apache.hadoop.security.UserGroupInformation$UgiMetrics.loginFailure with annotation "
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@org")]),
          _vm._v(
            ".apache.hadoop.metrics2.annotation.Metric(sampleName=Ops, about=, always="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(", type=DEFAULT, value=["),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Rate of failed kerberos logins and "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("latency")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(milliseconds)")
            ]),
            _vm._v("], valueName")
          ]),
          _vm._v(
            "=Time)\nDEBUG - field org.apache.hadoop.metrics2.lib.MutableRate org.apache.hadoop.security.UserGroupInformation$UgiMetrics.getGroups with annotation "
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@org")]),
          _vm._v(
            ".apache.hadoop.metrics2.annotation.Metric(sampleName=Ops, about=, always="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            ", type=DEFAULT, value=[GetGroups], valueName=Time)\nDEBUG - field "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(
            " org.apache.hadoop.metrics2.lib.MutableGaugeLong org.apache.hadoop.security.UserGroupInformation$UgiMetrics.renewalFailuresTotal with annotation "
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@org")]),
          _vm._v(
            ".apache.hadoop.metrics2.annotation.Metric(sampleName=Ops, about=, always="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            ", type=DEFAULT, value=[Renewal failures since startup], valueName=Time)\nDEBUG - field "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(
            " org.apache.hadoop.metrics2.lib.MutableGaugeInt org.apache.hadoop.security.UserGroupInformation$UgiMetrics.renewalFailures with annotation "
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@org")]),
          _vm._v(
            ".apache.hadoop.metrics2.annotation.Metric(sampleName=Ops, about=, always="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            ", type=DEFAULT, value=[Renewal failures since last successful login], valueName=Time)\nDEBUG - UgiMetrics, User and group related metrics\nDEBUG - Setting hadoop.security.token.service.use_ip to "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(
            "\nDEBUG - Failed to detect a valid hadoop home directory\njava.io.FileNotFoundException: HADOOP_HOME and hadoop.home.dir are unset.\n\tat org.apache.hadoop.util.Shell.checkHadoopHomeInner(Shell.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("454")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.util.Shell.checkHadoopHome(Shell.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("425")]),
          _vm._v(")\n\tat org.apache.hadoop.util.Shell.<clinit>(Shell.java:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("502")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.util.StringUtils.<clinit>(StringUtils.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("78")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.conf.Configuration.getBoolean(Configuration.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1567")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.SecurityUtil.setConfigurationInternal(SecurityUtil.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("101")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.SecurityUtil.<clinit>(SecurityUtil.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("85")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.UserGroupInformation.initialize(UserGroupInformation.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("306")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.UserGroupInformation.ensureInitialized(UserGroupInformation.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("294")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.UserGroupInformation.loginUserFromSubject(UserGroupInformation.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("854")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.UserGroupInformation.getLoginUser(UserGroupInformation.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("824")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.security.UserGroupInformation.getCurrentUser(UserGroupInformation.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("693")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.mapreduce.task.JobContextImpl.<init>(JobContextImpl.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("72")]),
          _vm._v(")\n\tat org.apache.hadoop.mapreduce.Job.<init>(Job.java:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("150")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.mapreduce.Job.getInstance(Job.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("193")]),
          _vm._v(
            ")\n\tat org.apache.hadoop.mapreduce.Job.getInstance(Job.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("212")]),
          _vm._v(")\n\tat WordCount.main(WordCount.java:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(")\nDEBUG - setsid is not available on "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            " machine. So not using it.\nDEBUG - setsid exited with exit code "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\nDEBUG - Kerberos krb5 configuration not found, setting "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(" realm to empty\nDEBUG -  Creating "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Groups object\nDEBUG - Trying to load the custom-built "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("native")]),
          _vm._v("-hadoop library...\nDEBUG - Failed to load "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("native")]),
          _vm._v(
            "-hadoop with error: java.lang.UnsatisfiedLinkError: no hadoop in java.library.path\nDEBUG - java.library.path=/Users/fandong/Library/Java/Extensions:/Library/Java/Extensions:/Network/Library/Java/Extensions:/System/Library/Java/Extensions:/usr/lib/java:.\n WARN - Unable to load "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("native")]),
          _vm._v("-hadoop library "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " your platform... using builtin-java classes where applicable\nDEBUG - Falling back to shell based\nDEBUG - Group mapping impl=org.apache.hadoop.security.ShellBasedUnixGroupsMapping\nDEBUG - Group mapping impl=org.apache.hadoop.security.JniBasedUnixGroupsMappingWithFallback; cacheTimeout="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("300000")]),
          _vm._v("; warningDeltaMs="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5000")]),
          _vm._v(
            "\nDEBUG - hadoop login\nDEBUG - hadoop login commit\nDEBUG - using local user:UnixPrincipal: fandong\nDEBUG - Using user: "
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"UnixPrincipal: fandong"')
          ]),
          _vm._v(" with name fandong\nDEBUG - User entry: "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"fandong"')]),
          _vm._v(
            "\nDEBUG - Assuming keytab is managed externally since logged in from subject.\nDEBUG - UGI loginUser:fandong (auth:SIMPLE)\nDEBUG - sampler.classes = ; loaded no samplers\nDEBUG - span.receiver.classes = ; loaded no span receivers\nDEBUG - Loading filesystems\nDEBUG - file:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.fs.LocalFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/2.9.2/hadoop-common-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - viewfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.fs.viewfs.ViewFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/2.9.2/hadoop-common-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - ftp:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.fs.ftp.FTPFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/2.9.2/hadoop-common-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - har:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.fs.HarFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/2.9.2/hadoop-common-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.fs.http.HttpFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/2.9.2/hadoop-common-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - https:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.fs.http.HttpsFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-common/2.9.2/hadoop-common-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - hdfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.hdfs.DistributedFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-hdfs-client/2.9.2/hadoop-hdfs-client-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - webhdfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.hdfs.web.WebHdfsFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-hdfs-client/2.9.2/hadoop-hdfs-client-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - swebhdfs:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.hdfs.web.SWebHdfsFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-hdfs-client/2.9.2/hadoop-hdfs-client-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - hftp:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.hdfs.web.HftpFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-hdfs-client/2.9.2/hadoop-hdfs-client-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - hsftp:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// = class org.apache.hadoop.hdfs.web.HsftpFileSystem from /Users/fandong/.m2/repository/org/apache/hadoop/hadoop-hdfs-client/2.9.2/hadoop-hdfs-client-2.9.2.jar"
            )
          ]),
          _vm._v("\nDEBUG - Looking "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" FS supporting hdfs\nDEBUG - looking "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " configuration option fs.hdfs.impl\nDEBUG - Looking in service filesystems "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" implementation "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v("\n"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("DEBUG")]),
            _vm._v(" - "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("FS")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hdfs")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("is")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("org")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("apache")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoop")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hdfs")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("DistributedFileSystem")
            ]),
            _vm._v("\n"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("DEBUG")]),
            _vm._v(" - "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("dfs")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("client")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("use")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("legacy")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("blockreader")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("local")]),
            _vm._v(" ")
          ]),
          _vm._v("= "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\nDEBUG - dfs.client.read.shortcircuit = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\nDEBUG - dfs.client.domain.socket.data.traffic = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(
            "\nDEBUG - dfs.domain.socket.path = \nDEBUG - Sets dfs.client.block.write.replace-datanode-on-failure.min-replication to "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\nDEBUG - multipleLinearRandomRetry = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(
            "\nDEBUG - rpcKind=RPC_PROTOCOL_BUFFER, rpcRequestWrapperClass="
          ),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("org")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("apache")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoop")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ipc")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("ProtobufRpcEngine")
            ]),
            _vm._v("$"),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("RpcProtobufRequest")
            ]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("rpcInvoker")])
          ]),
          _vm._v(
            "=org.apache.hadoop.ipc.ProtobufRpcEngine$Server$ProtoBufRpcInvoker@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "d1ef81a\nDEBUG - getting client out of cache: org.apache.hadoop.ipc.Client@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("eac9008\nDEBUG - Both "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("short")]),
          _vm._v(
            "-circuit local reads and UNIX domain socket are disabled.\nDEBUG - DataTransferProtocol not using SaslPropertiesResolver, no QOP found in configuration "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " dfs.data.transfer.protection\nDEBUG - PrivilegedAction as:fandong (auth:SIMPLE) from:org.apache.hadoop.mapreduce.Job.connect(Job.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1535")]),
          _vm._v(
            ")\nDEBUG - Trying ClientProtocolProvider : org.apache.hadoop.mapred.LocalClientProtocolProvider\nDEBUG - Looking "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" FS supporting file\nDEBUG - looking "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " configuration option fs.file.impl\nDEBUG - Looking in service filesystems "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" implementation "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v("\n"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("DEBUG")]),
            _vm._v(" - "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("FS")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("file")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("is")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("org")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("apache")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hadoop")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fs")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("LocalFileSystem")
            ]),
            _vm._v("\n "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" - "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("session")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("id")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("is")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deprecated")]),
            _vm._v(". "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Instead")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("use")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("dfs")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("metrics")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("session")]),
            _vm._v("-"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("id")]),
            _vm._v("\n "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" - "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Initializing")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("JVM")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Metrics")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("with")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("processName")])
          ]),
          _vm._v(
            "=JobTracker, sessionId=\nDEBUG - Picked org.apache.hadoop.mapred.LocalClientProtocolProvider as the ClientProtocolProvider\nDEBUG - PrivilegedAction as:fandong (auth:SIMPLE) from:org.apache.hadoop.mapreduce.Cluster.getFileSystem(Cluster.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192")]),
          _vm._v(
            ")\nDEBUG - PrivilegedAction as:fandong (auth:SIMPLE) from:org.apache.hadoop.mapreduce.Job.submit(Job.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1567")]),
          _vm._v(")\nDEBUG - The ping interval is "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("60000")]),
          _vm._v(" ms.\nDEBUG - Connecting to hadoop01.fandong.com/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.125:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9001")]),
          _vm._v("\nDEBUG - "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("IPC "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong: starting, having connections 1\nDEBUG - IPC "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong sending #0 org.apache.hadoop.hdfs.protocol.ClientProtocol.getFileInfo\nDEBUG - IPC "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong got value #0\nDEBUG - Call: getFileInfo took 137ms\nDEBUG - PrivilegedActionException as:"
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(
              " cause:org.apache.hadoop.mapred.FileAlreadyExistsException: Output directory hdfs:"
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//hadoop01.fandong.com:9001/user/hadoopExDemo/h01/output4 already exists"
              )
            ]),
            _vm._v(
              '\nException in thread "main" org.apache.hadoop.mapred.FileAlreadyExistsException: Output directory hdfs:'
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//hadoop01.fandong.com:9001/user/hadoopExDemo/h01/output4 already exists"
              )
            ]),
            _vm._v(
              "\n\tat org.apache.hadoop.mapreduce.lib.output.FileOutputFormat."
            ),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("checkOutputSpecs")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(FileOutputFormat.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("146")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.mapreduce.JobSubmitter."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("checkSpecs")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(JobSubmitter.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("279")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.mapreduce.JobSubmitter."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("submitJobInternal")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(JobSubmitter.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("145")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.mapreduce.Job$11."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1570")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.mapreduce.Job$11."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1567")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat java.security.AccessController."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("doPrivileged")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Native Method)")
            ]),
            _vm._v("\n\tat javax.security.auth.Subject."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("doAs")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Subject.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("422")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.security.UserGroupInformation."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("doAs")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(UserGroupInformation.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1893")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("submit")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1567")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("waitForCompletion")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1588")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tat WordCount."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("main")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(WordCount.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("62")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\nDEBUG - stopping client from cache: org.apache.hadoop.ipc.Client@7eac9008\nDEBUG - removing client from cache: org.apache.hadoop.ipc.Client@7eac9008\nDEBUG - stopping actual client because no more references remain: org.apache.hadoop.ipc.Client@7eac9008\nDEBUG - Stopping client\nDEBUG - IPC "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong: closed\nDEBUG - IPC "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong: stopped, remaining connections 0\nDEBUG - Completed shutdown in 0.108 seconds"
            )
          ]),
          _vm._v("; Timeouts: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\nDEBUG - ShutdownHookManger completed shutdown.\n\nProcess finished with exit code "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "这个问题表示，输出的文件夹已经存在了，我们去hadoop上删除该文件即可，"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/hadoopJob2.png",
            alt: "hadoop"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("再次运行：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\n\t\tDEBUG - computePacketChunkSize: src=/user/hadoopExDemo/h01/output4/_SUCCESS, chunkSize="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("516")]),
          _vm._v(", chunksPerPacket="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("126")]),
          _vm._v(", packetSize="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("65016")]),
          _vm._v("\n\tDEBUG - Waiting "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" ack "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(": -"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tDEBUG - "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("IPC "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong sending #21 org.apache.hadoop.hdfs.protocol.ClientProtocol.complete\n\tDEBUG - IPC "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong got value #21\n\tDEBUG - Call: complete took 7ms\n\tDEBUG - PrivilegedAction as:"
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.fs.FileContext."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getAbstractFileSystem")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(FileContext.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("339")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t INFO -  map 100% reduce 100%\n\tDEBUG - PrivilegedAction as:"
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getTaskCompletionEvents")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("729")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tDEBUG - PrivilegedAction as:"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("updateStatus")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("328")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tDEBUG - PrivilegedAction as:"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("updateStatus")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("328")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tDEBUG - PrivilegedAction as:"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("getTaskCompletionEvents")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("729")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tDEBUG - PrivilegedAction as:"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("updateStatus")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("328")]),
              _vm._v(")")
            ]),
            _vm._v("\n\tDEBUG - PrivilegedAction as:"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("updateStatus")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("328")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n\t INFO - Job job_local108293398_0001 completed successfully\n\tDEBUG - PrivilegedAction as:"
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fandong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(auth:SIMPLE)")
            ]),
            _vm._v(" from:org.apache.hadoop.mapreduce.Job."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getCounters")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Job.java:"),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("817")]),
              _vm._v(")")
            ]),
            _vm._v(
              "\n INFO - Counters: 35\n\tFile System Counters\n\t\tFILE: Number of bytes read"
            )
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1340")]),
          _vm._v("\n\t\tFILE: Number of bytes written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("655988")]),
          _vm._v("\n\t\tFILE: Number of read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tFILE: Number of large read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tFILE: Number of write operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tHDFS: Number of bytes read="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2848")]),
          _vm._v("\n\t\tHDFS: Number of bytes written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("342")]),
          _vm._v("\n\t\tHDFS: Number of read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v("\n\t\tHDFS: Number of large read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tHDFS: Number of write operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("\n\tMap-Reduce Framework\n\t\tMap input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v("\n\t\tMap output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("147")]),
          _vm._v("\n\t\tMap output bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1970")]),
          _vm._v("\n\t\tMap output materialized bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("450")]),
          _vm._v("\n\t\tInput split bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("137")]),
          _vm._v("\n\t\tCombine input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("147")]),
          _vm._v("\n\t\tCombine output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tReduce input groups="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tReduce shuffle bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("450")]),
          _vm._v("\n\t\tReduce input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tReduce output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tSpilled Records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("54")]),
          _vm._v("\n\t\tShuffled Maps ="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\tFailed Shuffles="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tMerged Map outputs="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("GC time "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("elapsed")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total committed heap "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("usage")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("423100416")]),
          _vm._v("\n\tShuffle Errors\n\t\tBAD_ID="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tCONNECTION="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tIO_ERROR="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tWRONG_LENGTH="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tWRONG_MAP="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tWRONG_REDUCE="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tFile Input Format Counters \n\t\tBytes Read="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1424")]),
          _vm._v("\n\tFile Output Format Counters \n\t\tBytes Written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("342")]),
          _vm._v(
            "\n\tDEBUG - PrivilegedAction as:fandong (auth:SIMPLE) from:org.apache.hadoop.mapreduce.Job.updateStatus(Job.java:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("328")]),
          _vm._v(
            ")\n\tDEBUG - stopping client from cache: org.apache.hadoop.ipc.Client@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v(
            "eac9008\n\tDEBUG - removing client from cache: org.apache.hadoop.ipc.Client@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v(
            "eac9008\n\tDEBUG - stopping actual client because no more references remain: org.apache.hadoop.ipc.Client@"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("eac9008\n\tDEBUG - Stopping client\n\tDEBUG - "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("IPC "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong: closed\n\tDEBUG - IPC "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Client")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("573673894")]),
              _vm._v(")")
            ]),
            _vm._v(
              " connection to hadoop01.fandong.com/192.168.1.125:9001 from fandong: stopped, remaining connections 0\n\tDEBUG - Completed shutdown in 0.108 seconds"
            )
          ]),
          _vm._v("; Timeouts: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "\n\tDEBUG - ShutdownHookManger completed shutdown.\n\t\n\tProcess finished with exit code "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("可以看到本地运行OK。")]),
      _vm._v(" "),
      _c("p", [_vm._v("现在可以打包到集群执行了。记得把 provider 加上。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 hadoopJar]# hadoop jar hadoopEx-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT-jar-with-dependencies.jar \n    \\ /user/hadoopExDemo/h01/boss-category.txt \n    \\  /user/hadoopExDemo/h01/output4\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("info：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("08")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("54")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("54")]),
          _vm._v(" INFO Configuration.deprecation: fs."),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(".name is deprecated. Instead, use fs.defaultFS\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("08")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("54")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("56")]),
          _vm._v(" INFO client.RMProxy: Connecting to ResourceManager at /"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.0")]),
          _vm._v(".0.0:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8032")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("08")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("54")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("58")]),
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
            _vm._v(".\n\t18/09/08 09:54:59 "),
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
            _vm._v(" : 1\n\t18/09/08 09:55:00 "),
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
            _vm._v(":1\n\t18/09/08 09:55:00 "),
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
            _vm._v("\n\t18/09/08 09:55:00 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("Configuration")
            ]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deprecation")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fs")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("default")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("name")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("is")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("deprecated")]),
            _vm._v(". "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Instead")]),
            _vm._v(", "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("use")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fs")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("defaultFS")]),
            _vm._v("\n\t18/09/08 09:55:01 "),
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
              _vm._v("job_1567810534320_0003")
            ]),
            _vm._v("\n\t18/09/08 09:55:03 "),
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
              _vm._v("application_1567810534320_0003")
            ]),
            _vm._v("\n\t18/09/08 09:55:03 "),
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
              _vm._v("application_1567810534320_0003")
            ]),
            _vm._v("/\n\t18/09/08 09:55:03 "),
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
              _vm._v("job_1567810534320_0003")
            ]),
            _vm._v("\n\t18/09/08 09:55:26 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("job_1567810534320_0003")
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
            _vm._v("\n\t18/09/08 09:55:26 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 0% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 0%\n\t18/09/08 09:55:48 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 100% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 0%\n\t18/09/08 09:56:04 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(":  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("map")]),
            _vm._v(" 100% "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("reduce")]),
            _vm._v(" 100%\n\t18/09/08 09:56:05 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("job_1567810534320_0003")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("completed")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("successfully")]),
            _vm._v("\n\t18/09/08 09:56:05 "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("INFO")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("mapreduce")]),
            _vm._v("."),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Job")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Counters")]),
            _vm._v(": 49\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("File")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("System")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Counters")]),
            _vm._v("\n\t\t"),
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
          _c("span", { staticClass: "hljs-number" }, [_vm._v("450")]),
          _vm._v("\n\t\tFILE: Number of bytes written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("397867")]),
          _vm._v("\n\t\tFILE: Number of read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tFILE: Number of large read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tFILE: Number of write operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tHDFS: Number of bytes read="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1561")]),
          _vm._v("\n\t\tHDFS: Number of bytes written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("342")]),
          _vm._v("\n\t\tHDFS: Number of read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v("\n\t\tHDFS: Number of large read operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tHDFS: Number of write operations="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\tJob Counters \n\t\tLaunched map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\tLaunched reduce tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\tData-local map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all maps in occupied "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("slots")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18403")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all reduces in occupied "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("slots")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13544")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all map "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("tasks")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18403")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total time spent by all reduce "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("tasks")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13544")]),
          _vm._v("\n\t\tTotal vcore-milliseconds taken by all map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18403")]),
          _vm._v("\n\t\tTotal vcore-milliseconds taken by all reduce tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13544")]),
          _vm._v("\n\t\tTotal megabyte-milliseconds taken by all map tasks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18844672")]),
          _vm._v(
            "\n\t\tTotal megabyte-milliseconds taken by all reduce tasks="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13869056")]),
          _vm._v("\n\tMap-Reduce Framework\n\t\tMap input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v("\n\t\tMap output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("147")]),
          _vm._v("\n\t\tMap output bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1970")]),
          _vm._v("\n\t\tMap output materialized bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("450")]),
          _vm._v("\n\t\tInput split bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("137")]),
          _vm._v("\n\t\tCombine input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("147")]),
          _vm._v("\n\t\tCombine output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tReduce input groups="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tReduce shuffle bytes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("450")]),
          _vm._v("\n\t\tReduce input records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tReduce output records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("27")]),
          _vm._v("\n\t\tSpilled Records="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("54")]),
          _vm._v("\n\t\tShuffled Maps ="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\tFailed Shuffles="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tMerged Map outputs="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("GC time "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("elapsed")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("214")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("CPU time "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("spent")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(ms)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2200")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Physical "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")]),
            _vm._v(" snapshot")
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("409321472")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Virtual "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("memory")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")]),
            _vm._v(" snapshot")
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4233822208")]),
          _vm._v("\n\t\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Total committed heap "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("usage")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(bytes)")])
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("254803968")]),
          _vm._v("\n\tShuffle Errors\n\t\tBAD_ID="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tCONNECTION="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tIO_ERROR="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tWRONG_LENGTH="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tWRONG_MAP="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\tWRONG_REDUCE="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tFile Input Format Counters \n\t\tBytes Read="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1424")]),
          _vm._v("\n\tFile Output Format Counters \n\t\tBytes Written="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("342")]),
          _vm._v("\n\t\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/yarnJob3.png",
            alt: "job3"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("任务执行OK")])
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

/***/ "./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md":
/*!*****************************************************************!*\
  !*** ./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_hadoop_1_3_MapReduceJob_md_vue_type_template_id_0ae4c2af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af& */ "./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_hadoop_1_3_MapReduceJob_md_vue_type_template_id_0ae4c2af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_hadoop_1_3_MapReduceJob_md_vue_type_template_id_0ae4c2af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af&":
/*!************************************************************************************************!*\
  !*** ./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hadoop_1_3_MapReduceJob_md_vue_type_template_id_0ae4c2af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hadoop_基础_1-3_向集群提交MapReduceJob.md?vue&type=template&id=0ae4c2af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hadoop_1_3_MapReduceJob_md_vue_type_template_id_0ae4c2af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hadoop_1_3_MapReduceJob_md_vue_type_template_id_0ae4c2af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=74769dd8.js.map