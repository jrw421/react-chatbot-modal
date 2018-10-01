(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["styled-components"], factory);
	else if(typeof exports === 'object')
		exports["ReactSimpleChatbot"] = factory(require("styled-components"));
	else
		root["ReactSimpleChatbot"] = factory(root["styled-components"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(10);
var isBuffer = __webpack_require__(65);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(31);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(36)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pulse = exports.invalidInput = exports.scale = exports.loading = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% { opacity: .2; }\n  20% { opacity: 1; }\n  100% { opacity: .2; }\n'], ['\n  0% { opacity: .2; }\n  20% { opacity: 1; }\n  100% { opacity: .2; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  100% { transform: scale(1); }\n'], ['\n  100% { transform: scale(1); }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  25% { transform: rotate(-1deg); }\n  100% { transform: rotate(1deg); }\n'], ['\n  25% { transform: rotate(-1deg); }\n  100% { transform: rotate(1deg); }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  0% { box-shadow: 0 0 0 0 ', '; }\n  70% { box-shadow: 0 0 0 10px ', '; }\n  100% { box-shadow: 0 0 0 0 ', '; }\n'], ['\n  0% { box-shadow: 0 0 0 0 ', '; }\n  70% { box-shadow: 0 0 0 10px ', '; }\n  100% { box-shadow: 0 0 0 0 ', '; }\n']);

var _styledComponents = __webpack_require__(0);

var _rgba = __webpack_require__(44);

var _rgba2 = _interopRequireDefault(_rgba);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loading = (0, _styledComponents.keyframes)(_templateObject);

var scale = (0, _styledComponents.keyframes)(_templateObject2);

var invalidInput = (0, _styledComponents.keyframes)(_templateObject3);

var pulse = function pulse(color) {
  return (0, _styledComponents.keyframes)(_templateObject4, (0, _rgba2.default)(color, 0.4), (0, _rgba2.default)(color, 0), (0, _rgba2.default)(color, 0));
};

exports.loading = loading;
exports.scale = scale;
exports.invalidInput = invalidInput;
exports.pulse = pulse;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _LoadingStep = __webpack_require__(43);

var _LoadingStep2 = _interopRequireDefault(_LoadingStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    'span',
    { className: 'rsc-loading' },
    _react2.default.createElement(
      _LoadingStep2.default,
      { delay: '0s' },
      '.'
    ),
    _react2.default.createElement(
      _LoadingStep2.default,
      { delay: '.2s' },
      '.'
    ),
    _react2.default.createElement(
      _LoadingStep2.default,
      { delay: '.4s' },
      '.'
    )
  );
};

exports.default = Loading;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(68);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(11);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(11);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*!
Copyright (C) 2013 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var
  // should be a not so common char
  // possibly one JSON does not encode
  // possibly one encodeURIComponent does not encode
  // right now this char is '~' but this might change in the future
  specialChar = '~',
  safeSpecialChar = '\\x' + (
    '0' + specialChar.charCodeAt(0).toString(16)
  ).slice(-2),
  escapedSafeSpecialChar = '\\' + safeSpecialChar,
  specialCharRG = new RegExp(safeSpecialChar, 'g'),
  safeSpecialCharRG = new RegExp(escapedSafeSpecialChar, 'g'),

  safeStartWithSpecialCharRG = new RegExp('(?:^|([^\\\\]))' + escapedSafeSpecialChar),

  indexOf = [].indexOf || function(v){
    for(var i=this.length;i--&&this[i]!==v;);
    return i;
  },
  $String = String  // there's no way to drop warnings in JSHint
                    // about new String ... well, I need that here!
                    // faked, and happy linter!
;

function generateReplacer(value, replacer, resolve) {
  var
    path = [],
    all  = [value],
    seen = [value],
    mapp = [resolve ? specialChar : '[Circular]'],
    last = value,
    lvl  = 1,
    i
  ;
  return function(key, value) {
    // the replacer has rights to decide
    // if a new object should be returned
    // or if there's some key to drop
    // let's call it here rather than "too late"
    if (replacer) value = replacer.call(this, key, value);

    // did you know ? Safari passes keys as integers for arrays
    // which means if (key) when key === 0 won't pass the check
    if (key !== '') {
      if (last !== this) {
        i = lvl - indexOf.call(all, this) - 1;
        lvl -= i;
        all.splice(lvl, all.length);
        path.splice(lvl - 1, path.length);
        last = this;
      }
      // console.log(lvl, key, path);
      if (typeof value === 'object' && value) {
    	// if object isn't referring to parent object, add to the
        // object path stack. Otherwise it is already there.
        if (indexOf.call(all, value) < 0) {
          all.push(last = value);
        }
        lvl = all.length;
        i = indexOf.call(seen, value);
        if (i < 0) {
          i = seen.push(value) - 1;
          if (resolve) {
            // key cannot contain specialChar but could be not a string
            path.push(('' + key).replace(specialCharRG, safeSpecialChar));
            mapp[i] = specialChar + path.join(specialChar);
          } else {
            mapp[i] = mapp[0];
          }
        } else {
          value = mapp[i];
        }
      } else {
        if (typeof value === 'string' && resolve) {
          // ensure no special char involved on deserialization
          // in this case only first char is important
          // no need to replace all value (better performance)
          value = value .replace(safeSpecialChar, escapedSafeSpecialChar)
                        .replace(specialChar, safeSpecialChar);
        }
      }
    }
    return value;
  };
}

function retrieveFromPath(current, keys) {
  for(var i = 0, length = keys.length; i < length; current = current[
    // keys should be normalized back here
    keys[i++].replace(safeSpecialCharRG, specialChar)
  ]);
  return current;
}

function generateReviver(reviver) {
  return function(key, value) {
    var isString = typeof value === 'string';
    if (isString && value.charAt(0) === specialChar) {
      return new $String(value.slice(1));
    }
    if (key === '') value = regenerate(value, value, {});
    // again, only one needed, do not use the RegExp for this replacement
    // only keys need the RegExp
    if (isString) value = value .replace(safeStartWithSpecialCharRG, '$1' + specialChar)
                                .replace(escapedSafeSpecialChar, safeSpecialChar);
    return reviver ? reviver.call(this, key, value) : value;
  };
}

function regenerateArray(root, current, retrieve) {
  for (var i = 0, length = current.length; i < length; i++) {
    current[i] = regenerate(root, current[i], retrieve);
  }
  return current;
}

function regenerateObject(root, current, retrieve) {
  for (var key in current) {
    if (current.hasOwnProperty(key)) {
      current[key] = regenerate(root, current[key], retrieve);
    }
  }
  return current;
}

function regenerate(root, current, retrieve) {
  return current instanceof Array ?
    // fast Array reconstruction
    regenerateArray(root, current, retrieve) :
    (
      current instanceof $String ?
        (
          // root is an empty string
          current.length ?
            (
              retrieve.hasOwnProperty(current) ?
                retrieve[current] :
                retrieve[current] = retrieveFromPath(
                  root, current.split(specialChar)
                )
            ) :
            root
        ) :
        (
          current instanceof Object ?
            // dedicated Object parser
            regenerateObject(root, current, retrieve) :
            // value as it is
            current
        )
    )
  ;
}

function stringifyRecursion(value, replacer, space, doNotResolve) {
  return JSON.stringify(value, generateReplacer(value, replacer, !doNotResolve), space);
}

function parseRecursion(text, reviver) {
  return JSON.parse(text, generateReviver(reviver));
}
this.stringify = stringifyRecursion;
this.parse = parseRecursion;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var settle = __webpack_require__(69);
var buildURL = __webpack_require__(71);
var parseHeaders = __webpack_require__(72);
var isURLSameOrigin = __webpack_require__(73);
var createError = __webpack_require__(12);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(74);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(75);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(70);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = undefined;

var _ChatBot = __webpack_require__(16);

var _ChatBot2 = _interopRequireDefault(_ChatBot);

var _Loading = __webpack_require__(6);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ChatBot2.default;
exports.Loading = _Loading2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = __webpack_require__(8);

var _map3 = _interopRequireDefault(_map2);

var _isEmpty2 = __webpack_require__(17);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _randomId = __webpack_require__(40);

var _randomId2 = _interopRequireDefault(_randomId);

var _steps_components = __webpack_require__(41);

var _schema = __webpack_require__(56);

var _schema2 = _interopRequireDefault(_schema);

var _storage = __webpack_require__(62);

var storage = _interopRequireWildcard(_storage);

var _axios = __webpack_require__(63);

var _axios2 = _interopRequireDefault(_axios);

var _components = __webpack_require__(83);

var _recognition = __webpack_require__(93);

var _recognition2 = _interopRequireDefault(_recognition);

var _icons = __webpack_require__(94);

var _utils = __webpack_require__(99);

var _fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBot = function (_Component) {
  _inherits(ChatBot, _Component);

  /* istanbul ignore next */
  function ChatBot(props) {
    _classCallCheck(this, ChatBot);

    var _this = _possibleConstructorReturn(this, (ChatBot.__proto__ || Object.getPrototypeOf(ChatBot)).call(this, props));

    _this.state = {
      renderedSteps: [],
      previousSteps: [],
      currentStep: {},
      previousStep: {},
      steps: {},
      disabled: true,
      opened: props.opened || !props.floating,
      inputValue: '',
      inputInvalid: false,
      speaking: false,
      recognitionEnable: props.recognitionEnable && _recognition2.default.isSupported(),
      defaultUserSettings: {},
      sessionId: Date.now()
    };

    _this.renderStep = _this.renderStep.bind(_this);
    _this.getTriggeredStep = _this.getTriggeredStep.bind(_this);
    _this.generateRenderedStepsById = _this.generateRenderedStepsById.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.onValueChange = _this.onValueChange.bind(_this);
    _this.onRecognitionChange = _this.onRecognitionChange.bind(_this);
    _this.onRecognitionEnd = _this.onRecognitionEnd.bind(_this);
    _this.onRecognitionStop = _this.onRecognitionStop.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleSubmitButton = _this.handleSubmitButton.bind(_this);
    _this.getBotResponseFromServer = _this.getBotResponseFromServer.bind(_this);
    return _this;
  }

  _createClass(ChatBot, [{
    key: 'componentWillMount',
    value: async function componentWillMount() {
      var _this2 = this;

      var _props = this.props,
          botDelay = _props.botDelay,
          botAvatar = _props.botAvatar,
          cache = _props.cache,
          cacheName = _props.cacheName,
          customDelay = _props.customDelay,
          enableMobileAutoFocus = _props.enableMobileAutoFocus,
          userAvatar = _props.userAvatar,
          userDelay = _props.userDelay;

      var steps = {};

      var defaultBotSettings = { delay: botDelay, avatar: botAvatar };
      var defaultUserSettings = { delay: userDelay, avatar: userAvatar };
      // const defaultCustomSettings = { delay: customDelay };

      var url = "https://api.dialogflow.com/v1/query?v=20150910";
      var clientToken = this.props.dfClientToken;
      var config = {
        method: 'post',
        url: url,
        data: null,
        headers: {
          Authorization: 'Bearer ' + clientToken,
          'content-type': 'application/json'
        }
      };

      var dialogflowOptions = {
        lang: 'en',
        sessionId: this.state.sessionId
      };

      dialogflowOptions.originalRequest = { data: {} };
      dialogflowOptions.originalRequest.data = { user: {} };
      dialogflowOptions.originalRequest.data.user.accessToken = "";

      config.data = dialogflowOptions;
      config.data.event = { name: "welcome" };
      var response = void 0;
      try {
        response = await (0, _axios2.default)(config);
      } catch (err) {
        console.log("err", err);
      }
      var step = {
        id: '1',
        message: response.data.result.fulfillment.messages[0].displayText || "Hi",
        end: true
      };
      var settings = defaultBotSettings;

      settings = defaultBotSettings;

      steps[step.id] = Object.assign({}, settings, _schema2.default.parse(step));

      _schema2.default.checkInvalidIds(steps);

      var firstStep = steps[step.id];

      if (firstStep.message) {
        var message = firstStep.message;
        firstStep.message = typeof message === 'function' ? message() : message;
        steps[firstStep.id].message = firstStep.message;
      }

      var _storage$getData = storage.getData({
        cacheName: cacheName,
        cache: cache,
        firstStep: firstStep,
        steps: steps
      }, function () {
        // focus input if last step cached is a user step
        _this2.setState({ disabled: false }, function () {
          if (enableMobileAutoFocus || !(0, _utils.isMobile)()) {
            _this2.input.focus();
          }
        });
      }),
          currentStep = _storage$getData.currentStep,
          previousStep = _storage$getData.previousStep,
          previousSteps = _storage$getData.previousSteps,
          renderedSteps = _storage$getData.renderedSteps;

      this.setState({
        currentStep: currentStep,
        defaultUserSettings: defaultUserSettings,
        previousStep: previousStep,
        previousSteps: previousSteps,
        renderedSteps: renderedSteps,
        steps: steps
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var recognitionEnable = this.state.recognitionEnable;
      var recognitionLang = this.props.recognitionLang;

      if (recognitionEnable) {
        this.recognition = new _recognition2.default(this.onRecognitionChange, this.onRecognitionEnd, this.onRecognitionStop, recognitionLang);
      }
      this.content.addEventListener('DOMNodeInserted', this.onNodeInserted);
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: 'onNodeInserted',
    value: function onNodeInserted(event) {
      event.currentTarget.scrollTop = event.currentTarget.scrollHeight;
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.content.scrollTop = this.content.scrollHeight;
    }
  }, {
    key: 'onRecognitionChange',
    value: function onRecognitionChange(value) {
      this.setState({ inputValue: value });
    }
  }, {
    key: 'onRecognitionEnd',
    value: function onRecognitionEnd() {
      this.setState({ speaking: false });
      this.handleSubmitButton();
    }
  }, {
    key: 'onRecognitionStop',
    value: function onRecognitionStop() {
      this.setState({ speaking: false });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: 'getTriggeredStep',
    value: function getTriggeredStep(trigger, value) {
      var steps = this.generateRenderedStepsById();
      return typeof trigger === 'function' ? trigger({ value: value, steps: steps }) : trigger;
    }
  }, {
    key: 'generateRenderedStepsById',
    value: function generateRenderedStepsById() {
      var previousSteps = this.state.previousSteps;

      var steps = {};

      for (var i = 0, len = previousSteps.length; i < len; i += 1) {
        var _previousSteps$i = previousSteps[i],
            id = _previousSteps$i.id,
            message = _previousSteps$i.message,
            value = _previousSteps$i.value,
            metadata = _previousSteps$i.metadata;

        steps[id] = { id: id, message: message, value: value, metadata: metadata };
      }

      return steps;
    }
  }, {
    key: 'isFirstPosition',
    value: function isFirstPosition(step) {
      var renderedSteps = this.state.renderedSteps;

      var stepIndex = renderedSteps.map(function (s) {
        return s.key;
      }).indexOf(step.key);

      if (stepIndex === 0) {
        return true;
      }

      var lastStep = renderedSteps[stepIndex - 1];
      var hasMessage = lastStep.message || lastStep.asMessage;

      if (!hasMessage) {
        return true;
      }

      var isFirst = step.user !== lastStep.user;
      return isFirst;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.submitUserMessage();
      }
    }
  }, {
    key: 'handleSubmitButton',
    value: function handleSubmitButton() {}
  }, {
    key: 'submitUserMessage',
    value: function submitUserMessage() {
      var _this3 = this;

      var _state = this.state,
          defaultUserSettings = _state.defaultUserSettings,
          inputValue = _state.inputValue,
          previousSteps = _state.previousSteps,
          renderedSteps = _state.renderedSteps;
      var currentStep = this.state.currentStep;


      var isInvalid = currentStep.validator && this.checkInvalidInput();

      if (!isInvalid) {
        var step = {
          message: inputValue,
          value: inputValue
        };

        var userSettings = { delay: 1000, avatar: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTIwOC41IDIxIDEwMCAxMDAiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yMDguNSAyMSAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGNpcmNsZSBjeD0iLTE1OC41IiBjeT0iNzEiIGZpbGw9IiNGNUVFRTUiIGlkPSJNYXNrIiByPSI1MCIvPjxnPjxkZWZzPjxjaXJjbGUgY3g9Ii0xNTguNSIgY3k9IjcxIiBpZD0iTWFza18yXyIgcj0iNTAiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJNYXNrXzRfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjTWFza18yXyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI01hc2tfNF8pIiBkPSJNLTEwOC41LDEyMXYtMTRjMCwwLTIxLjItNC45LTI4LTYuN2MtMi41LTAuNy03LTMuMy03LTEyICAgICBjMC0xLjcsMC02LjMsMC02LjNoLTE1aC0xNWMwLDAsMCw0LjYsMCw2LjNjMCw4LjctNC41LDExLjMtNywxMmMtNi44LDEuOS0yOC4xLDcuMy0yOC4xLDYuN3YxNGg1MC4xSC0xMDguNXoiIGZpbGw9IiNFNkMxOUMiIGlkPSJNYXNrXzNfIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI01hc2tfNF8pIj48ZGVmcz48cGF0aCBkPSJNLTEwOC41LDEyMXYtMTRjMCwwLTIxLjItNC45LTI4LTYuN2MtMi41LTAuNy03LTMuMy03LTEyYzAtMS43LDAtNi4zLDAtNi4zaC0xNWgtMTVjMCwwLDAsNC42LDAsNi4zICAgICAgIGMwLDguNy00LjUsMTEuMy03LDEyYy02LjgsMS45LTI4LjEsNy4zLTI4LjEsNi43djE0aDUwLjFILTEwOC41eiIgaWQ9Ik1hc2tfMV8iLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJNYXNrXzVfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjTWFza18xXyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI01hc2tfNV8pIiBkPSJNLTE1OC41LDEwMC4xYzEyLjcsMCwyMy0xOC42LDIzLTM0LjQgICAgICBjMC0xNi4yLTEwLjMtMjQuNy0yMy0yNC43cy0yMyw4LjUtMjMsMjQuN0MtMTgxLjUsODEuNS0xNzEuMiwxMDAuMS0xNTguNSwxMDAuMXoiIGZpbGw9IiNENEIwOEMiIGlkPSJoZWFkLXNoYWRvdyIvPjwvZz48L2c+PHBhdGggZD0iTS0xNTguNSw5NmMxMi43LDAsMjMtMTYuMywyMy0zMWMwLTE1LjEtMTAuMy0yMy0yMy0yM3MtMjMsNy45LTIzLDIzICAgIEMtMTgxLjUsNzkuNy0xNzEuMiw5Ni0xNTguNSw5NnoiIGZpbGw9IiNGMkNFQTUiIGlkPSJoZWFkIi8+PC9nPjwvc3ZnPg==' };

        currentStep = Object.assign({}, userSettings, step);
        currentStep.user = { name: "Jon" };
        renderedSteps.push(currentStep);
        previousSteps.push(currentStep);
        this.setState({
          currentStep: currentStep,
          renderedSteps: renderedSteps,
          previousSteps: previousSteps,
          disabled: true,
          inputValue: ''
        }, function () {
          _this3.input.blur();
          setTimeout(function () {
            return _this3.getBotResponseFromServer(currentStep);
          }, 1000);
        });
      }
    }
  }, {
    key: 'getBotResponseFromServer',
    value: async function getBotResponseFromServer(currentStep) {
      var _this4 = this;

      var message = currentStep.message;

      var url = "https://api.dialogflow.com/v1/query?v=20150910";
      var clientToken = "d91096f647be47489a2884294259935b";
      var config = {
        method: 'post',
        url: url,
        data: null,
        headers: {
          Authorization: 'Bearer ' + clientToken,
          'content-type': 'application/json'
        }
      };

      var dialogflowOptions = {
        lang: 'en',
        sessionId: this.state.sessionId,
        query: null
      };

      dialogflowOptions.originalRequest = { data: {} };
      dialogflowOptions.originalRequest.data = { user: {} };
      dialogflowOptions.originalRequest.data.user.accessToken = "";

      config.data = dialogflowOptions;
      config.data.query = message;

      try {
        var result = await (0, _axios2.default)(config);
        var response = result.data.result.fulfillment.messages[0].displayText || result.data.result.fulfillment.speech;
        var _message = Object.assign({}, this.state.renderedSteps[0], { message: response, value: response });

        if (result.data.result.fulfillment.messages.length > 1) {
          var listItems = result.data.result.fulfillment.messages[1].items; //listcard send
          // console.log('LIST ITEMS ARE HERE ', listItems);
          this.state.renderedSteps.push(_message);
          listItems.forEach(function (item) {
            // let newItem = Object.assign({}, this.state.renderedSteps[0], { message: item.description, value: item.description })
            _this4.renderStep({ component: _react2.default.createElement(
                'button',
                null,
                item.description
              ) });
            // this.state.renderedSteps.push(newItem);
          });
        }
        console.log("result", result);

        this.setState({ renderedSteps: this.state.renderedSteps });
      } catch (err) {
        console.log("err", err);
      }
    }
  }, {
    key: 'toggleChatBot',
    value: function toggleChatBot(opened) {
      if (this.props.toggleFloating) {
        this.props.toggleFloating({ opened: opened });
      } else {
        this.setState({ opened: opened });
      }
    }
  }, {
    key: 'renderStep',
    value: function renderStep(step, index) {
      var renderedSteps = this.state.renderedSteps;
      var _props2 = this.props,
          avatarStyle = _props2.avatarStyle,
          bubbleStyle = _props2.bubbleStyle,
          bubbleOptionStyle = _props2.bubbleOptionStyle,
          customStyle = _props2.customStyle,
          hideBotAvatar = _props2.hideBotAvatar,
          hideUserAvatar = _props2.hideUserAvatar;
      var options = step.options,
          component = step.component,
          asMessage = step.asMessage;

      var steps = this.generateRenderedStepsById();
      var previousStep = index > 0 ? renderedSteps[index - 1] : {};

      if (component && !asMessage) {
        return _react2.default.createElement(_steps_components.CustomStep, {
          key: index,
          step: step,
          steps: steps,
          style: customStyle,
          previousStep: previousStep
        });
      }

      if (options) {
        return _react2.default.createElement(_steps_components.OptionsStep, {
          key: index,
          step: step,
          bubbleOptionStyle: bubbleOptionStyle
        });
      }

      return _react2.default.createElement(_steps_components.TextStep, {
        key: index,
        step: step,
        steps: steps,
        previousStep: previousStep,
        previousValue: previousStep.value,
        avatarStyle: avatarStyle,
        bubbleStyle: bubbleStyle,
        hideBotAvatar: hideBotAvatar,
        hideUserAvatar: hideUserAvatar,
        isFirst: this.isFirstPosition(step)
        // isLast={this.isLastPosition(step)}
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _state2 = this.state,
          currentStep = _state2.currentStep,
          disabled = _state2.disabled,
          inputInvalid = _state2.inputInvalid,
          inputValue = _state2.inputValue,
          opened = _state2.opened,
          renderedSteps = _state2.renderedSteps,
          speaking = _state2.speaking,
          recognitionEnable = _state2.recognitionEnable;
      var _props3 = this.props,
          className = _props3.className,
          contentStyle = _props3.contentStyle,
          floating = _props3.floating,
          floatingStyle = _props3.floatingStyle,
          footerStyle = _props3.footerStyle,
          headerComponent = _props3.headerComponent,
          headerTitle = _props3.headerTitle,
          hideHeader = _props3.hideHeader,
          hideSubmitButton = _props3.hideSubmitButton,
          inputStyle = _props3.inputStyle,
          placeholder = _props3.placeholder,
          inputAttributes = _props3.inputAttributes,
          recognitionPlaceholder = _props3.recognitionPlaceholder,
          style = _props3.style,
          submitButtonStyle = _props3.submitButtonStyle,
          width = _props3.width,
          height = _props3.height;


      var header = headerComponent || _react2.default.createElement(
        _components.Header,
        { className: 'rsc-header' },
        _react2.default.createElement(
          _components.HeaderTitle,
          { className: 'rsc-header-title' },
          headerTitle
        ),
        floating && _react2.default.createElement(
          _components.HeaderIcon,
          { className: 'rsc-header-close-button', onClick: function onClick() {
              return _this5.toggleChatBot(false);
            } },
          _react2.default.createElement(_icons.CloseIcon, null)
        )
      );

      var icon = ((0, _isEmpty3.default)(inputValue) || speaking) && recognitionEnable ? _react2.default.createElement(_icons.MicIcon, null) : _react2.default.createElement(_icons.SubmitIcon, null);

      var inputPlaceholder = speaking ? recognitionPlaceholder : currentStep.placeholder || placeholder;

      var inputAttributesOverride = currentStep.inputAttributes || inputAttributes;

      return _react2.default.createElement(
        'div',
        { className: 'rsc ' + className },
        floating && _react2.default.createElement(
          _components.FloatButton,
          {
            className: 'rsc-float-button',
            style: floatingStyle,
            opened: opened,
            onClick: function onClick() {
              return _this5.toggleChatBot(true);
            }
          },
          _react2.default.createElement(_icons.ChatIcon, null)
        ),
        _react2.default.createElement(
          _components.ChatBotContainer,
          {
            className: 'rsc-container',
            floating: floating,
            floatingStyle: floatingStyle,
            opened: opened,
            style: style,
            width: width,
            height: height
          },
          !hideHeader && header,
          _react2.default.createElement(
            _components.Content,
            {
              className: 'rsc-content',
              innerRef: function innerRef(contentRef) {
                return _this5.content = contentRef;
              },
              floating: floating,
              style: contentStyle,
              height: height,
              hideInput: currentStep.hideInput
            },
            (0, _map3.default)(renderedSteps, this.renderStep)
          ),
          _react2.default.createElement(
            _components.Footer,
            { className: 'rsc-footer', style: footerStyle },
            !currentStep.hideInput && _react2.default.createElement(_components.Input, _extends({
              type: 'textarea',
              style: inputStyle,
              innerRef: function innerRef(inputRef) {
                return _this5.input = inputRef;
              },
              className: 'rsc-input',
              placeholder: inputInvalid ? '' : inputPlaceholder,
              onKeyPress: this.handleKeyPress,
              onChange: this.onValueChange,
              value: inputValue,
              floating: floating,
              invalid: inputInvalid
              // disabled={disabled}
              , hasButton: !hideSubmitButton
            }, inputAttributesOverride)),
            !currentStep.hideInput && !hideSubmitButton && _react2.default.createElement(
              _components.SubmitButton,
              {
                className: 'rsc-submit-button',
                style: submitButtonStyle,
                onClick: this.handleSubmitButton,
                invalid: inputInvalid
                // disabled={disabled}
                , speaking: speaking
              },
              icon
            )
          )
        )
      );
    }
  }]);

  return ChatBot;
}(_react.Component);

ChatBot.propTypes = {
  avatarStyle: _propTypes2.default.object,
  botAvatar: _propTypes2.default.string,
  botDelay: _propTypes2.default.number,
  bubbleOptionStyle: _propTypes2.default.object,
  bubbleStyle: _propTypes2.default.object,
  cache: _propTypes2.default.bool,
  cacheName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  customDelay: _propTypes2.default.number,
  customStyle: _propTypes2.default.object,
  enableMobileAutoFocus: _propTypes2.default.bool,
  floating: _propTypes2.default.bool,
  floatingStyle: _propTypes2.default.object,
  footerStyle: _propTypes2.default.object,
  handleEnd: _propTypes2.default.func,
  headerComponent: _propTypes2.default.element,
  headerTitle: _propTypes2.default.string,
  hideBotAvatar: _propTypes2.default.bool,
  hideHeader: _propTypes2.default.bool,
  hideSubmitButton: _propTypes2.default.bool,
  hideUserAvatar: _propTypes2.default.bool,
  inputAttributes: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  opened: _propTypes2.default.bool,
  toggleFloating: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  recognitionEnable: _propTypes2.default.bool,
  recognitionLang: _propTypes2.default.string,
  recognitionPlaceholder: _propTypes2.default.string,
  steps: _propTypes2.default.array.isRequired,
  style: _propTypes2.default.object,
  submitButtonStyle: _propTypes2.default.object,
  userAvatar: _propTypes2.default.string,
  userDelay: _propTypes2.default.number,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string
};

ChatBot.defaultProps = {
  avatarStyle: {},
  botDelay: 1000,
  bubbleOptionStyle: {},
  bubbleStyle: {},
  cache: false,
  cacheName: 'rsc_cache',
  className: '',
  contentStyle: {},
  customStyle: {},
  customDelay: 1000,
  enableMobileAutoFocus: false,
  floating: false,
  floatingStyle: {},
  footerStyle: {},
  handleEnd: undefined,
  headerComponent: undefined,
  headerTitle: 'Chat',
  hideBotAvatar: false,
  hideHeader: false,
  hideSubmitButton: false,
  hideUserAvatar: false,
  inputStyle: {},
  opened: undefined,
  placeholder: 'Type the message ...',
  inputAttributes: {},
  recognitionEnable: false,
  recognitionLang: 'en',
  recognitionPlaceholder: 'Listening ...',
  style: {},
  submitButtonStyle: {},
  toggleFloating: undefined,
  userDelay: 1000,
  width: '350px',
  height: '520px',
  botAvatar: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5M0M3RUY7IiBkPSJNMzAyLjU0NSw2OS44MThjMC0yNS43MDctMjAuODQtNDYuNTQ1LTQ2LjU0NS00Ni41NDVzLTQ2LjU0NSwyMC44MzgtNDYuNTQ1LDQ2LjU0NQ0KCWMwLDE3LjIyNSw5LjM2NSwzMi4yNTQsMjMuMjczLDQwLjMwNHY4My44MThoNDYuNTQ1di04My44MThDMjkzLjE4MSwxMDIuMDczLDMwMi41NDUsODcuMDQzLDMwMi41NDUsNjkuODE4eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVBOEJCMDsiIGQ9Ik0yNTYsMjMuMjczdjE3MC42NjdoMjMuMjczdi04My44MThjMTMuOTA4LTguMDQ5LDIzLjI3My0yMy4wNzcsMjMuMjczLTQwLjMwNA0KCUMzMDIuNTQ1LDQ0LjExMSwyODEuNzA1LDIzLjI3MywyNTYsMjMuMjczeiIvPg0KPHJlY3QgeT0iMjQwLjQ4NSIgc3R5bGU9ImZpbGw6IzkzQzdFRjsiIHdpZHRoPSIyNDguMjQyIiBoZWlnaHQ9IjEyNC4xMjEiLz4NCjxyZWN0IHg9IjI2My43NTgiIHk9IjI0MC40ODUiIHN0eWxlPSJmaWxsOiM1QThCQjA7IiB3aWR0aD0iMjQ4LjI0MiIgaGVpZ2h0PSIxMjQuMTIxIi8+DQo8cmVjdCB4PSIxODYuMTgyIiB5PSIzNjQuNjA2IiBzdHlsZT0iZmlsbDojOTNDN0VGOyIgd2lkdGg9IjEzOS42MzYiIGhlaWdodD0iMTI0LjEyMSIvPg0KPHJlY3QgeD0iMjU2IiB5PSIzNjQuNjA2IiBzdHlsZT0iZmlsbDojNUE4QkIwOyIgd2lkdGg9IjY5LjgxOCIgaGVpZ2h0PSIxMjQuMTIxIi8+DQo8cmVjdCB4PSI0Ni41NDUiIHk9IjE2Mi45MDkiIHN0eWxlPSJmaWxsOiNDQ0U5Rjk7IiB3aWR0aD0iNDE4LjkwOSIgaGVpZ2h0PSIyNzkuMjczIi8+DQo8cmVjdCB4PSIyNTYiIHk9IjE2Mi45MDkiIHN0eWxlPSJmaWxsOiM5M0M3RUY7IiB3aWR0aD0iMjA5LjQ1NSIgaGVpZ2h0PSIyNzkuMjczIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojM0M1RDc2OyIgZD0iTTE5My45MzksMjcxLjUxNWMwLDE3LjEzOC0xMy44OTQsMzEuMDMtMzEuMDMsMzEuMDNsMCwwYy0xNy4xMzYsMC0zMS4wMy0xMy44OTItMzEuMDMtMzEuMDNsMCwwDQoJYzAtMTcuMTM4LDEzLjg5NC0zMS4wMywzMS4wMy0zMS4wM2wwLDBDMTgwLjA0NiwyNDAuNDg1LDE5My45MzksMjU0LjM3NywxOTMuOTM5LDI3MS41MTVMMTkzLjkzOSwyNzEuNTE1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzFFMkUzQjsiIGQ9Ik0zODAuMTIxLDI3MS41MTVjMCwxNy4xMzgtMTMuODk0LDMxLjAzLTMxLjAzLDMxLjAzbDAsMGMtMTcuMTM3LDAtMzEuMDMtMTMuODkyLTMxLjAzLTMxLjAzbDAsMA0KCWMwLTE3LjEzOCwxMy44OTQtMzEuMDMsMzEuMDMtMzEuMDNsMCwwQzM2Ni4yMjcsMjQwLjQ4NSwzODAuMTIxLDI1NC4zNzcsMzgwLjEyMSwyNzEuNTE1TDM4MC4xMjEsMjcxLjUxNXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQzVENzY7IiBkPSJNMTg2LjE4MiwzNDkuMDkxYzAsMzguNTU4LDMxLjI1OCw2OS44MTgsNjkuODE4LDY5LjgxOGwwLDBjMzguNTU4LDAsNjkuODE4LTMxLjI2LDY5LjgxOC02OS44MTgNCglIMTg2LjE4MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxRTJFM0I7IiBkPSJNMjU2LDM0OS4wOTFjMCwzOC41NTgsMCw0Ni41NDUsMCw2OS44MThsMCwwYzM4LjU1OCwwLDY5LjgxOC0zMS4yNiw2OS44MTgtNjkuODE4SDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K',
  userAvatar: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTIwOC41IDIxIDEwMCAxMDAiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yMDguNSAyMSAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGNpcmNsZSBjeD0iLTE1OC41IiBjeT0iNzEiIGZpbGw9IiNGNUVFRTUiIGlkPSJNYXNrIiByPSI1MCIvPjxnPjxkZWZzPjxjaXJjbGUgY3g9Ii0xNTguNSIgY3k9IjcxIiBpZD0iTWFza18yXyIgcj0iNTAiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJNYXNrXzRfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjTWFza18yXyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI01hc2tfNF8pIiBkPSJNLTEwOC41LDEyMXYtMTRjMCwwLTIxLjItNC45LTI4LTYuN2MtMi41LTAuNy03LTMuMy03LTEyICAgICBjMC0xLjcsMC02LjMsMC02LjNoLTE1aC0xNWMwLDAsMCw0LjYsMCw2LjNjMCw4LjctNC41LDExLjMtNywxMmMtNi44LDEuOS0yOC4xLDcuMy0yOC4xLDYuN3YxNGg1MC4xSC0xMDguNXoiIGZpbGw9IiNFNkMxOUMiIGlkPSJNYXNrXzNfIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI01hc2tfNF8pIj48ZGVmcz48cGF0aCBkPSJNLTEwOC41LDEyMXYtMTRjMCwwLTIxLjItNC45LTI4LTYuN2MtMi41LTAuNy03LTMuMy03LTEyYzAtMS43LDAtNi4zLDAtNi4zaC0xNWgtMTVjMCwwLDAsNC42LDAsNi4zICAgICAgIGMwLDguNy00LjUsMTEuMy03LDEyYy02LjgsMS45LTI4LjEsNy4zLTI4LjEsNi43djE0aDUwLjFILTEwOC41eiIgaWQ9Ik1hc2tfMV8iLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJNYXNrXzVfIj48dXNlIG92ZXJmbG93PSJ2aXNpYmxlIiB4bGluazpocmVmPSIjTWFza18xXyIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI01hc2tfNV8pIiBkPSJNLTE1OC41LDEwMC4xYzEyLjcsMCwyMy0xOC42LDIzLTM0LjQgICAgICBjMC0xNi4yLTEwLjMtMjQuNy0yMy0yNC43cy0yMyw4LjUtMjMsMjQuN0MtMTgxLjUsODEuNS0xNzEuMiwxMDAuMS0xNTguNSwxMDAuMXoiIGZpbGw9IiNENEIwOEMiIGlkPSJoZWFkLXNoYWRvdyIvPjwvZz48L2c+PHBhdGggZD0iTS0xNTguNSw5NmMxMi43LDAsMjMtMTYuMywyMy0zMWMwLTE1LjEtMTAuMy0yMy0yMy0yM3MtMjMsNy45LTIzLDIzICAgIEMtMTgxLjUsNzkuNy0xNzEuMiw5Ni0xNTguNSw5NnoiIGZpbGw9IiNGMkNFQTUiIGlkPSJoZWFkIi8+PC9nPjwvc3ZnPg=='
};

exports.default = ChatBot;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(18),
    getTag = __webpack_require__(20),
    isArguments = __webpack_require__(21),
    isArray = __webpack_require__(22),
    isArrayLike = __webpack_require__(23),
    isBuffer = __webpack_require__(28),
    isPrototype = __webpack_require__(29),
    isTypedArray = __webpack_require__(30);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(19);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isLength = __webpack_require__(27);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isObject = __webpack_require__(26);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(32),n=__webpack_require__(33),p=__webpack_require__(34),q=__webpack_require__(35),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(37);
var invariant = __webpack_require__(38);
var ReactPropTypesSecret = __webpack_require__(39);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	var randomID = function(len,pattern){
		var possibilities = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "~!@#$%^&()_+-={}[];\',"];
		var chars = "";

		var pattern = pattern ? pattern : "aA0";
		pattern.split('').forEach(function(a){
			if(!isNaN(parseInt(a))){
				chars += possibilities[2];
			}else if(/[a-z]/.test(a)){
				chars += possibilities[0];
			}else if(/[A-Z]/.test(a)){
				chars += possibilities[1];
			}else{
				chars += possibilities[3];
			}
		});
		
		var len = len ? len : 30;

		var result = '';

		while(len--){ 
			result += chars.charAt(Math.floor(Math.random() * chars.length)); 
		};

		return result;
	};

	if(true){
		module.exports = randomID;
	} else {
		window["randomID"] = randomID;
	};

})();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextStep = exports.OptionsStep = exports.CustomStep = undefined;

var _CustomStep = __webpack_require__(42);

var _CustomStep2 = _interopRequireDefault(_CustomStep);

var _OptionsStep = __webpack_require__(46);

var _OptionsStep2 = _interopRequireDefault(_OptionsStep);

var _TextStep = __webpack_require__(51);

var _TextStep2 = _interopRequireDefault(_TextStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CustomStep = _CustomStep2.default;
exports.OptionsStep = _OptionsStep2.default;
exports.TextStep = _TextStep2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Loading = __webpack_require__(6);

var _Loading2 = _interopRequireDefault(_Loading);

var _CustomStepContainer = __webpack_require__(45);

var _CustomStepContainer2 = _interopRequireDefault(_CustomStepContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomStep = function (_Component) {
  _inherits(CustomStep, _Component);

  /* istanbul ignore next */
  function CustomStep(props) {
    _classCallCheck(this, CustomStep);

    var _this = _possibleConstructorReturn(this, (CustomStep.__proto__ || Object.getPrototypeOf(CustomStep)).call(this, props));

    _this.state = {
      loading: true
    };

    _this.renderComponent = _this.renderComponent.bind(_this);
    return _this;
  }

  _createClass(CustomStep, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var step = this.props.step;
      var delay = step.delay,
          waitAction = step.waitAction;


      setTimeout(function () {
        _this2.setState({ loading: false }, function () {
          if (!waitAction && !step.rendered) {
            _this2.props.triggerNextStep();
          }
        });
      }, delay);
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent() {
      var _props = this.props,
          step = _props.step,
          steps = _props.steps,
          previousStep = _props.previousStep,
          triggerNextStep = _props.triggerNextStep;
      var component = step.component;

      return _react2.default.cloneElement(component, {
        step: step,
        steps: steps,
        previousStep: previousStep,
        triggerNextStep: triggerNextStep
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;
      var style = this.props.style;


      return _react2.default.createElement(
        _CustomStepContainer2.default,
        {
          className: 'rsc-cs',
          style: style
        },
        loading ? _react2.default.createElement(_Loading2.default, null) : this.renderComponent()
      );
    }
  }]);

  return CustomStep;
}(_react.Component);

CustomStep.propTypes = {
  step: _propTypes2.default.object.isRequired,
  steps: _propTypes2.default.object.isRequired,
  style: _propTypes2.default.object.isRequired,
  previousStep: _propTypes2.default.object.isRequired,
  triggerNextStep: _propTypes2.default.func.isRequired
};

exports.default = CustomStep;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  animation: ', ' 1.4s infinite both;\n  animation-delay: ', ';\n'], ['\n  animation: ', ' 1.4s infinite both;\n  animation-delay: ', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingStep = _styledComponents2.default.span(_templateObject, _animations.loading, function (props) {
  return props.delay;
});

exports.default = LoadingStep;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hexToRgb = function hexToRgb(hex) {
  // http://stackoverflow.com/a/5624139
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Transform hex+alpha to rgba
 * @param {string} hex hex color code
 * @param {number} [alpha=1]
 * @returns {string} the rgba as string
 */
var rgba = function rgba(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var color = hexToRgb(hex);
  return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + alpha + ")";
};

exports.default = rgba;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  display: flex;\n  justify-content: center;\n  margin: 0 6px 10px 6px;\n  padding: 16px;\n'], ['\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  display: flex;\n  justify-content: center;\n  margin: 0 6px 10px 6px;\n  padding: 16px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ChatStepContainer = _styledComponents2.default.div(_templateObject);

exports.default = ChatStepContainer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = __webpack_require__(8);

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Option = __webpack_require__(47);

var _Option2 = _interopRequireDefault(_Option);

var _OptionElement = __webpack_require__(48);

var _OptionElement2 = _interopRequireDefault(_OptionElement);

var _Options = __webpack_require__(49);

var _Options2 = _interopRequireDefault(_Options);

var _OptionsStepContainer = __webpack_require__(50);

var _OptionsStepContainer2 = _interopRequireDefault(_OptionsStepContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsStep = function (_Component) {
  _inherits(OptionsStep, _Component);

  /* istanbul ignore next */
  function OptionsStep(props) {
    _classCallCheck(this, OptionsStep);

    var _this = _possibleConstructorReturn(this, (OptionsStep.__proto__ || Object.getPrototypeOf(OptionsStep)).call(this, props));

    _this.renderOption = _this.renderOption.bind(_this);
    _this.onOptionClick = _this.onOptionClick.bind(_this);
    return _this;
  }

  _createClass(OptionsStep, [{
    key: 'onOptionClick',
    value: function onOptionClick(_ref) {
      var value = _ref.value;

      this.props.triggerNextStep({ value: value });
    }
  }, {
    key: 'renderOption',
    value: function renderOption(option) {
      var _this2 = this;

      var bubbleOptionStyle = this.props.bubbleOptionStyle;
      var user = this.props.step.user;
      var value = option.value,
          label = option.label;


      return _react2.default.createElement(
        _Option2.default,
        {
          key: value,
          className: 'rsc-os-option'
        },
        _react2.default.createElement(
          _OptionElement2.default,
          {
            className: 'rsc-os-option-element',
            style: bubbleOptionStyle,
            user: user,
            onClick: function onClick() {
              return _this2.onOptionClick({ value: value });
            }
          },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.step.options;


      return _react2.default.createElement(
        _OptionsStepContainer2.default,
        { className: 'rsc-os' },
        _react2.default.createElement(
          _Options2.default,
          { className: 'rsc-os-options' },
          (0, _map3.default)(options, this.renderOption)
        )
      );
    }
  }]);

  return OptionsStep;
}(_react.Component);

OptionsStep.propTypes = {
  step: _propTypes2.default.object.isRequired,
  triggerNextStep: _propTypes2.default.func.isRequired,
  bubbleOptionStyle: _propTypes2.default.object.isRequired
};

exports.default = OptionsStep;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  animation: ', ' .3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n'], ['\n  animation: ', ' .3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents2.default.li(_templateObject, _animations.scale);

exports.default = Option;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ', ';\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover { opacity: .7; }\n'], ['\n  background: ', ';\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ', ';\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover { opacity: .7; }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(5);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionElement = _styledComponents2.default.a(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.botBubbleColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.botFontColor;
});

OptionElement.defaultProps = {
  theme: _theme2.default
};

exports.default = OptionElement;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n'], ['\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Options = _styledComponents2.default.ul(_templateObject);

exports.default = Options;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionsStepContainer = _styledComponents2.default.div(_templateObject);

exports.default = OptionsStepContainer;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Bubble = __webpack_require__(52);

var _Bubble2 = _interopRequireDefault(_Bubble);

var _Image = __webpack_require__(53);

var _Image2 = _interopRequireDefault(_Image);

var _ImageContainer = __webpack_require__(54);

var _ImageContainer2 = _interopRequireDefault(_ImageContainer);

var _Loading = __webpack_require__(6);

var _Loading2 = _interopRequireDefault(_Loading);

var _TextStepContainer = __webpack_require__(55);

var _TextStepContainer2 = _interopRequireDefault(_TextStepContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextStep = function (_Component) {
  _inherits(TextStep, _Component);

  /* istanbul ignore next */
  function TextStep(props) {
    _classCallCheck(this, TextStep);

    var _this = _possibleConstructorReturn(this, (TextStep.__proto__ || Object.getPrototypeOf(TextStep)).call(this, props));

    _this.state = {
      loading: true
    };

    _this.renderMessage = _this.renderMessage.bind(_this);
    return _this;
  }

  _createClass(TextStep, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var step = this.props.step;
      var component = step.component,
          delay = step.delay,
          waitAction = step.waitAction;

      var isComponentWatingUser = component && waitAction;
      setTimeout(function () {
        _this2.setState({ loading: false }, function () {
          if (!isComponentWatingUser && !step.rendered) {
            // this.props.triggerNextStep();
          }
        });
      }, delay);
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage() {
      var _props = this.props,
          previousValue = _props.previousValue,
          step = _props.step,
          steps = _props.steps,
          previousStep = _props.previousStep,
          triggerNextStep = _props.triggerNextStep;
      var component = step.component;
      var message = step.message;


      if (component) {
        return _react2.default.cloneElement(component, {
          step: step,
          steps: steps,
          previousStep: previousStep,
          triggerNextStep: triggerNextStep
        });
      }

      message = message.replace(/{previousValue}/g, previousValue);

      return message;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          step = _props2.step,
          isFirst = _props2.isFirst,
          isLast = _props2.isLast,
          avatarStyle = _props2.avatarStyle,
          bubbleStyle = _props2.bubbleStyle,
          hideBotAvatar = _props2.hideBotAvatar,
          hideUserAvatar = _props2.hideUserAvatar;
      var avatar = step.avatar,
          user = step.user;


      var showAvatar = user ? !hideUserAvatar : !hideBotAvatar;
      return _react2.default.createElement(
        _TextStepContainer2.default,
        {
          className: 'rsc-ts',
          user: user
        },
        _react2.default.createElement(
          _ImageContainer2.default,
          {
            className: 'rsc-ts-image-container',
            user: user
          },
          isFirst && showAvatar && _react2.default.createElement(_Image2.default, {
            className: 'rsc-ts-image',
            style: avatarStyle,
            showAvatar: showAvatar,
            user: user,
            src: avatar,
            alt: 'avatar'
          })
        ),
        _react2.default.createElement(
          _Bubble2.default,
          {
            className: 'rsc-ts-bubble',
            style: bubbleStyle,
            user: user,
            showAvatar: showAvatar,
            isFirst: isFirst,
            isLast: isLast
          },
          this.state.loading && _react2.default.createElement(_Loading2.default, null),
          !this.state.loading && this.renderMessage()
        )
      );
    }
  }]);

  return TextStep;
}(_react.Component);

TextStep.propTypes = {
  isFirst: _propTypes2.default.bool.isRequired,
  // isLast: PropTypes.bool.isRequired,
  step: _propTypes2.default.object.isRequired,
  // triggerNextStep: PropTypes.func.isRequired,
  avatarStyle: _propTypes2.default.object.isRequired,
  bubbleStyle: _propTypes2.default.object.isRequired,
  hideBotAvatar: _propTypes2.default.bool.isRequired,
  hideUserAvatar: _propTypes2.default.bool.isRequired,
  previousStep: _propTypes2.default.object,
  previousValue: _propTypes2.default.any,
  steps: _propTypes2.default.object
};

TextStep.defaultProps = {
  previousStep: {},
  steps: {},
  previousValue: ''
};

exports.default = TextStep;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  animation: ', ' .3s ease forwards;\n  background: ', ';\n  border-radius: ', ';\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ', ';\n  display: inline-block;\n  font-size: 14px;\n  max-width: 50%;\n  margin: ', ';\n  overflow: hidden;\n  position: relative;\n  padding: 12px;\n  transform: scale(0);\n  transform-origin: ', ';\n'], ['\n  animation: ', ' .3s ease forwards;\n  background: ', ';\n  border-radius: ', ';\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ', ';\n  display: inline-block;\n  font-size: 14px;\n  max-width: 50%;\n  margin: ', ';\n  overflow: hidden;\n  position: relative;\n  padding: 12px;\n  transform: scale(0);\n  transform-origin: ', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__(4);

var _theme = __webpack_require__(5);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bubble = _styledComponents2.default.div(_templateObject, _animations.scale, function (props) {
  return props.user ? props.theme.userBubbleColor : props.theme.botBubbleColor;
}, function (props) {
  var isFirst = props.isFirst,
      isLast = props.isLast,
      user = props.user;

  if (!isFirst && !isLast) {
    return user ? '18px 0 0 18px' : '0 18px 18px 0px';
  } else if (!isFirst && isLast) {
    return user ? '18px 0 18px 18px' : '0 18px 18px 18px';
  }
  return props.user ? '18px 18px 0 18px' : '18px 18px 18px 0';
}, function (props) {
  return props.user ? props.theme.userFontColor : props.theme.botFontColor;
}, function (props) {
  var isFirst = props.isFirst,
      showAvatar = props.showAvatar,
      user = props.user;

  if (!isFirst && showAvatar) {
    return user ? '-8px 46px 10px 0' : '-8px 0 10px 46px';
  } else if (!isFirst && !showAvatar) {
    return user ? '-8px 0px 10px 0' : '-8px 0 10px 0px';
  }

  return '0 0 10px 0';
}, function (props) {
  var isFirst = props.isFirst,
      user = props.user;

  if (isFirst) {
    return user ? 'bottom right' : 'bottom left';
  }

  return user ? 'top right' : 'top left';
});

Bubble.defaultProps = {
  theme: _theme2.default
};

exports.default = Bubble;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  animation: ', ' .3s ease forwards;\n  border-radius: ', ';\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  height: 40px;\n  min-width: 40px;\n  padding: 3px;\n  transform: scale(0);\n  transform-origin: ', ';\n  width: 40;\n'], ['\n  animation: ', ' .3s ease forwards;\n  border-radius: ', ';\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  height: 40px;\n  min-width: 40px;\n  padding: 3px;\n  transform: scale(0);\n  transform-origin: ', ';\n  width: 40;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents2.default.img(_templateObject, _animations.scale, function (props) {
  return props.user ? '50% 50% 50% 0' : '50% 50% 0 50%';
}, function (props) {
  return props.user ? 'bottom left' : 'bottom right';
});

exports.default = Image;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  order: ', ';\n  padding: 6px;\n'], ['\n  display: inline-block;\n  order: ', ';\n  padding: 6px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.user ? '1' : '0';
});

exports.default = ImageContainer;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: flex-end;\n  display: flex;\n  justify-content: ', ';\n'], ['\n  align-items: flex-end;\n  display: flex;\n  justify-content: ', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextStepContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.user ? 'flex-end' : 'flex-start';
});

exports.default = TextStepContainer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _userSchema = __webpack_require__(57);

var _userSchema2 = _interopRequireDefault(_userSchema);

var _textSchema = __webpack_require__(58);

var _textSchema2 = _interopRequireDefault(_textSchema);

var _optionsSchema = __webpack_require__(59);

var _optionsSchema2 = _interopRequireDefault(_optionsSchema);

var _customSchema = __webpack_require__(60);

var _customSchema2 = _interopRequireDefault(_customSchema);

var _updateSchema = __webpack_require__(61);

var _updateSchema2 = _interopRequireDefault(_updateSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSON = __webpack_require__(9);

var schema = {
  parse: function parse(step) {
    var parser = [];

    if (step.user) {
      parser = _userSchema2.default;
    } else if (step.message) {
      parser = _textSchema2.default;
    } else if (step.options) {
      parser = _optionsSchema2.default;
    } else if (step.component) {
      parser = _customSchema2.default;
    } else if (step.update) {
      parser = _updateSchema2.default;
    } else {
      throw new Error('The step ' + JSON.stringify(step) + ' is invalid');
    }

    for (var i = 0, len = parser.length; i < len; i += 1) {
      var _parser$i = parser[i],
          key = _parser$i.key,
          types = _parser$i.types,
          required = _parser$i.required;


      if (!step[key] && required) {
        throw new Error('Key \'' + key + '\' is required in step ' + JSON.stringify(step));
      } else if (step[key]) {
        if (types[0] !== 'any' && types.indexOf(_typeof(step[key])) < 0) {
          throw new Error('The type of \'' + key + '\' value must be ' + types.join(' or ') + ' instead of ' + _typeof(step[key]));
        }
      }
    }

    var keys = parser.map(function (p) {
      return p.key;
    });

    for (var key in step) {
      if (keys.indexOf(key) < 0) {
        console.error('Invalid key \'' + key + '\' in step \'' + step.id + '\'');
        delete step[key];
      }
    }

    return step;
  },
  checkInvalidIds: function checkInvalidIds(steps) {
    for (var key in steps) {
      var step = steps[key];
      var triggerId = steps[key].trigger;

      if (typeof triggerId !== 'function') {
        if (step.options) {
          var triggers = step.options.filter(function (option) {
            return typeof option.trigger !== 'function';
          });
          var optionsTriggerIds = triggers.map(function (option) {
            return option.trigger;
          });

          for (var i = 0, len = optionsTriggerIds.length; i < len; i += 1) {
            var optionTriggerId = optionsTriggerIds[i];
            if (optionTriggerId && !steps[optionTriggerId]) {
              throw new Error('The id \'' + optionTriggerId + '\' triggered by option ' + (i + 1) + ' in step \'' + steps[key].id + '\' does not exist');
            }
          }
        } else if (triggerId && !steps[triggerId]) {
          throw new Error('The id \'' + triggerId + '\' triggered by step \'' + steps[key].id + '\' does not exist');
        }
      }
    }
  }
};

exports.default = schema;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  key: 'id',
  types: ['string', 'number'],
  required: true
}, {
  key: 'user',
  types: ['boolean'],
  required: true
}, {
  key: 'trigger',
  types: ['string', 'number', 'function'],
  required: false
}, {
  key: 'validator',
  types: ['function'],
  required: false
}, {
  key: 'end',
  types: ['boolean'],
  required: false
}, {
  key: 'placeholder',
  types: ['string'],
  required: false
}, {
  key: 'inputAttributes',
  types: ['object'],
  required: false
}, {
  key: 'metadata',
  types: ['object'],
  required: false
}];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  key: 'id',
  types: ['string', 'number'],
  required: true
}, {
  key: 'message',
  types: ['string', 'function'],
  required: true
}, {
  key: 'avatar',
  types: ['string'],
  required: false
}, {
  key: 'trigger',
  types: ['string', 'number', 'function'],
  required: false
}, {
  key: 'delay',
  types: ['number'],
  required: false
}, {
  key: 'end',
  types: ['boolean'],
  required: false
}, {
  key: 'placeholder',
  types: ['string'],
  required: false
}, {
  key: 'hideInput',
  types: ['boolean'],
  required: false
}, {
  key: 'inputAttributes',
  types: ['object'],
  required: false
}, {
  key: 'metadata',
  types: ['object'],
  required: false
}];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  key: 'id',
  types: ['string', 'number'],
  required: true
}, {
  key: 'options',
  types: ['object'],
  required: true
}, {
  key: 'end',
  types: ['boolean'],
  required: false
}, {
  key: 'placeholder',
  types: ['string'],
  required: false
}, {
  key: 'hideInput',
  types: ['boolean'],
  required: false
}, {
  key: 'inputAttributes',
  types: ['object'],
  required: false
}, {
  key: 'metadata',
  types: ['object'],
  required: false
}];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  key: 'id',
  types: ['string', 'number'],
  required: true
}, {
  key: 'component',
  types: ['any'],
  required: true
}, {
  key: 'avatar',
  types: ['string'],
  required: false
}, {
  key: 'replace',
  types: ['boolean'],
  required: false
}, {
  key: 'waitAction',
  types: ['boolean'],
  required: false
}, {
  key: 'asMessage',
  types: ['boolean'],
  required: false
}, {
  key: 'trigger',
  types: ['string', 'number', 'function'],
  required: false
}, {
  key: 'delay',
  types: ['number'],
  required: false
}, {
  key: 'end',
  types: ['boolean'],
  required: false
}, {
  key: 'placeholder',
  types: ['string'],
  required: false
}, {
  key: 'hideInput',
  types: ['boolean'],
  required: false
}, {
  key: 'inputAttributes',
  types: ['object'],
  required: false
}, {
  key: 'metadata',
  types: ['object'],
  required: false
}];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  key: 'id',
  types: ['string', 'number'],
  required: true
}, {
  key: 'update',
  types: ['string', 'number'],
  required: true
}, {
  key: 'trigger',
  types: ['string', 'number', 'function'],
  required: true
}, {
  key: 'placeholder',
  types: ['string'],
  required: false
}, {
  key: 'inputAttributes',
  types: ['object'],
  required: false
}, {
  key: 'metadata',
  types: ['object'],
  required: false
}];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var JSON = __webpack_require__(9);

