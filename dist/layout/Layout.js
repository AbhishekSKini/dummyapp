"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var Layout = function () {
    var storeValue = (0, react_redux_1.useSelector)(function (state) { return state.search.value; });
    var nameValue = (0, react_redux_1.useSelector)(function (state) { return state.name.value; });
    return (<div>
     App {storeValue} - {nameValue}
    </div>);
};
exports.default = Layout;
