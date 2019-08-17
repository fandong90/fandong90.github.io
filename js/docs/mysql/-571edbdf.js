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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/db_mysql_基础_1-1_安装创建.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
            id: "mysql-linux%2Fcentos7-%E5%AE%89%E8%A3%85%E5%88%9B%E5%BB%BA"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#mysql-linux%2Fcentos7-%E5%AE%89%E8%A3%85%E5%88%9B%E5%BB%BA",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" MySql linux/centos7 安装创建")
        ]
      ),
      _vm._v(" "),
      _c("p", [_vm._v("---使用 yum 安装")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("ywget http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//repo.mysql.com/mysql-community-release-el7-5.noarch.rpm")
          ]),
          _vm._v("\nrpm -ivh mysql-community-release-el7-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v(".noarch.rpm\nyum update\nyum install mysql-server\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("---查看mysql 版本")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 mysql]# mysql --version\n mysql  Ver "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14.14")]),
          _vm._v(" Distrib "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5.6")]),
          _vm._v(".44, "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Linux")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(x86_64)")]),
            _vm._v(" using  EditLine wrapper\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/*查看mysql服务是否启动*/")
          ]),
          _vm._v("\n   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 mysql]# ps -ef | grep mysqld\n\tmysql     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8054")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v("月"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(" ?       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(" /bin/sh /usr/bin/mysqld_safe --basedir=/usr\n\tmysql     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8279")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8054")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v("月"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(" ?       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("01")]),
          _vm._v(" /usr/sbin/mysqld --basedir=/usr --datadir=/"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(
            "/lib/mysql --plugin-dir=/usr/lib64/mysql/plugin --log-error=/"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v("/log/mysqld.log --pid-file=/"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v("/run/mysqld/mysqld.pid --socket=/"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v("/lib/mysql/mysql.sock\n\troot     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("19896")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("19195")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(" pts/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("00")]),
          _vm._v(" grep --color=auto mysqld\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("01 mysql]# \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//创建用户, 默认root 密码为空")
          ]),
          _vm._v("\n    [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@bogon")]),
          _vm._v(
            " ~]# mysql -u root -p \n     Enter password: \n\n    mysql> use mysql\n\tReading table information "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" completion of table and column names\n\tYou can turn off "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(
            " feature to get a quicker startup with -A\n\t\n\tDatabase changed\n\tmysql> create user "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'nodejs'")]),
          _vm._v("\n\t    -> ;\n\tQuery OK, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.00")]),
              _vm._v(" sec)")
            ]),
            _vm._v("\n\t\n\tmysql> update user set password")
          ]),
          _vm._v("=MD5("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'nodejs'")]),
          _vm._v(") where user="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'nodejs'")]),
          _vm._v(";\n\tQuery OK, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("row "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.00")]),
              _vm._v(" sec)")
            ]),
            _vm._v("\n\tRows matched: 1  Changed: 1  Warnings: 0\n    \n    "),
            _c("span", { staticClass: "hljs-comment" }, [_vm._v("//授权")]),
            _vm._v(
              "\n    mysql> grant  select,insert,update,delete,create,drop on *.* to nodejs"
            )
          ]),
          _vm._v(";\n\tQuery OK, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.00")]),
              _vm._v(" sec)")
            ]),
            _vm._v("\n\t\n\tmysql> flush privileges")
          ]),
          _vm._v(";\n\tQuery OK, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("rows "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("affected")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0.00")]),
              _vm._v(" sec)")
            ]),
            _vm._v("\n\t\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("使用新创建的用户登录")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "`\n创建的用户为% ，不能再本机上登录，所以使用mysql brench 登录，"
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("提示无法登录。")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("1》 首先检测防火墙，--关闭防火墙  systemctl stop firewalld")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("连接成功。")]),
          _vm._v(" "),
          _c("p", [_vm._v("`")])
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

/***/ "./src/pages/md/db_mysql_基础_1-1_安装创建.md":
/*!**********************************************!*\
  !*** ./src/pages/md/db_mysql_基础_1-1_安装创建.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_mysql_1_1_md_vue_type_template_id_767b63b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9& */ "./src/pages/md/db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _db_mysql_1_1_md_vue_type_template_id_767b63b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _db_mysql_1_1_md_vue_type_template_id_767b63b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/db_mysql_基础_1-1_安装创建.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9&":
/*!*****************************************************************************!*\
  !*** ./src/pages/md/db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_db_mysql_1_1_md_vue_type_template_id_767b63b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/db_mysql_基础_1-1_安装创建.md?vue&type=template&id=767b63b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_db_mysql_1_1_md_vue_type_template_id_767b63b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_db_mysql_1_1_md_vue_type_template_id_767b63b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-571edbdf.js.map