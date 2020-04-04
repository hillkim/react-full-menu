"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Icons_1 = require("./Icons");
require("./menu.css");
var ReactFullMenu = function (_a) {
    var background = _a.background, _b = _a.linkColor, linkColor = _b === void 0 ? "white" : _b, _c = _a.links, links = _c === void 0 ? [
        { to: "/home", text: "My Home" },
        { to: "/page", text: "MY Other Page" },
    ] : _c, _d = _a.fontFamily, fontFamily = _d === void 0 ? '"Autour One", cursive' : _d;
    var _e = react_1.useState(false), isOpen = _e[0], setOpen = _e[1];
    var toggleMenu = function () { return setOpen(!isOpen); };
    var Menu = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "menu", style: { background: "" + background, fontFamily: "" + fontFamily }, onClick: toggleMenu },
            react_1.default.createElement("ul", null, links.map(function (_a, index) {
                var to = _a.to, onClick = _a.onClick, text = _a.text;
                return (react_1.default.createElement("li", { key: index },
                    react_1.default.createElement("a", { style: { color: "" + linkColor }, href: to, onClick: onClick }, text)));
            }))))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { className: isOpen ? "menu-open" : "menu-button" },
            react_1.default.createElement("div", { className: isOpen ? "menu-icon-open" : "menu-icon", onClick: toggleMenu }, isOpen ? (react_1.default.createElement(Icons_1.CloseIcon, { color: linkColor })) : (react_1.default.createElement(Icons_1.MenuIcon, { color: linkColor })))),
        isOpen && react_1.default.createElement(Menu, null)));
};
exports.default = ReactFullMenu;
//# sourceMappingURL=index.js.map