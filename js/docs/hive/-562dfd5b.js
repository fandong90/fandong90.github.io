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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_hive_基础_1-5_常用操作.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("p", [_vm._v("###hive 常用操作")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("显示所有的dbs")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    show databases;\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//或者")]),
          _vm._v("\n    \n    show schemas;\n   \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(": jdbc:hive2:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//hadoop01.fandong.com:10000> show schemas;")
          ]),
          _vm._v(
            "\n\tOK\n\t+----------------+\n\t| database_name  |\n\t+----------------+\n\t| "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v("        |\n\t| portrait       |\n\t+----------------+\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("selected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.179")]),
              _vm._v(" seconds)")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("查询表信息")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    describe extended tableName;\n    \n    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//查询格式化后的数据")
          ]),
          _vm._v("\n    describe formatted tableName;\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "     OK\n+-------------------------------+----------------------------------------------------+-----------------------------+\n|           col_name            |                     data_type                      |           comment           |\n+-------------------------------+----------------------------------------------------+-----------------------------+\n| # col_name                    | data_type                                          | comment                     |\n|                               | NULL                                               | NULL                        |\n| age                           | "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(
            "                                                |                             |\n|                               | NULL                                               | NULL                        |\n| # Detailed Table Information  | NULL                                               | NULL                        |\n| Database:                     | portrait                                           | NULL                        |\n| Owner:                        | anonymous                                          | NULL                        |\n| CreateTime:                   | Wed Sep "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("07")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" CST "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v(
            "                       | NULL                        |\n| LastAccessTime:               | UNKNOWN                                            | NULL                        |\n| Retention:                    | "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            "                                                  | NULL                        |\n| Location:                     | hdfs:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop01.fandong.com:9001/user/hive/warehouse/portrait.db/test1 | NULL                        |"
            )
          ]),
          _vm._v(
            "\n| Table Type:                   | MANAGED_TABLE                                      | NULL                        |\n| Table Parameters:             | NULL                                               | NULL                        |\n|                               | COLUMN_STATS_ACCURATE                              | {\\"
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '"BASIC_STATS\\":\\"true\\"}  |\n|                               | numFiles                                           | 7                           |\n|                               | numRows                                            | 7                           |\n|                               | rawDataSize                                        | 17                          |\n|                               | totalSize                                          | 24                          |\n|                               | transient_lastDdlTime                              | 1568553769                  |\n|                               | NULL                                               | NULL                        |\n| # Storage Information         | NULL                                               | NULL                        |\n| SerDe Library:                | org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe | NULL                        |\n| InputFormat:                  | org.apache.hadoop.mapred.TextInputFormat           | NULL                        |\n| OutputFormat:                 | org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat | NULL                        |\n| Compressed:                   | No                                                 | NULL                        |\n| Num Buckets:                  | -1                                                 | NULL                        |\n| Bucket Columns:               | []                                                 | NULL                        |\n| Sort Columns:                 | []                                                 | NULL                        |\n| Storage Desc Params:          | NULL                                               | NULL                        |\n|                               | serialization.format                               | 1                           |\n+-------------------------------+----------------------------------------------------+-----------------------------+\n30 rows selected (0.429 seconds)\n\n\n'
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("创建一个分区表")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [_c("code", [_vm._v("\n")])]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("向分区中写入数据")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [_c("code", [_vm._v("\n")])]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("查询表分区")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("   show partitions tableName;\n \n")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [_c("code", [_vm._v("    \n\n")])]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("增加分区")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v("\n "),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("ALTER TABLE logMsgs ADD IF NOT EXISTS "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("PARTITION")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(year="),
                  _c("span", { staticClass: "hljs-number" }, [_vm._v("2011")]),
                  _vm._v(",month="),
                  _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
                  _vm._v(",day="),
                  _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
                  _vm._v(")")
                ]),
                _vm._v("\n LOCATION '/logs/2011/01/01'\n\n")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("删除分区")]),
          _vm._v(" "),
          _c("pre", { staticClass: "hljs" }, [
            _c("code", [
              _vm._v(" "),
              _c("span", { staticClass: "hljs-function" }, [
                _vm._v("ALTER TABLE logMsgs DROP IF EXISTS "),
                _c("span", { staticClass: "hljs-title" }, [
                  _vm._v("PARTITION")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "hljs-params" }, [
                  _vm._v("(year="),
                  _c("span", { staticClass: "hljs-number" }, [_vm._v("2011")]),
                  _vm._v(",month="),
                  _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
                  _vm._v(",day="),
                  _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
                  _vm._v(")")
                ])
              ]),
              _vm._v(";\n\n")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("table 操作")])]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("表重新命名")])])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\n   ALTER TABLE log_msg RENAME TO logMsgs;\n \n")])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("删除表")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   DROP TABLE losMsgs "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" exists logMsgs;\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("向管理表中装载数据")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   LOAD DATA LOCAL INPATH "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'file path'")]),
          _vm._v("\n   "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("OVERWRITE INTO TABLE employees\n   "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("PARTITION")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(country ="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'US'")]),
              _vm._v(", state="),
              _c("span", { staticClass: "hljs-string" }, [_vm._v("'CA'")]),
              _vm._v(")")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("** local** 表示文件在本地系统，没有local表示在分布式文件系统上")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("导出数据")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("\n   hadoop fs -cp source_path target_path\n\n")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   INSERT OVERWRITE LOCAL DIRECTORY "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'/tmp/file'")]),
          _vm._v("\n   SELECT * \n   FROM  table_name\n   WHERE ...\n\n")
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

/***/ "./src/pages/md/bigData_hive_基础_1-5_常用操作.md":
/*!**************************************************!*\
  !*** ./src/pages/md/bigData_hive_基础_1-5_常用操作.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_hive_1_5_md_vue_type_template_id_34abdfd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6& */ "./src/pages/md/bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_hive_1_5_md_vue_type_template_id_34abdfd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_hive_1_5_md_vue_type_template_id_34abdfd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_hive_基础_1-5_常用操作.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6&":
/*!*********************************************************************************!*\
  !*** ./src/pages/md/bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_1_5_md_vue_type_template_id_34abdfd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_hive_基础_1-5_常用操作.md?vue&type=template&id=34abdfd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_1_5_md_vue_type_template_id_34abdfd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_hive_1_5_md_vue_type_template_id_34abdfd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-562dfd5b.js.map