/* istanbul ignore next */
var getData = function getData(_ref, callback) {
  var cacheName = _ref.cacheName,
      cache = _ref.cache,
      firstStep = _ref.firstStep,
      steps = _ref.steps;

  var currentStep = firstStep;
  var renderedSteps = [steps[currentStep.id]];
  var previousSteps = [steps[currentStep.id]];
  var previousStep = {};

  if (cache && localStorage.getItem(cacheName)) {
    var data = JSON.parse(localStorage.getItem(cacheName));
    var lastStep = data.renderedSteps[data.renderedSteps.length - 1];

    if (lastStep && lastStep.end) {
      localStorage.removeItem(cacheName);
    } else {
      for (var i = 0, len = data.renderedSteps.length; i < len; i += 1) {
        var renderedStep = data.renderedSteps[i];
        // remove delay of cached rendered steps
        data.renderedSteps[i].delay = 0;
        // flag used to avoid call triggerNextStep in cached rendered steps
        data.renderedSteps[i].rendered = true;

        // an error is thrown when render a component from localStorage.
        // So it's necessary reassing the component
        if (renderedStep.component) {
          var _id = renderedStep.id;
          data.renderedSteps[i].component = steps[_id].component;
        }
      }

      var _data$currentStep = data.currentStep,
          trigger = _data$currentStep.trigger,
          end = _data$currentStep.end,
          options = _data$currentStep.options;

      var id = data.currentStep.id;

      if (options) {
        delete data.currentStep.rendered;
      }

      // add trigger function to current step
      if (!trigger && !end) {
        if (options) {
          for (var _i = 0; _i < options.length; _i += 1) {
            data.currentStep.options[_i].trigger = steps[id].options[_i].trigger;
          }
        } else {
          data.currentStep.trigger = steps[id].trigger;
        }
      }

      // execute callback function to enable input if last step is
      // waiting user type
      if (data.currentStep.user) {
        callback();
      }

      return data;
    }
  }

  return {
    currentStep: currentStep,
    previousStep: previousStep,
    previousSteps: previousSteps,
    renderedSteps: renderedSteps
  };
};

