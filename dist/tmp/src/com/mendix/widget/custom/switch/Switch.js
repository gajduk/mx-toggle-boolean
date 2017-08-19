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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
/* 2 */
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, Switch_1, Label_1) {
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
            _this.handleValidations = _this.handleValidations.bind(_this);
            return _this;
        }
        SwitchContainer.prototype.render = function () {
            var maxLabelWidth = 11;
            if (this.props.label.trim()) {
                return react_1.createElement(Label_1.Label, {
                    className: "" + this.props.class,
                    label: this.props.label,
                    style: SwitchContainer.parseStyle(this.props.style),
                    weight: this.props.labelWidth > maxLabelWidth ? maxLabelWidth : this.props.labelWidth
                }, this.renderSwitch(true));
            }
            return this.renderSwitch();
        };
        SwitchContainer.prototype.componentWillReceiveProps = function (newProps) {
            this.resetSubscriptions(newProps.mxObject);
            this.setState(this.updateState(newProps.mxObject));
        };
        SwitchContainer.prototype.componentWillUnmount = function () {
            this.subscriptionHandles.forEach(mx.data.unsubscribe);
        };
        SwitchContainer.prototype.renderSwitch = function (hasLabel) {
            if (hasLabel === void 0) { hasLabel = false; }
            var _a = this.props, className = _a.class, style = _a.style;
            return react_1.createElement(Switch_1.Switch, {
                alertMessage: this.state.alertMessage,
                className: !hasLabel ? className : undefined,
                isChecked: this.state.isChecked,
                onClick: this.handleToggle,
                status: this.getSwitchStatus(!this.isReadOnly()),
                style: !hasLabel ? SwitchContainer.parseStyle(style) : undefined
            });
        };
        SwitchContainer.prototype.getAttributeValue = function (attribute, mxObject) {
            return !!mxObject && mxObject.get(attribute);
        };
        SwitchContainer.prototype.isReadOnly = function () {
            var _a = this.props, booleanAttribute = _a.booleanAttribute, editable = _a.editable, mxObject = _a.mxObject, readOnly = _a.readOnly;
            if (editable === "default" && mxObject) {
                return readOnly || mxObject.isReadonlyAttr(booleanAttribute);
            }
            return true;
        };
        SwitchContainer.prototype.getSwitchStatus = function (enabled) {
            if (this.props.mxObject) {
                return enabled ? "enabled" : "disabled";
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
                this.subscriptionHandles.push(mx.data.subscribe({
                    callback: this.handleValidations,
                    guid: mxObject.getGuid(),
                    val: true
                }));
            }
        };
        SwitchContainer.prototype.updateState = function (mxObject) {
            if (mxObject === void 0) { mxObject = this.props.mxObject; }
            return {
                alertMessage: "",
                isChecked: this.getAttributeValue(this.props.booleanAttribute, mxObject)
            };
        };
        SwitchContainer.prototype.subscriptionCallback = function () {
            this.setState(this.updateState());
        };
        SwitchContainer.prototype.handleValidations = function (validations) {
            var validationMessage = validations[0].getErrorReason(this.props.booleanAttribute);
            validations[0].removeAttribute(this.props.booleanAttribute);
            if (validationMessage) {
                this.setState({ alertMessage: validationMessage });
            }
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames, Alert_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Switch = function (props) {
        return react_1.createElement("div", {
            className: classNames("widget-switch", props.className),
            style: props.style
        }, react_1.createElement("input", {
            checked: props.isChecked,
            className: classNames("widget-switch-checkbox", { enabled: props.status === "enabled" }),
            readOnly: true,
            type: "checkbox"
        }), react_1.createElement("div", {
            className: classNames("widget-switch-btn-wrapper", {
                "checked": props.isChecked,
                "disabled": props.status === "disabled",
                "no-switch": props.status === "no-context",
                "un-checked": !props.isChecked
            }),
            onClick: props.status === "enabled" ? props.onClick : undefined
        }, react_1.createElement("small", {
            className: classNames("widget-switch-btn", {
                left: !props.isChecked,
                right: props.isChecked
            })
        })), react_1.createElement(Alert_1.Alert, { message: props.alertMessage }));
    };
    exports.Switch.displayName = "Switch";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Alert = function (_a) {
        var className = _a.className, bootstrapStyle = _a.bootstrapStyle, message = _a.message;
        return message
            ? react_1.createElement("div", { className: classNames("alert alert-" + bootstrapStyle, className) }, message)
            : null;
    };
    exports.Alert.displayName = "Alert";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, classNames) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Label = function (_a) {
        var children = _a.children, className = _a.className, label = _a.label, style = _a.style, weight = _a.weight;
        return react_1.createElement("div", { className: classNames("form-horizontal widget-switch-label", className), style: style }, react_1.createElement("div", { className: "form-group" }, react_1.createElement("div", { className: "col-sm-" + weight + " col-xs-" + weight }, react_1.createElement("label", { className: "control-label" }, label)), react_1.createElement("div", {
            className: "col-sm-" + (12 - weight) + " col-xs-" + (12 - weight)
        }, children)));
    };
    exports.Label = Label;
    Label.defaultProps = {
        weight: 6
    };
    Label.displayName = "Label";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
});
//# sourceMappingURL=Switch.js.map