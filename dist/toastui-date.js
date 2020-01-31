/*!
 * TOAST UI Date
 * @version 0.0.1 | Fri Jan 31 2020
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment-timezone"));
	else if(typeof define === 'function' && define.amd)
		define(["moment-timezone"], factory);
	else if(typeof exports === 'object')
		exports["Date"] = factory(require("moment-timezone"));
	else
		root["tui"] = root["tui"] || {}, root["tui"]["Date"] = factory(root["moment-timezone"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/localDate.js
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function throwNotSupported() {
  throw new Error('This operation is not supported.');
}

var LocalDate =
/*#__PURE__*/
function () {
  function LocalDate() {
    _classCallCheck(this, LocalDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.d = _construct(Date, args);
  }

  _createClass(LocalDate, [{
    key: "setTimezoneOffset",
    value: function setTimezoneOffset() {
      throwNotSupported();
    }
  }, {
    key: "setTimezoneName",
    value: function setTimezoneName() {
      throwNotSupported();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LocalDate(this.d);
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return new Date(this.d.getTime());
    }
  }]);

  return LocalDate;
}();


var getterMethods = ['getTime', 'getTimezoneOffset', 'getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getDay'];
var setterMethods = ['setTime', 'setFullYear', 'setMonth', 'setDate', 'setHours', 'setMinutes', 'setSeconds', 'setMilliseconds'];
getterMethods.forEach(function (methodName) {
  LocalDate.prototype[methodName] = function () {
    var _this$d;

    return (_this$d = this.d)[methodName].apply(_this$d, arguments);
  };
});
setterMethods.forEach(function (methodName) {
  LocalDate.prototype[methodName] = function () {
    var _this$d2;

    return (_this$d2 = this.d)[methodName].apply(_this$d2, arguments);
  };
});
// CONCATENATED MODULE: ./src/utcDate.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function utcDate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function utcDate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function utcDate_createClass(Constructor, protoProps, staticProps) { if (protoProps) utcDate_defineProperties(Constructor.prototype, protoProps); if (staticProps) utcDate_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) utcDate_setPrototypeOf(subClass, superClass); }

function utcDate_setPrototypeOf(o, p) { utcDate_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return utcDate_setPrototypeOf(o, p); }



var UTCDate =
/*#__PURE__*/
function (_LocalDate) {
  _inherits(UTCDate, _LocalDate);

  function UTCDate() {
    utcDate_classCallCheck(this, UTCDate);

    return _possibleConstructorReturn(this, _getPrototypeOf(UTCDate).apply(this, arguments));
  }

  utcDate_createClass(UTCDate, [{
    key: "clone",
    value: function clone() {
      return new UTCDate(this.d);
    }
  }]);

  return UTCDate;
}(LocalDate);


var getterProperties = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Day'];
var setterProperties = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds'];
getterProperties.forEach(function (prop) {
  var methodName = "get".concat(prop);

  UTCDate.prototype[methodName] = function () {
    var _this$d;

    return (_this$d = this.d)["getUTC".concat(prop)].apply(_this$d, arguments);
  };
});
setterProperties.forEach(function (prop) {
  var methodName = "set".concat(prop);

  UTCDate.prototype[methodName] = function () {
    var _this$d2;

    return (_this$d2 = this.d)["setUTC".concat(prop)].apply(_this$d2, arguments);
  };
});
// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__(0);
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);

// CONCATENATED MODULE: ./src/momentDate.js
function momentDate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function momentDate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function momentDate_createClass(Constructor, protoProps, staticProps) { if (protoProps) momentDate_defineProperties(Constructor.prototype, protoProps); if (staticProps) momentDate_defineProperties(Constructor, staticProps); return Constructor; }

 // from '@toast-ui/date/LocalDate';
// from '@toast-ui/date/UTCDate';
// from '@toast-ui/date/MomentDate';
// '@toast-ui/date'
// 'tui.date.LocalDate';
// 'tui.date.UTCDate';
// 'tui.date.MomentDate';

var momentDate_MomentDate =
/*#__PURE__*/
function () {
  function MomentDate() {
    momentDate_classCallCheck(this, MomentDate);

    this.m = external_moment_timezone_default.a.apply(void 0, arguments);
  }

  momentDate_createClass(MomentDate, [{
    key: "setTimezoneOffset",
    value: function setTimezoneOffset(offset) {
      this.m.utcOffset(-offset);
      return this;
    }
  }, {
    key: "setTimezoneName",
    value: function setTimezoneName(zoneName) {
      this.m.tz(zoneName);
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new MomentDate(this.m);
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return this.m.toDate();
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.m.valueOf();
    }
  }, {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset() {
      var offset = -this.m.utcOffset();

      if (Math.abs(offset) === 0) {
        return 0;
      }

      return offset;
    }
  }, {
    key: "getFullYear",
    value: function getFullYear() {
      return this.m.year();
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.m.month();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.m.date();
    }
  }, {
    key: "getHours",
    value: function getHours() {
      return this.m.hours();
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      return this.m.minutes();
    }
  }, {
    key: "getSeconds",
    value: function getSeconds() {
      return this.m.seconds();
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      return this.m.milliseconds();
    }
  }, {
    key: "getDay",
    value: function getDay() {
      return this.m.day();
    }
  }, {
    key: "setTime",
    value: function setTime(t) {
      this.m = external_moment_timezone_default()(t);
      return this.getTime();
    }
  }, {
    key: "setFullYear",
    value: function setFullYear(y) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMonth();
      var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getDate();
      this.m.year(y).month(m).date(d);
      return this.getTime();
    }
  }, {
    key: "setMonth",
    value: function setMonth(m) {
      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.m.date();
      this.m.month(m).date(d);
      return this.getTime();
    }
  }, {
    key: "setDate",
    value: function setDate(d) {
      this.m.date(d);
      return this.getTime();
    }
  }, {
    key: "setHours",
    value: function setHours(h) {
      var M = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMinutes();
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getSeconds();
      var ms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.getMilliseconds();
      this.m.hours(h).minutes(M).seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setMinutes",
    value: function setMinutes(M) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSeconds();
      var ms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getMilliseconds();
      this.m.minutes(M).seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setSeconds",
    value: function setSeconds(s) {
      var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMilliseconds();
      this.m.seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setMilliseconds",
    value: function setMilliseconds(ms) {
      this.m.milliseconds(ms);
      return this.getTime();
    }
  }]);

  return MomentDate;
}();


// CONCATENATED MODULE: ./src/index.js



/* harmony default export */ var src = __webpack_exports__["default"] = ({
  LocalDate: LocalDate,
  UTCDate: UTCDate,
  MomentDate: momentDate_MomentDate
});

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=toastui-date.js.map