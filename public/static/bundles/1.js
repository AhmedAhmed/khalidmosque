webpackJsonp([1],{

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(6);
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(props) {
        return _super.call(this, props) || this;
    }
    NotFound.prototype.componentWillMount = function () {
        var elem = document.querySelector("#app");
        elem.className = "";
    };
    NotFound.prototype.render = function () {
        return (React.createElement("div", { className: "nothing_container" }, "Nothing Here get going."));
    };
    return NotFound;
}(React.Component));
exports.default = NotFound;


/***/ })

});