/* istanbul ignore next */
var setData = function setData(cacheName, cachedData) {
  var data = JSON.parse(JSON.stringify(cachedData));
  // clean components
  for (var key in data) {
    for (var i = 0, len = data[key].length; i < len; i += 1) {
      if (data[key][i].component) {
        data[key][i].component = data[key][i].id;
      }
    }
  }

  localStorage.setItem(cacheName, JSON.stringify(data));
};

exports.getData = getData;
exports.setData = setData;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(10);
var Axios = __webpack_require__(66);
var defaults = __webpack_require__(7);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(14);
axios.CancelToken = __webpack_require__(81);
axios.isCancel = __webpack_require__(13);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(82);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(7);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(76);
var dispatchRequest = __webpack_require__(77);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(12);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(78);
var isCancel = __webpack_require__(13);
var defaults = __webpack_require__(7);
var isAbsoluteURL = __webpack_require__(79);
var combineURLs = __webpack_require__(80);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(14);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmitButton = exports.Input = exports.Footer = exports.FloatButton = exports.HeaderIcon = exports.HeaderTitle = exports.Header = exports.Content = exports.ChatBotContainer = undefined;

var _ChatBotContainer = __webpack_require__(84);

var _ChatBotContainer2 = _interopRequireDefault(_ChatBotContainer);

