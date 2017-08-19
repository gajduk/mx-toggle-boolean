(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(4), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Switch = function (props) {
        return react_1.createElement("button", {
            className: classNames("btn mx-button btn-default", props.className),
            style: props.style,
            onClick: props.status === "enabled" ? props.onClick : undefined,
            dangerouslySetInnerHTML: { __html: props.isChecked ? "X" : "Voir" }
        });
    };
    exports.Switch.displayName = "Switch";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ".widget-toggle {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background: transparent; }\n"

/***/ }),
/* 3 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, Switch_1, SwitchContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var preview = (function (_super) {
        __extends(preview, _super);
        function preview() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        preview.prototype.render = function () {
            return this.renderSwitch();
        };
        preview.prototype.renderSwitch = function () {
            return react_1.createElement(Switch_1.Switch, {
                className: this.props.class,
                isChecked: true,
                onClick: undefined,
                status: "enabled",
                style: SwitchContainer_1.default.parseStyle(this.props.style)
            });
        };
        return preview;
    }(react_1.Component));
    exports.preview = preview;
    function getPreviewCss() {
        return __webpack_require__(2);
    }
    exports.getPreviewCss = getPreviewCss;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
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
/* 5 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, Switch_1) {
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


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzE3NGFjMjkxODI3NjI5YTMwODQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Td2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1N3aXRjaC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9Td2l0Y2gud2VibW9kZWxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Td2l0Y2hDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7Ozs7SUNnQmEsY0FBTSxHQUFxQixVQUFDLEtBQUs7UUFDMUMsNEJBQWEsQ0FBQyxRQUFRLEVBQ2xCO1lBQ0ksU0FBUyxFQUFFLFVBQVUsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ25FLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTO1lBQy9ELHVC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T0FBTyxDQUFDLE9BQU8sRUFBRSxlQUFLLElBQUksWUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7d0JBQzlFLFdBQVcsQ0FBQyxNQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRWIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FBQyxDQTdHNkIsaUJBQVMsR0E2R3RDO0lBRTJCLGtDQUFPIiwiZmlsZSI6InNyYy9Td2l0Y2gud2VibW9kZWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcxNzRhYzI5MTgyNzYyOWEzMDg0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNGQywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5cbmltcG9ydCBcIi4uL3VpL1N3aXRjaC5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpc0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBzdGF0dXM6IFN3aXRjaFN0YXR1cztcbiAgICBzdHlsZT86IG9iamVjdDtcbn1cblxuZXhwb3J0IHR5cGUgU3dpdGNoU3RhdHVzID0gXCJlbmFibGVkXCIgfCBcImRpc2FibGVkXCIgfCBcIm5vLWNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IFN3aXRjaDogU0ZDPFN3aXRjaFByb3BzPiA9IChwcm9wcykgPT5cbiAgICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcImJ0biBteC1idXR0b24gYnRuLWRlZmF1bHRcIiwgcHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHByb3BzLnN0YXR1cyA9PT0gXCJlbmFibGVkXCIgPyBwcm9wcy5vbkNsaWNrIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBwcm9wcy5pc0NoZWNrZWQgPyBcIlhcIjpcIlZvaXJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBjaGVja2VkOiBwcm9wcy5pc0NoZWNrZWQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJ3aWRnZXQtc3dpdGNoLWNoZWNrYm94XCIsIHsgZW5hYmxlZDogcHJvcHMuc3RhdHVzID09PSBcImVuYWJsZWRcIiB9KSxcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGB3aWRnZXQtc3dpdGNoLWJ0bi13cmFwcGVyYCwge1xuICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogcHJvcHMuaXNDaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IHByb3BzLnN0YXR1cyA9PT0gXCJkaXNhYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm5vLXN3aXRjaFwiOiBwcm9wcy5zdGF0dXMgPT09IFwibm8tY29udGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBcInVuLWNoZWNrZWRcIjogIXByb3BzLmlzQ2hlY2tlZFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHByb3BzLnN0YXR1cyA9PT0gXCJlbmFibGVkXCIgPyBwcm9wcy5vbkNsaWNrIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJ3aWRnZXQtc3dpdGNoLWJ0blwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICFwcm9wcy5pc0NoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBwcm9wcy5pc0NoZWNrZWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgKi9cbiAgICApO1xuXG5Td2l0Y2guZGlzcGxheU5hbWUgPSBcIlN3aXRjaFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIi53aWRnZXQtdG9nZ2xlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL1N3aXRjaC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL1N3aXRjaFwiO1xuaW1wb3J0IFN3aXRjaENvbnRhaW5lciwgeyBTd2l0Y2hDb250YWluZXJQcm9wcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvU3dpdGNoQ29udGFpbmVyXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlIGNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50PFN3aXRjaENvbnRhaW5lclByb3BzLCB7fT4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3dpdGNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJTd2l0Y2goKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFN3aXRjaCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzLFxuICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgb25DbGljazogdW5kZWZpbmVkIGFzIGFueSxcbiAgICAgICAgICAgIHN0YXR1czogXCJlbmFibGVkXCIgLFxuICAgICAgICAgICAgc3R5bGU6IFN3aXRjaENvbnRhaW5lci5wYXJzZVN0eWxlKHRoaXMucHJvcHMuc3R5bGUpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1N3aXRjaC5zY3NzXCIpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N3aXRjaC53ZWJtb2RlbGVyLnRzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgU0ZDRWxlbWVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTd2l0Y2gsIFN3aXRjaFByb3BzLCBTd2l0Y2hTdGF0dXMgfSBmcm9tIFwiLi9Td2l0Y2hcIjtcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgbXhPYmplY3Q/OiBtZW5kaXgubGliLk14T2JqZWN0O1xuICAgIHN0eWxlPzogc3RyaW5nO1xuICAgIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFN3aXRjaENvbnRhaW5lclByb3BzIGV4dGVuZHMgV3JhcHBlclByb3BzIHtcbiAgICBib29sZWFuQXR0cmlidXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTd2l0Y2hDb250YWluZXJTdGF0ZSB7XG4gICAgaXNDaGVja2VkPzogYm9vbGVhbjtcbn1cblxuY2xhc3MgU3dpdGNoQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PFN3aXRjaENvbnRhaW5lclByb3BzLCBTd2l0Y2hDb250YWluZXJTdGF0ZT4ge1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uSGFuZGxlczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogU3dpdGNoQ29udGFpbmVyUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZShwcm9wcy5teE9iamVjdCk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlID0gdGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5wYXNzT25Ib3ZlciA9IHRoaXMucGFzc09uSG92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYWxsYmFjayA9IHRoaXMuc3Vic2NyaXB0aW9uQ2FsbGJhY2suYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3dpdGNoKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wczogU3dpdGNoQ29udGFpbmVyUHJvcHMpIHtcbiAgICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbnMobmV3UHJvcHMubXhPYmplY3QpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMudXBkYXRlU3RhdGUobmV3UHJvcHMubXhPYmplY3QpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLmZvckVhY2gobXguZGF0YS51bnN1YnNjcmliZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJTd2l0Y2goKTogU0ZDRWxlbWVudDxTd2l0Y2hQcm9wcz4ge1xuICAgICAgICBjb25zdCB7IGNsYXNzOiBjbGFzc05hbWUsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFN3aXRjaCwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICBpc0NoZWNrZWQ6IHRoaXMuc3RhdGUuaXNDaGVja2VkLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUsXG4gICAgICAgICAgICAvLyBvbkhvdmVyOiB0aGlzLnBhc3NPbkhvdmVyLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLmdldFN3aXRjaFN0YXR1cygpLFxuICAgICAgICAgICAgc3R5bGU6IFN3aXRjaENvbnRhaW5lci5wYXJzZVN0eWxlKHN0eWxlKVxuICAgICAgICB9IGFzIFN3aXRjaFByb3BzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZTogc3RyaW5nLCBteE9iamVjdD86IG1lbmRpeC5saWIuTXhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhbXhPYmplY3QgJiYgbXhPYmplY3QuZ2V0KGF0dHJpYnV0ZSkgYXMgYm9vbGVhbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFN3aXRjaFN0YXR1cygpOiBTd2l0Y2hTdGF0dXMge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5teE9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZW5hYmxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm5vLWNvbnRleHRcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICAgICAgY29uc3QgeyBib29sZWFuQXR0cmlidXRlLCBteE9iamVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG14T2JqZWN0KSB7XG4gICAgICAgICAgICBteE9iamVjdC5zZXQoYm9vbGVhbkF0dHJpYnV0ZSwgIW14T2JqZWN0LmdldChib29sZWFuQXR0cmlidXRlKSk7XG4gICAgICAgIH1cbiAgICB9XG4vKlxuICAgIHByaXZhdGUgcGFzc09uSG92ZXIoZTogYW55KSB7XG4gICAgICBkZWJ1Z2dlcjtcbiAgICB9XG4qL1xuICAgIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb25zKG14T2JqZWN0PzogbWVuZGl4LmxpYi5NeE9iamVjdCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkhhbmRsZXMuZm9yRWFjaChteC5kYXRhLnVuc3Vic2NyaWJlKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzID0gW107XG5cbiAgICAgICAgaWYgKG14T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkhhbmRsZXMucHVzaChteC5kYXRhLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuc3Vic2NyaXB0aW9uQ2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgZ3VpZDogbXhPYmplY3QuZ2V0R3VpZCgpXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcy5wdXNoKG14LmRhdGEuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgICBhdHRyOiB0aGlzLnByb3BzLmJvb2xlYW5BdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuc3Vic2NyaXB0aW9uQ2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgZ3VpZDogbXhPYmplY3QuZ2V0R3VpZCgpXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU3RhdGUobXhPYmplY3QgPSB0aGlzLnByb3BzLm14T2JqZWN0KTogU3dpdGNoQ29udGFpbmVyU3RhdGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNDaGVja2VkOiB0aGlzLmdldEF0dHJpYnV0ZVZhbHVlKHRoaXMucHJvcHMuYm9vbGVhbkF0dHJpYnV0ZSwgbXhPYmplY3QpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25DYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnVwZGF0ZVN0YXRlKCkpO1xuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZVN0eWxlKHN0eWxlID0gXCJcIik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLnNwbGl0KFwiO1wiKS5yZWR1Y2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4oKHN0eWxlT2JqZWN0LCBsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFpciA9IGxpbmUuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcGFpclswXS50cmltKCkucmVwbGFjZSgvKC0uKS9nLCBtYXRjaCA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVPYmplY3RbbmFtZV0gPSBwYWlyWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHN0eWxlXCIsIHN0eWxlLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5leHBvcnQgeyBTd2l0Y2hDb250YWluZXIgYXMgZGVmYXVsdCwgU3dpdGNoQ29udGFpbmVyUHJvcHMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N3aXRjaENvbnRhaW5lci50cyJdLCJzb3VyY2VSb290IjoiIn0=

//# sourceURL=Switch.webmodeler.js
