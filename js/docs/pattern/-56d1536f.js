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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/design_pattern_基础_1-2_工厂模式.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8& ***!
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
              "%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F---%EF%BC%88%E5%88%9B%E5%BB%BA%E5%9E%8B%EF%BC%89"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F---%EF%BC%88%E5%88%9B%E5%BB%BA%E5%9E%8B%EF%BC%89",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 工厂模式 --（创建型）")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("什么是工厂模式？")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "定义一个创建产品对象的工厂接口，将产品对象的实际创建工作推迟到具体子工厂类当中。这满足创建型模式 中所要求的“创建与使用相分离”的特点。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("工厂模式的结构")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [
              _vm._v("抽象工厂类：提供创建工厂，返回具体产品（对象）的实例。")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "具体工厂： 用于实现抽象工厂的方法，完成具体产品（对象）的创建"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("抽象产品： 定义工厂返回对象，描述一类产品的特性和功能。")
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("具体产品： 实现抽象产品定义的接口。")])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("UML 结构图")]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src: "https://fandong90.github.io/static/img/factory.png",
                alt: "factory112"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("具体代码实现")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("我们创建一个农场创建工厂，马、猪、鸡等圈在不同的圈中。")
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("抽象AbstractAnimalFactory.java")])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n   \t * 定义一个抽象工厂类\n   \t */")
          ]),
          _vm._v("\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("AbstractAnimalFactory")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v("  IAnimal "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getInstance")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" animalType)")
            ])
          ]),
          _vm._v("{\n   \t\n   \t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n   \t    }\n   \t}\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("具体AnimalFactory.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n   \t * 动物实现\n   \t */")
          ]),
          _vm._v("\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("AnimalFactory")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("AbstractAnimalFactory")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" IAnimal "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getInstance")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
              _vm._v(" animalType)")
            ])
          ]),
          _vm._v("{\n   \t        IAnimal  animal = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(";\n   \t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("switch")]),
          _vm._v(" (animalType){\n   \t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" AnimalType.ANIMAL_HORSE: animal ="),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Horse();  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n   \t            "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" AnimalType.ANIMAL_PIG: animal   = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" Pig();   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("break")]),
          _vm._v(";\n   \t        }\n   \t\n   \t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" animal;\n   \t    }\n   \t}\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("创建具体IAnimal.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n   \t * 动物基本技能\n   \t */")
          ]),
          _vm._v("\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("interface")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IAnimal")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("eat")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sleep")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n   \t}\n\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("创建具体实现类")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("      "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//Horse.java")]),
          _vm._v("\n      \n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Horse")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IAnimal")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" Horse run .... "')
          ]),
          _vm._v(");\n   \t    }\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("eat")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" Horse eat .... "')
          ]),
          _vm._v(");\n   \t    }\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sleep")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" Horse sleep .... "')
          ]),
          _vm._v(");\n   \t    }\n   \t}\n   \t\n   \t"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//pig.java")]),
          _vm._v("\n   \t\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Pig")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IAnimal")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("run")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" pig run ..."')
          ]),
          _vm._v(");\n   \t    }\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("eat")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" pig eat ..."')
          ]),
          _vm._v(");\n   \t    }\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("sleep")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('" pig sleep ..."')
          ]),
          _vm._v(");\n   \t    }\n   \t}\n\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("动物类别")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/***\n   \t *\n   \t * 设定动物类别\n   \t */")
          ]),
          _vm._v("\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("AnimalType")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n   \t     * 马\n   \t     */")
          ]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v("  ANIMAL_HORSE="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(";\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/***\n   \t     * 猪\n   \t     */")
          ]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" ANIMAL_PIG   ="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(";\n   \t\n   \t    "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/***\n   \t     * 鸡\n   \t     */")
          ]),
          _vm._v("\n   \t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("int")]),
          _vm._v(" ANIMAL_CHECKEN="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(";\n   }\n\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("具体调用")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t\n\t\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" factoryPattern;\n\n   \t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ClientDemo")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n   \t\n   \t    "),
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
          _vm._v("{\n   \t         AnimalFactory animalFactory = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " AnimalFactory();\n   \t\n   \t         IAnimal animal =  animalFactory.getInstance(AnimalType.ANIMAL_HORSE);\n   \t\n   \t         animal.run();\n   \t\n   \t         animal.eat();\n   \t\n   \t         animal.sleep();\n   \t\n   \t        System.out.println("
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"end ..."')]),
          _vm._v(");\n   \t    }\n   }\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("summary")]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(" 如果需要，可以添加一种动物，而不用改变调用方式。\n")
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

/***/ "./src/pages/md/design_pattern_基础_1-2_工厂模式.md":
/*!****************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-2_工厂模式.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_pattern_1_2_md_vue_type_template_id_5d86f1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8& */ "./src/pages/md/design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _design_pattern_1_2_md_vue_type_template_id_5d86f1c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _design_pattern_1_2_md_vue_type_template_id_5d86f1c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/design_pattern_基础_1-2_工厂模式.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_2_md_vue_type_template_id_5d86f1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-2_工厂模式.md?vue&type=template&id=5d86f1c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_2_md_vue_type_template_id_5d86f1c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_2_md_vue_type_template_id_5d86f1c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-56d1536f.js.map