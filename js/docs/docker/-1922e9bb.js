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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/tools_docker_基础_1-2_创建.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("h1", { attrs: { id: "docker-%E5%88%9B%E5%BB%BA%E4%BA%8C" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#docker-%E5%88%9B%E5%BB%BA%E4%BA%8C",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Docker 创建二")
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "%E7%9B%AE%E6%A0%87" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#%E7%9B%AE%E6%A0%87", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 目标")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("Set up your Docker environment (on this page)")]),
        _vm._v(" "),
        _c("li", [_vm._v("Build an image and run it as one container")]),
        _vm._v(" "),
        _c("li", [_vm._v("Scale your app to run multiple containers")]),
        _vm._v(" "),
        _c("li", [_vm._v("istribute your app across a cluster")]),
        _vm._v(" "),
        _c("li", [_vm._v("Stack services by adding a backend database")]),
        _vm._v(" "),
        _c("li", [_vm._v("Deploy your app to production")])
      ]),
      _vm._v(" "),
      _c("h1", { attrs: { id: "docker%E8%B7%AF%E7%BA%BF%E5%9B%BE" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#docker%E8%B7%AF%E7%BA%BF%E5%9B%BE",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" docker路线图")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "docker -> containers -> services -> swarms -> stacks -> Deploy your app"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("#行动")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("docker container ，为什么需要container")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _vm._v(
                "Flexible: Even the most complex applications can be containerized."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Lightweight: Containers leverage and share the host kernel."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Interchangeable: You can deploy updates and upgrades on-the-fly."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Portable: You can build locally, deploy to the cloud, and run anywhere."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Scalable: You can increase and automatically distribute container replicas."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Stackable: You can stack services vertically and on-the-fly."
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("Containers Vs Virtual machines")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _vm._v(
                "contianer是直接运行在linux（OS），和其他的container共享主机内核。运行在分离的进程，占用资源少，轻量级。"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("virtual machine ：自己提供一个虚拟的运行环境，占用资源多")
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src:
                  "http://fandong90.github.io/dist/static/img/contianervsvirtual.png",
                alt: "container vs virtual machine"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("Docker 基础命令")])])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@bogon")]),
          _vm._v(" ~]# docker --version\n    Docker version "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18.09")]),
          _vm._v(".6, build "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("481")]),
          _vm._v("bc77156\n\t\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@bogon")]),
          _vm._v(" ~]# docker info\n\tContainers: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t Running: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t Paused: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t Stopped: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\tImages: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("\n\tServer Version: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18.09")]),
          _vm._v(".6\n\tStorage Driver: overlay2\n\t ....\n\t \n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/*docker image 列表*/")
          ]),
          _vm._v(" \n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@bogon")]),
          _vm._v(
            " ~]# docker image ls\n\tREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n\tfriendlyhello       latest              e65e08c442c9        "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("45")]),
          _vm._v(" minutes ago      "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("131")]),
          _vm._v("MB\n\tpython              "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.7")]),
          _vm._v("-slim            ca96bab3e2aa        "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" hours ago        "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("120")]),
          _vm._v(
            "MB\n\thello-world         latest              fce289e99eb9        "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(" months ago        "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.84")]),
          _vm._v("kB\n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/*docker 容器列表*/")
          ]),
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@bogon")]),
          _vm._v(
            " ~]# docker container ls -a\n\tCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                         PORTS               NAMES\n\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("607")]),
          _vm._v("ac71e7db4        hello-world         "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"/hello"')]),
          _vm._v("            "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("seconds ago      "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Exited")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(")")
            ]),
            _vm._v(
              ' 10 seconds ago                          goofy_nightingale\n\t5c35de0a2d3c        friendlyhello       "python app.py"     About an hour ago   '
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Exited")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(")")
            ]),
            _vm._v(
              ' 40 minutes ago                          boring_keldysh\n\t1613211e009e        hello-world         "/hello"            About an hour ago   '
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Exited")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(")")
            ]),
            _vm._v(
              " About an hour ago                       reverent_babbage\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("-----"),
        _c("a", { attrs: { href: "https://docs.docker.com/get-started/" } }, [
          _vm._v("docker 教程")
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

/***/ "./src/pages/md/tools_docker_基础_1-2_创建.md":
/*!************************************************!*\
  !*** ./src/pages/md/tools_docker_基础_1-2_创建.md ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_docker_1_2_md_vue_type_template_id_12b9f1da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da& */ "./src/pages/md/tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _tools_docker_1_2_md_vue_type_template_id_12b9f1da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tools_docker_1_2_md_vue_type_template_id_12b9f1da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/tools_docker_基础_1-2_创建.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da&":
/*!*******************************************************************************!*\
  !*** ./src/pages/md/tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_tools_docker_1_2_md_vue_type_template_id_12b9f1da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/tools_docker_基础_1-2_创建.md?vue&type=template&id=12b9f1da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_tools_docker_1_2_md_vue_type_template_id_12b9f1da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_tools_docker_1_2_md_vue_type_template_id_12b9f1da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-1922e9bb.js.map