var _Content = __webpack_require__(85);

var _Content2 = _interopRequireDefault(_Content);

var _Header = __webpack_require__(86);

var _Header2 = _interopRequireDefault(_Header);

var _HeaderTitle = __webpack_require__(87);

var _HeaderTitle2 = _interopRequireDefault(_HeaderTitle);

var _HeaderIcon = __webpack_require__(88);

var _HeaderIcon2 = _interopRequireDefault(_HeaderIcon);

var _FloatButton = __webpack_require__(89);

var _FloatButton2 = _interopRequireDefault(_FloatButton);

var _Footer = __webpack_require__(90);

var _Footer2 = _interopRequireDefault(_Footer);

var _Input = __webpack_require__(91);

var _Input2 = _interopRequireDefault(_Input);

var _SubmitButton = __webpack_require__(92);

var _SubmitButton2 = _interopRequireDefault(_SubmitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ChatBotContainer = _ChatBotContainer2.default;
exports.Content = _Content2.default;
exports.Header = _Header2.default;
exports.HeaderTitle = _HeaderTitle2.default;
exports.HeaderIcon = _HeaderIcon2.default;
exports.FloatButton = _FloatButton2.default;
exports.Footer = _Footer2.default;
exports.Input = _Input2.default;
exports.SubmitButton = _SubmitButton2.default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border-radius: 10px;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  font-family: ', ';\n  overflow: hidden;\n  position: ', ';\n  bottom: ', ';\n  top: ', ';\n  right: ', ';\n  left: ', ';\n  width: ', ';\n  height: ', ';\n  z-index: 999;\n  transform: ', ';\n  transform-origin: ', ';\n  transition: transform .3s ease;\n\n  @media screen and (max-width: 568px) {\n    border-radius: ', ';\n    bottom: 0 !important;\n    left: initial !important;\n    height: 100%;\n    right: 0 !important;\n    top: initial !important;\n    width: 100%;\n  }\n'], ['\n  background: ', ';\n  border-radius: 10px;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  font-family: ', ';\n  overflow: hidden;\n  position: ', ';\n  bottom: ', ';\n  top: ', ';\n  right: ', ';\n  left: ', ';\n  width: ', ';\n  height: ', ';\n  z-index: 999;\n  transform: ', ';\n  transform-origin: ', ';\n  transition: transform .3s ease;\n\n  @media screen and (max-width: 568px) {\n    border-radius: ', ';\n    bottom: 0 !important;\n    left: initial !important;\n    height: 100%;\n    right: 0 !important;\n    top: initial !important;\n    width: 100%;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(5);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ChatBotContainer = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontFamily;
}, function (_ref3) {
  var floating = _ref3.floating;
  return floating ? 'fixed' : 'relative';
}, function (_ref4) {
  var floating = _ref4.floating,
      floatingStyle = _ref4.floatingStyle;
  return floating ? floatingStyle.bottom || '32px' : 'initial';
}, function (_ref5) {
  var floating = _ref5.floating,
      floatingStyle = _ref5.floatingStyle;
  return floating ? floatingStyle.top || 'initial' : 'initial';
}, function (_ref6) {
  var floating = _ref6.floating,
      floatingStyle = _ref6.floatingStyle;
  return floating ? floatingStyle.right || '32px' : 'initial';
}, function (_ref7) {
  var floating = _ref7.floating,
      floatingStyle = _ref7.floatingStyle;
  return floating ? floatingStyle.left || 'initial' : 'initial';
}, function (_ref8) {
  var width = _ref8.width;
  return width;
}, function (_ref9) {
  var height = _ref9.height;
  return height;
}, function (_ref10) {
  var opened = _ref10.opened;
  return opened ? 'scale(1)' : 'scale(0)';
}, function (_ref11) {
  var floatingStyle = _ref11.floatingStyle;
  return floatingStyle.transformOrigin || 'bottom right';
}, function (_ref12) {
  var floating = _ref12.floating;
  return floating ? '0' : '';
});

