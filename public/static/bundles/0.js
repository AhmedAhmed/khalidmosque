webpackJsonp([0],{

/***/ 292:
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(6);
var Deals_react_1 = __webpack_require__(294);
__webpack_require__(296);
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        return _super.call(this, props) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "home container" },
            React.createElement("div", { className: "paper center-block" },
                React.createElement(Deals_react_1.default, __assign({}, this.props)))));
    };
    return Home;
}(React.Component));
exports.default = Home;


/***/ }),

/***/ 294:
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
var Deals = /** @class */ (function (_super) {
    __extends(Deals, _super);
    function Deals(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            submitLabel: "Search",
            cheapestTab: true,
            fastestTab: false,
            selectedTab: "cheapest",
            departure: "0",
            arrival: "0"
        };
        return _this;
    }
    Deals.prototype.toggleTab = function (evt) {
        evt.preventDefault();
        this.setState({ cheapestTab: !this.state.cheapestTab, fastestTab: !this.state.fastestTab, selectedTab: evt.target.innerHTML.toLowerCase(), submitLabel: "Search" });
    };
    Deals.prototype.loadOptions = function () {
        var trips = [];
        var result = [];
        this.props.trips.forEach(function (deal) {
            if (!result[deal.departure]) {
                result[deal.departure] = true;
                trips.push(deal.departure);
            }
        }.bind(this));
        return trips.map(function (trip, index) { return React.createElement("option", { key: index, value: trip }, trip); });
    };
    Deals.prototype._performSearch = function (evt) {
        evt.preventDefault();
        if (this.state.submitLabel == "Search") {
            this.setState({ submitLabel: "Reset" });
            this.props.actions.getDeals(this.props.trips, this.state.departure, this.state.arrival, this.state.selectedTab);
        }
        else if (this.state.submitLabel == "Reset") {
            this.setState({ submitLabel: "Search" });
            this.props.actions.clearDeals();
        }
    };
    Deals.prototype.showIcon = function (transport) {
        var result = "";
        switch (transport) {
            case "CAR":
                result = "🚗";
                break;
            case "BUS":
                result = "🚌";
                break;
            case "TRAIN":
                result = "🚆";
                break;
            case "PLANE":
                result = "✈";
                break;
        }
        return result;
    };
    Deals.prototype.loadRoutes = function () {
        var _this = this;
        return this.props.deals.map(function (deal, index) { return (React.createElement("li", { key: index, className: "route-map-item clearfix" },
            React.createElement("div", { className: "route-map-content" },
                React.createElement("div", { className: "route-map-dir" },
                    React.createElement("span", { className: "route-map-from" }, deal.departure),
                    React.createElement("span", { className: "route-map-delim" }, "\u21E2"),
                    React.createElement("span", { className: "route-map-to" }, deal.arrival)),
                React.createElement("div", { className: "route-map-meta" },
                    React.createElement("span", { className: "route-map-method" }, _this.showIcon(deal.transport.toUpperCase()) + " " + deal.transport.toUpperCase()),
                    React.createElement("span", { className: "route-map-time" }, deal.reference + " for " + deal.duration.h + "h:" + deal.duration.m + "m"))),
            React.createElement("div", { className: "route-map-price" }, "€" + (deal.cost - (deal.cost * (deal.discount / 100)))))); });
    };
    Deals.prototype._getTotalPrice = function () {
        var result = 0;
        this.props.deals.forEach(function (deal, index) { return result += (deal.cost - (deal.cost * (deal.discount / 100))); });
        return "€" + result;
    };
    Deals.prototype._getTotalTime = function () {
        var hours = 0;
        var minutes = 0;
        //calculate add minutes to hours.
        this.props.deals.forEach(function (deal, index) { return minutes += parseInt(deal.duration.m); });
        hours = Math.floor(minutes / 60);
        minutes = ((minutes / 60) % 1) * 60;
        //calculate hours.
        this.props.deals.forEach(function (deal, index) { return hours += parseInt(deal.duration.h); });
        return (minutes > 0) ? hours + "h:" + minutes + "m" : hours + "h:" + minutes + "0m";
    };
    Deals.prototype.loadTotals = function () {
        return (React.createElement("li", { className: "route-map-item clearfix" },
            React.createElement("div", { className: "route-map-text text-left col-xs-4" },
                React.createElement("h4", null, "Total")),
            React.createElement("div", { className: "route-map-text col-xs-4" },
                React.createElement("span", null, this._getTotalTime())),
            React.createElement("div", { className: "route-map-text text-right col-xs-4" },
                React.createElement("span", null,
                    React.createElement("h4", null, this._getTotalPrice())))));
    };
    Deals.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "deal-wrap" },
            React.createElement("h2", null, "Plan Your Journey"),
            React.createElement("form", { className: "dealSearcher" },
                React.createElement("select", { name: "departure", onChange: function (evt) { return _this.setState({ departure: evt.target.value }); }, className: "selectBox" },
                    React.createElement("option", { value: "0" }, "From:"),
                    this.loadOptions()),
                React.createElement("select", { name: "arrival", onChange: function (evt) { return _this.setState({ arrival: evt.target.value }); }, className: "selectBox" },
                    React.createElement("option", { value: "0" }, "To:"),
                    this.loadOptions()),
                React.createElement("div", { className: "typeSelector" },
                    React.createElement("a", { href: "#", onClick: this.toggleTab.bind(this), className: this.state.cheapestTab ? "btn btn-primary selected" : "btn btn-primary" }, "Cheapest"),
                    React.createElement("a", { href: "#", onClick: this.toggleTab.bind(this), className: this.state.fastestTab ? "btn btn-primary selected" : "btn btn-primary" }, "Fastest")),
                React.createElement("ul", { className: "route-map" },
                    this.loadRoutes(),
                    this.props.deals.length != 0 ? this.loadTotals() : null),
                React.createElement("div", { className: "buttonArea" },
                    React.createElement("a", { href: "#", role: "submit", className: "btn red", onClick: this._performSearch.bind(this) }, this.state.submitLabel)))));
    };
    return Deals;
}(React.Component));
exports.default = Deals;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, ".kbw_2F9tZ,.kbw_3beBc{display:block}.kbw_2F9tZ{background:#fff;box-shadow:0 0 5px rgba(0,0,0,.1);margin-top:80px;margin-bottom:50px;min-height:300px;width:400px}.kbw_2F9tZ>.kbw_1H_FJ>h2{display:block;text-align:center;padding:10px}.kbw_1H_FJ{padding:20px}.kbw_1H_FJ,.kbw_1pYTp{display:block}.kbw_1pYTp>.kbw_3IFm_{display:block;border:1px solid #ddd;box-shadow:0 2px 6px rgba(0,0,0,.05);cursor:pointer;font-size:18px;line-height:25px;height:40px;margin:15px 0;width:100%;transition:all .3s ease;outline:none}.kbw_1pYTp>.kbw_3IFm_:hover{box-shadow:0 2px 3px rgba(0,0,0,.05)}.kbw_1pYTp>.kbw_1WIwR{display:flex;margin-bottom:20px}.kbw_1pYTp>.kbw_1WIwR a{display:inline-block;flex:1;padding:5px 10px}.kbw_1pYTp>.kbw_1WIwR>a.kbw_1GHej{background:#fff;color:#337ab7}.kbw_1pYTp>.kbw_1WIwR>a.kbw_1GHej.kbw_2NWBy{color:#fff;background:#337ab7}.kbw_1pYTp>.kbw_1WIwR>a:first-child.kbw_XfswN{border-top-right-radius:0;border-bottom-right-radius:0;border-right:0}.kbw_1pYTp>.kbw_1WIwR>a:last-child.kbw_XfswN{border-top-left-radius:0;border-bottom-left-radius:0}.kbw_KqM42>a.kbw_3v0lS{display:block;color:#fff}.kbw_KqM42>a.kbw_3v0lS:hover{background:#b71c1c}.kbw_1gr00{display:block;padding:10px 0}.kbw_1gr00>.kbw_3oWdB{background:#eee;border-radius:3px;display:block;padding:10px;margin:10px 0}.kbw_1gr00>.kbw_3oWdB>.kbw_3ljrN{text-align:center;font-size:1.12em;line-height:23px}.kbw_1gr00>.kbw_3oWdB>.kbw_3ljrN.kbw_1ZWD6{text-align:left}.kbw_1gr00>.kbw_3oWdB>.kbw_3ljrN.kbw_1YB_0{text-align:right;padding-right:20px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK{display:block;float:left;margin-right:5px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_2TUvL{display:block;padding-bottom:10px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_2TUvL>.kbw_2Mxnj,.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_2TUvL>.kbw_rfadl{display:inline-block;font-size:17px;font-weight:700}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_2TUvL>.kbw_rfadl{margin-left:5px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_2TUvL>.kbw_2Mxnj{margin-right:5px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_2TUvL>.kbw_1lNFC{display:inline-block;font-size:18px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_39aZi{display:block}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_39aZi>.kbw_2dzaD{display:inline-block;font-weight:700;margin-right:15px}.kbw_1gr00>.kbw_3oWdB>.kbw_BY3lK>.kbw_39aZi>.kbw_1Hrp0{display:block;float:right;font-weight:400;margin-right:15px}.kbw_1gr00>.kbw_3oWdB>.kbw_1zxPq{display:block;float:right;position:relative;top:15px;margin-right:20px;font-weight:700}", ""]);

