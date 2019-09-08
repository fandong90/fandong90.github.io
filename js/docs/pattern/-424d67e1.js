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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/design_pattern_基础_1-6_装饰模式.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c& ***!
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
              "%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F%EF%BC%88%E5%AF%B9%E8%B1%A1%E7%BB%93%E6%9E%84%E6%A8%A1%E5%BC%8F%EF%BC%89"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F%EF%BC%88%E5%AF%B9%E8%B1%A1%E7%BB%93%E6%9E%84%E6%A8%A1%E5%BC%8F%EF%BC%89",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 装饰器模式（对象结构模式）")
        ]
      ),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("什么是装饰模式？")])]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "指在不改变现有对象结构的情况下，动态地给该对象增加一些职责（即增加其额外功能）的模式，它属于对象结构型模式。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("装饰模式的优缺点")])]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "1、采用装饰模式扩展对象的功能比采用继承方式更加灵活。\n2、可以设计出多个不同的具体装饰类，创造出多个不同行为的组合。"
          )
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [
          _vm._v("装饰模式增加了许多子类，如果过度使用会使程序变得很复杂。")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("装饰模式的基本结构")])]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "1、抽象构件（Component）角色：定义一个抽象接口以规范准备接收附加责任的对象。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "2、具体构件（Concrete    Component）角色：实现抽象构件，通过装饰角色为其添加一些职责。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "3、抽象装饰（Decorator）角色：继承抽象构件，并包含具体构件的实例，可以通过其子类扩展具体构件的功能。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "4、具体装饰（ConcreteDecorator）角色：实现抽象装饰的相关方法，并给具体构件对象添加附加的责任。"
        )
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("UML")])]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/Decorator.png",
            alt: "Decorator"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("代码")])]),
      _vm._v(" "),
      _c("p", [_vm._v("IComponent.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" decoratorPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/**\n\t * 孙悟空正常形状\n\t */")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("interface")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IComponent")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t   "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("normalMan")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n\t   "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("skill")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v(";\n\t}\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("SunWuKong.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" decoratorPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SunWuKong")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IComponent")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("normalMan")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"正常人类形状"')
          ]),
          _vm._v(");\n    }\n\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("skill")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"龟派气功"')]),
          _vm._v(");\n    }\n\t}\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("DecoratorComponent.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" decoratorPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("abstract")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("DecoratorComponent")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("implements")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("IComponent")])
          ]),
          _vm._v("{\n\n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("protected")]),
          _vm._v("  IComponent component;\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("normalMan")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"正常人形态"')]),
          _vm._v(");\n\n        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"开始变身。。。。"')
          ]),
          _vm._v(");\n\n    }\n\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("skill")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".component.skill();\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("DecoratorComponent")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(IComponent component)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".component=component;\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("kongFu")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"其他种类的技能"')
          ]),
          _vm._v(");\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("light")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\n    }\n  }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("SuperMan.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" decoratorPattern;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SuperMan")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("extends")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("DecoratorComponent")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("normalMan")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("super")]),
          _vm._v(".normalMan();\n    }\n\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("SuperMan")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(IComponent component)")
            ]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("super")]),
          _vm._v("(component);\n    }\n\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("kongFu")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("super")]),
          _vm._v(".kongFu();\n    }\n\n    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Override")]),
          _vm._v("\n    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("light")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n        System.out.println("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"超赛身体发光"')
          ]),
          _vm._v(");\n    }\n\t}\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("ClientDemo.java")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" decoratorPattern;\n\n\t "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ClientDemo")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n     "),
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
          _vm._v("{\n        SunWuKong sunWuKong = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SunWuKong();\n        sunWuKong.normalMan();\n\n        DecoratorComponent superMan= "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(
            " SuperMan(sunWuKong);\n\n        superMan.kongFu();\n        superMan.light();\n        superMan.skill();\n    }\n\t}\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("测试结果")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\n    正常人类形状\n\t其他种类的技能\n\t超赛身体发光\n\t龟派气功\n\n"
          )
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
            _vm._v(
              "不要为了学习而学习，解决实际问题才是王道！\n\n装饰模式感悟：降低类的继承带来的耦合，增加方法不必要改变父类即可实现。\n"
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

/***/ "./src/pages/md/design_pattern_基础_1-6_装饰模式.md":
/*!****************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-6_装饰模式.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_pattern_1_6_md_vue_type_template_id_f401f65c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c& */ "./src/pages/md/design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _design_pattern_1_6_md_vue_type_template_id_f401f65c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _design_pattern_1_6_md_vue_type_template_id_f401f65c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/design_pattern_基础_1-6_装饰模式.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c&":
/*!***********************************************************************************!*\
  !*** ./src/pages/md/design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_6_md_vue_type_template_id_f401f65c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/design_pattern_基础_1-6_装饰模式.md?vue&type=template&id=f401f65c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_6_md_vue_type_template_id_f401f65c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_design_pattern_1_6_md_vue_type_template_id_f401f65c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-424d67e1.js.map