ChatBotContainer.defaultProps = {
  theme: _theme2.default
};

exports.default = ChatBotContainer;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: calc(', ' - ', ');\n  overflow-y: scroll;\n  margin-top: 2px;\n  padding-top: 6px;\n\n  @media screen and (max-width: 568px) {\n    height: ', ';\n  }\n'], ['\n  height: calc(', ' - ', ');\n  overflow-y: scroll;\n  margin-top: 2px;\n  padding-top: 6px;\n\n  @media screen and (max-width: 568px) {\n    height: ', ';\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents2.default.div(_templateObject, function (props) {
  return props.height;
}, function (props) {
  return props.hideInput ? '56px' : '112px';
}, function (props) {
  return props.floating ? 'calc(100% - 112px)' : '';
});

exports.default = Content;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: center;\n  background: ', ';\n  color: ', ';\n  display: flex;\n  fill: ', ';\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 10px;\n'], ['\n  align-items: center;\n  background: ', ';\n  color: ', ';\n  display: flex;\n  fill: ', ';\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 10px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(5);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.headerBgColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.headerFontColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.headerFontColor;
});

Header.defaultProps = {
  theme: _theme2.default
};

exports.default = Header;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0;\n  font-size:', ';\n'], ['\n  margin: 0;\n  font-size:', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(5);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderTitle = _styledComponents2.default.h2(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.headerFontSize;
});