// exports
exports.locals = {
	"container": "kbw_3beBc",
	"paper": "kbw_2F9tZ",
	"deal-wrap": "kbw_1H_FJ",
	"dealSearcher": "kbw_1pYTp",
	"selectBox": "kbw_3IFm_",
	"typeSelector": "kbw_1WIwR",
	"btn-primary": "kbw_1GHej",
	"selected": "kbw_2NWBy",
	"btn": "kbw_XfswN",
	"buttonArea": "kbw_KqM42",
	"red": "kbw_3v0lS",
	"route-map": "kbw_1gr00",
	"route-map-item": "kbw_3oWdB",
	"route-map-text": "kbw_3ljrN",
	"text-left": "kbw_1ZWD6",
	"text-right": "kbw_1YB_0",
	"route-map-content": "kbw_BY3lK",
	"route-map-dir": "kbw_2TUvL",
	"route-map-from": "kbw_2Mxnj",
	"route-map-to": "kbw_rfadl",
	"route-map-delim": "kbw_1lNFC",
	"route-map-meta": "kbw_39aZi",
	"route-map-method": "kbw_2dzaD",
	"route-map-time": "kbw_1Hrp0",
	"route-map-price": "kbw_1zxPq"
};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js??ref--3-2!./home.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js??ref--3-2!./home.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});