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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", { attrs: { id: "ribbon" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#ribbon", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" Ribbon")
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("实现了服务的负载均衡")])]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/Robinbalance1.png",
            alt: "ribbon"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("首先把写好的服务示例注册到eureka 中")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "   默认的eureka server 是 hadoop02,hadoop03\n   \n   注册的服务实例是： hadoop04,hadoop05\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/instanceribbon1.png",
            alt: "rrr"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("实现一个client 端调用服务例子")])]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("     \n\t<?xml version="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"1.0"')]),
          _vm._v(" encoding="),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"UTF-8"')]),
          _vm._v("?>\n<project xmlns="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"http://maven.apache.org/POM/4.0.0"')
          ]),
          _vm._v("\n         xmlns:xsi="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"http://www.w3.org/2001/XMLSchema-instance"')
          ]),
          _vm._v("\n         xsi:schemaLocation="),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              '"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"'
            )
          ]),
          _vm._v(">\n    <modelVersion>"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.0")]),
          _vm._v(
            ".0</modelVersion>\n\n    <groupId>com.fandong.it.springCloudDemo</groupId>\n    <artifactId>consumer-movie-ribbon</artifactId>\n    <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT</version>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v(
            ".8.RELEASE</version>\n        <relativePath/> <!-- lookup parent from repository -->\n    </parent>\n    <properties>\n        <java.version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(
            "</java.version>\n        <spring-cloud.version>Greenwich.SR3</spring-cloud.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            "</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("tips: "),
        _c("strong", [
          _vm._v("ribbon 已经被包含在 eureka-client 端中，所以无需再次引入了")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("1、创建启动类")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    \n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.springCloudDemo;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.boot.SpringApplication;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.springframework.boot.autoconfigure.SpringBootApplication;\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.springframework.cloud.client.loadbalancer.LoadBalanced;\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.context.annotation.Bean;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.web.client.RestTemplate;\n\t\n\t"),
          _c("span", { staticClass: "hljs-meta" }, [
            _vm._v("@SpringBootApplication")
          ]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Application")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Bean")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@LoadBalanced")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" RestTemplate "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("restTemplate")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("new")]),
          _vm._v(" RestTemplate();\n\t    }\n\t\n\t    "),
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
          _vm._v(
            "{\n\t        SpringApplication.run(Application.class, args);\n\t    }\n\t}\n\t\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("tips: "),
        _c("strong", [
          _vm._v(
            "这里使用RestTemplate 进行配置负载均衡，添加上注解LoadBalanced"
          )
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("2、创建一个服务类")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.fandong.it.springCloudDemo.serviceDispatch;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.slf4j.Logger;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.slf4j.LoggerFactory;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.springframework.beans.factory.annotation.Autowired;\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.cloud.client.ServiceInstance;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.springframework.cloud.client.loadbalancer.LoadBalancerClient;\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.web.bind.annotation.GetMapping;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.web.bind.annotation.PathVariable;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.springframework.web.bind.annotation.RestController;\n\t"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.web.client.RestTemplate;\n\t\n\t\n\t"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@RestController")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-class" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("class")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("MoiveService")]),
            _vm._v(" ")
          ]),
          _vm._v("{\n\t\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("static")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("final")]),
          _vm._v(
            " Logger LOGGER = LoggerFactory.getLogger(MoiveService.class);\n\t\n\t    "
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Autowired")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" RestTemplate restTemplate;\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@Autowired")]),
          _vm._v("\n\t    "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("private")]),
          _vm._v(" LoadBalancerClient loadBalancerClient;\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@GetMapping")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"/getHostName"')
          ]),
          _vm._v(")\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" String "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("getHostName")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("return")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".restTemplate.getForObject("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"http://microservice-provider-user/whichone"')
          ]),
          _vm._v(",String.class\n\t        );\n\t    }\n\t\n\t    "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@GetMapping")]),
          _vm._v("("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"/log-user-instance"')
          ]),
          _vm._v(")\n\t    "),
          _c("span", { staticClass: "hljs-function" }, [
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("public")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("void")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("logUserInstance")
            ]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")])
          ]),
          _vm._v("{\n\t        ServiceInstance serviceInstance = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("this")]),
          _vm._v(".loadBalancerClient.choose("),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v('"microservice-provider-user"')
          ]),
          _vm._v(");\n\t        MoiveService.LOGGER.info("),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"{}:{}:{}"')]),
          _vm._v(
            ",serviceInstance.getServiceId(),serviceInstance.getHost(),serviceInstance.getPort());\n\t    }\n\t\n\t}\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("tips: "),
        _c("strong", [
          _vm._v("这个类必须在@ComponentScan的包，使用springboot的约定配置")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("3、配置application.yml,需要客户端发现eureka的服务")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tserver:\n\t  port: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v(
            "\n\tspring:\n\t  application:\n\t    name: microservice-consumer\n\teureka:\n\t  client:\n\t    registerWithEureka: "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\n\t    service-url:\n\t      defaultZone: http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop02.fandong.com:8763/eureka/,http://hadoop03.fandong.com:8763/eureka/  "
            )
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [
          _vm._v(
            "registerWithEureka: false 表示当前的服务不需要注册到eureka server 中去"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("启动调用")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    bogon:scalaSdk fandong$ curl "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'http://localhost:8080/log-user-instance'")
          ]),
          _vm._v(" -i -G\n\tHTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200")]),
          _vm._v(" \n\tContent-Length: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tDate: Sun, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" Sep "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(" GMT\n\t\n\tbogon:scalaSdk fandong$ curl "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'http://localhost:8080/log-user-instance'")
          ]),
          _vm._v(" -i -G\n\tHTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200")]),
          _vm._v(" \n\tContent-Length: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tDate: Sun, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" Sep "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(" GMT\n\t\n\tbogon:scalaSdk fandong$ curl "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'http://localhost:8080/log-user-instance'")
          ]),
          _vm._v(" -i -G\n\tHTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200")]),
          _vm._v(" \n\tContent-Length: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tDate: Sun, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" Sep "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(" GMT\n\t\n\tbogon:scalaSdk fandong$ curl "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'http://localhost:8080/log-user-instance'")
          ]),
          _vm._v(" -i -G\n\tHTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200")]),
          _vm._v(" \n\tContent-Length: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tDate: Sun, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" Sep "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" GMT\n\t\n\tbogon:scalaSdk fandong$ curl "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'http://localhost:8080/log-user-instance'")
          ]),
          _vm._v(" -i -G\n\tHTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200")]),
          _vm._v(" \n\tContent-Length: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tDate: Sun, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" Sep "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14")]),
          _vm._v(" GMT\n\t\n\tbogon:scalaSdk fandong$ curl "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'http://localhost:8080/log-user-instance'")
          ]),
          _vm._v(" -i -G\n\tHTTP/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.1")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200")]),
          _vm._v(" \n\tContent-Length: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tDate: Sun, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" Sep "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("02")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v(" GMT\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10.384")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38846")]),
          _vm._v(" --- [nio-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("-exec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(
            "] c.f.i.s.serviceDispatch.MoiveService     : microservice-provider-user:hadoop05.fandong.com:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12.784")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38846")]),
          _vm._v(" --- [nio-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("-exec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v(
            "] c.f.i.s.serviceDispatch.MoiveService     : microservice-provider-user:hadoop04.fandong.com:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13.713")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38846")]),
          _vm._v(" --- [nio-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("-exec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v(
            "] c.f.i.s.serviceDispatch.MoiveService     : microservice-provider-user:hadoop05.fandong.com:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("14.657")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38846")]),
          _vm._v(" --- [nio-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("-exec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v(
            "] c.f.i.s.serviceDispatch.MoiveService     : microservice-provider-user:hadoop04.fandong.com:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15.422")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38846")]),
          _vm._v(" --- [io-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("-exec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(
            "] c.f.i.s.serviceDispatch.MoiveService     : microservice-provider-user:hadoop05.fandong.com:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("15")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("53")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16.733")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38846")]),
          _vm._v(" --- [nio-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("-exec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "] c.f.i.s.serviceDispatch.MoiveService     : microservice-provider-user:hadoop04.fandong.com:"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v("\n    \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("从结果可以看到实现了负载均衡的操作。")]),
      _vm._v(" "),
      _c("p", [
        _c(
          "a",
          {
            attrs: {
              href:
                "https://cloud.spring.io/spring-cloud-netflix/reference/html/#spring-cloud-ribbon"
            }
          },
          [_vm._v("Ribbon 官网教程")]
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("还有一些Ribbon的配置示例，官网有详细的介绍。。。")])
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

/***/ "./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md":
/*!****************************************************************!*\
  !*** ./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microservice_springCloud_1_6_ribbon_md_vue_type_template_id_4226c50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a& */ "./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _microservice_springCloud_1_6_ribbon_md_vue_type_template_id_4226c50a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _microservice_springCloud_1_6_ribbon_md_vue_type_template_id_4226c50a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/microservice_springCloud_基础_1-6_ribbon.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a&":
/*!***********************************************************************************************!*\
  !*** ./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_6_ribbon_md_vue_type_template_id_4226c50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/microservice_springCloud_基础_1-6_ribbon.md?vue&type=template&id=4226c50a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_6_ribbon_md_vue_type_template_id_4226c50a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_6_ribbon_md_vue_type_template_id_4226c50a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-232d8824.js.map