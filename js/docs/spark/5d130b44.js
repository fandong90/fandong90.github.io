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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680& ***!
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
        "h3",
        {
          attrs: {
            id:
              "%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 如何进行性能调优")
        ]
      ),
      _vm._v(" "),
      _c("p", [_vm._v("##进行性能调优，应该清楚哪些操作会造成性能开销")]),
      _vm._v(" "),
      _c("p", [_vm._v("RDD的运算过程")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("初始化SparkContext")]),
        _vm._v(" "),
        _c("li", [_vm._v("获取数据（hive,RDMS,HDFS)")]),
        _vm._v(" "),
        _c("li", [_vm._v("生成RDD")]),
        _vm._v(" "),
        _c("li", [_vm._v("执行Map,Reduce")]),
        _vm._v(" "),
        _c("li", [_vm._v("获取想要的结果")])
      ]),
      _vm._v(" "),
      _c("h4", { attrs: { id: "%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: {
              href: "#%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE",
              "aria-hidden": "true"
            }
          },
          [_vm._v("#")]
        ),
        _vm._v(" 获取数据")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "获取数据时，需要考虑数据的是否被重复计算使用，如果是被重复计算使用。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Spark 提供了一下几种缓存数据的策略。")]),
      _vm._v(" "),
      _c("p", [_vm._v("官网给的说法：")]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "  One of the most important capabilities in Spark is persisting (or caching) a \ndataset in memory across operations. When you persist an RDD, each node stores \nany partitions of it that it computes in memory and reuses them in other actions \non that dataset (or datasets derived from it). This allows future actions to be \nmuch faster (often by more than 10x). Caching is a key tool for iterative \nalgorithms and fast interactive use.\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("MEMORY_ONLY")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "   Store RDD as deserialized Java objects in the JVM. If the RDD does\n not fit in memory, some partitions will not be cached and will \n be recomputed on the fly each time they're needed. This is the default level.\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "这个是默认的存储策略，保存在内存中，即JAVA JVM堆栈中，这个是有限制的，如果RDD 不适合存放在内存中，\n一些分区不会进行缓存策略会被重复的计算。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("使用")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("  String inputFile ="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"hdfs://hadoop01.fandong.com:9001/"')
          ]),
          _vm._v(
            ";\n  JavaRDD<String> rdd1= rdd.textFile(inputFile);\n  rdd1.persist(StorageLevel.MEMORY_ONLY());\n  \n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("*MEMORY_AND_DISK")]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "Store RDD as deserialized Java objects in the JVM. If the RDD does not fit in memory, store the partitions that don't fit on disk, and read them from there when they're needed.\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "这个策略是存储序列化后的RDD到java JVM中，只有一些不适合存在内存中的，或者内存不足的会写在磁盘上存储。可见这个策略是对只存内存的扩展。"
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("使用：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n    String inputFile ="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"hdfs://hadoop01.fandong.com:9001/"')
          ]),
          _vm._v(
            ";\n    JavaRDD<String> rdd1= rdd.textFile(inputFile);\n    rdd1.persist(StorageLevel.MEMORY_AND_DISK());\n    \n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("MEMORY_ONLY_SER")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              " Store RDD as serialized Java objects (one byte array per partition). This is \n"
            )
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "generally more space-efficient than deserialized objects, especially when using a\nfast serializer, but more CPU-intensive to read."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("这个序列为字节数组，空间使用更高效，增加了cpu 读取。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n    String inputFile ="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"hdfs://hadoop01.fandong.com:9001/"')
          ]),
          _vm._v(
            ";\n    JavaRDD<String> rdd1= rdd.textFile(inputFile);\n    rdd1.persist(StorageLevel.MEMORY_ONLY_SER());\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("DISK_ONLY")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [_vm._v("Store the RDD partitions only on disk.\n")])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("效率低于内存中使用")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    String inputFile ="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"hdfs://hadoop01.fandong.com:9001/"')
          ]),
          _vm._v(
            ";\n    JavaRDD<String> rdd1= rdd.textFile(inputFile);\n    rdd1.persist(StorageLevel.DISK_ONLY());\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("MEMORY_ONLY_2, MEMORY_AND_DISK_2")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Same as the levels above, but replicate each partition on two cluster nodes."
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("每个分区存在2个集群节点上。")])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          {
            attrs: {
              href:
                "http://spark.apache.org/docs/latest/rdd-programming-guide.html#basics"
            }
          },
          [_vm._v("参考官网")]
        )
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("对RDD进行操作")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_c("p", [_vm._v("join 操作")])]),
            _vm._v(" "),
            _c("li", [_c("p", [_vm._v("map/reduce，etc")])])
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("对RDD操作的原则")])]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("避免创建重复的RDD.")])]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("尽可能服用同一个RDD")])]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("对多次使用的RDD进行持久化操作")])])
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

/***/ "./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md":
/*!*****************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_spark_3_0_md_vue_type_template_id_43c4b680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680& */ "./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_spark_3_0_md_vue_type_template_id_43c4b680___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_spark_3_0_md_vue_type_template_id_43c4b680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680&":
/*!************************************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_0_md_vue_type_template_id_43c4b680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-0_如何性能调优.md?vue&type=template&id=43c4b680&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_0_md_vue_type_template_id_43c4b680___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_0_md_vue_type_template_id_43c4b680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=5d130b44.js.map