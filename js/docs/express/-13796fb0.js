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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/web_express_组件_1-2_session.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f& ***!
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
      _c("h1", { attrs: { id: "express---session" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#express---session", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Express - session")
      ]),
      _vm._v(" "),
      _c("h2", { attrs: { id: "session" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#session", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Session")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("--会话状态，http 是无状态协议，通过session可以保持一个状态。")
      ]),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id: "session-%E5%AD%98%E6%94%BE%E5%93%AA%E4%BA%9B%E6%95%B0%E6%8D%AE"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#session-%E5%AD%98%E6%94%BE%E5%93%AA%E4%BA%9B%E6%95%B0%E6%8D%AE",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" session 存放哪些数据")
        ]
      ),
      _vm._v(" "),
      _c("p", [_vm._v("-- 用户账户等信息")]),
      _vm._v(" "),
      _c(
        "h2",
        { attrs: { id: "session-%E5%A4%A7%E5%B0%8F%E9%99%90%E5%88%B6" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#session-%E5%A4%A7%E5%B0%8F%E9%99%90%E5%88%B6",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" session 大小限制")
        ]
      ),
      _vm._v(" "),
      _c("p", [_vm._v("--建议不要存放太多数据在session中")]),
      _vm._v(" "),
      _c("h2", { attrs: { id: "session-%E5%81%9A%E4%BB%80%E4%B9%88" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#session-%E5%81%9A%E4%BB%80%E4%B9%88",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" session 做什么")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("---记录客户端访问的状态")]),
      _vm._v(" "),
      _c(
        "h2",
        { attrs: { id: "%E4%BD%BF%E7%94%A8redis%E7%BC%93%E5%AD%98session" } },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href: "#%E4%BD%BF%E7%94%A8redis%E7%BC%93%E5%AD%98session",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 使用redis缓存session")
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "h2",
        {
          attrs: {
            id:
              "%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98%E5%85%B1%E4%BA%AB"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98%E5%85%B1%E4%BA%AB",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 分布式缓存共享")
        ]
      )
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

/***/ "./src/pages/md/web_express_组件_1-2_session.md":
/*!****************************************************!*\
  !*** ./src/pages/md/web_express_组件_1-2_session.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_express_1_2_session_md_vue_type_template_id_6f1ac29f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f& */ "./src/pages/md/web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _web_express_1_2_session_md_vue_type_template_id_6f1ac29f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _web_express_1_2_session_md_vue_type_template_id_6f1ac29f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/web_express_组件_1-2_session.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_express_1_2_session_md_vue_type_template_id_6f1ac29f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/web_express_组件_1-2_session.md?vue&type=template&id=6f1ac29f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_express_1_2_session_md_vue_type_template_id_6f1ac29f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_web_express_1_2_session_md_vue_type_template_id_6f1ac29f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-13796fb0.js.map