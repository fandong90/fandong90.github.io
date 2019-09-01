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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/design_pattern_基础_1-4_代理模式.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0& ***!
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
      _c("h2", { attrs: { id: "%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 代理模式")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("什么是代理模式")]),
          _vm._v(" "),
          _c("div", { staticClass: "success custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("pre", [
              _c("code", [
                _vm._v(
                  "  由于某些原因需要给某对象提供一个代理以控制对该对象的访问。\n  \n  这时，访问对象不适合或者不能直接引用目标对象，代理对象作为访问对象和目标对象之间的中介。\n"
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("代理模式优缺点")]),
          _vm._v(" "),
          _c("div", { staticClass: "success custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("p", [
                  _vm._v(
                    "代理模式在客户端与目标对象之间起到一个中介作用和保护目标对象的作用；(网络不通，需要通过代理访问)。"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("li", [_c("p", [_vm._v("代理对象可以扩展目标对象的功能；")])]),
              _vm._v(" "),
              _c("li", [
                _c("p", [
                  _vm._v(
                    "代理模式能将客户端与目标对象分离，在一定程度上降低了系统的耦合度；"
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "warnning custom-block" }, [
            _c("p", { staticClass: "custom-block-title" }),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _vm._v(
                  "在客户端和目标对象之间增加一个代理对象，会造成请求处理速度变慢；(目前并不是主要问题)."
                )
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("增加了系统的复杂度。")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("代理模式的一般结构")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "抽象主题（Subject）类：通过接口或抽象类声明真实主题和代理对象实现的业务方法。"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "真实主题（Real Subject）类：实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象。"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "代理（Proxy）类：提供了与真实主题相同的接口，其内部含有对真实主题的引用，它可以访问、控制或扩展真实主题的功能。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("UML")]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src: "https://fandong90.github.io/static/img/design_proxy.png",
                alt: "proxy"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("代码结构")])])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("IRealBusiness.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" proxyPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("interface")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("IRealBusiness")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("pay")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("float")]),
              _vm._v(" amount)")
            ])
          ]),
          _vm._v(";\n\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Business.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" proxyPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Business")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("IRealBusiness")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("pay")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("float")]),
              _vm._v(" amount)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"商家收款："')]),
          _vm._v("+amount+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"￥"')]),
          _vm._v(");\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n\t    }\n\t}\n\t\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("ProxyAgent.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" proxyPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.Random;\n\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ProxyAgent")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("IRealBusiness")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  IRealBusiness business;\n\t\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ProxyAgent")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(IRealBusiness business)")
            ])
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".business =business;\n\t    }\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("boolean")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("pay")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("float")]),
              _vm._v(" amount)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"客户支付支付金额："')
          ]),
          _vm._v("+amount+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"￥"')]),
          _vm._v(");\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("float")]),
          _vm._v(" discountAmount=amount* "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".discount();\n\t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"优惠金额："')]),
          _vm._v("+discountAmount+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"￥"')]),
          _vm._v(");\n\t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"客户实际支付金额："')
          ]),
          _vm._v("+(amount-discountAmount+"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"￥"')]),
          _vm._v("));\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".business.pay(amount);\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(";\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("float")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("discount")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        Random random= "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v("  Random("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(");\n\t       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" random.nextFloat();\n\t    }\n}\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("CustomerClient.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" proxyPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("CustomerClient")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
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
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t        ProxyAgent proxyAgent = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ProxyAgent("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Business());\n\t\n\t        proxyAgent.pay("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("100")]),
          _vm._v(");\n\t    }\n\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("测试结果:")]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "客户支付支付金额：100.0￥\n\n优惠金额：73.087814￥\n\n客户实际支付金额：26.912186￥\n\n商家收款：100.0￥\n\nProcess finished with exit code 0\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", [
        _c("code", [
          _vm._v(
            "![code](https://fandong90.github.io/static/img/zhifubaoWeCode.png)\n"
          )
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

/***/ "./src/pages/md/design_pattern_基础_1-4_代理模式.md":
/*!****************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-4_代理模式.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_pattern_1_4_md_vue_type_template_id_e2589cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0& */ "./src/pages/md/design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _design_pattern_1_4_md_vue_type_template_id_e2589cd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _design_pattern_1_4_md_vue_type_template_id_e2589cd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/design_pattern_基础_1-4_代理模式.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_4_md_vue_type_template_id_e2589cd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-4_代理模式.md?vue&type=template&id=e2589cd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_4_md_vue_type_template_id_e2589cd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_4_md_vue_type_template_id_e2589cd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-5d29bda9.js.map