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
        return react_1.createElement("div", {
            className: classNames("widget-toggle", props.className),
            style: props.style
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU0ODY5ZWY3Nzc0ZTIwYzY3NjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Td2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1N3aXRjaC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9Td2l0Y2gud2VibW9kZWxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Td2l0Y2hDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7Ozs7SUNnQmEsY0FBTSxHQUFxQixVQUFDLEtBQUs7UUFDMUMsNEJBQWEsQ0FBQyxLQUFLLEVBQ2Y7WUFDSSxTQUFTLEVBQUUsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNyQixDQTBCSjtJQTlCRCxDQThCQyxDQUFDO0lBRU4sY0FBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Ozs7Ozs7OztBQ2pEOUIsa0NB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SSxFQUFFLENBQUM7b0JBQ3ZDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRWIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FBQyxDQXZHNkIsaUJBQVMsR0F1R3RDO0lBRTJCLGtDQUFPIiwiZmlsZSI6InNyYy9Td2l0Y2gud2VibW9kZWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ1NDg2OWVmNzc3NGUyMGM2NzYzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNGQywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5cbmltcG9ydCBcIi4uL3VpL1N3aXRjaC5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpc0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBzdGF0dXM6IFN3aXRjaFN0YXR1cztcbiAgICBzdHlsZT86IG9iamVjdDtcbn1cblxuZXhwb3J0IHR5cGUgU3dpdGNoU3RhdHVzID0gXCJlbmFibGVkXCIgfCBcImRpc2FibGVkXCIgfCBcIm5vLWNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IFN3aXRjaDogU0ZDPFN3aXRjaFByb3BzPiA9IChwcm9wcykgPT5cbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIndpZGdldC10b2dnbGVcIiwgcHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZVxuICAgICAgICB9LFxuICAgICAgICAvKlxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgY2hlY2tlZDogcHJvcHMuaXNDaGVja2VkLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwid2lkZ2V0LXN3aXRjaC1jaGVja2JveFwiLCB7IGVuYWJsZWQ6IHByb3BzLnN0YXR1cyA9PT0gXCJlbmFibGVkXCIgfSksXG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhgd2lkZ2V0LXN3aXRjaC1idG4td3JhcHBlcmAsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IHByb3BzLmlzQ2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBwcm9wcy5zdGF0dXMgPT09IFwiZGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJuby1zd2l0Y2hcIjogcHJvcHMuc3RhdHVzID09PSBcIm5vLWNvbnRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1bi1jaGVja2VkXCI6ICFwcm9wcy5pc0NoZWNrZWRcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5zdGF0dXMgPT09IFwiZW5hYmxlZFwiID8gcHJvcHMub25DbGljayA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwid2lkZ2V0LXN3aXRjaC1idG5cIiwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAhcHJvcHMuaXNDaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogcHJvcHMuaXNDaGVja2VkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgICovXG4gICAgKTtcblxuU3dpdGNoLmRpc3BsYXlOYW1lID0gXCJTd2l0Y2hcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1N3aXRjaC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCIud2lkZ2V0LXRvZ2dsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9Td2l0Y2guc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Td2l0Y2hcIjtcbmltcG9ydCBTd2l0Y2hDb250YWluZXIsIHsgU3dpdGNoQ29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL1N3aXRjaENvbnRhaW5lclwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgcHJldmlldyBleHRlbmRzIENvbXBvbmVudDxTd2l0Y2hDb250YWluZXJQcm9wcywge30+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclN3aXRjaCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU3dpdGNoKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChTd2l0Y2gsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzcyxcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgICAgICAgICBzdGF0dXM6IFwiZW5hYmxlZFwiICxcbiAgICAgICAgICAgIHN0eWxlOiBTd2l0Y2hDb250YWluZXIucGFyc2VTdHlsZSh0aGlzLnByb3BzLnN0eWxlKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aWV3Q3NzKCkge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9Td2l0Y2guc2Nzc1wiKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Td2l0Y2gud2VibW9kZWxlci50cyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFNGQ0VsZW1lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU3dpdGNoLCBTd2l0Y2hQcm9wcywgU3dpdGNoU3RhdHVzIH0gZnJvbSBcIi4vU3dpdGNoXCI7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICAgIGNsYXNzPzogc3RyaW5nO1xuICAgIG14T2JqZWN0PzogbWVuZGl4LmxpYi5NeE9iamVjdDtcbiAgICBzdHlsZT86IHN0cmluZztcbiAgICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTd2l0Y2hDb250YWluZXJQcm9wcyBleHRlbmRzIFdyYXBwZXJQcm9wcyB7XG4gICAgYm9vbGVhbkF0dHJpYnV0ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3dpdGNoQ29udGFpbmVyU3RhdGUge1xuICAgIGlzQ2hlY2tlZD86IGJvb2xlYW47XG59XG5cbmNsYXNzIFN3aXRjaENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxTd2l0Y2hDb250YWluZXJQcm9wcywgU3dpdGNoQ29udGFpbmVyU3RhdGU+IHtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbkhhbmRsZXM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFN3aXRjaENvbnRhaW5lclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkhhbmRsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUocHJvcHMubXhPYmplY3QpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvZ2dsZSA9IHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FsbGJhY2sgPSB0aGlzLnN1YnNjcmlwdGlvbkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclN3aXRjaCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHM6IFN3aXRjaENvbnRhaW5lclByb3BzKSB7XG4gICAgICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb25zKG5ld1Byb3BzLm14T2JqZWN0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnVwZGF0ZVN0YXRlKG5ld1Byb3BzLm14T2JqZWN0KSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcy5mb3JFYWNoKG14LmRhdGEudW5zdWJzY3JpYmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU3dpdGNoKCk6IFNGQ0VsZW1lbnQ8U3dpdGNoUHJvcHM+IHtcbiAgICAgICAgY29uc3QgeyBjbGFzczogY2xhc3NOYW1lLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChTd2l0Y2gsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgaXNDaGVja2VkOiB0aGlzLnN0YXRlLmlzQ2hlY2tlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG9nZ2xlLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLmdldFN3aXRjaFN0YXR1cygpLFxuICAgICAgICAgICAgc3R5bGU6IFN3aXRjaENvbnRhaW5lci5wYXJzZVN0eWxlKHN0eWxlKVxuICAgICAgICB9IGFzIFN3aXRjaFByb3BzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEF0dHJpYnV0ZVZhbHVlKGF0dHJpYnV0ZTogc3RyaW5nLCBteE9iamVjdD86IG1lbmRpeC5saWIuTXhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhbXhPYmplY3QgJiYgbXhPYmplY3QuZ2V0KGF0dHJpYnV0ZSkgYXMgYm9vbGVhbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFN3aXRjaFN0YXR1cygpOiBTd2l0Y2hTdGF0dXMge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5teE9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZW5hYmxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm5vLWNvbnRleHRcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICAgICAgY29uc3QgeyBib29sZWFuQXR0cmlidXRlLCBteE9iamVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG14T2JqZWN0KSB7XG4gICAgICAgICAgICBteE9iamVjdC5zZXQoYm9vbGVhbkF0dHJpYnV0ZSwgIW14T2JqZWN0LmdldChib29sZWFuQXR0cmlidXRlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9ucyhteE9iamVjdD86IG1lbmRpeC5saWIuTXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLmZvckVhY2gobXguZGF0YS51bnN1YnNjcmliZSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uSGFuZGxlcyA9IFtdO1xuXG4gICAgICAgIGlmIChteE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25IYW5kbGVzLnB1c2gobXguZGF0YS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLnN1YnNjcmlwdGlvbkNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGd1aWQ6IG14T2JqZWN0LmdldEd1aWQoKVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkhhbmRsZXMucHVzaChteC5kYXRhLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgYXR0cjogdGhpcy5wcm9wcy5ib29sZWFuQXR0cmlidXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLnN1YnNjcmlwdGlvbkNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGd1aWQ6IG14T2JqZWN0LmdldEd1aWQoKVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVN0YXRlKG14T2JqZWN0ID0gdGhpcy5wcm9wcy5teE9iamVjdCk6IFN3aXRjaENvbnRhaW5lclN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogdGhpcy5nZXRBdHRyaWJ1dGVWYWx1ZSh0aGlzLnByb3BzLmJvb2xlYW5BdHRyaWJ1dGUsIG14T2JqZWN0KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy51cGRhdGVTdGF0ZSgpKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VTdHlsZShzdHlsZSA9IFwiXCIpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZS5zcGxpdChcIjtcIikucmVkdWNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+KChzdHlsZU9iamVjdCwgbGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBsaW5lLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICBpZiAocGFpci5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhaXJbMF0udHJpbSgpLnJlcGxhY2UoLygtLikvZywgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W25hbWVdID0gcGFpclsxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSBzdHlsZVwiLCBzdHlsZSwgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgU3dpdGNoQ29udGFpbmVyIGFzIGRlZmF1bHQsIFN3aXRjaENvbnRhaW5lclByb3BzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Td2l0Y2hDb250YWluZXIudHMiXSwic291cmNlUm9vdCI6IiJ9

//# sourceURL=Switch.webmodeler.js
