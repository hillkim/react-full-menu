"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.CloseIcon = function (_a) {
    var color = _a.color;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "50", viewBox: "0 0 24 24", width: "50", fill: color },
        react_1.default.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }),
        react_1.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })));
};
exports.MenuIcon = function (_a) {
    var color = _a.color;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", height: "50", width: "50", fill: color },
        react_1.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        react_1.default.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })));
};
//# sourceMappingURL=Icons.js.map