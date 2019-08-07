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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/web_vue_SSR_1-1_ssr.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("h1", { attrs: { id: "vue-ssr-%E6%90%AD%E5%BB%BA" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#vue-ssr-%E6%90%AD%E5%BB%BA",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Vue SSR 搭建")
      ]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id:
              "%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93ssr"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93ssr",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 什么是服务端渲染SSR")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              'Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。\n\n服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。\n----[Vue SSR 指南](https://ssr.vuejs.org/zh/)\n'
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h2", { attrs: { id: "%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81ssr" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81ssr",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 为什么要SSR")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "* 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。\n* 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。无需等待所有的 JavaScript 都完成下载并执行，才显示服务器渲染的标记，所以你的用户将会更快速地看到完整渲染的页面。通常可以产生更好的用户体验，并且对于那些「内容到达时间(time-to-content) 与转化率直接相关」的应用程序而言，服务器端渲染 (SSR) 至关重要。\n----来自[Vue SSR 指南](https://ssr.vuejs.org/zh/)\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id:
              "%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%EF%BC%88%E5%90%8E%E9%9D%A2%E6%9C%89%E5%AE%8C%E6%95%B4%E5%AE%9E%E4%BE%8B%E5%8C%85%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80%EF%BC%89"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%EF%BC%88%E5%90%8E%E9%9D%A2%E6%9C%89%E5%AE%8C%E6%95%B4%E5%AE%9E%E4%BE%8B%E5%8C%85%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80%EF%BC%89",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 开始搭建（后面有完整实例包下载地址）")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              " * 给出Vue SSR 没有给出的细节，需要掌握的东西有点多，对于新手上手有些困难。\n *  express 使用注意点，注意express.static 静态文件的路径地址。\n *  示例中直接把dist作为服务的静态文件路径地址了。\n\t 通过vue-server-renderer 生成的json文件\n\t vue-ssr-client-manifest.json\n\t vue-ssr-server-bundle.json\n\t 的作用，请仔细参考Vue SSR指南。\n *  本示例只是简单的搭建，后期会继续完善，敬请期待。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/*dist/vue-ssr-client-manifest.json*/")
          ]),
          _vm._v("\n\t  "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"publicPath"')]),
          _vm._v(": "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('""')]),
          _vm._v(",\n\t  "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"all"')]),
          _vm._v(": [\n\t    "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"main.js"')]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/*静态文件放置的位置*/")
          ]),
          _vm._v("\n\t  ],\n\t  "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"initial"')]),
          _vm._v(": [\n\t    "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"main.js"')]),
          _vm._v("\n\t  ],\n")
        ])
      ]),
      _vm._v(" "),
      _c(
        "h1",
        {
          attrs: {
            id:
              "%E4%B8%8D%E5%90%ABajax-%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82%EF%BC%8C%E5%8D%B3%E4%B9%9F%E4%B8%8D%E5%8C%85%E5%90%ABvue%E5%85%A8%E5%AE%B6%E6%A1%B6"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E4%B8%8D%E5%90%ABajax-%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82%EF%BC%8C%E5%8D%B3%E4%B9%9F%E4%B8%8D%E5%8C%85%E5%90%ABvue%E5%85%A8%E5%AE%B6%E6%A1%B6",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 不含Ajax 数据请求，即也不包含Vue全家桶")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("主要工具列表")]),
          _vm._v(" "),
          _c("div", { staticClass: "success custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("pre", [
              _c("code", [
                _vm._v(
                  "*  Vue@2.x\n*  vue-server-renderer@2.X\n*  webpack@4.x\n*  express@4.x\n"
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("思路")]),
          _vm._v(" "),
          _c("div", { staticClass: "success custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("pre", [
              _c("code", [
                _vm._v(
                  "* 在nodejs 环境中把vue模板生成 html 字符串，通过express get或者post 请求发送给浏览器。\n* 发送给浏览器是编译OK的html页面，vue组件不可用，没有虚拟的DOM渲染。\n* Vue SSR 中把渲染拆分为两部分，html 在服务端渲染（数据也可以）即*entry-server.js*。\n* Vue 虚拟Dom 通过 *entry-client.js*,在浏览器端建立DOM。\n"
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("行动")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*创建一个项目文件夹*/")
              ]),
              _vm._v(
                "\n  \n      mkdir myapp\n      \n      cd myapp\n      \n      npm init \n   \n\t "
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*安装相信的npm pack*/")
              ]),
              _vm._v(
                "\n\t \n\t npm install vue vue-server-renderer  vue-router vue-compiler-template --save-dev\n\t \n\t npm install webpack webpack-cli\n\t \n\t ....\n"
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "这个demo中相应的依赖包列表如下,缺少请使用npm install packname 安装。"
            )
          ]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("    "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"dependencies"')
              ]),
              _vm._v(": {\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"css-loader"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^2.1.1"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"express"')]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^4.17.1"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"file-loader"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^4.0.0"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"sass-loader"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^7.1.0"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"style-loader"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^0.23.1"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"vue"')]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^2.6.10"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"vue-loader"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^15.7.0"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"vue-router"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^3.0.6"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"vue-server-renderer"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^2.6.10"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"vue-template-compiler"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^2.6.10"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"webpack"')]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^4.33.0"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"webpack-dev-middleware"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^3.7.0"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"webpack-merge"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^4.2.1"')]),
              _vm._v(",\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"webpack-node-externals"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^1.7.2"')]),
              _vm._v("\n    },\n    "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"devDependencies"')
              ]),
              _vm._v(": {\n      "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"webpack-cli"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"^3.3.3"')]),
              _vm._v("\n    }\n    \n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("创建的目录结构如下：")]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src: "http://fandong90.github.io/static/img/demo1frame.png",
                alt: "demo1目录结构图"
              }
            })
          ]),
          _vm._v(" "),
          _c("pre", [
            _c("code", [
              _vm._v(
                "  *src : 用于编写Vue相关源码位置\n  *build: 用与webpack打包编译，启动nodejs\n  *node_modules: node lib 包默认位置\n  *dist: 打包生成的文件路径\n  /*...*/\n"
              )
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("构建Vue 实例")])]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*src/main.js*/")
              ]),
              _vm._v("\n\t\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" Vue from "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'vue'")]),
              _vm._v(";\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" App from "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'./App.vue'")
              ]),
              _vm._v(";\n\t\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v("  { createRouter } from "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'./Routers/index'")
              ]),
              _vm._v(" ;\n\t\n\t"),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("export function "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("createApp")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n\t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" router = createRouter();\n\t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" app = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(
                " Vue({\n\t        router,\n\t        render: h=>h(App)\n\t    });\n\t\n\t    "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" { app, router };\n\t}\n")
            ])
          ]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _vm._v(
                "构建路由（最简也可以去掉路由，想了下去掉就没了啥，主要是后面要加上vue全家桶继续构建 ）"
              )
            ])
          ]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("   "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*src/Routers/index.js*/")
              ]),
              _vm._v("\n   \n    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" Vue from "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'vue'")]),
              _vm._v(";\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" VueRouter from "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'vue-router'")
              ]),
              _vm._v(";\n\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" Foo from "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'../Components/foo.vue'")
              ]),
              _vm._v(";\n\t\n\t\n\tVue.use(VueRouter);\n\t\n\t"),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("export function "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("createRouter")
                ]),
                _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
              ]),
              _vm._v("{\n\t\n\t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" VueRouter({\n\t        mode:"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'history'")]),
              _vm._v(",\n\t        routes:[ { path:"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'/'")]),
              _vm._v(",component: Foo }]\n\t    });\n\t} \n\t\n")
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("构建App.vue")])]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*src/App.vue*/")
              ]),
              _vm._v(
                "\n  <template>\n    <div>\n        <router-view></router-view>\n    </div>\n\t</template>\n\t\n\t<script>\n\texport "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
              _vm._v(
                " {\n\t\n\t}\n\t</script>\n\t\n\t<style>\n\t\n\t</style>\n"
              )
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("构建entry-server.js")])]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "/*src/entry-server.js\n\t\t *在node 中运行js，渲染Vue组件（服务端），使用vue-server-renderer 函数 createBundleRenderer 生成html字\t\t *符串。\n\t\t*/"
                )
              ]),
              _vm._v("\n\t\t\n\t\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
              _vm._v(" { createApp } from "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'./main'")]),
              _vm._v(";\n\n \texport "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
              _vm._v(" context => {\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "// 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，"
                )
              ]),
              _vm._v("\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 以便服务器能够等待所有的内容在渲染前，")
              ]),
              _vm._v("\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 就已经准备就绪。")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Promise((resolve, reject) => {\n \t\n \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" { app, router } = createApp();\n \t\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 设置服务器端 router 的位置")
              ]),
              _vm._v("\n \t    router.push(context.url)\n \t\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 等到 router 将可能的异步组件和钩子函数解析完")
              ]),
              _vm._v("\n \t    router.onReady(() => {\n \t      "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(
                " matchedComponents = router.getMatchedComponents()\n \t      "
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 匹配不到的路由，执行 reject 函数，并返回 404")
              ]),
              _vm._v("\n \t      "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
              _vm._v(" (!matchedComponents.length) {\n \t        "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
              _vm._v(" reject({ code: "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("404")]),
              _vm._v(" })\n \t      }\n \t\n \t      "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// Promise 应该 resolve 应用程序实例，以便它可以渲染")
              ]),
              _vm._v(
                "\n \t      resolve(app)\n \t    }, reject)\n \t  })\n \t}\n \t----来自[Vue SSR 指南](https:"
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//ssr.vuejs.org/zh/)")
              ]),
              _vm._v("\n")
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("构建entry-client.js")])]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*src/entry-client.js 用于浏览器端渲染 */")
              ]),
              _vm._v("\n\t\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" { app , router } = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'./main'")]),
              _vm._v(").createApp();\n\n    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*不考虑数据问题*/")
              ]),
              _vm._v("\n \trouter.onReady(() => {\n \t\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/**路由准备好挂载 */")
              ]),
              _vm._v("\n \t    app.$mount("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'#app'")]),
              _vm._v(");\n \t    \n \t});\n \t\n")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "danger custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("pre", [
              _c("code", [
                _vm._v(
                  " entry-server.js 和 entry-client.js \n \n 经过entry-server.js 的vue 实例，包括部分数据在服务端渲染，\n 页面的交互，虚拟dom的Vue组件有entry-client.js 在浏览器端重建。\n"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ul", [_c("li", [_vm._v("webpack 打包构建")])]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "/*build/webpack.common.js \n\t\t* 通用的配置文件\n\t\t*/"
                )
              ]),
              _vm._v("\n\t\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" path = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'path'")]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" VueLoaderPlugin   = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'vue-loader/lib/plugin'")
              ]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" rules = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'./webpack.rules'")
              ]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("module")]),
              _vm._v("."),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("exports")]),
              _vm._v("={\n \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("module")]),
              _vm._v(
                ":{\n \t        rules: rules.config\n \t    },\n \t    resolve: {\n \t        extensions: ["
              ),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'.json'")]),
              _vm._v(", "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'.js'")]),
              _vm._v(", "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'.jsx'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'.vue'")]),
              _vm._v("],\n \t        alias:{\n \t            "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'@'")]),
              _vm._v(": path.resolve(__dirname,"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'src'")]),
              _vm._v(
                "),\n \t        }\n \t    },\n \t    plugins:[\n \t        "
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" VueLoaderPlugin()\n \t    ]\n \t}\n \t\n \t\n\t\t\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("server webpack")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*build/webpack.server.js*/")
              ]),
              _vm._v("\n  \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" path = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'path'")]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" merge = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'webpack-merge'")
              ]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" baseConfig = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'./webpack.common.js'")
              ]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" VueSSRServerPlugin = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'vue-server-renderer/server-plugin'")
              ]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("module")]),
              _vm._v("."),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("exports")]),
              _vm._v(" = merge(baseConfig, {\n \t  mode:"),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'development'")
              ]),
              _vm._v(",\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 将 entry 指向应用程序的 server entry 文件")
              ]),
              _vm._v("\n \t  entry: path.resolve(__dirname,"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'src/entry-server.js'")
              ]),
              _vm._v("),\n \t\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "// 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，"
                )
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 并且还会在编译 Vue 组件时，")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "// 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。"
                )
              ]),
              _vm._v("\n \t  target: "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'node'")]),
              _vm._v(",\n \t\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 对 bundle renderer 提供 source map 支持")
              ]),
              _vm._v("\n \t  devtool: "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'source-map'")
              ]),
              _vm._v(",\n \t\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "// 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)"
                )
              ]),
              _vm._v("\n \t  output: {\n \t    libraryTarget: "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'commonjs2'")
              ]),
              _vm._v("\n \t  },\n \t\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "// // https://webpack.js.org/configuration/externals/#function"
                )
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// // https://github.com/liady/webpack-node-externals")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "// // 外置化应用程序依赖模块。可以使服务器构建速度更快，"
                )
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// // 并生成较小的 bundle 文件。")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// externals: nodeExternals({")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//   // 不要外置化 webpack 需要处理的依赖模块。")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "//   // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，"
                )
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v(
                  "//   // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单"
                )
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//   whitelist: /\\.css$/")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("// }),")]),
              _vm._v("\n \t\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 这是将服务器的整个输出")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 构建为单个 JSON 文件的插件。")
              ]),
              _vm._v("\n \t  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 默认文件名为 `vue-ssr-server-bundle.json`")
              ]),
              _vm._v("\n \t  plugins: [\n \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(
                " VueSSRServerPlugin()\n \t  ]\n });\n  ----来自[Vue SSR 指南](https:"
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//ssr.vuejs.org/zh/)")
              ]),
              _vm._v("\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("client webpack")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*build/webpack.client.js*/")
              ]),
              _vm._v("\n\t\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" path = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'path'")]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" webpack = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'webpack'")]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" merge = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'webpack-merge'")
              ]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" baseConfig = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'./webpack.common.js'")
              ]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" VueSSRClientPlugin = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'vue-server-renderer/client-plugin'")
              ]),
              _vm._v(")\n \t\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("module")]),
              _vm._v("."),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("exports")]),
              _vm._v(
                " = merge(baseConfig, {\n \t  entry:  path.resolve(__dirname,"
              ),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'src/entry-client.js'")
              ]),
              _vm._v("),\n \t  mode:"),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'development'")
              ]),
              _vm._v(
                ",\n \t  optimization:{\n \t    splitChunks:{\n \t      cacheGroups: {\n \t        commons: {\n \t            name: "
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"manifest"')
              ]),
              _vm._v(",\n \t            chunks: "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"initial"')]),
              _vm._v(",\n \t            minChunks: "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
              _vm._v(
                "\n \t        }\n \t      }\n \t    }\n \t  },\n \t  plugins: [\n \t    "
              ),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 此插件在输出目录中")
              ]),
              _vm._v("\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// 生成 `vue-ssr-client-manifest.json`。")
              ]),
              _vm._v("\n \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" VueSSRClientPlugin()\n \t  ]\n \t})\n\t\t\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("webpack module.rules 文件")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*build/webpack.rules.js*/")
              ]),
              _vm._v("\n\t\t\n\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/** config  webpack moudle.rules loader */")
              ]),
              _vm._v("\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("module")]),
              _vm._v("."),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("exports")]),
              _vm._v(
                "={\n \t  config:[\n \t    {\n \t        test: /\\.css$/,\n \t        use: [\n \t          "
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'style-loader'")
              ]),
              _vm._v(",\n \t          "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'css-loader'")
              ]),
              _vm._v(
                "\n \t        ]\n \t      },\n \t      {\n \t        test:/\\.scss/,\n \t        use:[\n \t          {loader:"
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'css-loader'")
              ]),
              _vm._v(
                "}\n \t          ,\n \t          {\n \t            loader: "
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"sass-loader"')
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// compiles Sass to CSS")
              ]),
              _vm._v(
                "\n \t          }\n \t        ]\n \t      },\n \t      {\n \t         test: /\\.(png|svg|jpg|gif)$/,\n \t         use: [\n \t           "
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'file-loader'")
              ]),
              _vm._v(
                "\n \t         ]\n \t       },\n \t       {\n \t            test: /\\.(woff|woff2|eot|ttf|otf)$/,\n \t            use: [\n \t              "
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'file-loader'")
              ]),
              _vm._v(
                "\n \t            ]\n \t       },\n \t       {\n \t           test:/\\.vue$/,\n \t           loader:"
              ),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'vue-loader'")
              ]),
              _vm._v("\n \t       }\n \t   ]\n \t};\n \t\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("express 服务搭建")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\t\t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("/*build/server.js*/")
              ]),
              _vm._v("\n\t\t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" Express = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'express'")]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" app = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
              _vm._v(" Express();\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" { createBundleRenderer } = require("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'vue-server-renderer'")
              ]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" path = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'path'")]),
              _vm._v(");\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" template = require("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'fs'")]),
              _vm._v(").readFileSync(path.resolve(__dirname,"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'index.template.html'")
              ]),
              _vm._v("), "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'utf-8'")]),
              _vm._v(")\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" serverBundle = require( path.resolve(__dirname,"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'dist/vue-ssr-server-bundle.json'")
              ]),
              _vm._v("))\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" clientManifest = require(path.resolve(__dirname,"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'dist/vue-ssr-client-manifest.json'")
              ]),
              _vm._v("))\n \t"),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(
                " renderer = createBundleRenderer(serverBundle, {\n \t  template,\n \t  clientManifest\n \t})\n \t\n \tapp.use(Express."
              ),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
              _vm._v("(path.resolve(__dirname,"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'..'")]),
              _vm._v(","),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'dist'")]),
              _vm._v(")));\n \t\n \t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("// app.use(webpackDevMiddleware(compiler,{")
              ]),
              _vm._v("\n \t"),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//     publicPath: config.output.publicPath")
              ]),
              _vm._v("\n \t"),
              _c("span", { staticClass: "hljs-comment" }, [_vm._v("// }));")]),
              _vm._v("\n \t\n \tapp.get("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"*"')]),
              _vm._v(",(req, res)=>{\n \t    "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
              _vm._v(" context = { url: req.url};\n \t    "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//console.log(context);")
              ]),
              _vm._v(
                "\n \t    renderer.renderToString(context,(err,html)=>{\n \t        console.log(html);\n \t        res.end(html);\n \t    });\n \t});\n \t\n \tapp.listen("
              ),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("3000")]),
              _vm._v(", () => {\n \t    console.log("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'App listening on port 3000!'")
              ]),
              _vm._v(");\n \t});\n\t\t\n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("启动命令 package.json")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v(" \n\t\t"),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"scripts"')]),
              _vm._v(": {\n     "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"test"')]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"echo \\"Error: no test specified\\" && exit 1"')
              ]),
              _vm._v(",\n     "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"build:server"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"webpack --config  ./build/webpack.server.js"')
              ]),
              _vm._v(",\n     "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"build:client"')
              ]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v('"webpack --config  ./build/webpack.client.js"')
              ]),
              _vm._v(",\n     "),
              _c("span", { staticClass: "hljs-string" }, [_vm._v('"dev"')]),
              _vm._v(": "),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v(
                  '" npm run build:server && npm run build:client && node ./build/server.js"'
                )
              ]),
              _vm._v("\n    }\n    \n    npm run dev\n    \n")
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("本文完。"),
            _c(
              "a",
              { attrs: { href: "https://github.com/fandong90/VueDemo.git" } },
              [_vm._v("demo git")]
            )
          ])
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

/***/ "./src/pages/md/web_vue_SSR_1-1_ssr.md":
/*!*********************************************!*\
  !*** ./src/pages/md/web_vue_SSR_1-1_ssr.md ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_vue_SSR_1_1_ssr_md_vue_type_template_id_3f5634fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa& */ "./src/pages/md/web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _web_vue_SSR_1_1_ssr_md_vue_type_template_id_3f5634fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _web_vue_SSR_1_1_ssr_md_vue_type_template_id_3f5634fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/web_vue_SSR_1-1_ssr.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa&":
/*!****************************************************************************!*\
  !*** ./src/pages/md/web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_vue_SSR_1_1_ssr_md_vue_type_template_id_3f5634fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_vue_SSR_1-1_ssr.md?vue&type=template&id=3f5634fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_vue_SSR_1_1_ssr_md_vue_type_template_id_3f5634fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_vue_SSR_1_1_ssr_md_vue_type_template_id_3f5634fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-c784734.js.map