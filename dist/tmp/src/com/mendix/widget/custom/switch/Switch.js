(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, Switch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SwitchContainer = (function (_super) {
        __extends(SwitchContainer, _super);
        function SwitchContainer(props) {
            var _this = _super.call(this, props) || this;
            _this.subscriptionHandles = [];
            _this.state = _this.updateState(props.mxObject);
            _this.handleToggle = _this.handleToggle.bind(_this);
            _this.subscriptionCallback = _this.subscriptionCallback.bind(_this);
            return _this;
        }
        SwitchContainer.prototype.render = function () {
            return this.renderSwitch();
        };
        SwitchContainer.prototype.componentWillReceiveProps = function (newProps) {
            this.resetSubscriptions(newProps.mxObject);
            this.setState(this.updateState(newProps.mxObject));
        };
        SwitchContainer.prototype.componentWillUnmount = function () {
            this.subscriptionHandles.forEach(mx.data.unsubscribe);
        };
        SwitchContainer.prototype.renderSwitch = function () {
            var _a = this.props, className = _a.class, style = _a.style;
            return react_1.createElement(Switch_1.Switch, {
                className: className,
                isChecked: this.state.isChecked,
                onClick: this.handleToggle,
                status: this.getSwitchStatus(),
                style: SwitchContainer.parseStyle(style)
            });
        };
        SwitchContainer.prototype.getAttributeValue = function (attribute, mxObject) {
            return !!mxObject && mxObject.get(attribute);
        };
        SwitchContainer.prototype.getSwitchStatus = function () {
            if (this.props.mxObject) {
                return "enabled";
            }
            return "no-context";
        };
        SwitchContainer.prototype.handleToggle = function () {
            var _a = this.props, booleanAttribute = _a.booleanAttribute, mxObject = _a.mxObject;
            if (mxObject) {
                mxObject.set(booleanAttribute, !mxObject.get(booleanAttribute));
            }
        };
        SwitchContainer.prototype.resetSubscriptions = function (mxObject) {
            this.subscriptionHandles.forEach(mx.data.unsubscribe);
            this.subscriptionHandles = [];
            if (mxObject) {
                this.subscriptionHandles.push(mx.data.subscribe({
                    callback: this.subscriptionCallback,
                    guid: mxObject.getGuid()
                }));
                this.subscriptionHandles.push(mx.data.subscribe({
                    attr: this.props.booleanAttribute,
                    callback: this.subscriptionCallback,
                    guid: mxObject.getGuid()
                }));
            }
        };
        SwitchContainer.prototype.updateState = function (mxObject) {
            if (mxObject === void 0) { mxObject = this.props.mxObject; }
            return {
                isChecked: this.getAttributeValue(this.props.booleanAttribute, mxObject)
            };
        };
        SwitchContainer.prototype.subscriptionCallback = function () {
            this.setState(this.updateState());
        };
        SwitchContainer.parseStyle = function (style) {
            if (style === void 0) { style = ""; }
            try {
                return style.split(";").reduce(function (styleObject, line) {
                    var pair = line.split(":");
                    if (pair.length === 2) {
                        var name_1 = pair[0].trim().replace(/(-.)/g, function (match) { return match[1].toUpperCase(); });
                        styleObject[name_1] = pair[1].trim();
                    }
                    return styleObject;
                }, {});
            }
            catch (error) {
                window.console.error("Failed to parse style", style, error);
            }
            return {};
        };
        return SwitchContainer;
    }(react_1.Component));
    exports.default = SwitchContainer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Switch = function (props) {
        return react_1.createElement("div", {
            className: classNames("widget-toggle", props.className),
            style: props.style
        });
    };
    exports.Switch.displayName = "Switch";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=Switch.js.map