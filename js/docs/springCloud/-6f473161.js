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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4& ***!
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
      _c("h2", { attrs: { id: "spring-eureka" } }, [
        _c(
          "a",
          {
            staticClass: "header-anchor",
            attrs: { href: "#spring-eureka", "aria-hidden": "true" }
          },
          [_vm._v("#")]
        ),
        _vm._v(" spring Eureka")
      ]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("Eureka 服务发现")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "为服务消费者 提供 服务发现的功能，如果服务提供者注册的ip发生变化，也无需手动调整。"
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("启动客户端")])])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tFailed to bind properties under "),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'eureka.client.service-url'")
          ]),
          _vm._v(" to java.util.Map<java.lang.String, java.lang.String>:\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "eureka:\n  client:\n    service-url:\n      defaultZone: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:8761/eureka/")
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("defaultZone 没有写导致的这个问题。")]),
      _vm._v(" "),
      _c("p", [_vm._v("client：")]),
      _vm._v(" "),
      _c("p", [_vm._v("pom.xml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   \n    <?xml version="),
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
            ".0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v(
            ".8.RELEASE</version>\n        <relativePath/> <!-- lookup parent from repository -->\n    </parent>\n    <groupId>com.fandong.it.springDemo</groupId>\n    <artifactId>microserviecProviderUser2</artifactId>\n    <version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT</version>\n    <description>Demo project "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(
            " Spring Boot</description>\n    <properties>\n        <java.version>"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.8")]),
          _vm._v(
            "</java.version>\n        <spring-cloud.version>Greenwich.SR3</spring-cloud.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>"
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            "</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("resource:")]),
      _vm._v(" "),
      _c("p", [_vm._v("application.yml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\tserver:\n\t  port: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8080")]),
          _vm._v(
            "\n\tmanagement:\n\t endpoints:\n\t   web:\n\t     base-path: /actuator\n\t      exposure:\n\t        include: "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"*"')]),
          _vm._v("\n\t security:\n\t  enabled: "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\n\tinfo:\n\t  app:\n\t    name: "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@project")]),
          _vm._v(".artifactId@\n\t    encoding: "),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@project")]),
          _vm._v(
            ".build.sourceEncoding@\n\teureka:\n\t  client:\n\t    service-url:\n\t      defaultZone: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//localhost:8761/eureka/")
          ]),
          _vm._v(
            "\n\tspring:\n\t  application:\n\t    name: microservice-provider-user\n\t  jpa:\n\t    generate-ddl: "
          ),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\n\t    show-sql: "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("true")]),
          _vm._v(
            "\n\t    hibernate:\n\t      ddl-auto: none\n\t    database: MYSQL\n\t  datasource:                           # 指定数据源\n\t    url: jdbc:mysql:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop03.fandong.com:3306/springCloudStudy?characterEncoding=utf8&useSSL=false    # 指定数据源类型"
            )
          ]),
          _vm._v(
            "\n\t    username: nodejs1            # 指定h2数据库的建表脚本\n\t    password: nodejs1            # 指定h2数据库的数据脚本\n\t      #下面为连接池相关配置\n\t    dbcp2:\n\t        #初始化连接池大小\n\t        initial-size: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("\n\t        #陪住最小连接池数\n\t        min-idle: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v("\n\t        #配置最大连接池数\n\t        max-idle: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30")]),
          _vm._v(
            "\n\t        #配置获取超时连接的等待时间\n\t        max-wait-millis: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("30000")]),
          _vm._v(
            "\n\t        #配置多长时间进行一次检测,检测需要关闭的数据库连接\n\t        time-between-eviction-runs-millis: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200000")]),
          _vm._v(
            "\n\t        #配置连接在连接池的最小生存时间\n\t        remove-abandoned-on-maintenance: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("200000")]),
          _vm._v(
            "\n\tlogging:                                # 配置日志级别，让hibernate打印出执行的SQL\n\t  level:\n\t    root: INFO\n\t    org.hibernate: INFO\n\t    org.hibernate.type.descriptor.sql.BasicBinder: TRACE\n\t    org.hibernate.type.descriptor.sql.BasicExtractor: TRACE\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("入口函数：")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("package")]),
          _vm._v(" com.it.fandong.springDemo;\n\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(" org.springframework.boot.SpringApplication;\n\t"),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("import")]),
          _vm._v(
            " org.springframework.boot.autoconfigure.SpringBootApplication;\n\t\n\t"
          ),
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
          _vm._v("{\n\t    "),
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
            "{\n\t        SpringApplication.run(Application.class, args);\n\t    }\n\t}\n\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("--客户端不用添加 EurekaClient 的注解")]),
      _vm._v(" "),
      _c("p", [_vm._v("--搭建简单的高可用")]),
      _vm._v(" "),
      _c("p", [_vm._v("----配置 Eureka ha")]),
      _vm._v(" "),
      _c("p", [_vm._v("主要区别在application或者部署多个节点")]),
      _vm._v(" "),
      _c("p", [_vm._v("1、使用profiles")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "    spring:\n  application:\n    name: microserver-discovery-eureka-ha\n---\nspring:\n  profiles: hadoop03\nserver:\n  port: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8763")]),
          _vm._v(
            "\neureka:\n  instance:\n    hostname: hadoop03.fandong.com\n  client:\n    serviceUrl:\n      defaultZone: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//${eureka.instance.hostname}:${server.port}/eureka/")
          ]),
          _vm._v("\n\n---\nspring:\n  profiles: hadoop02\nserver:\n  port: "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8763")]),
          _vm._v(
            "\neureka:\n  instance:\n    hostname: hadoop02.fandong.com\n  client:\n    serviceUrl:\n      defaultZone: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//${eureka.instance.hostname}:${server.port}/eureka/fan")
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("'---' 这表示分割线")]),
      _vm._v(" "),
      _c("p", [_vm._v("上面分服务都会自注册如果取消需要加上")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "eureka:\n  instance:\n    hostname: hadoop03.fandong.com\n  client:\n    serviceUrl:\n      defaultZone: http:"
          ),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//${eureka.instance.hostname}:${server.port}/eureka/")
          ]),
          _vm._v("\n\n  registerWithEureka: "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\n  fetchRegistry: "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v("\n    \n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("部署到服务器上")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t"),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//profiles:")]),
          _vm._v("\n\t\n\tjava -jar microserviceEurekaServerHa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(
            "-SNAPSHOT.jar \n\t --spring.profiles.active=hadoop02\n\t \n\t"
          ),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//profiles:")]),
          _vm._v("\n\t\n\tjava -jar microserviceEurekaServerHa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT.jar \n\t --spring.profiles.active=hadoop03\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("result:")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t ^C[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("03 eurekaHa]# java -jar microserviceEurekaServerHa-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v("-SNAPSHOT.jar  --spring.profiles.active=hadoop03\n"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("31.115")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1994")]),
          _vm._v(
            " --- [           main] trationDelegate$BeanPostProcessorChecker : Bean "
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              "'org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration'"
            )
          ]),
          _vm._v(
            " of type [org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration$$EnhancerBySpringCGLIB$$e6d3dc3e] "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("is not eligible "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" getting processed by all "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("BeanPostProcessors")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
              _vm._v(" example: not eligible "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
              _vm._v(" auto-proxying)")
            ]),
            _vm._v(
              "\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("_")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(_)")]),
            _vm._v("_ __  __ _ \\ \\ \\ \\\n"),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("( ( )")]),
            _vm._v(
              "\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || "
            ),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(_| |  )")]),
            _vm._v(" ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n ")
          ]),
          _vm._v(
            "=========|_|==============|___/=/_/_/_/\n :: Spring Boot ::        (v2.1.8.RELEASE)\n\n"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32.530")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1994")]),
          _vm._v(
            " --- [           main] c.f.it.springCloudDemo.Application       : The following profiles are active: hadoop03\n"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("35.525")]),
          _vm._v("  WARN "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1994")]),
          _vm._v(
            " --- [           main] o.s.boot.actuate.endpoint.EndpointId     : Endpoint ID "
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v("'service-registry'")
          ]),
          _vm._v(
            " contains invalid characters, please migrate to a valid format.\n"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("36.592")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1994")]),
          _vm._v(
            " --- [           main] o.s.cloud.context.scope.GenericScope     : BeanFactory id=dd783cf1-"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("dcb-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3939")]),
          _vm._v("-b01a-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("31")]),
          _vm._v("bc92456765\n"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2018")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("09")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("10")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("12")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("37.053")]),
          _vm._v("  INFO "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1994")]),
          _vm._v(
            " --- [           main] trationDelegate$BeanPostProcessorChecker : Bean "
          ),
          _c("span", { staticClass: "hljs-string" }, [
            _vm._v(
              "'org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration'"
            )
          ]),
          _vm._v(
            " of type [org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration$$EnhancerBySpringCGLIB$$e6d3dc3e] "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("is not eligible "),
            _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
            _vm._v(" getting processed by all "),
            _c("span", { staticClass: "hljs-title" }, [
              _vm._v("BeanPostProcessors")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
              _vm._v(" example: not eligible "),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
              _vm._v(" auto-proxying)")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("把刚才的client 注册到集群上")])]),
      _vm._v(" "),
      _c("p", [_vm._v("需要修改application.yml")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("    defaultZone: http:"),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v(
              "//hadoop03.fandong.com:8763/eureka/,http://hadoop02.fandong.com:8763/eureka/"
            )
          ]),
          _vm._v("\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/hadoop02.png",
            alt: "hadoop02"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "https://fandong90.github.io/static/img/hadoop033.png",
            alt: "hadoop02"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Eureka 自我保护模式")]),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("遇到网络故障时，会自动启动，保存注册的网络服务。")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(" "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//禁用自动保护模式")
          ]),
          _vm._v("\n eureka.server.enable-self-preservation = "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("false")]),
          _vm._v(" \n \n")
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

/***/ "./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md":
/*!****************************************************************!*\
  !*** ./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microservice_springCloud_1_5_Eureka_md_vue_type_template_id_61e6beb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4& */ "./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _microservice_springCloud_1_5_Eureka_md_vue_type_template_id_61e6beb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _microservice_springCloud_1_5_Eureka_md_vue_type_template_id_61e6beb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/microservice_springCloud_基础_1-5_Eureka.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4&":
/*!***********************************************************************************************!*\
  !*** ./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_5_Eureka_md_vue_type_template_id_61e6beb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/microservice_springCloud_基础_1-5_Eureka.md?vue&type=template&id=61e6beb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_5_Eureka_md_vue_type_template_id_61e6beb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_microservice_springCloud_1_5_Eureka_md_vue_type_template_id_61e6beb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-6f473161.js.map