HeaderTitle.defaultProps = {
  theme: _theme2.default
};

exports.default = HeaderTitle;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n'], ['\n  cursor: pointer;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderIcon = _styledComponents2.default.a(_templateObject);

exports.default = HeaderIcon;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: center;\n  cursor: pointer;\n  background: ', ';\n  bottom: 32px;\n  border-radius: 100%;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  fill: ', ';\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  right: 32px;\n  transform: ', ';\n  transition: transform .3s ease;\n  width: 56px;\n  z-index: 999;\n'], ['\n  align-items: center;\n  cursor: pointer;\n  background: ', ';\n  bottom: 32px;\n  border-radius: 100%;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  fill: ', ';\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  right: 32px;\n  transform: ', ';\n  transition: transform .3s ease;\n  width: 56px;\n  z-index: 999;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FloatButton = _styledComponents2.default.a(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.headerBgColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.headerFontColor;
}, function (props) {
  return props.opened ? 'scale(0)' : 'scale(1)';
});

FloatButton.defaultProps = {
  theme: {
    headerBgColor: '#6e48aa',
    headerFontColor: '#fff'
  }
};

exports.default = FloatButton;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents2.default.div(_templateObject);

exports.default = Footer;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  animation: ', ';\n  border: 0;\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: ', ';\n  box-shadow: ', ';\n  box-sizing: border-box;\n  color: ', ';\n  font-size: 16px;\n  opacity: ', ';\n  outline: none;\n  padding: ', ';\n  width: 100%;\n  -webkit-appearance: none;\n\n  &:disabled { background: #fff; }\n\n  @media screen and (max-width: 568px) {\n    border-bottom-left-radius: ', ';\n    border-bottom-right-radius: ', ';\n  }\n'], ['\n  animation: ', ';\n  border: 0;\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: ', ';\n  box-shadow: ', ';\n  box-sizing: border-box;\n  color: ', ';\n  font-size: 16px;\n  opacity: ', ';\n  outline: none;\n  padding: ', ';\n  width: 100%;\n  -webkit-appearance: none;\n\n  &:disabled { background: #fff; }\n\n  @media screen and (max-width: 568px) {\n    border-bottom-left-radius: ', ';\n    border-bottom-right-radius: ', ';\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.input(_templateObject, function (props) {
  return props.invalid ? _animations.invalidInput + ' .2s ease' : '';
}, function (props) {
  return props.invalid ? '0' : '1px solid #eee';
}, function (props) {
  return props.invalid ? 'inset 0 0 2px #E53935' : 'none';
}, function (props) {
  return props.invalid ? '#E53935' : '';
}, function (props) {
  return props.disabled && !props.invalid ? '.5' : '1';
}, function (props) {
  return props.hasButton ? '16px 52px 16px 10px' : '16px 10px';
}, function (props) {
  return props.floating ? '0' : '10px';
}, function (props) {
  return props.floating ? '0' : '10px';
});

