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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", { attrs: { id: "foreachpartition" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#foreachpartition", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" foreachPartition")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("RDD.scala")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Applies a function f to all elements of this RDD.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("foreach")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(f: T => Unit)")
            ]),
            _vm._v(": Unit ")
          ]),
          _vm._v("= withScope {\n    val cleanF = sc.clean(f)\n    sc.runJob("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(", (iter: Iterator[T]) => iter.foreach(cleanF))\n  }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("foreachPartition")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Applies a function f to each partition of this RDD.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("foreachPartition")
            ]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(f: Iterator[T] => Unit)")
            ]),
            _vm._v(": Unit ")
          ]),
          _vm._v("= withScope {\n    val cleanF = sc.clean(f)\n    sc.runJob("),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(", (iter: Iterator[T]) => cleanF(iter))\n  }\n  \n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("withScope 是什么 ？")])]),
      _vm._v(" "),
      _c("p", [_vm._v("源码实现:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n\t   * Execute the given body such that all RDDs created in this body will have the same scope.\n\t   *\n\t   * If nesting is allowed, any subsequent calls to this method in the given body will instantiate\n\t   * child scopes that are nested within our scope. Otherwise, these calls will take no effect.\n\t   *\n\t   * Additionally, the caller of this method may optionally ignore the configurations and scopes\n\t   * set by the higher level caller. In this case, this method will ignore the parent caller's\n\t   * intention to disallow nesting, and the new scope instantiated will not have a parent. This\n\t   * is useful for scoping physical operations in Spark SQL, for instance.\n\t   *\n\t   * Note: Return statements are NOT allowed in body.\n\t   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(
            "[spark] def withScope[T](\n      sc: SparkContext,\n      name: String,\n      allowNesting: Boolean,\n      ignoreParent: Boolean)(body: => T): T = {\n    "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// Save the old scope to restore it later")
          ]),
          _vm._v(
            "\n    val scopeKey = SparkContext.RDD_SCOPE_KEY\n    val noOverrideKey = SparkContext.RDD_SCOPE_NO_OVERRIDE_KEY\n    val oldScopeJson = sc.getLocalProperty(scopeKey)\n    val oldScope = Option(oldScopeJson).map(RDDOperationScope.fromJson)\n    val oldNoOverride = sc.getLocalProperty(noOverrideKey)\n    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("try")]),
          _vm._v(" {\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (ignoreParent) {\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Ignore all parent settings and scopes and start afresh with our own root scope"
            )
          ]),
          _vm._v("\n        sc.setLocalProperty(scopeKey, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RDDOperationScope(name).toJson)\n      } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (sc.getLocalProperty(noOverrideKey) == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Otherwise, set the scope only if the higher level caller allows us to do so"
            )
          ]),
          _vm._v("\n        sc.setLocalProperty(scopeKey, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RDDOperationScope(name, oldScope).toJson)\n      }\n      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Optionally disallow the child body to override our scope"
            )
          ]),
          _vm._v("\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            " (!allowNesting) {\n        sc.setLocalProperty(noOverrideKey, "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"true"')]),
          _vm._v(")\n      }\n      body\n    } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("finally")]),
          _vm._v(" {\n      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Remember to restore any state that was modified before exiting"
            )
          ]),
          _vm._v(
            "\n      sc.setLocalProperty(scopeKey, oldScopeJson)\n      sc.setLocalProperty(noOverrideKey, oldNoOverride)\n    }\n  }\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("RDDOperationScope 是什么 ？")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              '/*\n * Licensed to the Apache Software Foundation (ASF) under one or more\n * contributor license agreements.  See the NOTICE file distributed with\n * this work for additional information regarding copyright ownership.\n * The ASF licenses this file to You under the Apache License, Version 2.0\n * (the "License"); you may not use this file except in compliance with\n * the License.  You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */'
            )
          ]),
          _vm._v("\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" org.apache.spark.rdd\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.util.concurrent.atomic.AtomicInteger\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " com.fasterxml.jackson.annotation.{JsonIgnore, JsonInclude, JsonPropertyOrder}\n"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" com.fasterxml.jackson.annotation.JsonInclude.Include\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" com.fasterxml.jackson.databind.ObjectMapper\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" com.fasterxml.jackson."),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("module")]),
          _vm._v(".scala.DefaultScalaModule\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" com.google.common.base.Objects\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.spark.SparkContext\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.apache.spark.internal.Logging\n\n"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n * A general, named code block representing an operation that instantiates RDDs.\n *\n * All RDDs instantiated in the corresponding code block will store a pointer to this object.\n * Examples include, but will not be limited to, existing RDD operations, such as textFile,\n * reduceByKey, and treeAggregate.\n *\n * An operation scope may be nested in other scopes. For instance, a SQL query may enclose\n * scopes associated with the public RDD APIs it uses under the hood.\n *\n * There is no particular relationship between an operation scope and a stage or a job.\n * A scope may live inside one stage (e.g. map) or span across multiple jobs (e.g. take).\n */"
            )
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@JsonInclude")]),
          _vm._v("(Include.NON_NULL)\n"),
          _c("span", { staticClass: "hljs-meta" }, [
            _vm._v("@JsonPropertyOrder")
          ]),
          _vm._v("(Array("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"id"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"parent"')]),
          _vm._v("))\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("[spark] "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("RDDOperationScope")
            ]),
            _vm._v("(\n    "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("val")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("name")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("String")]),
            _vm._v(",\n    "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("val")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("parent")]),
            _vm._v(": "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Option")]),
            _vm._v("["),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("RDDOperationScope")
            ]),
            _vm._v("] ")
          ]),
          _vm._v(
            "= None,\n    val id: String = RDDOperationScope.nextScopeId().toString) {\n\n  def toJson: String = {\n    RDDOperationScope.jsonMapper.writeValueAsString("
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(")\n  }\n\n  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Return a list of scopes that this scope is a part of, including this scope itself.\n   * The result is ordered from the outermost scope (eldest ancestor) to this scope.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@JsonIgnore")]),
          _vm._v(
            "\n  def getAllScopes: Seq[RDDOperationScope] = {\n    parent.map(_.getAllScopes).getOrElse(Seq.empty) ++ Seq("
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(")\n  }\n\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("override def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("equals")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(other: Any)")
            ]),
            _vm._v(": Boolean ")
          ]),
          _vm._v("= {\n    other match {\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(
            " s: RDDOperationScope =>\n        id == s.id && name == s.name && parent == s.parent\n      "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("case")]),
          _vm._v(" _ => "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\n    }\n  }\n\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("override def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("hashCode")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(": Int ")
          ]),
          _vm._v(
            "= Objects.hashCode(id, name, parent)\n\n  override def toString: String = toJson\n}\n\n"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n * A collection of utility methods to construct a hierarchical representation of RDD scopes.\n * An RDD scope tracks the series of operations that created a given RDD.\n */"
            )
          ]),
          _vm._v("\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v("[spark] object RDDOperationScope extends Logging {\n  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" val jsonMapper = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" ObjectMapper().registerModule(DefaultScalaModule)\n  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" val scopeCounter = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" AtomicInteger("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(")\n\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("fromJson")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(s: String)")]),
            _vm._v(": RDDOperationScope ")
          ]),
          _vm._v(
            "= {\n    jsonMapper.readValue(s, classOf[RDDOperationScope])\n  }\n\n  "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("/** Return a globally unique operation scope ID. */")
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("nextScopeId")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(": Int ")
          ]),
          _vm._v("= scopeCounter.getAndIncrement\n\n  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Execute the given body such that all RDDs created in this body will have the same scope.\n   * The name of the scope will be the first method name in the stack trace that is not the\n   * same as this method's.\n   *\n   * Note: Return statements are NOT allowed in body.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(
            "[spark] def withScope[T](\n      sc: SparkContext,\n      allowNesting: Boolean = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(")(body: => T): T = {\n    val ourMethodName = "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"withScope"')]),
          _vm._v(
            "\n    val callerMethodName = Thread.currentThread.getStackTrace()\n      .dropWhile(_.getMethodName != ourMethodName)\n      .find(_.getMethodName != ourMethodName)\n      .map(_.getMethodName)\n      .getOrElse {\n        "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Log a warning just in case, but this should almost certainly never happen"
            )
          ]),
          _vm._v("\n        logWarning("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"No valid method name for this RDD operation scope!"')
          ]),
          _vm._v(")\n        "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"N/A"')]),
          _vm._v(
            "\n      }\n    withScope[T](sc, callerMethodName, allowNesting, ignoreParent = "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(")(body)\n  }\n\n  "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "/**\n   * Execute the given body such that all RDDs created in this body will have the same scope.\n   *\n   * If nesting is allowed, any subsequent calls to this method in the given body will instantiate\n   * child scopes that are nested within our scope. Otherwise, these calls will take no effect.\n   *\n   * Additionally, the caller of this method may optionally ignore the configurations and scopes\n   * set by the higher level caller. In this case, this method will ignore the parent caller's\n   * intention to disallow nesting, and the new scope instantiated will not have a parent. This\n   * is useful for scoping physical operations in Spark SQL, for instance.\n   *\n   * Note: Return statements are NOT allowed in body.\n   */"
            )
          ]),
          _vm._v("\n  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(
            "[spark] def withScope[T](\n      sc: SparkContext,\n      name: String,\n      allowNesting: Boolean,\n      ignoreParent: Boolean)(body: => T): T = {\n    "
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("// Save the old scope to restore it later")
          ]),
          _vm._v(
            "\n    val scopeKey = SparkContext.RDD_SCOPE_KEY\n    val noOverrideKey = SparkContext.RDD_SCOPE_NO_OVERRIDE_KEY\n    val oldScopeJson = sc.getLocalProperty(scopeKey)\n    val oldScope = Option(oldScopeJson).map(RDDOperationScope.fromJson)\n    val oldNoOverride = sc.getLocalProperty(noOverrideKey)\n    "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("try")]),
          _vm._v(" {\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (ignoreParent) {\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Ignore all parent settings and scopes and start afresh with our own root scope"
            )
          ]),
          _vm._v("\n        sc.setLocalProperty(scopeKey, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RDDOperationScope(name).toJson)\n      } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("else")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(" (sc.getLocalProperty(noOverrideKey) == "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("null")]),
          _vm._v(") {\n        "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Otherwise, set the scope only if the higher level caller allows us to do so"
            )
          ]),
          _vm._v("\n        sc.setLocalProperty(scopeKey, "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RDDOperationScope(name, oldScope).toJson)\n      }\n      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Optionally disallow the child body to override our scope"
            )
          ]),
          _vm._v("\n      "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("if")]),
          _vm._v(
            " (!allowNesting) {\n        sc.setLocalProperty(noOverrideKey, "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"true"')]),
          _vm._v(")\n      }\n      body\n    } "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("finally")]),
          _vm._v(" {\n      "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "// Remember to restore any state that was modified before exiting"
            )
          ]),
          _vm._v(
            "\n      sc.setLocalProperty(scopeKey, oldScopeJson)\n      sc.setLocalProperty(noOverrideKey, oldNoOverride)\n    }\n  }\n}\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("从源码看讲的大致意思是 整个RDD创建，形成DAG图。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.sparkDemo.optimizing\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" java.sql.{Connection, DriverManager}\n\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.apache.spark.{SparkConf, SparkContext}\n\nobject ForeachDemoScala {\n  "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("def "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("main")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("(args: Array[String])")
            ]),
            _vm._v(": Unit ")
          ]),
          _vm._v("= {\n    val conf = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkConf()\n    conf.setAppName("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"foreach"')]),
          _vm._v(")\n    conf.setMaster("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"local"')]),
          _vm._v(")\n    val sc = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" SparkContext(conf);\n    val rdd = sc.parallelize("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" to "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(")\n    rdd.foreach(x=>{\n      println("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"x:"')]),
          _vm._v(
            "+x)\n    })\n\n    rdd.foreachPartition(iter =>{\n       println("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"run foreach partion"')
          ]),
          _vm._v(")\n       val conn = DriverManager.getConnection("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '"jdbc:mysql://hadoop03.fandong.com/hive?user=nodejs1&password=nodejs1"'
            )
          ]),
          _vm._v(
            ");\n       val stmt = conn.createStatement()\n       val rs = stmt.executeQuery("
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"SELECT name FROM DBS"')
          ]),
          _vm._v(")\n       "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("while")]),
          _vm._v("(rs.next()){\n         "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("var")]),
          _vm._v(" re = rs.getObject("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(
            ")\n         println(re)\n       }\n\n    })\n\n  }\n}\n\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n    [Stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(
            ":>                                                          ("
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" + "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(") / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("]x:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("9")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("18")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("19")]),
          _vm._v("\nx:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20")]),
          _vm._v("\nrun foreach partion\n[Stage "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            ":>                                                          ("
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" + "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(") / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("]"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v("\nportrait\nrun foreach partion\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v("\nportrait\nrun foreach partion\n"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
          _vm._v("\nportrait\n\nProcess finished with exit code "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("这个和map 相似。")]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml")]),
      _vm._v(" "),
      _c("p", [_vm._v("引入mysql 连接")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "   <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.0")]),
          _vm._v(".17</version>\n   </dependency>\n\n")
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

/***/ "./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md":
/*!***************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigData_spark_3_3_foreachPartition_md_vue_type_template_id_425a5101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101& */ "./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _bigData_spark_3_3_foreachPartition_md_vue_type_template_id_425a5101___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bigData_spark_3_3_foreachPartition_md_vue_type_template_id_425a5101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101&":
/*!**********************************************************************************************!*\
  !*** ./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_3_foreachPartition_md_vue_type_template_id_425a5101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/bigData_spark_高阶_3-3_foreachPartition.md?vue&type=template&id=425a5101&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_3_foreachPartition_md_vue_type_template_id_425a5101___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_bigData_spark_3_3_foreachPartition_md_vue_type_template_id_425a5101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-53e278ba.js.map