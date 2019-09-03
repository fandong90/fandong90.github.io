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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/design_pattern_基础_1-5_策略模式.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666& ***!
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
      _c(
        "h2",
        {
          attrs: {
            id:
              "%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F-%EF%BC%88%E5%AF%B9%E8%B1%A1%E8%A1%8C%E4%B8%BA%E6%A8%A1%E5%BC%8F)"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F-%EF%BC%88%E5%AF%B9%E8%B1%A1%E8%A1%8C%E4%B8%BA%E6%A8%A1%E5%BC%8F)",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 策略模式 （对象行为模式)")
        ]
      ),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("什么是策略模式？")])]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "  \t  该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，\n  且算法的变化不会影响使用算法的客户。策略模式属于对象行为模式，\n  它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，\n  并委派给不同的对象对这些算法进行管理。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("策略模式优缺点")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "1、多重条件语句不易维护，而使用策略模式可以避免使用多重条件语句\n\n2、策略模式提供了一系列的可供重用的算法族，恰当使用继承可以把算法族的公共代码转移到父类里面，从而避免重复的代码。\n3、策略模式可以提供相同行为的不同实现，客户可以根据不同时间或空间要求选择不同的\n\n4、策略模式提供了对开闭原则的完美支持，可以在不修改原代码的情况下，灵活增加新算法。\n\n5、策略模式把算法的使用放到环境类中，而算法的实现移到具体策略类中，实现了二者的分离。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "1、客户端必须理解所有策略算法的区别，以便适时选择恰当的算法类。\n\n2、策略模式造成很多的策略类。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("策略模式的结构与实现")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "1、抽象策略（Strategy）类：定义了一个公共接口，各种不同的算法以不同的方式实现这个接口，环境角色使用这个接口调用不同的算法，一般使用接口或抽象类实现。"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "2、具体策略（Concrete Strategy）类：实现了抽象策略定义的接口，提供具体的算法实现。"
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "3、环境（Context）类：持有一个策略类的引用，最终给客户端调用。"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("UML")])]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/strategy.png",
            alt: "strategy"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("代码")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "比较火的lol游戏，总共有五种玩法即不同的策略，AD,ADC,AP,APC,TANK,通过玩家选择英雄选取不同的位置。可以看做是一种策略。"
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("ILolGame.java")])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t  \n\t  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" strategyPattern;\n\t\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n\t * lol 游戏每个人都是玩，但是玩的位置不同，即不同的策略\n\t *\n\t */"
            )
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("interface")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ILolGame")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("play")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n\t}\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("AD.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" strategyPattern;\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("AD")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ILolGame")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("play")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" 我是近战物理的玩法"')
          ]),
          _vm._v(");\n       }\n   }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("ADC.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" strategyPattern;\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ADC")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ILolGame")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("play")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"射手玩法"')]),
          _vm._v(");\n       }\n   }\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("StrategyContext.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//设置为策略上下文")
          ]),
          _vm._v("\n  \n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" strategyPattern;\n\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("StrategyContext")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ILolGame")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("  ILolGame strategy="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n   \n   \n   \n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("setStrategy")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(ILolGame strategy)")
            ])
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".strategy = strategy;\n       }\n   \n       "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n       "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("play")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n           "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".strategy.play();\n       }\n   }\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("ClientDemo.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n \t "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" strategyPattern;\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ClientDemo")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\n   "),
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
          _vm._v("{\n\n       "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n        * 客户端决定使用哪种策略\n        */")
          ]),
          _vm._v("\n       AD ad = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" AD();\n       StrategyContext strategyContext = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " StrategyContext();\n       strategyContext.setStrategy(ad);\n       strategyContext.play();\n\n    }\n\n}\n\n \n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("测试结果：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\n\t我是近战物理的玩法\n\n  Process finished with exit code "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\n")
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

/***/ "./src/pages/md/design_pattern_基础_1-5_策略模式.md":
/*!****************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-5_策略模式.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_pattern_1_5_md_vue_type_template_id_60ae2666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666& */ "./src/pages/md/design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _design_pattern_1_5_md_vue_type_template_id_60ae2666___WEBPACK_IMPORTED_MODULE_0__["render"],
  _design_pattern_1_5_md_vue_type_template_id_60ae2666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/design_pattern_基础_1-5_策略模式.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_5_md_vue_type_template_id_60ae2666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-5_策略模式.md?vue&type=template&id=60ae2666&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_5_md_vue_type_template_id_60ae2666___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_5_md_vue_type_template_id_60ae2666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-48effd5d.js.map