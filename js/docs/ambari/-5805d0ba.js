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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--5-0!./build/md-loader!./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              "%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%89%A9%E5%AE%B9%E4%BA%8B%E4%BB%B6"
          }
        },
        [
          _c(
            "a",
            {
              staticClass: "header-anchor",
              attrs: {
                href:
                  "#%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%89%A9%E5%AE%B9%E4%BA%8B%E4%BB%B6",
                "aria-hidden": "true"
              }
            },
            [_vm._v("#")]
          ),
          _vm._v(" 集群部署虚拟机扩容事件")
        ]
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", [
          _c("p", [_vm._v("安装集群时，发现虚拟机容量过小，需要扩容。")])
        ]),
        _vm._v(" "),
        _c("li", [_c("p", [_vm._v("使用的virtual box")])]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("扩容有两种操作 UI可视 、命令方法。")]),
          _vm._v(" "),
          _c("p", [_vm._v("UI可视操作比较简单：")]),
          _vm._v(" "),
          _c("p", [_vm._v("** 管理-》虚拟介质管理")]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              attrs: {
                src:
                  "http://fandong90.github.io/static/img/virtual_box_ui-1.png",
                alt: "虚拟介质管理"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("p", [_vm._v("发现硬盘不显示，需要借助diskutil 挂载硬盘")])
        ])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [_vm._v("     virtual box 提示硬盘虚拟机不可用。\n     \n")])
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//查看硬盘名称")
          ]),
          _vm._v(
            "\n   \n   bogon:fandong90.github.io fandong$ diskutil list\n\t/dev/disk0 (internal, physical):\n\t   #:                       TYPE NAME                    SIZE       IDENTIFIER\n\t   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":      GUID_partition_scheme                        *"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("121.3")]),
          _vm._v(" GB   disk0\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":                        EFI EFI                     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("209.7")]),
          _vm._v(" MB   disk0s1\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(":                 Apple_APFS Container disk1         "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("120.3")]),
          _vm._v(" GB   disk0s2\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(":           Windows Recovery                         "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("847.2")]),
          _vm._v(
            " MB   disk0s3\n\t\n\t/dev/disk1 (synthesized):\n\t   #:                       TYPE NAME                    SIZE       IDENTIFIER\n\t   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":      APFS Container Scheme -                      +"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("120.3")]),
          _vm._v(
            " GB   disk1\n\t                                 Physical Store disk0s2\n\t   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":                APFS Volume Macintosh HD            "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("90.4")]),
          _vm._v(" GB    disk1s1\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(":                APFS Volume Preboot                 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("65.2")]),
          _vm._v(" MB    disk1s2\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v(":                APFS Volume Recovery                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.0")]),
          _vm._v(" GB     disk1s3\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(":                APFS Volume VM                      "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.1")]),
          _vm._v(
            " GB     disk1s4\n\t\n\t/dev/disk2 (external, physical):\n\t   #:                       TYPE NAME                    SIZE       IDENTIFIER\n\t   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(":     FDisk_partition_scheme                        *"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("500.1")]),
          _vm._v(" GB   disk2\n\t   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(":               Windows_NTFS win                     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("500.1")]),
          _vm._v(" GB   disk2s1\n\n\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("使用diskutil mountDisk 挂载")])]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v(
            "\tbogon:fandong90.github.io fandong$ diskutil mountDisk /dev/"
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("disk2\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Volume")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(s)")]),
            _vm._v(" mounted successfully\n\t\n\t"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("//重启虚拟机")
            ]),
            _vm._v("\n\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("如下图虚拟机容量如下：")])]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "http://fandong90.github.io/static/img/expandVolumeu2.png",
            alt: "volume2"
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", [_c("li", [_vm._v("需要扩展后的容量如下:")])]),
      _vm._v(" "),
      _c("p", [
        _c("img", {
          attrs: {
            src: "http://fandong90.github.io/static/img/expandVolumeu3.png",
            alt: "volume3"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("*开启虚拟机进入")]),
      _vm._v(" "),
      _c("p", [_vm._v("使用df -h 查看容量。")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# df -h\n\t文件系统                 容量  已用  可用 已用% 挂载点\n\t/dev/mapper/centos-root   "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68")]),
          _vm._v("G  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8.3")]),
          _vm._v("G   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("60")]),
          _vm._v("G   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("13")]),
          _vm._v("% /\n\tdevtmpfs                 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("484")]),
          _vm._v("M     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("484")]),
          _vm._v("M    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("% /dev\n\ttmpfs                    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("496")]),
          _vm._v("M     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("496")]),
          _vm._v("M    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("% /dev/shm\n\ttmpfs                    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("496")]),
          _vm._v("M  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6.8")]),
          _vm._v("M  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("489")]),
          _vm._v("M    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("% /run\n\ttmpfs                    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("496")]),
          _vm._v("M     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("496")]),
          _vm._v("M    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("% /sys/fs/cgroup\n\t/dev/sda1               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1014")]),
          _vm._v("M  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("160")]),
          _vm._v("M  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("855")]),
          _vm._v("M   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16")]),
          _vm._v("% /boot\n\ttmpfs                    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("100")]),
          _vm._v("M     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("100")]),
          _vm._v("M    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("% /run/user/"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# \n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("使用 fdisk -l 查看磁盘信息")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# fdisk -l\n\n\t磁盘 /dev/sda："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("160.5")]),
          _vm._v(" GB, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("160474071040")]),
          _vm._v(" 字节，"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("313425920")]),
          _vm._v(" 个扇区\n\tUnits = 扇区 of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" * "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" bytes\n\t扇区大小(逻辑/物理)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\tI/O 大小(最小/最佳)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\t磁盘标签类型：dos\n\t磁盘标识符："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0x000ca350")]),
          _vm._v(
            "\n\t\n\t   设备 Boot      Start         End      Blocks   Id  System\n\t/dev/sda1   *        "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2048")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2099199")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1048576")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("83")]),
          _vm._v("  Linux\n\t/dev/sda2         "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2099200")]),
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16777215")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7339008")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("e  Linux LVM\n\t/dev/sda3        "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16777216")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("146800639")]),
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("65011712")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("83")]),
          _vm._v("  Linux\n\t\n\t磁盘 /dev/mapper/centos-root："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("73.0")]),
          _vm._v(" GB, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("73014444032")]),
          _vm._v(" 字节，"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("142606336")]),
          _vm._v(" 个扇区\n\tUnits = 扇区 of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" * "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" bytes\n\t扇区大小(逻辑/物理)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\tI/O 大小(最小/最佳)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\t\n\t\n\t磁盘 /dev/mapper/centos-swap："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("859")]),
          _vm._v(" MB, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("859832320")]),
          _vm._v(" 字节，"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1679360")]),
          _vm._v(" 个扇区\n\tUnits = 扇区 of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" * "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" bytes\n\t扇区大小(逻辑/物理)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\tI/O 大小(最小/最佳)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              "从上面的信息可以看出磁盘总共有160.5G的空间，但实际只有70G在使用。\n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("fdisk /dev/sda 进行扩容")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n  [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# fdisk /dev/sda\n\t欢迎使用 fdisk (util-linux "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2.23")]),
          _vm._v(
            ".2)。\n\t\n\t更改将停留在内存中，直到您决定将更改写入磁盘。\n\t使用写入命令前请三思。\n\t\n\t\n\t命令(输入 m 获取帮助)：n\n\tPartition type:\n\t   "
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("p   "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("primary")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
              _vm._v(" primary, "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
              _vm._v(" extended, "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
              _vm._v(" free)")
            ]),
            _vm._v("\n\t   e   extended\n\t"),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Select")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
              _vm._v(" e)")
            ]),
            _vm._v(": \n\t\n\t"),
            _c("span", { staticClass: "hljs-comment" }, [
              _vm._v("// n 表示增加新分区。")
            ]),
            _vm._v("\n\t\n\t\n\t "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("Select")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-keyword" }, [_vm._v("default")]),
              _vm._v(" e)")
            ]),
            _vm._v(": p\n\t已选择分区 4\n\t起始 扇区 "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("146800640")]),
              _c("span", { staticClass: "hljs-number" }, [
                _vm._v("-313425919")
              ]),
              _vm._v("，默认为 "),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("146800640")]),
              _vm._v(")")
            ]),
            _vm._v("：\n\t将使用默认值 146800640\n\tLast 扇区, +扇区 or +size")
          ]),
          _vm._v("{K,M,G} ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("146800640")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("313425919")]),
          _vm._v("，默认为 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("313425919")]),
          _vm._v(")：\n\t将使用默认值 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("313425919")]),
          _vm._v("\n\t分区 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(" 已设置为 Linux 类型，大小设为 "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("79.5")]),
          _vm._v(
            " GiB\n\t\n\t命令(输入 m 获取帮助)：w\n\tThe partition table has been altered!\n\t\n\t"
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Calling "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("ioctl")]),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("()")]),
            _vm._v(
              " to re-read partition table.\n\t\n\tWARNING: Re-reading the partition table failed with error 16: 设备或资源忙.\n\tThe kernel still uses the old table. The new table will be used at\n\tthe next reboot or after you run "
            ),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("partprobe")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
              _vm._v(")")
            ]),
            _vm._v(" or "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("kpartx")]),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
              _vm._v(")")
            ]),
            _vm._v("\n\t正在同步磁盘。\n")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("再次使用fdisk -l")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# fdisk -l\n\n\t磁盘 /dev/sda："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("160.5")]),
          _vm._v(" GB, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("160474071040")]),
          _vm._v(" 字节，"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("313425920")]),
          _vm._v(" 个扇区\n\tUnits = 扇区 of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" * "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" bytes\n\t扇区大小(逻辑/物理)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\tI/O 大小(最小/最佳)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\t磁盘标签类型：dos\n\t磁盘标识符："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0x000ca350")]),
          _vm._v(
            "\n\t\n\t   设备 Boot      Start         End      Blocks   Id  System\n\t/dev/sda1   *        "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2048")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2099199")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1048576")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("83")]),
          _vm._v("  Linux\n\t/dev/sda2         "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2099200")]),
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16777215")]),
          _vm._v("     "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7339008")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8")]),
          _vm._v("e  Linux LVM\n\t/dev/sda3        "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("16777216")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("146800639")]),
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("65011712")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("83")]),
          _vm._v("  Linux\n\t/dev/sda4       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("146800640")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("313425919")]),
          _vm._v("    "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("83312640")]),
          _vm._v("   "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("83")]),
          _vm._v("  Linux\n\t\n\t磁盘 /dev/mapper/centos-root："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("73.0")]),
          _vm._v(" GB, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("73014444032")]),
          _vm._v(" 字节，"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("142606336")]),
          _vm._v(" 个扇区\n\tUnits = 扇区 of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" * "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" bytes\n\t扇区大小(逻辑/物理)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\tI/O 大小(最小/最佳)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\t\n\t\n\t磁盘 /dev/mapper/centos-swap："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("859")]),
          _vm._v(" MB, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("859832320")]),
          _vm._v(" 字节，"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1679360")]),
          _vm._v(" 个扇区\n\tUnits = 扇区 of "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(" * "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" = "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" bytes\n\t扇区大小(逻辑/物理)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\tI/O 大小(最小/最佳)："),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节 / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v(" 字节\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("重启服务OK 后，格式化磁盘")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [_vm._v("//写入磁盘")]),
          _vm._v("\n   \n   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# mkfs.ext4 /dev/sda4\n   \n\tmke2fs "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1.42")]),
          _vm._v(".9 ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("28")]),
          _vm._v("-Dec-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2013")]),
          _vm._v(")\n\t文件系统标签=\n\tOS type: Linux\n\t块大小="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096")]),
          _vm._v(" (log="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(")\n\t分块大小="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096")]),
          _vm._v(" (log="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(")\n\tStride="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" blocks, Stripe width="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" blocks\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5210112")]),
          _vm._v(" inodes, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20828160")]),
          _vm._v(" blocks\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1041408")]),
          _vm._v(" blocks ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("5.00")]),
          _vm._v("%) reserved "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("for")]),
          _vm._v(" the "),
          _c("span", { staticClass: "hljs-keyword" }, [_vm._v("super")]),
          _vm._v(" user\n\t第一个数据块="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tMaximum filesystem blocks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2168455168")]),
          _vm._v("\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("636")]),
          _vm._v(" block groups\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32768")]),
          _vm._v(" blocks per group, "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32768")]),
          _vm._v(" fragments per group\n\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8192")]),
          _vm._v(
            " inodes per group\n\tSuperblock backups stored on blocks: \n\t\t"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("32768")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("98304")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("163840")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("229376")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("294912")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("819200")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("884736")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1605632")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2654208")]),
          _vm._v(", \n\t\t"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096000")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7962624")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11239424")]),
          _vm._v(", "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20480000")]),
          _vm._v(
            "\n\t\n\tAllocating group tables: 完成                            \n\t正在写入inode表: 完成                            \n\t"
          ),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("Creating "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("journal")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [
              _vm._v("("),
              _c("span", { staticClass: "hljs-number" }, [_vm._v("32768")]),
              _vm._v(" blocks)")
            ]),
            _vm._v(
              ": 完成\n\tWriting superblocks and filesystem accounting information: 完成\n\t   \n"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("创建物理卷")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# pvcreate /dev/sda4\n\tWARNING: ext4 signature detected on /dev/sda4 at offset "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1080")]),
          _vm._v(
            ". Wipe it? [y/n]: y\n   Wiping ext4 signature on /dev/sda4.\n   Physical volume "
          ),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"/dev/sda4"')]),
          _vm._v(" successfully created.\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("查看是否物理卷创建成功")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t  [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# pvdisplay\n\t  --- Physical volume ---\n\t  PV Name               /dev/sda2\n\t  VG Name               centos\n\t  PV Size               <"
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7.00")]),
          _vm._v(" GiB / not usable "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3.00")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-function" }, [
            _vm._v("MiB\n\t  Allocatable           "),
            _c("span", { staticClass: "hljs-title" }, [_vm._v("yes")]),
            _vm._v(" "),
            _c("span", { staticClass: "hljs-params" }, [_vm._v("(but full)")]),
            _vm._v(
              '\n\t  PE Size               4.00 MiB\n\t  Total PE              1791\n\t  Free PE               0\n\t  Allocated PE          1791\n\t  PV UUID               a4E7sf-pOve-fiIc-v63D-TOMv-z2cc-cb7nML\n\t   \n\t  --- Physical volume ---\n\t  PV Name               /dev/sda3\n\t  VG Name               centos\n\t  PV Size               62.00 GiB / not usable 4.00 MiB\n\t  Allocatable           yes \n\t  PE Size               4.00 MiB\n\t  Total PE              15871\n\t  Free PE               49\n\t  Allocated PE          15822\n\t  PV UUID               lnfWHD-UYkS-SR2a-7pTl-9yck-bgBm-med1Cp\n\t   \n\t  "/dev/sda4" is a new physical volume of "79.45 GiB"\n\t  --- NEW Physical volume ---\n\t  PV Name               /dev/sda4\n\t  VG Name               \n\t  PV Size               79.45 GiB\n\t  Allocatable           NO\n\t  PE Size               0   \n\t  Total PE              0\n\t  Free PE               0\n\t  Allocated PE          0\n\t  PV UUID               NAjoBJ-6A11-vRHz-tWcY-I4Tl-RAES-rTww6Q\n\n'
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [
            _vm._v(
              '发现新的物理卷已经创建成功了。\n"/dev/sda4" is a new physical volume of "79.45 GiB"\n  --- NEW Physical volume ---\n  PV Name               /dev/sda4\n  VG Name               \n  PV Size               79.45 GiB\n  Allocatable           NO\n  PE Size               0   \n  Total PE              0\n  Free PE               0\n  Allocated PE          0\n  PV UUID               NAjoBJ-6A11-vRHz-tWcY-I4Tl-RAES-rTww6Q\n'
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("查看当前挂载的卷组")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\t   \n\t[root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# vgdisplay\n\t  --- Volume group ---\n\t  VG Name               centos\n\t  System ID             \n\t  Format                lvm2\n\t  Metadata Areas        "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  Metadata Sequence No  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("6")]),
          _vm._v(
            "\n\t  VG Access             read/write\n\t  VG Status             resizable\n\t  MAX LV                "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t  Cur LV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  Open LV               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  Max PV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t  Cur PV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  Act PV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  VG Size               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68.99")]),
          _vm._v(" GiB\n\t  PE Size               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.00")]),
          _vm._v(" MiB\n\t  Total PE              "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17662")]),
          _vm._v("\n\t  Alloc PE / Size       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17613")]),
          _vm._v(" / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68.80")]),
          _vm._v(" GiB\n\t  Free  PE / Size       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("49")]),
          _vm._v(" / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("196.00")]),
          _vm._v(
            " MiB\n\t  VG UUID               AGl9dc-tnrL-zp3V-bwu2-FTsE-Pla9-v0cFYl\n\t   \n\t[root"
          ),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# \n\t\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [
          _c("code", [_vm._v("注意当前卷组的 VG SIZE 大小为68.99 GiB\n")])
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("把创建的物理卷加入卷组")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\n    [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# vgextend centos /dev/sda4\n    Volume group "),
          _c("span", { staticClass: "hljs-string" }, [_vm._v('"centos"')]),
          _vm._v(" successfully extended\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("再次查看当前卷组")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n\t [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# vgdisplay\n\t  --- Volume group ---\n\t  VG Name               centos\n\t  System ID             \n\t  Format                lvm2\n\t  Metadata Areas        "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("\n\t  Metadata Sequence No  "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("7")]),
          _vm._v(
            "\n\t  VG Access             read/write\n\t  VG Status             resizable\n\t  MAX LV                "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t  Cur LV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  Open LV               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t  Max PV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t  Cur PV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("\n\t  Act PV                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("3")]),
          _vm._v("\n\t  VG Size               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("148.44")]),
          _vm._v(" GiB\n\t  PE Size               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4.00")]),
          _vm._v(" MiB\n\t  Total PE              "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("38001")]),
          _vm._v("\n\t  Alloc PE / Size       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17613")]),
          _vm._v(" / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68.80")]),
          _vm._v(" GiB\n\t  Free  PE / Size       "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20388")]),
          _vm._v(" / "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("79.64")]),
          _vm._v(
            " GiB\n\t  VG UUID               AGl9dc-tnrL-zp3V-bwu2-FTsE-Pla9-v0cFYl\n\t\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "warnning custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [_vm._v("当前卷组的大小已经改变了")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("查看当前的逻辑卷")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("  [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# lvdisplay\n  --- Logical volume ---\n  LV Path                /dev/centos/swap\n  LV Name                swap\n  VG Name                centos\n  LV UUID                "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4")]),
          _vm._v(
            "ZnjcK-xO2c-G8gS-Vo0J-O2Ft-h2OR-Kcixwa\n  LV Write Access        read/write\n  LV Creation host, time localhost, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("39")]),
          _vm._v(" +"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0800")]),
          _vm._v(
            "\n  LV Status              available\n  # open                 "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n  LV Size                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("820.00")]),
          _vm._v(" MiB\n  Current LE             "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("205")]),
          _vm._v("\n  Segments               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "\n  Allocation             inherit\n  Read ahead sectors     auto\n  - currently set to     "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8192")]),
          _vm._v("\n  Block device           "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("253")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v(
            "\n   \n  --- Logical volume ---\n  LV Path                /dev/centos/root\n  LV Name                root\n  VG Name                centos\n  LV UUID                fcQsqz-wcGG-WHVJ-DeXc-xfWS-gFUC-UKPyZ2\n  LV Write Access        read/write\n  LV Creation host, time localhost, "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2019")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("06")]),
          _vm._v("-"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("11")]),
          _vm._v(" "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("21")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("33")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("40")]),
          _vm._v(" +"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0800")]),
          _vm._v(
            "\n  LV Status              available\n  # open                 "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n  LV Size                "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68.00")]),
          _vm._v(" GiB\n  Current LE             "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17408")]),
          _vm._v("\n  Segments               "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(
            "\n  Allocation             inherit\n  Read ahead sectors     auto\n  - currently set to     "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("8192")]),
          _vm._v("\n  Block device           "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("253")]),
          _vm._v(":"),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\t\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("需要把逻辑卷 /dev/centos/root 进行扩容")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("\t\n [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v("02 ~]# lvextend -L "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("140")]),
          _vm._v(
            "G -n /dev/centos/root\n Rounding size to boundary between physical extents: "
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("79.45")]),
          _vm._v(" GiB.\n Size of logical volume centos/root changed from "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("68.00")]),
          _vm._v(" GiB ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17408")]),
          _vm._v(" extents) to         "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("79.45")]),
          _vm._v(" GiB ("),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20340")]),
          _vm._v(
            " extents).\n  Logical volume centos/root successfully resized.\n\n"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("pre", [_c("code", [_vm._v("马上就要成功了。。。\n")])])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("最后需要重置硬盘大小")]),
      _vm._v(" "),
      _c("pre", { staticClass: "hljs" }, [
        _c("code", [
          _vm._v("   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//centos7 使用的是")
          ]),
          _vm._v("\n   [root"),
          _c("span", { staticClass: "hljs-meta" }, [_vm._v("@hadoop")]),
          _vm._v(
            "02 ~]# xfs_growfs /dev/centos/root\n\tmeta-data=/dev/mapper/centos-root isize="
          ),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v("    agcount="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("44")]),
          _vm._v(", agsize="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("406016")]),
          _vm._v(" blks\n\t         =                       sectsz="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v("   attr="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v(", projid32bit="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\t         =                       crc="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("        finobt="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" spinodes="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tdata     =                       bsize="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096")]),
          _vm._v("   blocks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17825792")]),
          _vm._v(", imaxpct="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("25")]),
          _vm._v("\n\t         =                       sunit="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("      swidth="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" blks\n\tnaming   =version "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("              bsize="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096")]),
          _vm._v("   ascii-ci="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" ftype="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\tlog      =internal               bsize="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096")]),
          _vm._v("   blocks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2560")]),
          _vm._v(", version="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("2")]),
          _vm._v("\n\t         =                       sectsz="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("512")]),
          _vm._v("   sunit="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(" blks, lazy-count="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("1")]),
          _vm._v("\n\trealtime =none                   extsz="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("4096")]),
          _vm._v("   blocks="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v(", rtextents="),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("0")]),
          _vm._v("\n\tdata blocks changed from "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("17825792")]),
          _vm._v(" to "),
          _c("span", { staticClass: "hljs-number" }, [_vm._v("20828160")]),
          _vm._v("\n    \n   "),
          _c("span", { staticClass: "hljs-comment" }, [
            _vm._v("//这个是cent6")
          ]),
          _vm._v("\n   resize2fs /dev/centos/root\n\n")
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("查看磁盘大小：")]),
      _vm._v(" "),
      _c("div", { staticClass: "success custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "[root@hadoop02 ~]# df -h\n文件系统                 容量  已用  可用 已用% 挂载点\n/dev/mapper/centos-root  140G  8.3G  132G    6% /\ndevtmpfs                 484M     0  484M    0% /dev\ntmpfs                    496M     0  496M    0% /dev/shm\ntmpfs                    496M  6.8M  489M    2% /run\ntmpfs                    496M     0  496M    0% /sys/fs/cgroup\n/dev/sda1               1014M  160M  855M   16% /boot\ntmpfs                    100M     0  100M    0% /run/user/0\ntmpfs                    100M     0  100M    0% /run/user/1017\n[root@hadoop02 ~]#"
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("summary:")]),
      _vm._v(" "),
      _c("div", { staticClass: "danger custom-block" }, [
        _c("p", { staticClass: "custom-block-title" }),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v(
              "磁盘扩容注意要在单机模式下进行，避免有用户使用磁盘，导致扩容失败。"
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

/***/ "./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md":
/*!******************************************************!*\
  !*** ./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_ambari_1_2_md_vue_type_template_id_66a2409c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c& */ "./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _example_ambari_1_2_md_vue_type_template_id_66a2409c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _example_ambari_1_2_md_vue_type_template_id_66a2409c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/md/example_ambari_集群管理_1-2_存储扩容.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c&":
/*!*************************************************************************************!*\
  !*** ./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_ambari_1_2_md_vue_type_template_id_66a2409c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??ref--5-0!../../../build/md-loader!./example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./build/md-loader/index.js!./src/pages/md/example_ambari_集群管理_1-2_存储扩容.md?vue&type=template&id=66a2409c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_ambari_1_2_md_vue_type_template_id_66a2409c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_5_0_build_md_loader_index_js_example_ambari_1_2_md_vue_type_template_id_66a2409c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=-5805d0ba.js.map