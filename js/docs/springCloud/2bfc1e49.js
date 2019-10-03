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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c& ***!
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
      _c("p", [_vm._v("#Spring Hystrix 实现容错机制")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", [_vm._v("Q1: 雪崩效应")]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [_vm._v("服务之间的依赖调用，会导致雪崩效应。")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("首先启动Eureka Ha")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("03 eurekaHa]# java -jar microserviceEurekaServerHa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT.jar --spring.profiles.active=hadoop03\n    \n    [root"
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 eurekaHa]# java -jar microserviceEurekaServerHa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT.jar --spring.profiles.active=hadoop02\n \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("把服务注册到Eureka 中")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "05 springCloudInstanceJar]# java -jar microserviecProviderUser2-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT.jar \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("启动OK。")]),
      _vm._v(" "),
      _c("p", [_vm._v("整合Hystrix")]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>\n    </dependency>\n \n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("在启动类上添加 "),
          _c("strong", [_vm._v("@EnableCircuitBreaker")])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-meta" }, [
            _vm._v("@EnableHystrixDashboard")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-meta" }, [
            _vm._v("@EnableCircuitBreaker")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-meta" }, [
            _vm._v("@SpringBootApplication")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Application")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Bean")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@LoadBalanced")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" RestTemplate "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("restTemplate")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RestTemplate();\n\t    }\n\t\n\t    "),
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
          _vm._v(
            "{\n\t        SpringApplication.run(Application.class, args);\n\t    }\n\t}\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("在请求的方法上添加**@HystrixCommand**")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@HystrixCommand")]),
          _vm._v("(fallbackMethod = "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"findByIdCallBack"')
          ]),
          _vm._v(",commandProperties = {\n            "),
          _c("span", { staticClass: "hljs-meta" }, [
            _vm._v("@HystrixProperty")
          ]),
          _vm._v("(name="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"execution.isolation.thread.timeoutInMilliseconds"')
          ]),
          _vm._v(",value = "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"5000"')]),
          _vm._v(")\n    })\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@GetMapping")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"/findOneById/{id}"')
          ]),
          _vm._v(")\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  String "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("findOneById")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(@PathVariable Integer id)")
            ])
          ]),
          _vm._v("{\n\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".restTemplate.getForObject("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"http://microservice-provider-user/"')
          ]),
          _vm._v("+id,String.class);\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" String "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("findByIdCallBack")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(Integer id,Throwable throwable)")
            ])
          ]),
          _vm._v("{\n        LOGGER.info("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"进入回退方法"')
          ]),
          _vm._v(",throwable);\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"error"')]),
          _vm._v(";\n    }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _vm._v("回退方法添加了异常，用于查看是什么原因导致，进入的回退方法。")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          {
            attrs: {
              href:
                "https://cloud.spring.io/spring-cloud-netflix/reference/html/#circuit-breaker-hystrix-clients"
            }
          },
          [_vm._v("参见官网")]
        )
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

/***/ "./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md":
/*!*****************************************************************!*\
  !*** ./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microservice_springCloud_1_7_Hystrix_md_vue_type_template_id_448a568c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c& */ "./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _microservice_springCloud_1_7_Hystrix_md_vue_type_template_id_448a568c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _microservice_springCloud_1_7_Hystrix_md_vue_type_template_id_448a568c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c&":
/*!************************************************************************************************!*\
  !*** ./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_7_Hystrix_md_vue_type_template_id_448a568c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/microservice_springCloud_基础_1-7_Hystrix.md?vue&type=template&id=448a568c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_7_Hystrix_md_vue_type_template_id_448a568c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_7_Hystrix_md_vue_type_template_id_448a568c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=2bfc1e49.js.map