exports.default = Input;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: transparent;\n  border: 0;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n  cursor: ', ';\n  fill: ', ';\n  opacity: ', ';\n  outline: none;\n  padding: 14px 16px 12px 16px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  &:before {\n    content: \'\';\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    animation: ', ';\n  }\n  &:not(:disabled):hover {\n    opacity: 0.7;\n  }\n'], ['\n  background-color: transparent;\n  border: 0;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n  cursor: ', ';\n  fill: ', ';\n  opacity: ', ';\n  outline: none;\n  padding: 14px 16px 12px 16px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  &:before {\n    content: \'\';\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    animation: ', ';\n  }\n  &:not(:disabled):hover {\n    opacity: 0.7;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(5);

var _theme2 = _interopRequireDefault(_theme);

var _animations = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fillFunc = function fillFunc(props) {
  var speaking = props.speaking,
      invalid = props.invalid,
      theme = props.theme;


  if (speaking) {
    return theme.headerBgColor;
  }
  return invalid ? '#E53935' : '#4a4a4a';
};

var SubmitButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, fillFunc, function (props) {
  return props.disabled && !props.invalid ? '.5' : '1';
}, function (_ref) {
  var theme = _ref.theme,
      speaking = _ref.speaking;
  return speaking ? (0, _animations.pulse)(theme.headerBgColor) + ' 2s ease infinite' : '';
});

