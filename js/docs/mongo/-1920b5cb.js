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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/db_mongo_基础_1-1_操作.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("h3", { attrs: { id: "mongo-db" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#mongo-db", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" mongo db")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("connect")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(" \n   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "04 bin]# mongo\n\tMongoDB shell version v4.2.0\n\tconnecting to: mongodb:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb"
            )
          ]),
          _vm._v("\n\tImplicit session: session { "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"id"')]),
          _vm._v(" : UUID("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"ded7b3a1-d464-4fd5-b4d3-4fa4faef2195"')
          ]),
          _vm._v(") }\n\tMongoDB server version: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.2")]),
          _vm._v(".0\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("查看/创建/删除数据库")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//查看")]),
          _vm._v("\n\t> show dbs\n\tadmin   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\tconfig  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\tlocal   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\t> \n\n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//创建, use 存在db则切换，不存在则创建")
          ]),
          _vm._v(
            "\n   > use portrait\n\tswitched to db portrait\n\t> db\n\tportrait\n\t\n\t"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//显示数据，必须创建Document,使用db.<databaseName>.insert(jsonObj)"
            )
          ]),
          _vm._v("\n\t\n\t> db.portrait.insert({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'name'")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'test'")]),
          _vm._v("})\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nInserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" })\n\t> show dbs\n\tadmin     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\tconfig    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\tlocal     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\tportrait  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0.000")]),
          _vm._v("GB\n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//删除db,需切换到需要删除的数据中，在删除")
          ]),
          _vm._v(
            "\n\t> use portrait\n\tswitched to db portrait\n\t> db\n\tportrait\n\t\n\t> db.dropDatabase()\n\t{ "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"dropped"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"portrait"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"ok"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" }\n\t> \n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("创建/删除集合")]),
          _vm._v(" "),
          _c("p", [_vm._v("使用db.createCollection(collectionName,options)")])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "   > use portrait\n\tswitched to db portrait\n\t> db.createCollection("
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v("'test'")]),
          _vm._v(")\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"ok"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" }\n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//查看 show collections")
          ]),
          _vm._v("\n\t> show tables;\n\ttest\n\t> \n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//自动创建集合，插入数据会默认创建集合")
          ]),
          _vm._v("\n\t\n\t> db.test1.insert({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"isSuccess"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"size"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("613444")]),
          _vm._v("})\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nInserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" })\n\t> show collections\n\ttest\n\ttest1\n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//删除集合,删除test1的集合，使用命令 db.<collection>.drop()"
            )
          ]),
          _vm._v("\n\t> db.test1.drop()\n   "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v("\n   > show collections\n\ttest\n\t> \n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("Document 操作")]),
          _vm._v(" "),
          _c("p", [_vm._v("inset / save")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "insert: 插入一条记录,_id 一致,则报错\nsave：  _id 一致则更新数据，否则则插入"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t> document={"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v("}\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t> db.test1.insert(document)\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nInserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" })\n\t> show collections\n\ttest\n\ttest1\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//查找当前集合中所有的文档")
          ]),
          _vm._v("\n\t> db.test1.find()\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d610fe3f73759f9fda7189d"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : \t"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t> \n\t\n   > document={"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test2"')]),
          _vm._v("}\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test2"')]),
          _vm._v(" }\n\t> db.test1.insert(document)\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nInserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" })\n\t> db.test1.insert(document)\n\tWriteResult({\n\t\t"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nInserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(",\n\t\t"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"writeError"')]),
          _vm._v(" : {\n\t\t\t"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"code"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11000")]),
          _vm._v(",\n\t\t\t"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"errmsg"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '"E11000 duplicate key error collection: portrait.test1 index: \t_id_ dup key: { _id: \\"test1\\" }"'
            )
          ]),
          _vm._v("\n\t\t}\n\t})\n\t> \n\t\n\t> document={"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(","),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v("}\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\t> db.test1.save(document)\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nMatched"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nUpserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nModified"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" })\n\t> \n\t\n\t"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//update")]),
          _vm._v("\n\t\n\t> db.test1.update({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v("},{$set:{"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v("}})\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nMatched"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nUpserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nModified"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" })\n\t> db.test1.find()\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d610fe3f73759f9fda7189d"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d61101ef73759f9fda7189e"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d611050f73759f9fda7189f"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-19"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test11"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\t> \n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "\tupdate（<query>,<update>,{ upsert:false, multi:false, \t\twriteConcern:<document>})\n\t \n\toptiops:\n\t \n\tquery : 查询条件\n\t \n\tupdate：更新数据$set:{updateObj}\n\t \n\tupsert: query 查询不到，是否插入一条信息\n\t \n\tmulti:  更新一条还是多条，true 更新所有符合条件的值\n\t \n\twriteConcern： 可选，抛出的信息\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n   > db.test1.update({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test12"')]),
          _vm._v("},{$set:{"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v("}})\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nMatched"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nUpserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nModified"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" })\n\t> db.test1.find()\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d610fe3f73759f9fda7189d"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d61101ef73759f9fda7189e"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d611050f73759f9fda7189f"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-19"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test11"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\t> db.test1.update({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test12"')]),
          _vm._v("},{$set:{"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v("}},{upsert:"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v("})\n\tWriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nMatched"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nUpserted"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nModified"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test12"')]),
          _vm._v(" })\n\t> db.test1.find()\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d610fe3f73759f9fda7189d"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d61101ef73759f9fda7189e"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-18"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : ObjectId("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"5d611050f73759f9fda7189f"')
          ]),
          _vm._v("), "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"body"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"haha"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"date"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"2019-08-19"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test11"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test12"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"update test"')]),
          _vm._v(" }\n\t> \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v("\t db.test1.find().pretty() 输出的数据格式美化\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("删除文档")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t> db.test1.remove({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test1"')]),
          _vm._v("})\n    WriteResult({ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"nRemoved"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(" })\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "  //since v:2.6\n   db.collection.remove(\n\t   <query>,\n\t   {\n\t     justOne: <boolean>,\n\t     writeConcern: <document>\n\t   }\n\t)\n\noptions:\n\njustOne: 默认为false，匹配后都删除，true 只删除一条\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("查询文档")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t> db.test1.find({"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v("})\n     { "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test11"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "db.collection.find(query, projection)\n\noptions:\n\nquery: 过滤条件\n\nprojection: 可选，默认返回全部\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          '返回某个字段，使用 属性名 ： 1，“_id" 不知道默认返回，不想返回指定0'
        )
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t> db.test1.find({name:"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v("},{name:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("})\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"_id"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test11"')]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\t> db.test1.find({name:"),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v("},{name:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(",_id:"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("})\n\t{ "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"name"')]),
          _vm._v(" : "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"test3"')]),
          _vm._v(" }\n\n")
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

/***/ "./src/pages/md/db_mongo_基础_1-1_操作.md":
/*!********************************************!*\
  !*** ./src/pages/md/db_mongo_基础_1-1_操作.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_mongo_1_1_md_vue_type_template_id_eff8d95a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a& */ "./src/pages/md/db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _db_mongo_1_1_md_vue_type_template_id_eff8d95a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _db_mongo_1_1_md_vue_type_template_id_eff8d95a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/db_mongo_基础_1-1_操作.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a&":
/*!***************************************************************************!*\
  !*** ./src/pages/md/db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_db_mongo_1_1_md_vue_type_template_id_eff8d95a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/db_mongo_基础_1-1_操作.md?vue&type=template&id=eff8d95a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_db_mongo_1_1_md_vue_type_template_id_eff8d95a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_db_mongo_1_1_md_vue_type_template_id_eff8d95a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-1920b5cb.js.map