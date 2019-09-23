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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", { attrs: { id: "coalecse-vs-repartition" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#coalecse-vs-repartition", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" coalecse vs repartition")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("有时需要对RDD的数据进行重新分区，重新分区。")]),
      _vm._v(" "),
      _c("p", [_vm._v("coalecse")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Return a new RDD that is reduced into `numPartitions` partitions.\n   *\n   * This results in a narrow dependency, e.g. if you go from 1000 partitions\n   * to 100 partitions, there will not be a shuffle, instead each of the 100\n   * new partitions will claim 10 of the current partitions.\n   *\n   * However, if you're doing a drastic coalesce, e.g. to numPartitions = 1,\n   * this may result in your computation taking place on fewer nodes than\n   * you like (e.g. one node in the case of numPartitions = 1). To avoid this,\n   * you can pass shuffle = true. This will add a shuffle step, but means the\n   * current upstream partitions will be executed in parallel (per whatever\n   * the current partitioning is).\n   *\n   * Note: With shuffle = true, you can actually coalesce to a larger number\n   * of partitions. This is useful if you have a small number of partitions,\n   * say 100, potentially with a few partitions being abnormally large. Calling\n   * coalesce(1000, shuffle = true) will result in 1000 partitions with the\n   * data distributed using a hash partitioner.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("coalesce")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(numPartitions: Int, shuffle: Boolean = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
              _vm._v(
                ",\n               partitionCoalescer: Option[PartitionCoalescer] = Option.empty)"
              )
            ]),
            _vm._v("\n              "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(implicit ord: Ordering[T] = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v(")")
            ]),
            _vm._v("\n      : RDD[T] ")
          ]),
          _vm._v("= withScope {\n    require(numPartitions > "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", s"),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"Number of partitions ($numPartitions) must be positive."')
          ]),
          _vm._v(")\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (shuffle) {\n      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/** Distributes elements evenly across output partitions, starting from a random partition. */"
            )
          ]),
          _vm._v(
            "\n      val distributePartition = (index: Int, items: Iterator[T]) => {\n        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" position = ("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " Random(index)).nextInt(numPartitions)\n        items.map { t =>\n          "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Note that the hash code of the key will just be the key itself. The HashPartitioner"
            )
          ]),
          _vm._v("\n          "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// will mod it with the number of total partitions.")
          ]),
          _vm._v("\n          position = position + "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "\n          (position, t)\n        }\n      } : Iterator[(Int, T)]\n\n      "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// include a shuffle step so that our upstream tasks are still distributed"
            )
          ]),
          _vm._v("\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" CoalescedRDD(\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " ShuffledRDD[Int, T, T](mapPartitionsWithIndex(distributePartition),\n        "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " HashPartitioner(numPartitions)),\n        numPartitions,\n        partitionCoalescer).values\n    } "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" {\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" CoalescedRDD("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(", numPartitions, partitionCoalescer)\n    }\n  }\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("repartition")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Return a new RDD that has exactly numPartitions partitions.\n   *\n   * Can increase or decrease the level of parallelism in this RDD. Internally, this uses\n   * a shuffle to redistribute data.\n   *\n   * If you are decreasing the number of partitions in this RDD, consider using `coalesce`,\n   * which can avoid performing a shuffle.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("repartition")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(numPartitions: Int)")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(implicit ord: Ordering[T] = "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
              _vm._v(")")
            ]),
            _vm._v(": RDD[T] ")
          ]),
          _vm._v("= withScope {\n    coalesce(numPartitions, shuffle = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(")\n  }\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "源码可以看出 repartition 是 coalecse 的 shuffle = true 的操作， 如果只是为了重新合并分区或拆分，可以使用 coalecse 。"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "分区重分配可用于 filter 过滤，数据过滤后，各个分区的数量减少。在开启相同的task，会对资源造成浪费，速度反而越慢了。\n"
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

/***/ "./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md":
/*!*******************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_spark_3_4_coalesce_repartition_md_vue_type_template_id_8ef34160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160& */ "./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_spark_3_4_coalesce_repartition_md_vue_type_template_id_8ef34160___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_spark_3_4_coalesce_repartition_md_vue_type_template_id_8ef34160___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160&":
/*!**************************************************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_4_coalesce_repartition_md_vue_type_template_id_8ef34160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-4_coalesce和repartition.md?vue&type=template&id=8ef34160&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_4_coalesce_repartition_md_vue_type_template_id_8ef34160___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_4_coalesce_repartition_md_vue_type_template_id_8ef34160___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=4d9e7b8.js.map