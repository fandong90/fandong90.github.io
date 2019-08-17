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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/web_express_基础_1-1_开始.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06& ***!
  \********************************************************************************************************************************************************************************************************************/
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
              "express-%E5%AD%A6%E4%B9%A0%E4%BD%BF%E7%94%A8%E6%90%AD%E5%BB%BA---"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#express-%E5%AD%A6%E4%B9%A0%E4%BD%BF%E7%94%A8%E6%90%AD%E5%BB%BA---",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" Express 学习使用搭建 --")
        ]
      ),
      _vm._v(" "),
      _c(
        "h1",
        { attrs: { id: "%E4%BB%80%E4%B9%88%E6%98%AFexpress-%EF%BC%9F" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#%E4%BB%80%E4%B9%88%E6%98%AFexpress-%EF%BC%9F",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 什么是Express ？")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("Web 应用程序")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("API")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "使用您所选择的各种 HTTP 实用工具和中间件，快速方便地创建强大的 API。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("性能")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Express 提供精简的基本 Web 应用程序功能，而不会隐藏您了解和青睐的 Node.js 功能"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "h1",
        {
          attrs: {
            id:
              "%E8%A1%8C%E5%8A%A8%EF%BC%8C%E5%85%88%E8%BF%90%E8%A1%8C%E5%86%8D%E8%AF%B4"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E8%A1%8C%E5%8A%A8%EF%BC%8C%E5%85%88%E8%BF%90%E8%A1%8C%E5%86%8D%E8%AF%B4",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 行动，先运行再说")
        ]
      ),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("          "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//创建一个文件夹")
          ]),
          _vm._v(
            "\n          \n          $ mkdir myapp\n          \n          $ cd myapp\n          \n          "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// 使用npm 初始化")
          ]),
          _vm._v(
            "\n          \n          $ npm init\n          \n          $ npm install express --save\n          \n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "%E5%88%9B%E5%BB%BA-server.js" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E5%88%9B%E5%BB%BA-server.js",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 创建 server.js")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
          _vm._v(" express = require("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'express'")]),
          _vm._v(")\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("const")]),
          _vm._v(" app = express()\n   \n    app.get("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'/'")]),
          _vm._v(", (req, res) => res.send("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'Hello World!'")
          ]),
          _vm._v("))\n   \n    app.listen("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3000")]),
          _vm._v(", () => console.log("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'Example app listening on port 3000!'")
          ]),
          _vm._v("))\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "%E5%90%AF%E5%8A%A8" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#%E5%90%AF%E5%8A%A8", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 启动")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("    node  server.js\n    \n")])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("-----来自"),
        _c(
          "a",
          {
            attrs: {
              href: "http://www.expressjs.com.cn/starter/hello-world.html"
            }
          },
          [_vm._v("Express 官网")]
        )
      ]),
      _vm._v(" "),
      _c(
        "h1",
        { attrs: { id: "%E5%B7%B2%E7%BB%8F%E5%90%AF%E5%8A%A8ok%E3%80%82" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#%E5%B7%B2%E7%BB%8F%E5%90%AF%E5%8A%A8ok%E3%80%82",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 已经启动OK。")
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              " 恭喜你已经启动了一个express。接下让我们一步步构建一个完整的web。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "%E8%B7%AF%E7%94%B1" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#%E8%B7%AF%E7%94%B1", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 路由")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("什么是路由？")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "url 请求的地址，express 根据设定的path，监听是post、get方法，路由到相应的地址中"
            )
          ]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("  app.get("),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'/'")]),
              _vm._v(", (req, res) => res.send("),
              _c("span", { staticClass: "hljs-string" }, [
                _vm._v("'Hello World!'")
              ]),
              _vm._v("))\n  \n  "),
              _c("span", { staticClass: "hljs-comment" }, [
                _vm._v("//根路径，访问localhost:3000/ ")
              ]),
              _vm._v(
                "\n  \n  express 监听到，会执行返回 hello world!\n  \n  \n"
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li")
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

/***/ "./src/pages/md/web_express_基础_1-1_开始.md":
/*!***********************************************!*\
  !*** ./src/pages/md/web_express_基础_1-1_开始.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_express_1_1_md_vue_type_template_id_e25dbd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06& */ "./src/pages/md/web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _web_express_1_1_md_vue_type_template_id_e25dbd06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _web_express_1_1_md_vue_type_template_id_e25dbd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/web_express_基础_1-1_开始.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06&":
/*!******************************************************************************!*\
  !*** ./src/pages/md/web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_express_1_1_md_vue_type_template_id_e25dbd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_express_基础_1-1_开始.md?vue&type=template&id=e25dbd06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_express_1_1_md_vue_type_template_id_e25dbd06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_express_1_1_md_vue_type_template_id_e25dbd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-19215f2f.js.map