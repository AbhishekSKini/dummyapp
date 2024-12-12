"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/css/style.css");
var Layout_1 = __importDefault(require("./layout/Layout"));
function App() {
    return (<div><Layout_1.default /></div>);
}
exports.default = App;
