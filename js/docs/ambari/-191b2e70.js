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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/example_ambari_集群管理_1-1_部署.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde& ***!
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
      _c(
        "h1",
        {
          attrs: {
            id:
              "%E4%BD%BF%E7%94%A8apache-ambari-%E7%AE%A1%E7%90%86hadoop%E9%9B%86%E7%BE%A4"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E4%BD%BF%E7%94%A8apache-ambari-%E7%AE%A1%E7%90%86hadoop%E9%9B%86%E7%BE%A4",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 使用Apache ambari 管理hadoop集群")
        ]
      ),
      _vm._v(" "),
      _c(
        "h4",
        {
          attrs: {
            id:
              "%E5%A5%BD%E8%AE%B0%E6%80%A7%E4%B8%8D%E5%AE%B9%E7%83%82%E7%AC%94%E5%A4%B4%EF%BC%8C%E7%83%82%E7%AC%94%E5%A4%B4%E5%A4%AA%E4%B9%85%E4%BA%86%EF%BC%8C%E6%98%AF%E6%97%B6%E5%80%99%E5%B1%95%E7%A4%BA%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%8A%80%E6%9C%AF%E4%BA%86%E3%80%82"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%A5%BD%E8%AE%B0%E6%80%A7%E4%B8%8D%E5%AE%B9%E7%83%82%E7%AC%94%E5%A4%B4%EF%BC%8C%E7%83%82%E7%AC%94%E5%A4%B4%E5%A4%AA%E4%B9%85%E4%BA%86%EF%BC%8C%E6%98%AF%E6%97%B6%E5%80%99%E5%B1%95%E7%A4%BA%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%8A%80%E6%9C%AF%E4%BA%86%E3%80%82",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 好记性不容烂笔头，烂笔头太久了，是时候展示真正的技术了。")
        ]
      ),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id: "%E5%9C%A8%E9%9B%86%E7%BE%A4%E4%B8%8A%E5%AE%89%E8%A3%85-ambari"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%9C%A8%E9%9B%86%E7%BE%A4%E4%B8%8A%E5%AE%89%E8%A3%85-ambari",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 在集群上安装 ambari")
        ]
      ),
      _vm._v(" "),
      _c("p", [
        _c("a", { attrs: { href: "https://supportmatrix.hortonworks.com" } }, [
          _vm._v("查看ambari支持版本")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          {
            attrs: {
              href:
                "https://docs.hortonworks.com/HDPDocuments/Ambari-2.7.3.0/bk_ambari-installation/content/mmsr_pkg_inode_reqs.html"
            }
          },
          [_vm._v("ambari自动安装参考文档")]
        )
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("什么是ambari ？")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "集群的管理，当机器节点达到上百或者上千台时，使用一个统一管理服务。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("开始安装ambari")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("maven 安装，后面需要编译源码（version:3.6.1）")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//下载资源")]),
          _vm._v("\n    wget http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//www.apache.org/dist/ambari/ambari-2.7.3/apache-ambari-2.7.3-src.tar.gz "
            )
          ]),
          _vm._v("\n    \n    \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("em", [
          _c("strong", [
            _vm._v("这是我的一台服务器，不是虚拟机,要固定IP ！！！")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "\t[root@hadoop01 ~]# wget http://www.apache.org/dist/ambari/ambari-2.7.3/\t\tapache-ambari-2.7.3-src.tar.gz \n\t--2019-08-16 23:29:04--  http://www.apache.org/dist/ambari/ambari-2.7.3/\t\tapache-ambari-2.7.3-src.tar.gz\n\t正在解析主机 www.apache.org (www.apache.org)... 失败：未知的名称或服务。\n\twget: 无法解析主机地址 “www.apache.org”\n\t[root@hadoop01 ~]# ping www.baidu.com\n\tping: www.baidu.com: 未知的名称或服务\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("解决方法")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//打开这个文件")
          ]),
          _vm._v("\n\t\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 ~]# vi /etc/resolv.conf\n\t\n\t "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//添加一下两个dns 解析")
          ]),
          _vm._v("\n\t\n\t   nameserver "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.8")]),
          _vm._v(".8.8 \n      nameserver "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.8")]),
          _vm._v(".4.4\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "    [root@hadoop01 ~]# ping www.baidu.com\n\tPING www.a.shifen.com (163.177.151.109) 56(84) bytes of data.\n\t64 bytes from 163.177.151.109 (163.177.151.109): icmp_seq=1 ttl=55 time=8.47 ms\n\t64 bytes from 163.177.151.109 (163.177.151.109): icmp_seq=2 ttl=55 time=8.45 ms\n\t64 bytes from 163.177.151.109 (163.177.151.109): icmp_seq=3 ttl=55 time=8.62 ms\n\t64 bytes from 163.177.151.109 (163.177.151.109): icmp_seq=4 ttl=55 time=8.58 ms\n\t64 bytes from 163.177.151.109 (163.177.151.109): icmp_seq=5 ttl=55 time=8.59 ms\n\t....\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("安装step")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 ambari]# ls\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src.tar.gz\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 ambari]# tar xvfz apache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src.tar.gz \n\t./._apache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/.github/\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/ambari-admin/\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/ambari-agent/\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/ambari-common/\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/ambari-funtest/\n\tapache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/ambari-infra/\n\t....\n\t\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("编译源码")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//使用mvn安装必要依赖")
          ]),
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 apache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src]# mvn versions:set -DnewVersion="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0\n\t\n\t[INFO] Scanning "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " projects...\n\tDownloading from apache.snapshots.https: https:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//repository.apache.org/content/repositories/snapshots/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml"
            )
          ]),
          _vm._v(
            "\n\tDownloading from maven2-glassfish-repository.dev.java.net: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//download.java.net/maven/glassfish/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml"
            )
          ]),
          _vm._v("\n\tDownloading from maven2-repository.atlassian: https:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//maven.atlassian.com/repository/public/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml"
            )
          ]),
          _vm._v("\n\tDownloading from maven2-repository.dev.java.net: http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//download.java.net/maven/2/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml"
            )
          ]),
          _vm._v("\n\tDownloading from central: https:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml"
            )
          ]),
          _vm._v("\n\tDownloaded from apache.snapshots.https: https:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//repository.apache.org/content/repositories/snapshots/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml (400 B at 34 B/s)"
            )
          ]),
          _vm._v("\n\tDownloaded from central: https:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//repo.maven.apache.org/maven2/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml (1.3 kB at 193 B/s)"
            )
          ]),
          _vm._v("\n\tDownloaded from maven2-repository.atlassian: https:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//maven.atlassian.com/repository/public/org/apache/maven/wagon/wagon-ssh-external/maven-metadata.xml (1.3 kB at 81 B/s)"
            )
          ]),
          _vm._v("\n\tDownloading from maven2-repository.dev.java.net: http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//download.java.net/maven/2/org/apache/maven/wagon/wagon-ssh-external/3.3.3/wagon-ssh-external-3.3.3.pom"
            )
          ]),
          _vm._v("\n  ....\n  \n\t[INFO] Searching "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " local aggregator root...\n\t[INFO] Local aggregation root: /opt/ambari/apache-ambari-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3-src\n\t[INFO] Processing change of org.apache.ambari:ambari:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 -> "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] Reactor Summary:\n\t[INFO] \n\t[INFO] Ambari Main "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 .............................. SUCCESS ["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("23")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(" min]\n\t[INFO] Apache Ambari Project POM "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 ................ SKIPPED\n\t[INFO] Ambari Web "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ............................... SKIPPED\n\t[INFO] Ambari Views "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ............................. SKIPPED\n\t[INFO] Ambari Admin View "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ........................ SKIPPED\n\t[INFO] ambari-utility "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            ".0.0-SNAPSHOT .................... SKIPPED\n\t[INFO] ambari-metrics "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ........................... SKIPPED\n\t[INFO] Ambari Metrics Common "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 .................... SKIPPED\n\t[INFO] Ambari Metrics Hadoop Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ............... SKIPPED\n\t[INFO] Ambari Metrics Flume Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ................ SKIPPED\n\t[INFO] Ambari Metrics Kafka Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ................ SKIPPED\n\t[INFO] Ambari Metrics Storm Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 ................ SKIPPED\n\t[INFO] "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Ambari Metrics Storm "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Sink")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(Legacy)")]),
            _vm._v(
              " 2.7.3.0.0 ....... SKIPPED\n\t[INFO] Ambari Metrics Collector 2.7.3.0.0 ................. SKIPPED\n\t[INFO] Ambari Metrics Monitor 2.7.3.0.0 ................... SKIPPED\n\t[INFO] Ambari Metrics Grafana 2.1.0.0.0 ................... SKIPPED\n\t[INFO] Ambari Metrics Host Aggregator 2.7.3.0.0 ........... SKIPPED\n\t[INFO] Ambari Metrics Assembly 2.7.3.0.0 .................. SKIPPED\n\t[INFO] Ambari Service Advisor 1.0.0.0-SNAPSHOT ............ SKIPPED\n\t[INFO] Ambari Server 2.7.3.0.0 ............................ SKIPPED\n\t[INFO] Ambari Functional Tests 2.7.3.0.0 .................. SKIPPED\n\t[INFO] Ambari Agent 2.7.3.0.0 ............................. SKIPPED\n\t[INFO] ambari-logsearch 2.7.3.0.0 ......................... SKIPPED\n\t[INFO] Ambari Logsearch Appender 2.7.3.0.0 ................ SKIPPED\n\t[INFO] Ambari Logsearch Config Api 2.7.3.0.0 .............. SKIPPED\n\t[INFO] Ambari Logsearch Config JSON 2.7.3.0.0 ............. SKIPPED\n\t[INFO] Ambari Logsearch Config Solr 2.7.3.0.0 ............. SKIPPED\n\t[INFO] Ambari Logsearch Config Zookeeper 2.7.3.0.0 ........ SKIPPED\n\t[INFO] Ambari Logsearch Config Local 2.7.3.0.0 ............ SKIPPED\n\t[INFO] Ambari Logsearch Log Feeder Plugin Api 2.7.3.0.0 ... SKIPPED\n\t[INFO] Ambari Logsearch Log Feeder Container Registry 2.7.3.0.0 SKIPPED\n\t[INFO] Ambari Logsearch Log Feeder 2.7.3.0.0 .............. SKIPPED\n\t[INFO] Ambari Logsearch Web 2.7.3.0.0 ..................... SKIPPED\n\t[INFO] Ambari Logsearch Server 2.7.3.0.0 .................. SKIPPED\n\t[INFO] Ambari Logsearch Assembly 2.7.3.0.0 ................ SKIPPED\n\t[INFO] Ambari Logsearch Integration Test 2.7.3.0.0 ........ SKIPPED\n\t[INFO] ambari-infra 2.7.3.0.0 ............................. SKIPPED\n\t[INFO] Ambari Infra Solr Client 2.7.3.0.0 ................. SKIPPED\n\t[INFO] Ambari Infra Solr Plugin 2.7.3.0.0 ................. SKIPPED\n\t[INFO] Ambari Infra Manager 2.7.3.0.0 ..................... SKIPPED\n\t[INFO] Ambari Infra Assembly 2.7.3.0.0 .................... SKIPPED\n\t[INFO] Ambari Infra Manager Integration Tests 2.7.3.0.0 ... SKIPPED\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] BUILD SUCCESS\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] Total time:  23:53 min\n\t[INFO] Finished at: 2019-08-17T02:36:48-04:00\n\t[INFO] ------------------------------------------------------------------------\n\t\n\t"
            ),
            _c("span", { staticClass: "hljs-comment" }, [_vm._v("//编译指标")]),
            _vm._v(
              "\n\t\n\t[root@hadoop01] pushd ambari-metrics\n\t[root@hadoop01] mvn versions:set -DnewVersion"
            )
          ]),
          _vm._v("="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0\n\t\n\t[INFO] Searching "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " local aggregator root...\n\t[INFO] Local aggregation root: /opt/ambari/apache-ambari-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3-src\n\t[INFO] Processing change of org.apache.ambari:ambari-metrics:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 -> "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] Reactor Summary:\n\t[INFO] \n\t[INFO] ambari-utility "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            ".0.0-SNAPSHOT .................... SKIPPED\n\t[INFO] ambari-metrics "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 ........................... SUCCESS ["),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v(" min]\n\t[INFO] Ambari Metrics Common "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 .................... SKIPPED\n\t[INFO] Ambari Metrics Hadoop Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ............... SKIPPED\n\t[INFO] Ambari Metrics Flume Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ................ SKIPPED\n\t[INFO] Ambari Metrics Kafka Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(
            ".3.0.0 ................ SKIPPED\n\t[INFO] Ambari Metrics Storm Sink "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 ................ SKIPPED\n\t[INFO] "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Ambari Metrics Storm "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Sink")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(Legacy)")]),
            _vm._v(
              " 2.7.3.0.0 ....... SKIPPED\n\t[INFO] Ambari Metrics Collector 2.7.3.0.0 ................. SKIPPED\n\t[INFO] Ambari Metrics Monitor 2.7.3.0.0 ................... SKIPPED\n\t[INFO] Ambari Metrics Grafana 2.1.0.0.0 ................... SKIPPED\n\t[INFO] Ambari Metrics Host Aggregator 2.7.3.0.0 ........... SKIPPED\n\t[INFO] Ambari Metrics Assembly 2.7.3.0.0 .................. SKIPPED\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] BUILD SUCCESS\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] Total time:  03:42 min\n\t[INFO] Finished at: 2019-08-17T02:42:44-04:00\n\t[INFO] ------------------------------------------------------------------------\n\t\n\t\n\t"
            ),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//返回到src目录下")
            ]),
            _vm._v("\n   [root@hadoop01] popd\n\t\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("mvn 安装")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 apache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src]# mvn -B clean install rpm:rpm -DnewVersion="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 -DbuildNumber="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4295")]),
          _vm._v(
            "bb16c439cbc8fb0e7362f19768dde1477868 -DskipTests -Dpython.ver="
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"python >= 2.6"')
          ]),
          _vm._v("\n\t[INFO] Scanning "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " projects...\n\t[INFO] ------------------------------------------------------------------------\n\t[INFO] Reactor Build Order:\n\t[INFO] \n\t[INFO] Ambari Main                                                        [pom]\n\t[INFO] Apache Ambari Project POM                                          [pom]\n\t[INFO] Ambari Web                                                         [pom]\n\t[INFO] Ambari Views                                                       [jar]\n\t[INFO] Ambari Admin View                                                  [jar]\n\t[INFO] ambari-utility                                                     [jar]\n\t[INFO] ambari-metrics                                                     [pom]\n\t[INFO] Ambari Metrics Common                                              [jar]\n\t[INFO] Ambari Metrics Hadoop Sink                                         [jar]\n\t[INFO] Ambari Metrics Flume Sink                                          [jar]\n\t[INFO] Ambari Metrics Kafka Sink                                          [jar]\n\t[INFO] Ambari Metrics Storm Sink                                          [jar]\n\t[INFO] "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Ambari Metrics Storm "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Sink")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(Legacy)")]),
            _vm._v(
              "                                 [jar]\n\t[INFO] Ambari Metrics Collector                                           [jar]\n\t[INFO] Ambari Metrics Monitor                                             [pom]\n\t[INFO] Ambari Metrics Grafana                                             [pom]\n\t[INFO] Ambari Metrics Host Aggregator                                     [jar]\n\t[INFO] Ambari Metrics Assembly                                            [pom]\n\t[INFO] Ambari Service Advisor                                             [jar]\n\t ....\n\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("打包为rpm")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 apache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src]# mvn -B clean install rpm:rpm -DnewVersion="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 -DbuildNumber="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4295")]),
          _vm._v(
            "bb16c439cbc8fb0e7362f19768dde1477868 -DskipTests -Dpython.ver="
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"python >= 2.6"')
          ]),
          _vm._v("\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v("必须按照rpmbuild 命令\n\nyum install rpm-build\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              'pClassLoader@5c647e05]\n[DEBUG] Configuring mojo \'com.github.eirslett:frontend-maven-plugin:1.4:install-node-and-yarn\' with basic configurator -->\n[DEBUG]   (f) environmentVariables = {npm_config_tmp=/tmp/npm_config_tmp}\n[DEBUG]   (f) nodeDownloadRoot = https://nodejs.org/dist/\n[DEBUG]   (f) nodeVersion = v4.5.0\n[DEBUG]   (f) project = MavenProject: org.apache.ambari:ambari-web:2.7.3.0.0 @ /opt/ambari/apache-ambari-2.7.3-src/ambari-web/pom.xml\n[DEBUG]   (f) repositorySystemSession = org.eclipse.aether.DefaultRepositorySystemSession@37b56ac7\n[DEBUG]   (f) session = org.apache.maven.execution.MavenSession@e322ec9\n[DEBUG]   (f) skip = false\n[DEBUG]   (f) skipTests = true\n[DEBUG]   (f) testFailureIgnore = false\n[DEBUG]   (f) workingDirectory = /opt/ambari/apache-ambari-2.7.3-src/ambari-web\n[DEBUG]   (f) yarnDownloadRoot = https://github.com/yarnpkg/yarn/releases/download/\n[DEBUG]   (f) yarnVersion = v0.23.2\n[DEBUG]   (f) execution = com.github.eirslett:frontend-maven-plugin:1.4:install-node-and-yarn {execution: install node and yarn}\n[DEBUG] -- end configuration --\n[DEBUG] Executing command line [/opt/ambari/apache-ambari-2.7.3-src/ambari-web/node/node, --version]\n[DEBUG] Exit value 0\n[INFO] Node v4.5.0 is already installed.\n[DEBUG] Executing command line [/opt/ambari/apache-ambari-2.7.3-src/ambari-web/node/yarn/dist/bin/yarn, --version]\n[INFO] Installing Yarn version v0.23.2\n[INFO] Downloading https://github.com/yarnpkg/yarn/releases/download/v0.23.2/yarn-v0.23.2.tar.gz to /root/.m2/repository/com/github/eirslett/yarn/0.23.2/yarn-0.23.2./yarn-v0.23.2.tar.gz\n[INFO] No proxies configured\n[INFO] No proxy was configured, downloading directly\n八月 17, 2019 4:08:45 上午 org.apache.http.client.protocol.ResponseProcessCookies processCookies\n警告: Invalid cookie header: "Set-Cookie: has_recent_activity=1; path=/; expires=Sat, 17 Aug 2019 09:08:44 -0000". Invalid \'expires\' attribute: Sat, 17 Aug 2019 09:08:44 -0000\n八月 17, 2019 4:08:45 上午 org.apache.http.client.protocol.ResponseProcessCookies processCookies\n警告: Invalid cookie header: "Set-Cookie: logged_in=no; domain=.github.com; path=/; expires=Wed, 17 Aug 2039 08:08:44 -0000; secure; HttpOnly". Invalid \'expires\' attribute: Wed, 17 Aug 2039 08:08:44 -0000\n[INFO] Unpacking /root/.m2/repository/com/github/eirslett/yarn/0.23.2/yarn-0.23.2./yarn-v0.23.2.tar.gz into /opt/ambari/apache-ambari-2.7.3-src/ambari-web/node/yarn\n[INFO] Installed Yarn locally.\n[INFO] \n[INFO] --- frontend-maven-plugin:1.4:yarn (yarn install) @ ambari-web ---\n[DEBUG] Configuring mojo com.github.eirslett:frontend-maven-plugin:1.4:yarn from plugin realm ClassRealm[plugin>com.github.eirslett:frontend-maven-plugin:1.4, parent: sun.misc.Launcher$AppClassLoader@5c647e05]\n[DEBUG] Configuring mojo \'com.github.eirslett:frontend-maven-plugin:1.4:yarn\' with basic configurator -->\n[DEBUG]   (f) arguments = install --ignore-engines --pure-lockfile\n[DEBUG]   (f) environmentVariables = {npm_config_tmp=/tmp/npm_config_tmp}\n[DEBUG]   (f) project = MavenProject: org.apache.ambari:ambari-web:2.7.3.0.0 @ /opt/ambari/apache-ambari-2.7.3-src/ambari-web/pom.xml\n[DEBUG]   (f) repositorySystemSession = org.eclipse.aether.DefaultRepositorySystemSession@37b56ac7\n[DEBUG]   (f) session = org.apache.maven.execution.MavenSession@e322ec9\n[DEBUG]   (f) skip = false\n[DEBUG]   (f) skipTests = true\n[DEBUG]   (f) testFailureIgnore = false\n[DEBUG]   (f) workingDirectory = /opt/ambari/apache-ambari-2.7.3-src/ambari-web\n[DEBUG]   (f) yarnInheritsProxyConfigFromMaven = true\n[DEBUG]   (f) execution = com.github.eirslett:frontend-maven-plugin:1.4:yarn {execution: yarn install}\n[DEBUG] -- end configuration --\n[INFO] Running \'yarn install --ignore-engines --pure-lockfile\' in /opt/ambari/apache-ambari-2.7.3-src/ambari-web\n[DEBUG] Executing command line [/opt/ambari/apache-ambari-2.7.3-src/ambari-web/node/yarn/dist/bin/yarn, install, --ignore-engines, --pure-lockfile]\n[INFO] yarn install v0.23.2\n[ERROR] warning Ambari@2.4.0: No license field\n[INFO] [1/4] Resolving packages...\n[INFO] [2/4] Fetching packages...\n[ERROR] warning fsevents@0.3.8: The platform "linux" is incompatible with this module.\n[INFO] info "fsevents@0.3.8" is an optional dependency and failed compatibility check. Excluding it from installation.\n[INFO] info "fsevents@1.1.1" is an optional dependency and failed compatibility check. Excluding it from installation.\n[ERROR] warning fsevents@1.1.1: The platform "linux" is incompatible with this module.\n[INFO] [3/4] Linking dependencies...\n[INFO] [4/4] Building fresh packages...\n[ERROR] error /opt/ambari/apache-ambari-2.7.3-src/ambari-web/node_modules/mocha-phantomjs/node_modules/phantomjs: Command failed.\n[INFO] info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.\n[ERROR] Exit code: 1\n[ERROR] Command: sh\n[ERROR] Arguments: -c node install.js\n[ERROR] Directory: /opt/ambari/apache-ambari-2.7.3-src/ambari-web/node_modules/mocha-phantomjs/node_modules/phantomjs\n[ERROR] Output:\n[ERROR] Downloading https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2\n[ERROR] Saving to /tmp/phantomjs/phantomjs-1.9.7-linux-x86_64.tar.bz2\n[ERROR] Receiving...\n[ERROR] \n[ERROR] Error making request.\n[ERROR] Error: read ECONNRESET\n[ERROR]     at exports._errnoException (util.js:907:11)\n[ERROR]     at TLSWrap.onread (net.js:557:26)\n[ERROR] \n[ERROR] Please report this full log at https://github.com/Medium/phantomjs\n'
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "**发现编译保持，原因是yarn变量冲突，开始我服务器是使用脚本安装过hadoop的，全局变量并没有删除，\n注释掉全局变量后，在重新安装。即可\n**"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "[INFO] Ambari Main 2.7.3.0.0 .............................. SUCCESS [  9.725 s]\n[INFO] Apache Ambari Project POM 2.7.3.0.0 ................ SUCCESS [  0.255 s]\n[INFO] Ambari Web 2.7.3.0.0 ............................... SUCCESS [01:57 min]\n[INFO] Ambari Views 2.7.3.0.0 ............................. SUCCESS [09:44 min]\n[INFO] Ambari Admin View 2.7.3.0.0 ........................ FAILURE [05:03 min]\n[INFO] ambari-utility 1.0.0.0-SNAPSHOT .................... SKIPPED\n[INFO] ambari-metrics 2.7.3.0.0 ........................... SKIPPED\n[INFO] Ambari Metrics Common 2.7.3.0.0 .................... SKIPPED\n[INFO] Ambari Metrics Hadoop Sink 2.7.3.0.0 ............... SKIPPED\n....\n[ERROR] Failed to execute goal org.codehaus.mojo:exec-maven-plugin:1.2.1:exec (Bower install) on project ambari-admin: Command execution failed. Process exited with an error: 1 (Exit value: 1) -> [Help 1]\n[ERROR] \n[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.\n[ERROR] Re-run Maven using the -X switch to enable full debug logging.\n[ERROR] \n[ERROR] For more information about the errors and possible solutions, please read the following articles:\n[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException\n[ERROR] \n[ERROR] After correcting the problems, you can resume the build with the command\n[ERROR]   mvn <goals> -rf :ambari-admin\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("问题多多啊")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//提示过多的验证")
          ]),
          _vm._v(
            "\n\t \n\t[ERROR] Failed to execute goal org.apache.rat:apache-rat-plugin:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.12")]),
          _vm._v(":check ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v(
            ") on project ambari: Too many files with unapproved license: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" See RAT report in: /opt/ambari/apache-ambari-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3-src/target/rat.txt -> [Help "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("]\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("解决办法")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tmvn -B clean install rpm:rpm -DnewVersion="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v(".3.0.0 -DbuildNumber="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4295")]),
          _vm._v(
            "bb16c439cbc8fb0e7362f19768dde1477868 -DskipTests -Dpython.ver="
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"python >= 2.6"')
          ]),
          _vm._v(" -Drat.skip="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [
          _vm._v("放弃从网络下载安装！！！！，网络不行啊 啊啊啊啊啊啊")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          {
            attrs: {
              href:
                "https://cwiki.apache.org/confluence/display/AMBARI/Installation+Guide+for+Ambari+2.7.3"
            }
          },
          [_vm._v("安装方式来自apache ambari")]
        )
      ]),
      _vm._v(" "),
      _c("h2", { attrs: { id: "%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 离线安装")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("配置一个本地源服务\n"),
          _c("ul", [
            _c("li", [
              _vm._v("安装服务器 "),
              _c(
                "a",
                { attrs: { href: "http://httpd.apache.org/docs/2.4/" } },
                [_vm._v("apache httpd")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    sudo yum install httpd\n\tsudo systemctl enable httpd\n\tsudo systemctl start httpd\n   \n   "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//查看配置httpd.conf")
          ]),
          _vm._v("\n   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 ~]# vi /etc/httpd/conf/httpd.conf \n   \n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//获取配置网站的目录")
          ]),
          _vm._v(
            "\n   \n   <Directory />\n     AllowOverride none\n     Require all denied\n   </Directory>\n\n\n   "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//chrome ")]),
          _vm._v("\n   \n   验证是否OK！\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("机器节点安装ssh 免密登录")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//执行这个")]),
          _vm._v("\n    [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 /]# ssh-keygen\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//将生成的公钥copy授权列表")
          ]),
          _vm._v("\n    [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 /]# id_rsa.pub >> .ssh/authorize_keys\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//test")]),
          _vm._v("\n    \n    ssh localhost\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//进入则表示成功")
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [_c("code", [_vm._v(" 一定要做ssh localhost 自验证。\n")])])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("**copy id_rsa.pub **")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tssh-copy-id -i .ssh/id_rsa.pub  username"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@ip")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("时间同步")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    yum install -y ntpdate\n   \n    ntpdate cn.pool.ntp.org\n   \n    "
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//查看 ")]),
          _vm._v("\n    date\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//硬件时间")]),
          _vm._v("\n    hwclock\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//修改时区")]),
          _vm._v("\n\t timedatectl set-timezone Asia/Shanghai\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("虚拟机器")]),
          _vm._v(" "),
          _c("p", [_c("strong", [_vm._v("先假定集群的ips")])])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "hostname: hadoop01  192.168.1.125 (这个不是)\nhostname: hadoop02  192.168.1.124\nhostname: hadoop03  192.168.1.123\nhostname: hadoop04  192.168.1.122\nhostname: hadoop05  192.168.1.121\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [_vm._v("其他的虚拟机在我开发电脑上，哎硬件有限")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("1、 step 首先设定机器固定IP")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//进入 ")]),
          _vm._v("\n [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 /]#  cd /etc/sysconfig/network-scripts/\n \n [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 network-scripts]# vi ifcfg-enp0s31f6\n \n [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "01 network-scripts]# vi ifcfg-enp0s31f6\n\n   TYPE=Ethernet\n   PROXY_METHOD=none\n   BROWSER_ONLY=no\n   BOOTPROTO="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(
            "\n   DEFROUTE=yes\n   IPV4_FAILURE_FATAL=no\n   IPV6INIT=yes\n   IPV6_AUTOCONF=yes\n   IPV6_DEFROUTE=yes\n   IPV6_FAILURE_FATAL=no\n   IPV6_ADDR_GEN_MODE=stable-privacy\n   NAME=enp0s31f6\n   UUID=ba77043f-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7270")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("490")]),
          _vm._v("b-a74a-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "b7d790a628b\n   DEVICE=enp0s31f6\n   ONBOOT=yes\n   PREFIXO0="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("255.255")]),
          _vm._v(".255.0\n   GATEWAY0="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.1\n   DNS0="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.8")]),
          _vm._v(".8.8\n   DNS1="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.8")]),
          _vm._v(".4.4\n   IPADDR="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.125\n   PREFIX="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32")]),
          _vm._v("\n   GATEWAY="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.1\n   \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_c("strong", [_vm._v("另一个ip配置")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\tTYPE=Ethernet\n   PROXY_METHOD=none\n   BROWSER_ONLY=no\n   BOOTPROTO="
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(
            "\n   DEFROUTE=yes\n   IPV4_FAILURE_FATAL=no\n   IPV6INIT=yes\n   IPV6_AUTOCONF=yes\n   IPV6_DEFROUTE=yes\n   IPV6_FAILURE_FATAL=no\n   IPV6_ADDR_GEN_MODE=stable-privacy\n   NAME=enp0s31f6\n   UUID=ba77043f-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7270")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("490")]),
          _vm._v("b-a74a-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "b7d790a628b\n   DEVICE=enp0s31f6\n   ONBOOT=yes\n   PREFIXO0="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("255.255")]),
          _vm._v(".255.0\n   GATEWAY0="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.1\n   DNS0="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.8")]),
          _vm._v(".8.8\n   DNS1="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.8")]),
          _vm._v(".4.4\n   IPADDR="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.124\n   PREFIX="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32")]),
          _vm._v("\n   GATEWAY="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.1\n   \n   ....\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("2、修改hosts")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "01 network-scripts]# vi /etc/hosts\n\n   #修改 localhost.localdomain 为hadoop01\n   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.125 hadoop01\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.124 hadoop02\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.123 hadoop03\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.122 hadoop04\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("192.168")]),
          _vm._v(".1.121 hadoop05\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("127.0")]),
          _vm._v(
            ".0.1   localhost localhost.localdomain localhost4 localhost4.domain4\n   ::"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "         localhost localhost.localdomain localhost6 localhost6.domain6\n   \n   \n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("3、验证域名")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 network-scripts]# hostname\n   hadoop01\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("机器是centos 7 系统")])]),
      _vm._v(" "),
      _c("p", [_vm._v("使用")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t\tOS\tFormat\tURL\n\t\tRedHat "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\t\t\n\t\tCentOS "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\t\t\n\t\tOracle Linux "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\t\t\n\t\tBase URL\thttp:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//public-repo-1.hortonworks.com/ambari/centos7/2.x/updates/2.7.3.0"
            )
          ]),
          _vm._v("\n\t\tRepo File\thttp:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//public-repo-1.hortonworks.com/ambari/centos7/2.x/updates/2.7.3.0/ambari.repo"
            )
          ]),
          _vm._v("\n\t\tTarball md5 | asc\thttp:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//public-repo-1.hortonworks.com/ambari/centos7/2.x/updates/2.7.3.0/ambari-2.7.3.0-centos7.tar.gz"
            )
          ]),
          _vm._v("\n   \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("hdp")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\tRedHat "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\n\tCentOS "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\t\n\tOracle Linux "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\n\t\n\tHDP-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.1")]),
          _vm._v(".0.0\t"),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("HDP\tVersion Definition "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("File")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(VDF)")]),
            _vm._v("\thttp:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//public-repo-1.hortonworks.com/HDP/centos7/3.x/updates/3.1.0.0/HDP-3.1.0.0-78.xml"
              )
            ]),
            _vm._v("\n\tBase URL\thttp:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//public-repo-1.hortonworks.com/HDP/centos7/3.x/updates/3.1.0.0"
              )
            ]),
            _vm._v("\n\tRepo File\thttp:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//public-repo-1.hortonworks.com/HDP/centos7/3.x/updates/3.1.0.0/hdp.repo"
              )
            ]),
            _vm._v("\n\tTarball md5 | asc\thttp:"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v(
                "//public-repo-1.hortonworks.com/HDP/centos7/3.x/updates/3.1.0.0/HDP-3.1.0.0-centos7-rpm.tar.gz"
              )
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("使用公共：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//下载yum 仓库")
          ]),
          _vm._v("\n      wget  http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//public-repo-1.hortonworks.com/ambari/centos7/2.x/updates/2.7.3.0/ambari.repo"
            )
          ]),
          _vm._v("\n      \n      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//拷贝到域名下")
          ]),
          _vm._v("\n      cp ambari.repo /etc/yum.repos.d/\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("安装ambari-server")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("    yum install -y ambari-server\n\n")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("设定ambari-server 默认链接")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//第一次链接推荐默认数据库，本人在使用mysql时出现n多bug，最后不得不重装，重装出现的更多的bug。"
            )
          ]),
          _vm._v("\n    ambari-server setup -silent\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("在各节点上安装ambari-agent")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\n   yum install -y  ambari-agent\n   \n\n")])
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

/***/ "./src/pages/md/example_ambari_集群管理_1-1_部署.md":
/*!****************************************************!*\
  !*** ./src/pages/md/example_ambari_集群管理_1-1_部署.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_ambari_1_1_md_vue_type_template_id_624a0bde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde& */ "./src/pages/md/example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _example_ambari_1_1_md_vue_type_template_id_624a0bde___WEBPACK_IMPORTED_MODULE_0__["render"],
  _example_ambari_1_1_md_vue_type_template_id_624a0bde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/example_ambari_集群管理_1-1_部署.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_ambari_1_1_md_vue_type_template_id_624a0bde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/example_ambari_集群管理_1-1_部署.md?vue&type=template&id=624a0bde&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_ambari_1_1_md_vue_type_template_id_624a0bde___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_ambari_1_1_md_vue_type_template_id_624a0bde___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-191b2e70.js.map