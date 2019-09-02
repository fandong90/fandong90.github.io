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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_zookeeper_基础_1-1_概述.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30& ***!
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
      _c("h3", { attrs: { id: "zookeeper-%E5%BC%80%E5%A7%8B" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#zookeeper-%E5%BC%80%E5%A7%8B",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Zookeeper 开始")
      ]),
      _vm._v(" "),
      _c("h3", { attrs: { id: "zookeeper-nodetype" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#zookeeper-nodetype", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Zookeeper nodeType")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("持久的（persistent)")]),
        _vm._v(" "),
        _c("li", [_vm._v("持久有序的（persistent_sequential)")]),
        _vm._v(" "),
        _c("li", [_vm._v("临时的（ephemeral)")]),
        _vm._v(" "),
        _c("li", [_vm._v("临时有序的（ephemeral_sequential)")])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", [_vm._v("启动zookeeper")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t \n\t "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//修改配置文件")
          ]),
          _vm._v("\n\t \n\t mv conf/zoo_sample.cfg conf/zoo.cfg\n\t \n\t "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//启动服务")]),
          _vm._v(
            "\n\t \n\t bin/zkServer.sh start-foreground\n\t \n\t -start-foreground 会输出打印的信息\n\t \n\t \n\t\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("多台服务启动是，报错为：")]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "\t\t\t2019-08-09 22:09:12,992 [myid:] - INFO  [main:QuorumPeerConfig@136] - Reading configuration from: ./z1.cfg\n\t2019-08-09 22:09:13,001 [myid:] - INFO  [main:QuorumPeer$QuorumServer@184] - Resolved hostname: hadoop01 to address: hadoop01/192.168.1.125\n\t2019-08-09 22:09:13,001 [myid:] - INFO  [main:QuorumPeer$QuorumServer@184] - Resolved hostname: hadoop01 to address: hadoop01/192.168.1.125\n\t2019-08-09 22:09:13,001 [myid:] - INFO  [main:QuorumPeer$QuorumServer@184] - Resolved hostname: hadoop01 to address: hadoop01/192.168.1.125\n\t2019-08-09 22:09:13,001 [myid:] - INFO  [main:QuorumPeerConfig@398] - Defaulting to majority quorums\n\t2019-08-09 22:09:13,002 [myid:] - ERROR [main:QuorumPeerMain@88] - Invalid config, exiting abnormally\n\torg.apache.zookeeper.server.quorum.QuorumPeerConfig$ConfigException: Error processing ./z1.cfg\n\t\tat org.apache.zookeeper.server.quorum.QuorumPeerConfig.parse(QuorumPeerConfig.java:156)\n\t\tat org.apache.zookeeper.server.quorum.QuorumPeerMain.initializeAndRun(QuorumPeerMain.java:104)\n\t\tat org.apache.zookeeper.server.quorum.QuorumPeerMain.main(QuorumPeerMain.java:81)\n\tCaused by: java.lang.IllegalArgumentException: /opt/zookeeper/stand_zookeeper-3.4.12/z1/tmp/myid file is missing\n\t\tat org.apache.zookeeper.server.quorum.QuorumPeerConfig.parseProperties(QuorumPeerConfig.java:408)\n\t\tat org.apache.zookeeper.server.quorum.QuorumPeerConfig.parse(QuorumPeerConfig.java:152)\n\t\t... 2 more\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [_vm._v("stand_zookeeper-3.4.12/z1/tmp/myid file is missing")]),
        _vm._v(" "),
        _c("p", [_vm._v("把data/myid  文件copy到 tmp文件下即可。")])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("zookeeper 的会话状态")])]),
      _vm._v(" "),
      _c("p", [_vm._v("① NO_CONNECTED")]),
      _vm._v(" "),
      _c("p", [_vm._v("② CONNECTING")]),
      _vm._v(" "),
      _c("p", [_vm._v("③CONNECTED")]),
      _vm._v(" "),
      _c("p", [_vm._v("④CLOSED")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_c("p", [_vm._v("什么是网络分区？")])]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("创建临时节点：")])])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v('create -e /master "master1.example.com:2223"')])
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

/***/ "./src/pages/md/bigData_zookeeper_基础_1-1_概述.md":
/*!*****************************************************!*\
  !*** ./src/pages/md/bigData_zookeeper_基础_1-1_概述.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_zookeeper_1_1_md_vue_type_template_id_c58c6b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30& */ "./src/pages/md/bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_zookeeper_1_1_md_vue_type_template_id_c58c6b30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_zookeeper_1_1_md_vue_type_template_id_c58c6b30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_zookeeper_基础_1-1_概述.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30&":
/*!************************************************************************************!*\
  !*** ./src/pages/md/bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_zookeeper_1_1_md_vue_type_template_id_c58c6b30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_zookeeper_基础_1-1_概述.md?vue&type=template&id=c58c6b30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_zookeeper_1_1_md_vue_type_template_id_c58c6b30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_zookeeper_1_1_md_vue_type_template_id_c58c6b30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-191fe34c.js.map