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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        { attrs: { id: "hbase-%E5%AD%A6%E4%B9%A0%E7%96%91%E9%97%AE" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#hbase-%E5%AD%A6%E4%B9%A0%E7%96%91%E9%97%AE",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" Hbase  学习疑问")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("strong", [_vm._v("HTable Api 的高级方法，用在哪些地方？")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "void prewarmRegionCache(Map<HRegionInfo,HServerAddress> regionMap)\n\nstatic void setRegionCachePrefetch(table,enable)\n\nstatic boolean getRegionCachePrefetch(table)\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              " 用于操作耗时的操作的方法，用户可以先获取一个region的信息来预热一个下region。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("Bytes vs  ByteBuffer 类")])]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [_c("code", [_vm._v("Bytes 是静态方法。\n")])])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("过滤器 参考列过滤器（DependentColumnFilter)")]),
          _vm._v(" "),
          _c("p", [_vm._v("参考过滤的使用方式？？？")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _vm._v("DependentColumnFilter(byte[] family,byte[] qualifier)")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "DependentColumnFilter(byte[] family,byte[] qualifier,boolean dropDependentColumn)"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "DependentColumnFilter(byte[] family,byte[] qualifier,boolean\ndropDependentColumn,CompareOp valueCompareOp,ByteArrayComparable valueComparator)"
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("如何理解这个过滤器：\n？？？")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("分页过滤器 PageFilter")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "在物理分区上分离的服务器中并行执行过滤操作时，在不同的region 服务器上并行的过滤器不能共享他们的现在的状态和边界，因此，每个过滤器都会在完成扫描前获取pageCount行的结果，这种情况使得分页过滤器可能失效，极有可能返回的比所需要的多，最后客户端在合并结果时可以选择返回的结构也可以使用api进行过滤。"
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("为什么 并行执行扫描 分页过滤器会失效 ？？？？？")])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("解决之道：")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "客户端代码会记录本地扫描的最后行，并在下一次获取数据时把记录的上次扫描的最后一行设为这次扫描的起始行，同时保留相同的过滤属性，然后依次迭代。\n分页时，对一次返回的数据设定了严格的要求，一次扫描的行数大于分页的大小，一旦发生，过滤器有一种机制通知region服务器停止扫描。"
        )
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("Import data to hbase")])]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "java.lang.NoClassDefFoundError: org/apache/http/client/HttpClient\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "引入相应的jar包\n<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient -->\n<dependency>\n    <groupId>org.apache.httpcomponents</groupId>\n    <artifactId>httpclient</artifactId>\n    <version>4.5.6</version>\n</dependency>\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("实现一个 web在线查询应用")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "  \n    font tech: Nodejs + Vue\n    \n    服务： spring boot\n    \n    后端： hadoop + sqoop + hive + hbase\n    \n    "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//查询 、分页、 写入")
          ]),
          _vm._v("\n  \n")
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("    导入数据：\n\n    \n\n")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\n    ??????\n    \n")])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("Hbase 返回某一列的值，是去重之后的结果，怎么做？")])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "Hbase 分区返回一个Pair<byte[][],byte[][]>  table.getStartEndKeys();"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "第一个开始key：  endKey: getfirst()[0]\n第二个开始key是  是第一个结束key  endKey  getSecond()[0]\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_c("p", [_vm._v("Hbase 如何修改列名")])]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _vm._v(
              "Hbase 使用 avro ，thrif 开启网关服务。，为什么使用avro、thrif 框架。"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("如何使用？")])
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

/***/ "./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md":
/*!*****************************************************!*\
  !*** ./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_hbase_1_1_md_vue_type_template_id_2c2e830a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a& */ "./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_hbase_1_1_md_vue_type_template_id_2c2e830a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_hbase_1_1_md_vue_type_template_id_2c2e830a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a&":
/*!************************************************************************************!*\
  !*** ./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hbase_1_1_md_vue_type_template_id_2c2e830a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hbase_问题_1-1_基本内容发问.md?vue&type=template&id=2c2e830a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hbase_1_1_md_vue_type_template_id_2c2e830a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hbase_1_1_md_vue_type_template_id_2c2e830a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=8e06a89.js.map