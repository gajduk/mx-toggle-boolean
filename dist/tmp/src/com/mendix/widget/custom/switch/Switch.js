!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var s=t("object"==typeof exports?require("react"):e.react);for(var r in s)("object"==typeof exports?exports:e)[r]=s[r]}}(this,function(e){return function(e){function t(r){if(s[r])return s[r].exports;var i=s[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var s={};return t.m=e,t.c=s,t.d=function(e,s,r){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,s){t.exports=e},function(e,t,s){var r,i;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(s.apply(null,r));else if("object"===i)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}var n={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=s:(r=[],void 0!==(i=function(){return s}.apply(t,r))&&(e.exports=i))}()},function(e,t,s){var r,i,n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();r=[s,t,s(0),s(3),s(6)],void 0!==(i=function(e,t,s,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var s=e.call(this,t)||this;return s.subscriptionHandles=[],s.state=s.updateState(t.mxObject),s.handleToggle=s.handleToggle.bind(s),s.subscriptionCallback=s.subscriptionCallback.bind(s),s.handleValidations=s.handleValidations.bind(s),s}return n(t,e),t.prototype.render=function(){return this.props.label.trim()?s.createElement(i.Label,{className:this.props.deviceStyle+" "+this.props.class,label:this.props.label,style:t.parseStyle(this.props.style),weight:this.props.labelWidth>11?11:this.props.labelWidth},this.renderSwitch(!0)):this.renderSwitch()},t.prototype.componentWillReceiveProps=function(e){this.resetSubscriptions(e.mxObject),this.setState(this.updateState(e.mxObject))},t.prototype.componentWillUnmount=function(){this.subscriptionHandles.forEach(mx.data.unsubscribe)},t.prototype.renderSwitch=function(e){void 0===e&&(e=!1);var i=this.props,n=i.class,o=i.deviceStyle,a=i.style;return s.createElement(r.Switch,{alertMessage:this.state.alertMessage,className:e?void 0:n,deviceStyle:o,isChecked:this.state.isChecked,onClick:this.handleToggle,status:this.getSwitchStatus(!this.isReadOnly()),style:e?void 0:t.parseStyle(a)})},t.prototype.getAttributeValue=function(e,t){return!!t&&t.get(e)},t.prototype.isReadOnly=function(){var e=this.props,t=e.booleanAttribute,s=e.editable,r=e.mxObject,i=e.readOnly;return"default"!==s||!r||(i||r.isReadonlyAttr(t))},t.prototype.getSwitchStatus=function(e){return this.props.mxObject?e?"enabled":"disabled":"no-context"},t.prototype.handleToggle=function(){var e=this.props,t=e.booleanAttribute,s=e.mxObject;s&&s.set(t,!s.get(t))},t.prototype.resetSubscriptions=function(e){this.subscriptionHandles.forEach(mx.data.unsubscribe),this.subscriptionHandles=[],e&&(this.subscriptionHandles.push(mx.data.subscribe({callback:this.subscriptionCallback,guid:e.getGuid()})),this.subscriptionHandles.push(mx.data.subscribe({attr:this.props.booleanAttribute,callback:this.subscriptionCallback,guid:e.getGuid()})),this.subscriptionHandles.push(mx.data.subscribe({callback:this.handleValidations,guid:e.getGuid(),val:!0})))},t.prototype.updateState=function(e){return void 0===e&&(e=this.props.mxObject),{alertMessage:"",isChecked:this.getAttributeValue(this.props.booleanAttribute,e)}},t.prototype.subscriptionCallback=function(){this.setState(this.updateState())},t.prototype.handleValidations=function(e){var t=e[0].getErrorReason(this.props.booleanAttribute);e[0].removeAttribute(this.props.booleanAttribute),t&&this.setState({alertMessage:t})},t.parseStyle=function(e){void 0===e&&(e="");try{return e.split(";").reduce(function(e,t){var s=t.split(":");if(2===s.length){e[s[0].trim().replace(/(-.)/g,function(e){return e[1].toUpperCase()})]=s[1].trim()}return e},{})}catch(t){window.console.error("Failed to parse style",e,t)}return{}},t}(s.Component);t.default=o}.apply(t,r))&&(e.exports=i)},function(e,t,s){var r,i;r=[s,t,s(0),s(1),s(4),s(5)],void 0!==(i=function(e,t,s,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=function(e){return s.createElement("div",{className:r("widget-switch",e.className,e.deviceStyle),style:e.style},s.createElement("input",{checked:e.isChecked,className:r("widget-switch-checkbox",{enabled:"enabled"===e.status}),readOnly:!0,type:"checkbox"}),s.createElement("div",{className:r("widget-switch-btn-wrapper",{checked:e.isChecked,disabled:"disabled"===e.status,"no-switch":"no-context"===e.status,"un-checked":!e.isChecked}),onClick:"enabled"===e.status?e.onClick:void 0},s.createElement("small",{className:r("widget-switch-btn",{left:!e.isChecked,right:e.isChecked})})),s.createElement(i.Alert,{message:e.alertMessage}))},t.Switch.defaultProps={deviceStyle:"auto"},t.Switch.displayName="Switch"}.apply(t,r))&&(e.exports=i)},function(e,t,s){var r,i;r=[s,t,s(0),s(1)],void 0!==(i=function(e,t,s,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=function(e){var t=e.className,i=e.bootstrapStyle,n=e.message;return n?s.createElement("div",{className:r("alert alert-"+i,t)},n):null},t.Alert.displayName="Alert"}.apply(t,r))&&(e.exports=i)},function(e,t){},function(e,t,s){var r,i;r=[s,t,s(0),s(1)],void 0!==(i=function(e,t,s,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){var t=e.children,i=e.className,n=e.label,o=e.style,a=e.weight;return s.createElement("div",{className:r("form-horizontal widget-switch-label",i),style:o},s.createElement("div",{className:"form-group"},s.createElement("div",{className:"col-sm-"+a+" col-xs-"+a},s.createElement("label",{className:"control-label"},n)),s.createElement("div",{className:"col-sm-"+(12-a)+" col-xs-"+(12-a)},t)))};t.Label=i,i.defaultProps={weight:6},i.displayName="Label"}.apply(t,r))&&(e.exports=i)}])});