SubmitButton.defaultProps = {
  theme: _theme2.default
};

exports.default = SubmitButton;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var noop = function noop() {};

var Recognition = function () {
  _createClass(Recognition, null, [{
    key: 'isSupported',
    value: function isSupported() {
      return 'webkitSpeechRecognition' in window;
    }

    /**
     * Creates an instance of Recognition.
     * @param {function} [onChange] callback on change
     * @param {function} [onEnd]  callback on and
     * @param {function} [onStop]  callback on stop
     * @param {string} [lang='en'] recognition lang
     * @memberof Recognition
     * @constructor
     */

  }]);

  function Recognition() {
    var onChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
    var onEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var onStop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
    var lang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en';

    _classCallCheck(this, Recognition);

    if (!instance) {
      instance = this;
    }
    this.state = {
      inputValue: '',
      lang: lang,
      onChange: onChange,
      onEnd: onEnd,
      onStop: onStop
    };

    this.onResult = this.onResult.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.setup();

    return instance;
  }

  /**
   * Handler for recognition change event
   * @param {string} interimTranscript
   * @memberof Recognition
   * @private
   */


  _createClass(Recognition, [{
    key: 'onChange',
    value: function onChange(interimTranscript) {
      var onChange = this.state.onChange;

      this.setState({
        inputValue: interimTranscript
      });
      onChange(interimTranscript);
    }

    /**
     * Handler for recognition change event when its final
     * @param {string} finalTranscript
     * @memberof Recognition
     * @private
     */

  }, {
    key: 'onFinal',
    value: function onFinal(finalTranscript) {
      this.setState({
        inputValue: finalTranscript
      });
      this.recognition.stop();
    }

    /**
     * Handler for recognition end event
     * @memberof Recognition
     * @private
     */

  }, {
    key: 'onEnd',
    value: function onEnd() {
      var _state = this.state,
          onStop = _state.onStop,
          onEnd = _state.onEnd,
          force = _state.force;

      this.setState({ speaking: false });
      if (force) {
        onStop();
      } else {
        onEnd();
      }
    }

    /**
     * Handler for recognition result event
     * @memberof Recognition
     * @private
     */

  }, {
    key: 'onResult',
    value: function onResult(event) {
      var interimTranscript = '';
      var finalTranscript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
          this.onFinal(finalTranscript);
        } else {
          interimTranscript += event.results[i][0].transcript;
          this.onChange(interimTranscript);
        }
      }
    }

    /**
     * method for updating the instance state
     * @param {object} nextState
     * @memberof Recognition
     * @private
     */

  }, {
    key: 'setState',
    value: function setState(nextState) {
      this.state = Object.assign({}, this.state, nextState);
    }

    /**
     * setup the browser recognition
     * @returns {Recognition}
     * @memberof Recognition
     * @public
     */

  }, {
    key: 'setup',
    value: function setup() {
      if (!Recognition.isSupported()) {
        return this;
      }
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = this.state.lang;
      this.recognition.onresult = this.onResult;
      this.recognition.onend = this.onEnd;
      return this;
    }

    /**
     * change the recognition lang and resetup
     * @param {string} lang the new lang
     * @returns {Recognition}
     * @memberof Recognition
     * @public
     */

  }, {
    key: 'setLang',
    value: function setLang(lang) {
      this.setState({ lang: lang });
      this.setup();
      return this;
    }

    /**
     * toggle the recognition
     * @returns {Recognition}
     * @memberof Recognition
     * @public
     */

  }, {
    key: 'speak',
    value: function speak() {
      if (!Recognition.isSupported()) {
        return this;
      }
      var speaking = this.state.speaking;

      if (!speaking) {
        this.recognition.start();
        this.setState({
          speaking: true,
          inputValue: ''
        });
      } else {
        this.setState({
          force: true
        });
        this.recognition.stop();
      }
      return this;
    }
  }]);

  return Recognition;
}();

exports.default = Recognition;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MicIcon = exports.SubmitIcon = exports.CloseIcon = exports.ChatIcon = undefined;

var _ChatIcon = __webpack_require__(95);

var _ChatIcon2 = _interopRequireDefault(_ChatIcon);

var _CloseIcon = __webpack_require__(96);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _SubmitIcon = __webpack_require__(97);

var _SubmitIcon2 = _interopRequireDefault(_SubmitIcon);

var _MicIcon = __webpack_require__(98);

var _MicIcon2 = _interopRequireDefault(_MicIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ChatIcon = _ChatIcon2.default;
exports.CloseIcon = _CloseIcon2.default;
exports.SubmitIcon = _SubmitIcon2.default;
exports.MicIcon = _MicIcon2.default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatIcon = function ChatIcon() {
  return _react2.default.createElement(
    "svg",
    { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
    _react2.default.createElement("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

exports.default = ChatIcon;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon() {
  return _react2.default.createElement(
    "svg",
    {
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      xmlns: "http://www.w3.org/2000/svg"
    },
    _react2.default.createElement("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

exports.default = CloseIcon;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitIcon = function SubmitIcon(props) {
  return _react2.default.createElement(
    'svg',
    {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      width: props.size,
      height: props.size,
      viewBox: '0 0 500 500'
    },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('polygon', { points: '0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75' })
      )
    )
  );
};

SubmitIcon.propTypes = {
  size: _propTypes2.default.number
};

SubmitIcon.defaultProps = {
  size: 20
};

exports.default = SubmitIcon;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MicIcon = function MicIcon(props) {
  return _react2.default.createElement(
    'svg',
    {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      width: props.size,
      height: props.size,
      viewBox: '0 0 400 400'
    },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z' }),
      _react2.default.createElement('path', { d: 'M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z' })
    )
  );
};

MicIcon.propTypes = {
  size: _propTypes2.default.number
};

MicIcon.defaultProps = {
  size: 20
};

exports.default = MicIcon;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isMobile = exports.isMobile = function isMobile() {
  return (/iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent)
  );
};

/***/ })
/******/ ]);
});